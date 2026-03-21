import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import { EditModeProvider } from "@/contexts/EditModeContext";
import AdminToolbar from "@/components/admin/AdminToolbar";
import Index from "./pages/Index.tsx";
import Nosotros from "./pages/Nosotros.tsx";
import Empresas from "./pages/Empresas.tsx";
import Condominios from "./pages/Condominios.tsx";
import Contacto from "./pages/Contacto.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <EditModeProvider>
            <AdminToolbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/empresas" element={<Empresas />} />
              <Route path="/condominios" element={<Condominios />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </EditModeProvider>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
