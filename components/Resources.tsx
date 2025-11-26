import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { FileText, Video, Calendar, Phone, Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Resources() {
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
  ];

  const events = [
    {
      title: "Grupo de Apoio aos Pais",
      date: "Toda terça-feira, 18:00",
      location: "Centro Comunitário",
    },
    {
      title: "Workshop de Conscientização sobre Autismo",
      date: "15 de novembro de 2025",
      location: "Online e Presencial",
    },
    {
      title: "Noite de Cinema Sensorial",
      date: "22 de novembro de 2025",
      location: "Cinema Local",
    },
  ];

  return (
    <section id="resources" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 tracking-wide uppercase">Recursos</span>
          <h2 className="text-4xl md:text-5xl text-gray-900 mt-4 mb-6">
            Conhecimento & Apoio
          </h2>
          <p className="text-xl text-gray-600">
            Acesse materiais educacionais, vídeos e eventos para apoiar sua jornada.
          </p>
        </div>

        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="guides">Guias & Artigos</TabsTrigger>
            <TabsTrigger value="videos">Vídeos</TabsTrigger>
            <TabsTrigger value="events">Eventos</TabsTrigger>
          </TabsList>

          <TabsContent value="guides">
            <div className="grid md:grid-cols-3 gap-6">
              {guides.map((guide, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{guide.title}</CardTitle>
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

          <TabsContent value="videos">
            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Video className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{video.title}</CardTitle>
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

          <TabsContent value="events">
            <div className="grid md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>
                      <div className="mt-2 space-y-1">
                        <div className="text-gray-700">{event.date}</div>
                        <div className="text-gray-600">{event.location}</div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="default" size="sm" className="w-full">
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

        {/* Contact Card */}
        <div className="mt-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <Phone className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-3xl mb-4">Precisa de Apoio Imediato?</h3>
          <p className="text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
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
    </section>
  );
}