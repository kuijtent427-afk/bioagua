import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Save, Check, Plus, Trash2, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

// Default content definitions for seeding
const DEFAULT_CONTENT: { page: string; section: string; content_key: string; content_value: string; label: string }[] = [
  // Index page
  { page: "index", section: "hero", content_key: "subtitle", content_value: "Tu solución para agua limpia y sistemas eficientes", label: "Subtítulo Hero" },
  { page: "index", section: "hero", content_key: "title", content_value: "BIOAGUA", label: "Título Hero" },
  { page: "index", section: "hero", content_key: "description", content_value: "Desde mantenciones hasta instalaciones, optimizamos tus sistemas para que ahorres tiempo, dinero y recursos.", label: "Descripción Hero" },
  { page: "index", section: "problems", content_key: "title", content_value: "¿TE ENFRENTAS A ESTOS PROBLEMAS?", label: "Título Problemas" },
  { page: "index", section: "solutions", content_key: "subtitle", content_value: "En BioAgua", label: "Subtítulo Soluciones" },
  { page: "index", section: "solutions", content_key: "title", content_value: "RESOLVEMOS TODO POR TI", label: "Título Soluciones" },
  { page: "index", section: "solutions", content_key: "description", content_value: "Llámanos ahora para una inspección gratuita.", label: "Descripción Soluciones" },
  { page: "index", section: "whyus", content_key: "title", content_value: "¿POR QUÉ ELEGIRNOS?", label: "Título ¿Por qué elegirnos?" },
  { page: "index", section: "whyus", content_key: "description", content_value: "Contamos con un equipo técnico experto en calderas, bombas y sistemas hidráulicos.", label: "Descripción ¿Por qué elegirnos?" },
  { page: "index", section: "cases", content_key: "title", content_value: "CASOS DE ÉXITO", label: "Título Casos de Éxito" },

  // Nosotros page
  { page: "nosotros", section: "hero", content_key: "subtitle", content_value: "Conócenos", label: "Subtítulo Hero" },
  { page: "nosotros", section: "hero", content_key: "title", content_value: "SOMOS BIOAGUA", label: "Título Hero" },
  { page: "nosotros", section: "hero", content_key: "description", content_value: "Expertos en calderas, bombas y sistemas hidráulicos", label: "Descripción Hero" },
  { page: "nosotros", section: "trust", content_key: "title", content_value: "Más de 50 empresas", label: "Título Confianza" },
  { page: "nosotros", section: "trust", content_key: "subtitle", content_value: "Han Confiado en Nosotros", label: "Subtítulo Confianza" },
  { page: "nosotros", section: "about", content_key: "title", content_value: "AHORRA TIEMPO Y RECURSOS", label: "Título Sobre Nosotros" },
  { page: "nosotros", section: "about", content_key: "description", content_value: "Contamos con un equipo técnico experto en calderas, bombas y sistemas hidráulicos. Desde mantenciones hasta instalaciones, optimizamos tus sistemas para que ahorres tiempo, dinero y recursos.", label: "Descripción Sobre Nosotros" },

  // Empresas page
  { page: "empresas", section: "hero", content_key: "subtitle", content_value: "Soluciones Industriales", label: "Subtítulo Hero" },
  { page: "empresas", section: "hero", content_key: "title", content_value: "EMPRESAS QUE BUSCAN EFICIENCIA Y SOSTENIBILIDAD", label: "Título Hero" },
  { page: "empresas", section: "hero", content_key: "description", content_value: "Optimizamos tus procesos, cuidamos tus equipos y reducimos tus costos operativos.", label: "Descripción Hero" },
  { page: "empresas", section: "problems", content_key: "title", content_value: "¿TUS SISTEMAS ESTÁN FALLANDO?", label: "Título Problemas" },
  { page: "empresas", section: "problems", content_key: "description", content_value: "Identificamos los problemas más comunes en la industria y los solucionamos de raíz.", label: "Descripción Problemas" },
  { page: "empresas", section: "trust", content_key: "title", content_value: "¿POR QUÉ CONFIAR EN NOSOTROS?", label: "Título Confianza" },

  // Condominios page
  { page: "condominios", section: "hero", content_key: "subtitle", content_value: "Soluciones para Comunidades", label: "Subtítulo Hero" },
  { page: "condominios", section: "hero", content_key: "title", content_value: "COMUNIDADES MÁS SEGURAS Y EFICIENTES", label: "Título Hero" },
  { page: "condominios", section: "hero", content_key: "description", content_value: "Nos encargamos de tus calderas, bombas y sistemas de agua para que ahorres en reparaciones y mantenciones", label: "Descripción Hero" },
  { page: "condominios", section: "problems", content_key: "title", content_value: "¿PROBLEMAS FRECUENTES EN TU COMUNIDAD?", label: "Título Problemas" },
  { page: "condominios", section: "cases", content_key: "title", content_value: "CASOS DE ÉXITO", label: "Título Casos de Éxito" },

  // Contacto page
  { page: "contacto", section: "hero", content_key: "title", content_value: "AGENDA UNA EVALUACIÓN TÉCNICA GRATUITA", label: "Título Hero" },
  { page: "contacto", section: "hero", content_key: "description", content_value: "Completa el formulario y te contactaremos en menos de 24 horas. Sin compromiso.", label: "Descripción Hero" },
  { page: "contacto", section: "form", content_key: "title", content_value: "¡CONVERSEMOS!", label: "Título Formulario" },
];

