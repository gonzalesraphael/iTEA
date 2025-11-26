import { useState } from "react";
import { Search, MapPin, Award, Volume2, Lightbulb, Home, SlidersHorizontal, Building2 } from "lucide-react";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";

interface Estabelecimento {
  id: string;
  nome: string;
  endereco: string;
  selo: "bronze" | "prata" | "ouro" | null;
  tags: string[];
  descricao: string;
}

const estabelecimentosMock: Estabelecimento[] = [
  {
    id: "1",
    nome: "Café Acolhedor",
    endereco: "Rua das Flores, 123 - Centro",
    selo: "ouro",
    tags: ["Som reduzido", "Iluminação ajustável", "Menu visual"],
    descricao: "Cafeteria com ambiente sensorial adaptado",
  },
  {
    id: "2",
    nome: "Biblioteca Municipal Inclusiva",
    endereco: "Av. da Cultura, 456 - Vila Nova",
    selo: "prata",
    tags: ["Rampas de acesso", "Sinalização tátil", "Som reduzido"],
    descricao: "Espaço de leitura totalmente acessível",
  },
  {
    id: "3",
    nome: "Restaurante Sabor & Inclusão",
    endereco: "Rua do Comércio, 789 - Jardim",
    selo: "ouro",
    tags: ["Cardápio pictórico", "Área sensorial", "Staff treinado"],
    descricao: "Gastronomia com atendimento especializado",
  },
  {
    id: "4",
    nome: "Academia Movimento Livre",
    endereco: "Av. Esportes, 234 - Parque",
    selo: "bronze",
    tags: ["Rampas", "Vestiários adaptados"],
    descricao: "Atividades físicas inclusivas",
  },
  {
    id: "5",
    nome: "Cinema Experiência",
    endereco: "Shopping Central - Piso 2",
    selo: "ouro",
    tags: ["Sessões sensoriais", "Volume ajustável", "Iluminação suave"],
    descricao: "Sessões de cinema adaptadas",
  },
  {
    id: "6",
    nome: "Parque Infantil Aventura",
    endereco: "Praça da Alegria, s/n - Bairro Novo",
    selo: "prata",
    tags: ["Brinquedos adaptados", "Área cercada", "Piso emborrachado"],
    descricao: "Diversão segura para todas as crianças",
  },
];

interface EstabelecimentosPageProps {
  onNavigate: (page: string) => void;
}

