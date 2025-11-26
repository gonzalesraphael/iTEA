import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { ITEALogoCompact } from "./ITEALogoCompact";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface AppNavigationProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function AppNavigation({ onNavigate, currentPage }: AppNavigationProps) {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    onNavigate("home");
  };

  // Itens de navegação quando não logado (home institucional)
  const navItemsPublic = [
    { label: "Sobre", href: "#about" },
    { label: "Programas", href: "#programs" },
    { label: "Recursos", href: "#resources" },
    { label: "Participe", href: "#get-involved" },
    { label: "Contato", href: "#contact" },
  ];

  // Itens de navegação quando logado
  const navItemsPrivate = [
    { label: "Dashboard", page: "dashboard" },
    { label: "Estabelecimentos", page: "estabelecimentos" },
    { label: "Eventos", page: "eventos" },
    { label: "Comunidades", page: "comunidades" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <ITEALogoCompact
            onClick={() => onNavigate(user ? "dashboard" : "home")}
          />

          {/* Desktop Navigation */}
          {!user && currentPage === "home" && (
            <div className="hidden md:flex items-center gap-8">
              {navItemsPublic.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {user && (
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => onNavigate("home")}
                className={`transition-colors ${
                  currentPage === "home" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </button>
              {navItemsPrivate.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.page)}
                  className={`transition-colors ${
                    currentPage === item.page
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {!user ? (
              <>
                <Button
                  variant="ghost"
                  onClick={() => onNavigate("login")}
                  className="text-gray-700"
                >
                  Entrar
                </Button>
                <Button
                  onClick={() => onNavigate("cadastro")}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Cadastrar-se
                </Button>
              </>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="inline-flex items-center gap-2 h-9 px-4 py-2 text-sm font-medium rounded-md border bg-background hover:bg-accent hover:text-accent-foreground">
                  <User className="h-4 w-4" />
                  {user.nome}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-gray-600">
                    {user.email}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate("profile")}>
                    Perfil
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {!user && currentPage === "home" && (
              <>
                {navItemsPublic.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </>
            )}

            {user && (
              <>
                {navItemsPrivate.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      onNavigate(item.page);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left transition-colors ${
                      currentPage === item.page
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <div className="text-gray-600">{user.email}</div>
                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="w-full text-red-600"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </Button>
                </div>
              </>
            )}

            {!user && (
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={() => {
                    onNavigate("login");
                    setIsOpen(false);
                  }}
                  className="w-full"
                >
                  Entrar
                </Button>
                <Button
                  onClick={() => {
                    onNavigate("cadastro");
                    setIsOpen(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Cadastrar-se
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
