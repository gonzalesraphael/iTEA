import { useState } from "react";
import { Search, MapPin, Phone, Mail, Star, SlidersHorizontal, User, Building2, GraduationCap } from "lucide-react";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import {
  Prestador,
  prestadoresIntervencaoPrecoce,
  prestadoresApoioEducacional,
  prestadoresServicosComportamentais,
  prestadoresServicosTransicao,
  filtrosIntervencaoPrecoce,
  filtrosApoioEducacional,
  filtrosServicosComportamentais,
  filtrosServicosTransicao,
} from "../data/servicosData";

interface ServicoCatalogoPageProps {
  categoria: "intervencao-precoce" | "apoio-educacional" | "servicos-comportamentais" | "servicos-transicao";
  onNavigate: (page: string) => void;
}

const categoriaInfo = {
  "intervencao-precoce": {
    titulo: "Intervenção Precoce",
    descricao: "Profissionais especializados em desenvolvimento infantil de 0-5 anos",
    prestadores: prestadoresIntervencaoPrecoce,
    filtros: filtrosIntervencaoPrecoce,
  },
  "apoio-educacional": {
    titulo: "Apoio Educacional",
    descricao: "Instituições e profissionais de apoio escolar e educação inclusiva",
    prestadores: prestadoresApoioEducacional,
    filtros: filtrosApoioEducacional,
  },
  "servicos-comportamentais": {
    titulo: "Serviços Comportamentais",
    descricao: "Clínicas e profissionais especializados em intervenções comportamentais",
    prestadores: prestadoresServicosComportamentais,
    filtros: filtrosServicosComportamentais,
  },
  "servicos-transicao": {
    titulo: "Serviços de Transição",
    descricao: "Instituições que preparam jovens autistas para vida adulta e mercado de trabalho",
    prestadores: prestadoresServicosTransicao,
    filtros: filtrosServicosTransicao,
  },
};

