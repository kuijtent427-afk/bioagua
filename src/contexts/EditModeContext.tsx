import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface EditModeContextType {
  isEditMode: boolean;
  contentMap: Record<string, string>;
  updateContent: (key: string, value: string) => void;
  saveAll: () => Promise<void>;
  saving: boolean;
  pendingChanges: number;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export const EditModeProvider = ({ children }: { children: React.ReactNode }) => {
  const { isAdmin, user } = useAuth();
  const [searchParams] = useSearchParams();
  const isEditMode = isAdmin && !!user && searchParams.get("edit") === "true";
  const [contentMap, setContentMap] = useState<Record<string, string>>({});
  const [originalMap, setOriginalMap] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  // Load content from DB for all visitors (so saved edits appear on live site)
  useEffect(() => {
    supabase
      .from("site_content")
      .select("*")
      .then(({ data }) => {
        if (data) {
          const map: Record<string, string> = {};
          data.forEach((row: any) => {
            map[`${row.page}__${row.section}__${row.content_key}`] = row.content_value;
          });
          setContentMap(map);
          setOriginalMap(map);
        }
      });
  }, []);

  const updateContent = useCallback((key: string, value: string) => {
    setContentMap((prev) => ({ ...prev, [key]: value }));
  }, []);

  const pendingChanges = Object.keys(contentMap).filter(
    (k) => contentMap[k] !== originalMap[k]
  ).length;

  const saveAll = useCallback(async () => {
    setSaving(true);
    const changed = Object.keys(contentMap).filter(
      (k) => contentMap[k] !== originalMap[k]
    );

    for (const key of changed) {
      const [page, section, content_key] = key.split("__");
      const { error } = await supabase
        .from("site_content")
        .upsert(
          { page, section, content_key, content_value: contentMap[key] },
          { onConflict: "page,section,content_key" }
        );
      if (error) {
        toast({ title: "Error al guardar", description: error.message, variant: "destructive" });
        setSaving(false);
        return;
      }
    }

    setOriginalMap({ ...contentMap });
    setSaving(false);
    toast({ title: "✅ Cambios guardados" });
  }, [contentMap, originalMap, toast]);

  return (
    <EditModeContext.Provider value={{ isEditMode, contentMap, updateContent, saveAll, saving, pendingChanges }}>
      {children}
    </EditModeContext.Provider>
  );
};

export const useEditMode = () => {
  const ctx = useContext(EditModeContext);
  if (!ctx) throw new Error("useEditMode must be used within EditModeProvider");
  return ctx;
};
