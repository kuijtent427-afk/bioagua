import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, MessageSquare, FileText } from "lucide-react";
import AdminMessages from "@/components/admin/AdminMessages";
import AdminContent from "@/components/admin/AdminContent";
import logo from "@/assets/logo.png";

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

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

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="messages">
          <TabsList className="mb-6">
            <TabsTrigger value="messages" className="gap-2">
              <MessageSquare className="h-4 w-4" /> Mensajes
            </TabsTrigger>
            <TabsTrigger value="content" className="gap-2">
              <FileText className="h-4 w-4" /> Editar Textos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="messages">
            <AdminMessages />
          </TabsContent>

          <TabsContent value="content">
            <AdminContent />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