export function ServicoCatalogoPage({ categoria, onNavigate }: ServicoCatalogoPageProps) {
  const [busca, setBusca] = useState("");
  const [filtrosAtivos, setFiltrosAtivos] = useState<string[]>([]);
  const [tipoFiltro, setTipoFiltro] = useState({
    profissional: false,
    clinica: false,
    instituicao: false,
  });

  const info = categoriaInfo[categoria];

  const toggleFiltroEspecialidade = (filtro: string) => {
    setFiltrosAtivos((prev) =>
      prev.includes(filtro)
        ? prev.filter((f) => f !== filtro)
        : [...prev, filtro]
    );
  };

  const toggleTipoFiltro = (tipo: keyof typeof tipoFiltro) => {
    setTipoFiltro((prev) => ({ ...prev, [tipo]: !prev[tipo] }));
  };

  const limparFiltros = () => {
    setFiltrosAtivos([]);
    setTipoFiltro({
      profissional: false,
      clinica: false,
      instituicao: false,
    });
    setBusca("");
  };

  const prestadoresFiltrados = info.prestadores.filter((prestador) => {
    // Filtro de busca
    const matchBusca =
      busca === "" ||
      prestador.nome.toLowerCase().includes(busca.toLowerCase()) ||
      prestador.endereco.toLowerCase().includes(busca.toLowerCase()) ||
      prestador.especialidades.some((esp) => esp.toLowerCase().includes(busca.toLowerCase()));

    // Filtro de especialidades
    const matchEspecialidade =
      filtrosAtivos.length === 0 ||
      prestador.especialidades.some((esp) => filtrosAtivos.includes(esp));

    // Filtro de tipo
    const matchTipo =
      (!tipoFiltro.profissional && !tipoFiltro.clinica && !tipoFiltro.instituicao) ||
      (tipoFiltro.profissional && prestador.tipo === "profissional") ||
      (tipoFiltro.clinica && prestador.tipo === "clinica") ||
      (tipoFiltro.instituicao && prestador.tipo === "instituicao");

    return matchBusca && matchEspecialidade && matchTipo;
  });

  const getTipoIcon = (tipo: Prestador["tipo"]) => {
    switch (tipo) {
      case "profissional":
        return <User className="h-4 w-4" />;
      case "clinica":
        return <Building2 className="h-4 w-4" />;
      case "instituicao":
        return <GraduationCap className="h-4 w-4" />;
    }
  };

  const getTipoLabel = (tipo: Prestador["tipo"]) => {
    switch (tipo) {
      case "profissional":
        return "Profissional";
      case "clinica":
        return "Clínica";
      case "instituicao":
        return "Instituição";
    }
  };

  const FiltrosContent = () => (
    <div className="space-y-6">
      {/* Tipo de prestador */}
      <div>
        <h3 className="mb-4 text-gray-900">Tipo de Prestador</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox
              id="tipo-profissional"
              checked={tipoFiltro.profissional}
              onCheckedChange={() => toggleTipoFiltro("profissional")}
            />
            <Label htmlFor="tipo-profissional" className="cursor-pointer text-gray-700">
              Profissional Autônomo
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="tipo-clinica"
              checked={tipoFiltro.clinica}
              onCheckedChange={() => toggleTipoFiltro("clinica")}
            />
            <Label htmlFor="tipo-clinica" className="cursor-pointer text-gray-700">
              Clínica
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="tipo-instituicao"
              checked={tipoFiltro.instituicao}
              onCheckedChange={() => toggleTipoFiltro("instituicao")}
            />
            <Label htmlFor="tipo-instituicao" className="cursor-pointer text-gray-700">
              Instituição
            </Label>
          </div>
        </div>
      </div>

      {/* Especialidades */}
      <div>
        <h3 className="mb-4 text-gray-900">Especialidades</h3>
        <div className="space-y-3">
          {info.filtros.map((filtro) => (
            <div key={filtro} className="flex items-center gap-2">
              <Checkbox
                id={`filtro-${filtro}`}
                checked={filtrosAtivos.includes(filtro)}
                onCheckedChange={() => toggleFiltroEspecialidade(filtro)}
              />
              <Label htmlFor={`filtro-${filtro}`} className="cursor-pointer text-gray-700">
                {filtro}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Limpar filtros */}
      <Button variant="outline" onClick={limparFiltros} className="w-full">
        Limpar todos os filtros
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12">
        {/* Botão voltar */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => onNavigate("servicos")}
            className="mb-4 hidden md:flex"
          >
            ← Voltar para Serviços
          </Button>
        </div>

        {/* Cabeçalho */}
        <div className="mb-8 space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <button
              onClick={() => onNavigate("servicos")}
              className="hover:text-blue-600 transition-colors"
            >
              Serviços
            </button>
            <span>/</span>
            <span className="text-gray-900">{info.titulo}</span>
          </div>
          <h1 className="text-gray-900">{info.titulo}</h1>
          <p className="text-gray-600 max-w-3xl">{info.descricao}</p>
        </div>

        {/* Barra de busca e filtros */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Buscar por nome, local ou especialidade..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filtros Mobile */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filtros</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FiltrosContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Indicador de filtros ativos */}
          {(filtrosAtivos.length > 0 || tipoFiltro.profissional || tipoFiltro.clinica || tipoFiltro.instituicao) && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-gray-600">Filtros ativos:</span>
              {filtrosAtivos.map((filtro) => (
                <Badge key={filtro} variant="secondary" className="gap-1">
                  {filtro}
                  <button
                    onClick={() => toggleFiltroEspecialidade(filtro)}
                    className="ml-1 hover:text-red-600"
                  >
                    ×
                  </button>
                </Badge>
              ))}
              {tipoFiltro.profissional && (
                <Badge variant="secondary" className="gap-1">
                  Profissional
                  <button
                    onClick={() => toggleTipoFiltro("profissional")}
                    className="ml-1 hover:text-red-600"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {tipoFiltro.clinica && (
                <Badge variant="secondary" className="gap-1">
                  Clínica
                  <button
                    onClick={() => toggleTipoFiltro("clinica")}
                    className="ml-1 hover:text-red-600"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {tipoFiltro.instituicao && (
                <Badge variant="secondary" className="gap-1">
                  Instituição
                  <button
                    onClick={() => toggleTipoFiltro("instituicao")}
                    className="ml-1 hover:text-red-600"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-8">
          {/* Filtros Desktop */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-gray-900 mb-6">Filtros</h2>
              <FiltrosContent />
            </div>
          </aside>

          {/* Lista de prestadores */}
          <div className="flex-1">
            <div className="mb-4 text-gray-600">
              {prestadoresFiltrados.length} resultado{prestadoresFiltrados.length !== 1 ? "s" : ""} encontrado{prestadoresFiltrados.length !== 1 ? "s" : ""}
            </div>

            {prestadoresFiltrados.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-gray-600">
                  Nenhum prestador encontrado com os filtros selecionados.
                </p>
                <Button
                  variant="outline"
                  onClick={limparFiltros}
                  className="mt-4"
                >
                  Limpar filtros
                </Button>
              </Card>
            ) : (
              <div className="space-y-4">
                {prestadoresFiltrados.map((prestador) => (
                  <Card key={prestador.id} className="hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Informações principais */}
                        <div className="flex-1 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="text-gray-900">{prestador.nome}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                  {getTipoIcon(prestador.tipo)}
                                  <span className="text-gray-600">{getTipoLabel(prestador.tipo)}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1 shrink-0">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <span className="text-gray-900">
                                  {prestador.avaliacao.toFixed(1)}
                                </span>
                                <span className="text-gray-500">
                                  ({prestador.numeroAvaliacoes})
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-600">{prestador.descricao}</p>
                          </div>

                          {/* Especialidades */}
                          <div className="flex flex-wrap gap-2">
                            {prestador.especialidades.map((esp) => (
                              <Badge key={esp} variant="secondary" className="bg-blue-100 text-blue-700">
                                {esp}
                              </Badge>
                            ))}
                          </div>

                          {/* Contato */}
                          <div className="space-y-2 text-gray-600">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 shrink-0" />
                              <span>{prestador.endereco}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 shrink-0" />
                              <span>{prestador.telefone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 shrink-0" />
                              <span>{prestador.email}</span>
                            </div>
                          </div>
                        </div>

                        {/* Botão de ação */}
                        <div className="flex md:flex-col gap-3">
                          <Button className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700">
                            Entrar em contato
                          </Button>
                          <Button variant="outline" className="flex-1 md:flex-none">
                            Ver perfil
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}