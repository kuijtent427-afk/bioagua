import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MailOpen, Phone, Clock, User, Building } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const AdminMessages = () => {
  const queryClient = useQueryClient();

  const { data: messages, isLoading } = useQuery({
    queryKey: ["admin-messages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const markRead = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("contact_messages")
        .update({ is_read: true })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin-messages"] }),
  });

  if (isLoading) return <p className="text-muted-foreground">Cargando mensajes...</p>;

  const unreadCount = messages?.filter((m: any) => !m.is_read).length ?? 0;

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-display font-bold text-foreground">Mensajes de Contacto</h2>
        {unreadCount > 0 && (
          <Badge variant="destructive" className="text-sm">{unreadCount} nuevos</Badge>
        )}
      </div>

      {!messages?.length ? (
        <Card>
          <CardContent className="p-12 text-center">
            <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">No hay mensajes aún</p>
            <p className="text-muted-foreground text-sm mt-1">Los mensajes del formulario de contacto aparecerán aquí</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {messages.map((msg: any) => (
            <Card
              key={msg.id}
              className={`transition-all ${!msg.is_read ? "border-primary/50 bg-primary/5 shadow-md" : ""}`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    {msg.is_read ? (
                      <MailOpen className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Mail className="h-5 w-5 text-primary" />
                    )}
                    <CardTitle className="text-base">{msg.name}</CardTitle>
                    {!msg.is_read && <Badge className="text-xs">Nuevo</Badge>}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {format(new Date(msg.created_at), "dd MMM yyyy, HH:mm", { locale: es })}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Mail className="h-3.5 w-3.5" /> {msg.email}
                  </span>
                  {msg.phone && (
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Phone className="h-3.5 w-3.5" /> {msg.phone}
                    </span>
                  )}
                  {msg.client_type && (
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Building className="h-3.5 w-3.5" /> {msg.client_type}
                    </span>
                  )}
                </div>
                {msg.subject && (
                  <p className="font-semibold text-sm text-foreground">{msg.subject}</p>
                )}
                <p className="text-sm text-foreground bg-muted/50 rounded-lg p-4">{msg.message}</p>
                {!msg.is_read && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => markRead.mutate(msg.id)}
                  >
                    <MailOpen className="h-4 w-4 mr-1" /> Marcar como leído
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
