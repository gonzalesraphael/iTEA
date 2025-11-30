import { Baby, GraduationCap, Brain, Briefcase } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

interface ServicosPageProps {
  onNavigate: (page: string) => void;
}

export function ServicosPage({ onNavigate }: ServicosPageProps) {
  const categorias = [
    {
      id: "intervencao-precoce",
      titulo: "Intervenção Precoce",
      descricao: "Apoio abrangente para crianças de 0-5 anos, incluindo triagens de desenvolvimento e serviços terapêuticos.",
      icon: Baby,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      id: "apoio-educacional",
      titulo: "Apoio Educacional",
      descricao: "Assistência acadêmica e aconselhamento de programas de educação individualizada (PEI) para crianças em idade escolar.",
      icon: GraduationCap,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      id: "servicos-comportamentais",
      titulo: "Serviços Comportamentais",
      descricao: "Intervenções comportamentais baseadas em evidências, incluindo terapia ABA e suporte de comportamento positivo.",
      icon: Brain,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      id: "servicos-transicao",
      titulo: "Serviços de Transição",
      descricao: "Preparando jovens adultos para emprego, ensino superior e vida independente.",
      icon: Briefcase,
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12">
        {/* Botão voltar */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => onNavigate("dashboard")}
            className="mb-4 hidden md:flex"
          >
            ← Voltar ao Dashboard
          </Button>
        </div>

        {/* Cabeçalho */}
        <div className="mb-8 md:mb-12 space-y-3 md:space-y-4">
          <h1 className="text-gray-900">Serviços</h1>
          <p className="text-gray-600 max-w-3xl">
            Receba orientação e acompanhamento para diversas dúvidas e necessidades.
            Encontre profissionais e instituições especializadas em cada área.
          </p>
        </div>

        {/* Cards de categorias */}
        <div className="grid md:grid-cols-2 gap-6">
          {categorias.map((categoria) => {
            const Icon = categoria.icon;
            return (
              <Card
                key={categoria.id}
                className="cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
                onClick={() => onNavigate(categoria.id)}
              >
                <CardContent className="p-8 space-y-4">
                  <div className={`${categoria.color} w-16 h-16 rounded-xl flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-gray-900">{categoria.titulo}</h2>
                    <p className="text-gray-600">{categoria.descricao}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Informação adicional */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-gray-900 mb-4">Como funciona?</h3>
          <div className="space-y-3 text-gray-600">
            <p>
              1. <strong>Escolha uma categoria</strong> de serviço que atenda suas necessidades
            </p>
            <p>
              2. <strong>Use os filtros</strong> para encontrar profissionais ou instituições especializadas
            </p>
            <p>
              3. <strong>Entre em contato</strong> diretamente com os prestadores de serviço
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}