export function EstabelecimentosPage({ onNavigate }: EstabelecimentosPageProps) {
  const [busca, setBusca] = useState("");
  const [filtros, setFiltros] = useState({
    atendimentoEspecializado: false,
    localAdaptado: false,
    seloBronze: false,
    seloPrata: false,
    seloOuro: false,
  });

  const toggleFiltro = (key: keyof typeof filtros) => {
    setFiltros((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const estabelecimentosFiltrados = estabelecimentosMock.filter((est) => {
    // Filtro de busca
    const matchBusca =
      busca === "" ||
      est.nome.toLowerCase().includes(busca.toLowerCase()) ||
      est.endereco.toLowerCase().includes(busca.toLowerCase()) ||
      est.tags.some((tag) => tag.toLowerCase().includes(busca.toLowerCase()));

    // Filtros de selo
    const matchSelo =
      (!filtros.seloBronze && !filtros.seloPrata && !filtros.seloOuro) ||
      (filtros.seloBronze && est.selo === "bronze") ||
      (filtros.seloPrata && est.selo === "prata") ||
      (filtros.seloOuro && est.selo === "ouro");

    // Filtros de características
    const matchCaracteristicas =
      (!filtros.atendimentoEspecializado && !filtros.localAdaptado) ||
      (filtros.atendimentoEspecializado &&
        est.tags.some((tag) =>
          ["Staff treinado", "Atendimento especializado"].includes(tag)
        )) ||
      (filtros.localAdaptado &&
        est.tags.some((tag) =>
          ["Som reduzido", "Iluminação ajustável", "Rampas"].includes(tag)
        ));

    return matchBusca && matchSelo && (matchCaracteristicas || (!filtros.atendimentoEspecializado && !filtros.localAdaptado));
  });

  const getSeloColor = (selo: string | null) => {
    switch (selo) {
      case "ouro":
        return "bg-yellow-500 text-yellow-900";
      case "prata":
        return "bg-gray-400 text-gray-900";
      case "bronze":
        return "bg-orange-700 text-orange-100";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  const getSeloNome = (selo: string | null) => {
    switch (selo) {
      case "ouro":
        return "Ouro";
      case "prata":
        return "Prata";
      case "bronze":
        return "Bronze";
      default:
        return "Sem selo";
    }
  };

  // Componente de filtros reutilizável
  const FiltrosContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-gray-900 mb-4">Filtros</h3>
      </div>

      {/* Atendimento */}
      <div className="space-y-3">
        <h4 className="text-gray-700">Atendimento</h4>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="atendimento"
            checked={filtros.atendimentoEspecializado}
            onCheckedChange={() =>
              toggleFiltro("atendimentoEspecializado")
            }
          />
          <Label htmlFor="atendimento" className="cursor-pointer">
            Especializado
          </Label>
        </div>
      </div>

      {/* Adaptações */}
      <div className="space-y-3">
        <h4 className="text-gray-700">Adaptações</h4>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="adaptado"
            checked={filtros.localAdaptado}
            onCheckedChange={() => toggleFiltro("localAdaptado")}
          />
          <Label htmlFor="adaptado" className="cursor-pointer">
            Local adaptado
          </Label>
        </div>
      </div>

      {/* Selos */}
      <div className="space-y-3">
        <h4 className="text-gray-700">Selo de Acessibilidade</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="ouro"
              checked={filtros.seloOuro}
              onCheckedChange={() => toggleFiltro("seloOuro")}
            />
            <Label htmlFor="ouro" className="cursor-pointer">
              🏅 Ouro
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="prata"
              checked={filtros.seloPrata}
              onCheckedChange={() => toggleFiltro("seloPrata")}
            />
            <Label htmlFor="prata" className="cursor-pointer">
              🥈 Prata
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="bronze"
              checked={filtros.seloBronze}
              onCheckedChange={() => toggleFiltro("seloBronze")}
            />
            <Label htmlFor="bronze" className="cursor-pointer">
              🥉 Bronze
            </Label>
          </div>
        </div>
      </div>

      {/* Botão limpar filtros */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() =>
          setFiltros({
            atendimentoEspecializado: false,
            localAdaptado: false,
            seloBronze: false,
            seloPrata: false,
            seloOuro: false,
          })
        }
      >
        Limpar filtros
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-8">
        {/* Cabeçalho */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => onNavigate("dashboard")}
            className="mb-4 hidden md:flex"
          >
            ← Voltar ao Dashboard
          </Button>
          <h1 className="text-gray-900 mb-2">Estabelecimentos Inclusivos</h1>
          <p className="text-gray-600">
            Encontre locais adaptados e acessíveis próximos a você
          </p>
        </div>

        {/* Barra de busca com botão de filtros mobile */}
        <div className="mb-6 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar estabelecimentos..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="pl-12 py-6 w-full"
            />
          </div>
          
          {/* Botão de filtros mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="lg:hidden px-4 py-6 bg-blue-600 hover:bg-blue-700">
                <SlidersHorizontal className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Filtros</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FiltrosContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filtros laterais - Desktop apenas */}
          <div className="hidden lg:block lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <FiltrosContent />
              </CardContent>
            </Card>
          </div>

          {/* Lista de resultados */}
          <div className="lg:col-span-3 space-y-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                {estabelecimentosFiltrados.length} estabelecimento(s) encontrado(s)
              </p>
            </div>

            {estabelecimentosFiltrados.map((estabelecimento) => (
              <Card
                key={estabelecimento.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Building2 className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-gray-900">
                            {estabelecimento.nome}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600 mt-1">
                            <MapPin className="h-4 w-4" />
                            <span>{estabelecimento.endereco}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600">
                        {estabelecimento.descricao}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {estabelecimento.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-blue-50 text-blue-700"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Selo */}
                    {estabelecimento.selo && (
                      <div
                        className={`${getSeloColor(
                          estabelecimento.selo
                        )} px-4 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap`}
                      >
                        <Award className="h-5 w-5" />
                        <span>
                          Selo {getSeloNome(estabelecimento.selo)}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {estabelecimentosFiltrados.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <div className="text-gray-400 mb-4">
                    <Home className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-gray-900 mb-2">
                    Nenhum estabelecimento encontrado
                  </h3>
                  <p className="text-gray-600">
                    Tente ajustar os filtros ou buscar por outros termos
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
