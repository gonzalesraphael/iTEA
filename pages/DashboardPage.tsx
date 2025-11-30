import { useState, useEffect } from "react";
import { Building2, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { WelcomeModal } from "../components/WelcomeModal";
import { useAuth } from "../contexts/AuthContext";

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const { user } = useAuth();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Mostrar modal de boas-vindas apenas na primeira visita
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome && user) {
      setShowWelcome(true);
    }
  }, [user]);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
    sessionStorage.setItem("hasSeenWelcome", "true");
  };
  const cards = [
    {
      id: "estabelecimentos",
      title: "Estabelecimentos",
      icon: Building2,
      description: "Encontre locais adaptados e acessíveis para suas necessidades",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      count: "450+ locais",
    },
    {
      id: "eventos",
      title: "Eventos",
      icon: Calendar,
      description: "Descubra eventos inclusivos e atividades na sua região",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      count: "120+ eventos",
    },
    {
      id: "comunidades",
      title: "Comunidades",
      icon: Users,
      description: "Conecte-se com grupos de apoio e compartilhe experiências",
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      count: "80+ grupos",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 w-full overflow-x-hidden">
      {/* Modal de boas-vindas */}
      {showWelcome && user && (
        <WelcomeModal userName={user.nome} onClose={handleCloseWelcome} />
      )}

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        {/* Cabeçalho */}
        <div className="mb-6 sm:mb-8 md:mb-12 space-y-2 sm:space-y-3 md:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-bold">Bem-vindo ao ITEA</h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
            Explore estabelecimentos acessíveis, eventos inclusivos e
            comunidades de apoio. Escolha uma opção abaixo para começar.
          </p>
        </div>

        {/* Cards principais */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-12">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.id}
                className="cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
                onClick={() => onNavigate(card.id)}
              >
                <CardContent className="p-8 space-y-4">
                  <div className={`${card.color} w-16 h-16 rounded-xl flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-gray-900">{card.title}</h2>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-gray-500">{card.count}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Seção de estatísticas */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
          <h3 className="text-xl sm:text-2xl text-gray-900 mb-4 sm:mb-6 font-bold">Impacto da nossa comunidade</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="text-2xl sm:text-3xl text-blue-600 font-bold">XX.000+</div>
              <p className="text-sm sm:text-base text-gray-600">Famílias atendidas</p>
            </div>
            <div className="space-y-2 text-center md:text-left">
              <div className="text-2xl sm:text-3xl text-green-600 font-bold">XX+</div>
              <p className="text-sm sm:text-base text-gray-600">Estabelecimentos parceiros</p>
            </div>
            <div className="space-y-2 text-center md:text-left">
              <div className="text-2xl sm:text-3xl text-orange-600 font-bold">XX+</div>
              <p className="text-sm sm:text-base text-gray-600">Eventos realizados</p>
            </div>
            <div className="space-y-2 text-center md:text-left">
              <div className="text-2xl sm:text-3xl text-purple-600 font-bold">XX+</div>
              <p className="text-sm sm:text-base text-gray-600">Comunidades ativas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
