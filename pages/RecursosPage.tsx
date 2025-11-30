import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { FileText, Video, Calendar, Phone, Download, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

interface RecursosPageProps {
  onNavigate: (page: string) => void;
}

export function RecursosPage({ onNavigate }: RecursosPageProps) {
  const guides = [
    {
      title: "Entendendo o Diagnóstico de Autismo",
      description: "Um guia abrangente para pais navegando no processo de diagnóstico",
      type: "Guia PDF",
    },
    {
      title: "Kit de Planejamento PEI",
      description: "Recursos e modelos para planejamento educacional eficaz",
      type: "Guia PDF",
    },
    {
      title: "Estratégias de Suporte Sensorial",
      description: "Abordagens práticas para gerenciar desafios sensoriais",
      type: "Guia PDF",
    },
    {
      title: "Direitos e Benefícios",
      description: "Guia completo sobre direitos das pessoas com autismo no Brasil",
      type: "Guia PDF",
    },
    {
      title: "Alimentação e Nutrição",
      description: "Estratégias nutricionais e dicas para lidar com seletividade alimentar",
      type: "Guia PDF",
    },
    {
      title: "Rotinas Visuais",
      description: "Como criar e usar rotinas visuais eficazes em casa e na escola",
      type: "Guia PDF",
    },
  ];

  const videos = [
    {
      title: "Introdução à Terapia ABA",
      description: "Compreendendo a análise do comportamento aplicada e seus benefícios",
      duration: "12 min",
    },
    {
      title: "Estratégias de Comunicação",
      description: "Formas eficazes de apoiar o desenvolvimento da comunicação",
      duration: "18 min",
    },
    {
      title: "Apoiando Transições",
      description: "Ajudando sua criança a navegar mudanças e novas situações",
      duration: "15 min",
    },
    {
      title: "Integração Sensorial",
      description: "Entendendo e trabalhando com questões sensoriais no autismo",
      duration: "20 min",
    },
    {
      title: "Desenvolvimento de Habilidades Sociais",
      description: "Técnicas para estimular interações sociais positivas",
      duration: "16 min",
    },
    {
      title: "Inclusão Escolar na Prática",
      description: "Como promover uma educação verdadeiramente inclusiva",
      duration: "22 min",
    },
  ];

  const events = [
    {
      title: "Grupo de Apoio aos Pais",
      date: "Toda terça-feira, 18:00",
      location: "Centro Comunitário",
    },
    {
      title: "Workshop de Conscientização sobre Autismo",
      date: "15 de dezembro de 2025",
      location: "Online e Presencial",
    },
    {
      title: "Noite de Cinema Sensorial",
      date: "22 de dezembro de 2025",
      location: "Cinema Local",
    },
    {
      title: "Palestra: Intervenção Precoce",
      date: "10 de dezembro de 2025",
      location: "Auditório Central",
    },
    {
      title: "Encontro de Famílias TEA",
      date: "Primeiro sábado do mês, 14:00",
      location: "Parque Municipal",
    },
    {
      title: "Workshop: Tecnologias Assistivas",
      date: "18 de dezembro de 2025",
      location: "Online",
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
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3 md:space-y-4">
          <span className="text-blue-600 tracking-wide uppercase">Recursos</span>
          <h1 className="text-gray-900">Conhecimento & Apoio</h1>
          <p className="text-gray-600">
            Acesse materiais educacionais, vídeos e eventos para apoiar sua jornada.
          </p>
        </div>

        {/* Tabs de Recursos */}
        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="guides">Guias & Artigos</TabsTrigger>
            <TabsTrigger value="videos">Vídeos</TabsTrigger>
            <TabsTrigger value="events">Eventos</TabsTrigger>
          </TabsList>

          {/* Guias & Artigos */}
          <TabsContent value="guides">
            <div className="grid md:grid-cols-3 gap-6">
              {guides.map((guide, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">{guide.type}</span>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Baixar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                <ExternalLink className="h-4 w-4 mr-2" />
                Ver Todos os Recursos
              </Button>
            </div>
          </TabsContent>

          {/* Vídeos */}
          <TabsContent value="videos">
            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Video className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">{video.duration}</span>
                      <Button variant="ghost" size="sm">
                        Assistir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                <ExternalLink className="h-4 w-4 mr-2" />
                Ver Biblioteca de Vídeos
              </Button>
            </div>
          </TabsContent>

          {/* Eventos */}
          <TabsContent value="events">
            <div className="grid md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      <div className="mt-2 space-y-1">
                        <div className="text-gray-700">{event.date}</div>
                        <div className="text-gray-600">{event.location}</div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="default" size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                      Inscrever-se
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                <ExternalLink className="h-4 w-4 mr-2" />
                Ver Todos os Eventos
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Card de Contato */}
        <div className="mt-16 md:mt-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <Phone className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-white mb-4">Precisa de Apoio Imediato?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Nossa linha de apoio está disponível de segunda a sexta, das 9h às 17h. 
            Estamos aqui para responder perguntas e conectá-lo com recursos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              Ligar: (11) 1234-5678
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Enviar E-mail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
