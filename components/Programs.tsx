import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Baby, GraduationCap, Briefcase, Home, Users, Brain } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

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

  const getModalContent = (modalId: string | null) => {
    if (!modalId) return null;

    switch (modalId) {
      case "intervencao-precoce":
        return {
          title: "Intervenção Precoce",
          content: (
            <div className="space-y-4 sm:space-y-6 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto pr-2">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">O que é:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  A Intervenção Precoce oferece suporte abrangente para crianças de 0 a 5 anos que apresentam atrasos no desenvolvimento ou outras necessidades específicas. O foco é estimular habilidades essenciais nas primeiras fases da infância, quando o cérebro está em seu estágio mais receptivo ao aprendizado.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Como funciona:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  O programa inclui triagens de desenvolvimento e acompanhamento por profissionais especializados, que elaboram planos terapêuticos personalizados para cada criança. As atividades envolvem:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Fonoaudiologia</strong>, para desenvolver linguagem, comunicação e alimentação.</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Terapia Ocupacional</strong>, voltada à coordenação motora, autonomia e integração sensorial.</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Treinamento para Pais</strong>, que orienta famílias a promoverem o desenvolvimento das crianças também em casa.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Benefício:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Favorece o progresso global da criança — emocional, motor, cognitivo e social — fortalecendo o vínculo familiar e ampliando o potencial de aprendizado.
                </p>
              </div>
            </div>
          ),
        };

      case "servicos-comportamentais":
        return {
          title: "Serviços Comportamentais",
          content: (
            <div className="space-y-4 sm:space-y-6 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto pr-2">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">O que é:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Intervenções baseadas em evidências científicas que visam promover comportamentos positivos, reduzir desafios comportamentais e desenvolver habilidades de autonomia e socialização.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Como funciona:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  O serviço utiliza abordagens reconhecidas, como a Terapia ABA (Análise do Comportamento Aplicada), personalizando o atendimento de acordo com as necessidades de cada indivíduo. Inclui:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Terapia ABA</strong>, estruturada em objetivos claros e mensuráveis.</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Planos Comportamentais</strong>, com estratégias específicas para contextos familiares e escolares.</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Coaching Familiar</strong>, que orienta pais e cuidadores sobre como lidar com desafios diários.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Benefício:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Favorece a independência, melhora a comunicação e fortalece a harmonia familiar por meio de intervenções consistentes e colaborativas.
                </p>
              </div>
            </div>
          ),
        };

      case "apoio-familiar":
        return {
          title: "Apoio Familiar",
          content: (
            <div className="space-y-4 sm:space-y-6 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto pr-2">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">O que é:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Rede de suporte emocional e prático voltada para pais, irmãos e demais membros da família que convivem com crianças e jovens em acompanhamento terapêutico.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Como funciona:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  Oferece espaços de escuta, troca de experiências e fortalecimento familiar, com atividades como:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Grupos de Apoio</strong>, que proporcionam acolhimento e compartilhamento de vivências.</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Cuidado Temporário</strong>, garantindo períodos de descanso para as famílias.</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Aconselhamento</strong>, com orientação de profissionais especializados em dinâmicas familiares.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Benefício:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Contribui para o bem-estar da família como um todo, reduzindo o estresse e fortalecendo vínculos de cuidado e apoio mútuo.
                </p>
              </div>
            </div>
          ),
        };

      case "servicos-transicao":
        return {
          title: "Serviços de Transição",
          content: (
            <div className="space-y-4 sm:space-y-6 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto pr-2">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">O que é:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Programa voltado para preparar jovens e adultos para uma vida mais independente, com foco em empregabilidade, formação educacional e habilidades cotidianas.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Como funciona:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  As ações combinam orientação profissional, desenvolvimento de competências e acompanhamento individual. As etapas incluem:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Treinamento Profissional</strong>, para inserção no mercado de trabalho.</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Habilidades para a Vida</strong>, como gestão financeira, autocuidado e rotina doméstica.</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Orientação de Carreira</strong>, com suporte para decisões sobre estudos e trabalho.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Benefício:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Promove autonomia, autoconfiança e inclusão social, apoiando a transição para a vida adulta com propósito e segurança.
                </p>
              </div>
            </div>
          ),
        };

      case "integracao-comunitaria":
        return {
          title: "Integração Comunitária",
          content: (
            <div className="space-y-4 sm:space-y-6 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto pr-2">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">O que é:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Iniciativa voltada à inclusão social e ao fortalecimento de vínculos na comunidade, incentivando a participação ativa e o convívio saudável em diferentes ambientes.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Como funciona:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  São promovidas ações e eventos que estimulam a socialização, a diversão e o protagonismo pessoal, como:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Eventos Sociais</strong>, que celebram conquistas e fortalecem o senso de pertencimento.</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Recreação</strong>, com atividades lúdicas e esportivas que estimulam a interação.</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span><strong>Mentoria</strong>, oferecendo apoio contínuo para o desenvolvimento pessoal e social.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Benefício:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Cria oportunidades de convivência e crescimento coletivo, reforçando a importância da comunidade como espaço de aprendizado e apoio.
                </p>
              </div>
            </div>
          ),
        };

      case "colonia-ferias":
        return {
          title: "Colônia de Férias para Autistas",
          content: (
            <div className="space-y-4 sm:space-y-6 max-h-[65vh] sm:max-h-[75vh] overflow-y-auto pr-2">
              <div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  <strong>Um espaço para brincar, aprender e ser quem se é.</strong>
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  A Colônia de Férias para Autistas foi criada para oferecer uma experiência única, divertida e acolhedora para crianças e adolescentes de 5 a 18 anos. Aqui, cada detalhe foi pensado para que todos possam brincar, explorar e se desenvolver com segurança, respeito e alegria. Mais do que uma colônia, é um ambiente de descoberta, autonomia e inclusão, onde cada participante é valorizado do seu jeito, no seu ritmo.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">🌈 Ambiente pensado para acolher</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  Nosso espaço é amplo, seguro e cheio de estímulos positivos — projetado especialmente para garantir conforto sensorial e liberdade de expressão.
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Ambientes iluminados de forma suave e bem sinalizados</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Salas lúdicas para arte, música, jogos e atividades psicomotoras</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Espaço sensorial para relaxamento e autorregulação</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Área verde para brincadeiras ao ar livre</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Refeitório adaptado, com acompanhamento nutricional</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Cantinhos tranquilos para momentos de pausa</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Tudo isso para que cada criança e jovem se sinta à vontade, confiante e feliz.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💙 Equipe especializada e acolhedora</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A colônia conta com uma equipe multidisciplinar treinada e apaixonada pelo que faz. Cada profissional entende as particularidades do espectro autista e trabalha com empatia, paciência e técnica.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">Entre nossos profissionais estão:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Psicólogos, terapeutas ocupacionais, fonoaudiólogos e pedagogos</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Monitores e recreadores capacitados em inclusão e comunicação alternativa</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Coordenadores técnicos e equipe de primeiros socorros</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Nosso maior compromisso é garantir que cada participante viva uma experiência segura, positiva e inesquecível.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎨 Atividades inclusivas e divertidas</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A programação é cuidadosamente planejada para unir lazer, aprendizado e desenvolvimento — tudo de forma adaptada às necessidades sensoriais e emocionais de cada criança.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">Entre as atividades:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Oficinas de arte, música e culinária</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Jogos cooperativos e esportes adaptados</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Contação de histórias e brincadeiras dirigidas</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Momentos sensoriais e de relaxamento</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Dias temáticos e festas inclusivas</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900 mb-2">💡 Diferenciais da nossa colônia:</p>
                  <ul className="space-y-1 ml-4 text-sm text-gray-700">
                    <li>• Rotina visual com pictogramas</li>
                    <li>• Grupos organizados por idade e nível de suporte</li>
                    <li>• Acompanhamento individualizado</li>
                    <li>• Comunicação constante com as famílias</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🏡 Estrutura completa</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A estrutura foi pensada para proporcionar conforto, acessibilidade e segurança em cada momento:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Salas climatizadas e equipadas</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Banheiros adaptados</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Enfermaria e posto de primeiros socorros</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Áreas externas cercadas e com piso antiderrapante</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Sistema de controle de acesso e monitoramento</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span>Transporte opcional com equipe de apoio</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Tudo para garantir tranquilidade aos pais e liberdade às crianças.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">✨ Muito mais que férias</h3>
                <p className="text-gray-700 leading-relaxed">
                  A Colônia de Férias para Autistas é um espaço de convivência e crescimento — um lugar onde brincar é aprender, e incluir é cuidar. Cada sorriso, cada conquista e cada nova amizade fazem parte de uma jornada repleta de significado. Aqui, a gente acredita que todas as infâncias merecem viver o melhor das férias.
                </p>
              </div>
            </div>
          ),
        };

      default:
        return null;
    }
  };

  const modalData = getModalContent(openModal);

  return (
    <section id="programs" className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
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
      {modalData && (
        <Dialog open={openModal !== null} onOpenChange={(open) => !open && setOpenModal(null)}>
          <DialogContent className="max-w-[95vw] sm:max-w-3xl max-h-[95vh] sm:max-h-[90vh] mx-2 sm:mx-auto">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl">{modalData.title}</DialogTitle>
            </DialogHeader>
            <DialogDescription asChild>
              {modalData.content}
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}