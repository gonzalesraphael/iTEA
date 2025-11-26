import { Users, MessageCircle, Heart } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

interface ComunidadesPageProps {
  onNavigate: (page: string) => void;
}

export function ComunidadesPage({ onNavigate }: ComunidadesPageProps) {
  const comunidadesMock = [
    {
      id: "1",
      nome: "Pais e Mães de Primeira Viagem",
      membros: 1250,
      categoria: "Família",
      descricao:
        "Grupo de apoio para famílias que acabaram de receber o diagnóstico",
      temas: ["Diagnóstico", "Primeiros passos", "Apoio emocional"],
    },
    {
      id: "2",
      nome: "Adultos no Espectro",
      membros: 890,
      categoria: "Autodefensoria",
      descricao: "Espaço para adultos autistas compartilharem experiências",
      temas: ["Mercado de trabalho", "Relacionamentos", "Independência"],
    },
    {
      id: "3",
      nome: "Educadores Inclusivos",
      membros: 650,
      categoria: "Educação",
      descricao: "Comunidade para profissionais da educação trocarem práticas",
      temas: ["Metodologias", "Adaptações", "Recursos pedagógicos"],
    },
    {
      id: "4",
      nome: "Terapeutas em Rede",
      membros: 420,
      categoria: "Profissionais",
      descricao: "Rede de profissionais de saúde especializados",
      temas: ["Estudos de caso", "Novas terapias", "Boas práticas"],
    },
    {
      id: "5",
      nome: "Irmãos e Irmãs",
      membros: 340,
      categoria: "Família",
      descricao: "Grupo para irmãos de pessoas autistas",
      temas: ["Relacionamento fraternal", "Desafios", "Vivências"],
    },
  ];

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case "Família":
        return "bg-orange-100 text-orange-700";
      case "Autodefensoria":
        return "bg-purple-100 text-purple-700";
      case "Educação":
        return "bg-blue-100 text-blue-700";
      case "Profissionais":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => onNavigate("dashboard")}
            className="mb-4 hidden md:flex"
          >
            ← Voltar ao Dashboard
          </Button>
          <h1 className="text-gray-900 mb-2">Comunidades</h1>
          <p className="text-gray-600">
            Conecte-se com grupos de apoio e compartilhe experiências
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {comunidadesMock.map((comunidade) => (
            <Card
              key={comunidade.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <Badge className={getCategoriaColor(comunidade.categoria)}>
                    {comunidade.categoria}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h2 className="text-gray-900">{comunidade.nome}</h2>
                  <p className="text-gray-600">{comunidade.descricao}</p>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{comunidade.membros.toLocaleString("pt-BR")} membros</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {comunidade.temas.map((tema) => (
                    <Badge key={tema} variant="secondary" className="bg-gray-100">
                      {tema}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                    <Heart className="h-4 w-4 mr-2" />
                    Participar
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Visitar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
