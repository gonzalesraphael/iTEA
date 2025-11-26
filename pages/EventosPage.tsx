import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

interface EventosPageProps {
  onNavigate: (page: string) => void;
}

export function EventosPage({ onNavigate }: EventosPageProps) {
  const eventosMock = [
    {
      id: "1",
      titulo: "Workshop de Inclusão Digital",
      data: "15 de Novembro, 2025",
      horario: "14:00 - 17:00",
      local: "Centro Comunitário - Av. Principal, 100",
      vagas: 30,
      tipo: "Workshop",
      descricao: "Aprenda sobre tecnologias assistivas e ferramentas digitais",
    },
    {
      id: "2",
      titulo: "Encontro de Famílias",
      data: "20 de Novembro, 2025",
      horario: "10:00 - 13:00",
      local: "Parque Municipal - Área de Convivência",
      vagas: 50,
      tipo: "Encontro",
      descricao: "Momento de compartilhar experiências e fazer novas conexões",
    },
    {
      id: "3",
      titulo: "Palestra: Direitos e Inclusão",
      data: "25 de Novembro, 2025",
      horario: "19:00 - 21:00",
      local: "Auditório da Universidade",
      vagas: 100,
      tipo: "Palestra",
      descricao: "Conheça seus direitos e as leis de inclusão",
    },
  ];

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
          <h1 className="text-gray-900 mb-2">Eventos Inclusivos</h1>
          <p className="text-gray-600">
            Participe de eventos, workshops e encontros da nossa comunidade
          </p>
        </div>

        <div className="space-y-6">
          {eventosMock.map((evento) => (
            <Card key={evento.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="bg-green-100 p-6 rounded-xl flex flex-col items-center justify-center min-w-[120px]">
                    <Calendar className="h-8 w-8 text-green-600 mb-2" />
                    <div className="text-center">
                      <div className="text-green-700">{evento.data.split(" de ")[0]}</div>
                      <div className="text-green-600">
                        {evento.data.split(" de ")[1]}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h2 className="text-gray-900">{evento.titulo}</h2>
                        <Badge className="bg-green-100 text-green-700">
                          {evento.tipo}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{evento.descricao}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{evento.horario}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{evento.vagas} vagas disponíveis</span>
                      </div>
                      <div className="flex items-center gap-2 md:col-span-2">
                        <MapPin className="h-4 w-4" />
                        <span>{evento.local}</span>
                      </div>
                    </div>

                    <div className="pt-3">
                      <Button className="bg-green-600 hover:bg-green-700">
                        Inscrever-se
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
