-- Fix: Restrict contact_messages read/update to admins
DROP POLICY "Authenticated users can read messages" ON public.contact_messages;
DROP POLICY "Authenticated users can update messages" ON public.contact_messages;

CREATE POLICY "Admins can read messages"
  ON public.contact_messages FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update messages"
  ON public.contact_messages FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Fix: Restrict site_content update/insert to admins
DROP POLICY "Authenticated users can update content" ON public.site_content;
DROP POLICY "Authenticated users can insert content" ON public.site_content;

CREATE POLICY "Admins can update content"
  ON public.site_content FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert content"
  ON public.site_content FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));