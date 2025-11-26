import { Home, Building2, Calendar, Users } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

interface MobileBottomNavProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function MobileBottomNav({
  onNavigate,
  currentPage,
}: MobileBottomNavProps) {
  const { user } = useAuth();

  // Só mostrar para usuários logados e em páginas específicas
  if (!user) return null;
  if (
    currentPage !== "dashboard" &&
    currentPage !== "estabelecimentos" &&
    currentPage !== "eventos" &&
    currentPage !== "comunidades"
  ) {
    return null;
  }

  const navItems = [
    {
      id: "dashboard",
      label: "Início",
      icon: Home,
    },
    {
      id: "estabelecimentos",
      label: "Locais",
      icon: Building2,
    },
    {
      id: "eventos",
      label: "Eventos",
      icon: Calendar,
    },
    {
      id: "comunidades",
      label: "Grupos",
      icon: Users,
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-600 active:text-blue-600"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "fill-blue-100" : ""}`} />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
