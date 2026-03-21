import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface SiteContent {
  page: string;
  section: string;
  content_key: string;
  content_value: string;
}

export const useSiteContent = (page?: string) => {
  return useQuery({
    queryKey: ["site-content", page],
    queryFn: async () => {
      let query = supabase.from("site_content").select("*");
      if (page) query = query.eq("page", page);
      const { data, error } = await query;
      if (error) throw error;
      return (data as SiteContent[]) ?? [];
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const getContent = (
  content: SiteContent[] | undefined,
  section: string,
  key: string,
  fallback: string
): string => {
  if (!content) return fallback;
  const item = content.find((c) => c.section === section && c.content_key === key);
  return item?.content_value ?? fallback;
};
