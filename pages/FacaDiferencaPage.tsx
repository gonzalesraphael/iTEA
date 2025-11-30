import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Heart, Users, Calendar, DollarSign, Megaphone, HandHeart } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface FacaDiferencaPageProps {
  onNavigate: (page: string) => void;
}

export function FacaDiferencaPage({ onNavigate }: FacaDiferencaPageProps) {
  const ways = [
    {
      icon: Heart,
      title: "Faça uma Doação",
      description: "Seu apoio financeiro nos ajuda a fornecer serviços vitais para famílias necessitadas.",
      action: "Doe Agora",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Users,
      title: "Voluntarie-se",
      description: "Junte-se à nossa equipe de voluntários dedicados e cause um impacto direto em nossa comunidade.",
      action: "Participe",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Calendar,
      title: "Participe de Eventos",
      description: "Participe de nossos eventos de arrecadação e campanhas de conscientização ao longo do ano.",
      action: "Ver Eventos",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Megaphone,
      title: "Seja um Defensor",
      description: "Ajude-nos a aumentar a conscientização e defender políticas que apoiam a comunidade autista.",
      action: "Saiba Como",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: HandHeart,
      title: "Torne-se um Patrocinador",
      description: "Faça parceria conosco como patrocinador corporativo para apoiar nossa missão e programas.",
      action: "Seja Nosso Parceiro",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: DollarSign,
      title: "Doação Planejada",
      description: "Crie um legado duradouro através de doação planejada e planejamento patrimonial.",
      action: "Comece Agora",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const impactLevels = [
    {
      value: "R$ 50",
      description: "Fornece materiais educacionais para uma família",
      color: "text-blue-600",
    },
    {
      value: "R$ 150",
      description: "Patrocina uma sessão de terapia",
      color: "text-purple-600",
    },
    {
      value: "R$ 500",
      description: "Apoia uma semana de colônia de férias",
      color: "text-teal-600",
    },
    {
      value: "R$ 1.000",
      description: "Financia um grupo de apoio por 3 meses",
      color: "text-orange-600",
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
          <span className="text-blue-600 tracking-wide uppercase">Participe</span>
          <h1 className="text-gray-900">Faça a Diferença Hoje</h1>
          <p className="text-gray-600">
            Existem muitas maneiras de apoiar nossa missão e ajudar a criar um mundo mais inclusivo 
            para indivíduos com autismo.
          </p>
        </div>

        {/* Grid de formas de participar */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {ways.map((way, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className={`w-12 h-12 bg-gradient-to-br ${way.color} rounded-xl flex items-center justify-center mb-4`}>
                  <way.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>{way.title}</CardTitle>
                <CardDescription className="text-base">
                  {way.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors">
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Campanha em Destaque */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12 md:mb-16">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-full min-h-[400px]">
              <ImageWithFallback
                src="https://s2-redeglobo.glbimg.com/8tiLfpEPY7kBUqIlAPRS-TQ11RI=/0x0:700x437/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2020/R/5/8RCdo6RUSOt6VZqvJn3w/crianca-esperanca-globo.jpg"
                alt="Apoio comunitário"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-blue-600 tracking-wide uppercase mb-4">Campanha Anual</span>
              <h2 className="text-gray-900 mb-4">
                Construindo Esperança Juntos
              </h2>
              <p className="text-gray-700 mb-6">
                Nossa campanha anual de arrecadação apoia programas e serviços críticos para famílias 
                afetadas pelo autismo. Este ano, estamos arrecadando fundos para expandir nossos serviços 
                de intervenção precoce e lançar novos grupos de apoio em comunidades carentes.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Progresso da Campanha</span>
                  <span className="text-gray-900">R$ 375.000 de R$ 500.000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500" 
                    style={{ width: '75%' }}
                  ></div>
                </div>
                <p className="text-gray-600 mt-2">75% da meta alcançada</p>
              </div>
              <Button size="lg" className="w-fit bg-blue-600 hover:bg-blue-700">
                <Heart className="mr-2 h-5 w-5" />
                Apoie Esta Campanha
              </Button>
            </div>
          </div>
        </div>

        {/* Seção de Impacto */}
        <div className="text-center">
          <h2 className="text-gray-900 mb-8 md:mb-12">Seu Impacto</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactLevels.map((impact, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 bg-white">
                <CardContent className="p-6 text-center">
                  <div className={`text-4xl md:text-5xl ${impact.color} mb-4`}>
                    {impact.value}
                  </div>
                  <p className="text-gray-700">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="mt-12 md:mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <Heart className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-white mb-4">Juntos Somos Mais Fortes</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Cada contribuição, por menor que seja, faz uma diferença real na vida de famílias 
            e indivíduos com autismo. Junte-se a nós nessa missão transformadora.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              Fazer Doação
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Quero Ser Voluntário
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
