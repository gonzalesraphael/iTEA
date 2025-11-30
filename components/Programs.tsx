import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Baby, GraduationCap, Briefcase, Home, Users, Brain } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ServiceModal } from "./ServiceModal";
import { servicesContent, serviceIdToTitle } from "../data/servicesContent";

export function Programs() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const programs = [
    {
      id: "intervencao-precoce",
      icon: Baby,
      title: "Intervenção Precoce",
      description: "Apoio abrangente para crianças de 0-5 anos, incluindo triagens de desenvolvimento e serviços terapêuticos.",
      features: ["Fonoaudiologia", "Terapia Ocupacional", "Treinamento para Pais"],
    },
    {
      id: "apoio-educacional",
      icon: GraduationCap,
      title: "Apoio Educacional",
      description: "Assistência acadêmica e aconselhamento de programas de educação individualizada (PEI) para crianças em idade escolar.",
      features: ["Assistência PEI", "Reforço Escolar", "Grupos de Habilidades Sociais"],
    },
    {
      id: "servicos-comportamentais",
      icon: Brain,
      title: "Serviços Comportamentais",
      description: "Intervenções comportamentais baseadas em evidências, incluindo terapia ABA e suporte de comportamento positivo.",
      features: ["Terapia ABA", "Planos Comportamentais", "Coaching Familiar"],
    },
    {
      id: "apoio-familiar",
      icon: Users,
      title: "Apoio Familiar",
      description: "Recursos e grupos de apoio para pais, irmãos e membros da família estendida.",
      features: ["Grupos de Apoio", "Cuidado Temporário", "Aconselhamento"],
    },
    {
      id: "servicos-transicao",
      icon: Briefcase,
      title: "Serviços de Transição",
      description: "Preparando jovens adultos para emprego, ensino superior e vida independente.",
      features: ["Treinamento Profissional", "Habilidades para a Vida", "Orientação de Carreira"],
    },
    {
      id: "integracao-comunitaria",
      icon: Home,
      title: "Integração Comunitária",
      description: "Programas projetados para promover inclusão social e participação comunitária.",
      features: ["Eventos Sociais", "Recreação", "Mentoria"],
    },
  ];

  // Buscar conteúdo do modal a partir dos dados centralizados
  const getModalContent = (modalId: string | null) => {
    if (!modalId) return null;

    const title = serviceIdToTitle[modalId];
    if (!title) return null;

    const content = servicesContent[title as keyof typeof servicesContent];
    if (!content) return null;

    return {
      title,
      content,
    };
  };

  const modalData = getModalContent(openModal);

  return (
    <section id="programs" className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50 w-full overflow-x-hidden">
      <div className="container mx-auto max-w-7xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-blue-600 tracking-wide uppercase text-sm sm:text-base">Nossos Programas</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-4 mb-4 sm:mb-6 font-bold">
            Serviços de Apoio Abrangentes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
            Oferecemos uma ampla gama de programas projetados para apoiar indivíduos com autismo 
            em cada etapa de sua jornada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-16">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="border-none shadow-sm hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setOpenModal(program.id)}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <program.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>{program.title}</CardTitle>
                <CardDescription className="text-base">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Program */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <span className="text-purple-600 tracking-wide uppercase mb-3 sm:mb-4 text-sm sm:text-base">Programa Destaque</span>
              <h3 className="text-2xl sm:text-3xl text-gray-900 mb-3 sm:mb-4 font-bold">
                Experiência de Colônia de Férias
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Nossa colônia de férias oferece um ambiente seguro e acolhedor onde crianças e adolescentes 
                com autismo podem construir amizades, desenvolver novas habilidades e se divertir. Com 
                equipe treinada e atividades estruturadas, os participantes ganham confiança enquanto criam memórias duradouras.
              </p>
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center text-sm sm:text-base text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Idades de 6-18 anos
                </div>
                <div className="flex items-center text-sm sm:text-base text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Baixa proporção participante-equipe
                </div>
                <div className="flex items-center text-sm sm:text-base text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Atividades e apoio especializados
                </div>
              </div>
              <Button 
                className="w-full sm:w-fit bg-purple-600 hover:bg-purple-700"
                onClick={() => setOpenModal("colonia-ferias")}
              >
                Saiba Mais
              </Button>
            </div>
            <div className="h-64 sm:h-80 md:h-full md:min-h-[400px] order-1 md:order-2">
              <ImageWithFallback
                src="https://www.sesc-rs.com.br/wp-content/uploads/2024/11/hotel-sesc-torres-1.jpg"
                alt="Atividades de colônia de férias"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for service details */}
      {modalData && modalData.content && typeof modalData.content === 'object' && 'whatIs' in modalData.content && (
        <ServiceModal
          isOpen={openModal !== null}
          onClose={() => setOpenModal(null)}
          title={modalData.title}
          content={modalData.content}
        />
      )}
    </section>
  );
}