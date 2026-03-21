import { useNavigate, useLocation } from "react-router-dom";
import { useEditMode } from "@/contexts/EditModeContext";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Save, X, Home, Users, Building, Building2, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const pages = [
  { path: "/", label: "Inicio", icon: Home },
  { path: "/nosotros", label: "Nosotros", icon: Users },
  { path: "/empresas", label: "Empresas", icon: Building },
  { path: "/condominios", label: "Condominios", icon: Building2 },
  { path: "/contacto", label: "Contacto", icon: Mail },
];

const AdminToolbar = () => {
  const { isEditMode, saveAll, saving, pendingChanges } = useEditMode();
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!isEditMode || !isAdmin) return null;

  const navigateEdit = (path: string) => {
    navigate(`${path}?edit=true`);
  };

  const exitEdit = () => {
    navigate(location.pathname);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-secondary text-secondary-foreground shadow-lg">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        {/* Left: Logo + page nav */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 mr-2">
            <img src={logo} alt="BioAgua" className="h-8 brightness-0 invert" />
            <span className="font-display font-bold text-sm hidden sm:block">Modo Edición</span>
          </div>
          <div className="flex items-center gap-1">
            {pages.map((p) => (
              <button
                key={p.path}
                onClick={() => navigateEdit(p.path)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  location.pathname === p.path
                    ? "bg-primary text-primary-foreground"
                    : "text-secondary-foreground/70 hover:bg-secondary-foreground/10"
                }`}
              >
                <p.icon className="h-3.5 w-3.5" />
                <span className="hidden md:inline">{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Save + Exit */}
        <div className="flex items-center gap-3">
          {pendingChanges > 0 && (
            <Badge variant="outline" className="border-primary text-primary bg-primary/10 text-xs">
              {pendingChanges} cambio{pendingChanges > 1 ? "s" : ""}
            </Badge>
          )}
          <Button
            size="sm"
            onClick={saveAll}
            disabled={saving || pendingChanges === 0}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Save className="h-4 w-4 mr-1" />
            {saving ? "Guardando..." : "Guardar"}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={exitEdit}
            className="text-secondary-foreground/70 hover:text-secondary-foreground"
          >
            <X className="h-4 w-4 mr-1" /> Salir
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminToolbar;