// Label map for looking up labels
const labelMap = new Map(
  DEFAULT_CONTENT.map((d) => [`${d.page}|${d.section}|${d.content_key}`, d.label])
);

const PAGE_NAMES: Record<string, string> = {
  index: "🏠 Inicio",
  nosotros: "👥 Nosotros",
  empresas: "🏭 Empresas",
  condominios: "🏢 Condominios",
  contacto: "📧 Contacto",
};

const AdminContent = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editValues, setEditValues] = useState<Record<string, string>>({});
  const [savedKeys, setSavedKeys] = useState<Set<string>>(new Set());

  const { data: content, isLoading } = useQuery({
    queryKey: ["admin-site-content"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_content")
        .select("*")
        .order("page", { ascending: true });
      if (error) throw error;
      return data as any[];
    },
  });

  const seedContent = useMutation({
    mutationFn: async () => {
      const existing = content ?? [];
      const existingKeys = new Set(existing.map((c: any) => `${c.page}|${c.section}|${c.content_key}`));
      const toInsert = DEFAULT_CONTENT.filter(
        (d) => !existingKeys.has(`${d.page}|${d.section}|${d.content_key}`)
      ).map(({ label, ...rest }) => rest);

      if (toInsert.length > 0) {
        const { error } = await supabase.from("site_content").insert(toInsert);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-site-content"] });
      toast({ title: "✅ Contenido inicializado" });
    },
    onError: () => {
      toast({ title: "Error al inicializar", variant: "destructive" });
    },
  });

  const updateContent = useMutation({
    mutationFn: async ({ id, value }: { id: string; value: string }) => {
      const { error } = await supabase
        .from("site_content")
        .update({ content_value: value })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["admin-site-content"] });
      queryClient.invalidateQueries({ queryKey: ["site-content"] });
      setSavedKeys((prev) => new Set(prev).add(variables.id));
      setTimeout(() => {
        setSavedKeys((prev) => {
          const next = new Set(prev);
          next.delete(variables.id);
          return next;
        });
      }, 2000);
      toast({ title: "✅ Texto actualizado" });
    },
    onError: () => {
      toast({ title: "Error al guardar", variant: "destructive" });
    },
  });

  if (isLoading) return <p className="text-muted-foreground">Cargando contenido...</p>;

  // Group content by page
  const grouped: Record<string, any[]> = {};
  (content ?? []).forEach((item: any) => {
    if (!grouped[item.page]) grouped[item.page] = [];
    grouped[item.page].push(item);
  });

  const hasContent = (content ?? []).length > 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-bold text-foreground">Editar Textos del Sitio</h2>
        {!hasContent && (
          <Button onClick={() => seedContent.mutate()} disabled={seedContent.isPending}>
            <Plus className="h-4 w-4 mr-1" />
            {seedContent.isPending ? "Cargando..." : "Cargar textos iniciales"}
          </Button>
        )}
        {hasContent && (content ?? []).length < DEFAULT_CONTENT.length && (
          <Button variant="outline" onClick={() => seedContent.mutate()} disabled={seedContent.isPending}>
            <Plus className="h-4 w-4 mr-1" /> Agregar textos faltantes
          </Button>
        )}
      </div>

      {!hasContent ? (
        <Card>
          <CardContent className="p-12 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg mb-2">No hay textos cargados</p>
            <p className="text-muted-foreground text-sm mb-4">
              Haz clic en "Cargar textos iniciales" para comenzar a editar el contenido del sitio
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
          {Object.entries(PAGE_NAMES).map(([pageKey, pageName]) => {
            const items = grouped[pageKey];
            if (!items?.length) return null;

            return (
              <Card key={pageKey}>
                <CardHeader>
                  <CardTitle className="text-lg">{pageName}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map((item: any) => {
                    const key = `${item.page}|${item.section}|${item.content_key}`;
                    const label = labelMap.get(key) || `${item.section} → ${item.content_key}`;
                    const currentValue = editValues[item.id] ?? item.content_value;
                    const hasChanged = editValues[item.id] !== undefined && editValues[item.id] !== item.content_value;
                    const justSaved = savedKeys.has(item.id);

                    return (
                      <div key={item.id} className="border rounded-lg p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <Label className="text-sm font-semibold">{label}</Label>
                          <Badge variant="outline" className="text-xs">
                            {item.section}
                          </Badge>
                        </div>
                        {currentValue.length > 80 ? (
                          <Textarea
                            value={currentValue}
                            onChange={(e) =>
                              setEditValues({ ...editValues, [item.id]: e.target.value })
                            }
                            rows={3}
                            className="text-base"
                          />
                        ) : (
                          <Input
                            value={currentValue}
                            onChange={(e) =>
                              setEditValues({ ...editValues, [item.id]: e.target.value })
                            }
                            className="text-base"
                          />
                        )}
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            disabled={!hasChanged || updateContent.isPending}
                            onClick={() =>
                              updateContent.mutate({ id: item.id, value: currentValue })
                            }
                          >
                            {justSaved ? (
                              <><Check className="h-4 w-4 mr-1" /> Guardado</>
                            ) : (
                              <><Save className="h-4 w-4 mr-1" /> Guardar</>
                            )}
                          </Button>
                          {hasChanged && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => {
                                const newValues = { ...editValues };
                                delete newValues[item.id];
                                setEditValues(newValues);
                              }}
                            >
                              Cancelar
                            </Button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminContent;
