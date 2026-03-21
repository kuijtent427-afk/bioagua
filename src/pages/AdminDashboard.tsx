import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, MessageSquare, Edit, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AdminMessages from "@/components/admin/AdminMessages";
import logo from "@/assets/logo.png";

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

  const { data: unreadCount } = useQuery({
    queryKey: ["unread-count"],
    queryFn: async () => {
      const { count } = await supabase
        .from("contact_messages")
        .select("*", { count: "exact", head: true })
        .eq("is_read", false);
      return count ?? 0;
    },
    enabled: !!user && isAdmin,
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Cargando...</p>
      </div>
    );
  }

  if (!user || !isAdmin) {
    navigate("/admin/login", { replace: true });
    return null;
  }

  const handleLogout = async () => {
    await signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="BioAgua" className="h-10" />
            <span className="font-display font-bold text-foreground text-lg">Panel Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">{user.email}</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-1" /> Salir
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Quick action: Edit site */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Edit className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg">Editar el Sitio Web</h3>
                <p className="text-sm text-muted-foreground">
                  Haz clic en cualquier texto directamente en la página para cambiarlo
                </p>
              </div>
            </div>
            <Button
              onClick={() => navigate("/?edit=true")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Entrar al Modo Edición
            </Button>
          </CardContent>
        </Card>

        {/* Messages */}
        <AdminMessages />
      </main>
    </div>
  );
};

export default AdminDashboard;
