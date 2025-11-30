import { useState } from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
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
import { ServicosPage } from "./pages/ServicoPage";
import { ServicoCatalogoPage } from "./pages/ServicoCatalogoPage";
import { RecursosPage } from "./pages/RecursosPage";
import { FacaDiferencaPage } from "./pages/FacaDiferencaPage";
import { Toaster } from "./components/ui/sonner";
import { ChatBot } from "./components/ChatBot";
import { Clarity } from "./components/Clarity";

type Page =
  | "home"
  | "login"
  | "cadastro"
  | "dashboard"
  | "estabelecimentos"
  | "eventos"
  | "comunidades"
  | "profile"
  | "servicos"
  | "recursos"
  | "faca-diferenca"
  | "intervencao-precoce"
  | "apoio-educacional"
  | "servicos-comportamentais"
  | "servicos-transicao";

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const { user } = useAuth();

  const navigate = (page: Page | string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Verifica se a navegação mobile está visível
  const hasMobileNav = user && (
    currentPage === "dashboard" ||
    currentPage === "estabelecimentos" ||
    currentPage === "eventos" ||
    currentPage === "comunidades" ||
    currentPage === "servicos" ||
    currentPage === "recursos" ||
    currentPage === "faca-diferenca" ||
    currentPage === "intervencao-precoce" ||
    currentPage === "apoio-educacional" ||
    currentPage === "servicos-comportamentais" ||
    currentPage === "servicos-transicao"
  );

  return (
    <>
      <Clarity />
      <div className="min-h-screen overflow-x-hidden w-full">
        {/* Navegação superior - não mostrar em páginas de login/cadastro */}
        {currentPage !== "login" && currentPage !== "cadastro" && (
          <AppNavigation onNavigate={navigate} currentPage={currentPage} />
        )}

        {/* Renderizar página atual */}
        <div className={hasMobileNav ? "pb-16 md:pb-0" : ""}>
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
          {currentPage === "servicos" && <ServicosPage onNavigate={navigate} />}
          {currentPage === "recursos" && <RecursosPage onNavigate={navigate} />}
          {currentPage === "faca-diferenca" && <FacaDiferencaPage onNavigate={navigate} />}
          {currentPage === "intervencao-precoce" && (
            <ServicoCatalogoPage categoria="intervencao-precoce" onNavigate={navigate} />
          )}
          {currentPage === "apoio-educacional" && (
            <ServicoCatalogoPage categoria="apoio-educacional" onNavigate={navigate} />
          )}
          {currentPage === "servicos-comportamentais" && (
            <ServicoCatalogoPage categoria="servicos-comportamentais" onNavigate={navigate} />
          )}
          {currentPage === "servicos-transicao" && (
            <ServicoCatalogoPage categoria="servicos-transicao" onNavigate={navigate} />
          )}
        </div>

        {/* Navegação inferior mobile */}
        <MobileBottomNav onNavigate={navigate} currentPage={currentPage} />
        
        {/* Toast notifications */}
        <Toaster position="top-center" richColors />
        
        {/* Chat Bot - disponível em todas as páginas */}
        {currentPage !== "login" && currentPage !== "cadastro" && <ChatBot />}
      </div>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
