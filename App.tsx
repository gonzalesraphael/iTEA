import { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { AppNavigation } from "./components/AppNavigation";
import { MobileBottomNav } from "./components/MobileBottomNav";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { CadastroPage } from "./pages/CadastroPage";
import { DashboardPage } from "./pages/DashboardPage";
import { EstabelecimentosPage } from "./pages/EstabelecimentosPage";
import { EventosPage } from "./pages/EventosPage";
import { ComunidadesPage } from "./pages/ComunidadesPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Toaster } from "./components/ui/sonner";
import { ChatBot } from "./components/ChatBot";

type Page =
  | "home"
  | "login"
  | "cadastro"
  | "dashboard"
  | "estabelecimentos"
  | "eventos"
  | "comunidades"
  | "profile";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const navigate = (page: Page | string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AuthProvider>
      <div className="min-h-screen">
        {/* Navegação superior - não mostrar em páginas de login/cadastro */}
        {currentPage !== "login" && currentPage !== "cadastro" && (
          <AppNavigation onNavigate={navigate} currentPage={currentPage} />
        )}

        {/* Renderizar página atual */}
        <div className="pb-16 md:pb-0">
          {currentPage === "home" && <HomePage />}
          {currentPage === "login" && <LoginPage onNavigate={navigate} />}
          {currentPage === "cadastro" && <CadastroPage onNavigate={navigate} />}
          {currentPage === "dashboard" && <DashboardPage onNavigate={navigate} />}
          {currentPage === "estabelecimentos" && (
            <EstabelecimentosPage onNavigate={navigate} />
          )}
          {currentPage === "eventos" && <EventosPage onNavigate={navigate} />}
          {currentPage === "comunidades" && (
            <ComunidadesPage onNavigate={navigate} />
          )}
          {currentPage === "profile" && <ProfilePage onNavigate={navigate} />}
        </div>

        {/* Navegação inferior mobile */}
        <MobileBottomNav onNavigate={navigate} currentPage={currentPage} />
        
        {/* Toast notifications */}
        <Toaster position="top-center" richColors />
        
        {/* Chat Bot - disponível em todas as páginas */}
        {currentPage !== "login" && currentPage !== "cadastro" && <ChatBot />}
      </div>
    </AuthProvider>
  );
}
