import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Heart, Users, Calendar, DollarSign, Megaphone, HandHeart } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function GetInvolved() {
  const ways = [
    {
      icon: Heart,
      title: "Faça uma Doação",
      description: "Seu apoio financeiro nos ajuda a fornecer serviços vitais para famílias necessitadas.",
      action: "Doe Agora",
    },
    {
      icon: Users,
      title: "Voluntarie-se",
      description: "Junte-se à nossa equipe de voluntários dedicados e cause um impacto direto em nossa comunidade.",
      action: "Participe",
    },
    {
      icon: Calendar,
      title: "Participe de Eventos",
      description: "Participe de nossos eventos de arrecadação e campanhas de conscientização ao longo do ano.",
      action: "Ver Eventos",
    },
    {
      icon: Megaphone,
      title: "Seja um Defensor",
      description: "Ajude-nos a aumentar a conscientização e defender políticas que apoiam a comunidade autista.",
      action: "Saiba Como",
    },
    {
      icon: HandHeart,
      title: "Torne-se um Patrocinador",
      description: "Faça parceria conosco como patrocinador corporativo para apoiar nossa missão e programas.",
      action: "Seja Nosso Parceiro",
    },
    {
      icon: DollarSign,
      title: "Doação Planejada",
      description: "Crie um legado duradouro através de doação planejada e planejamento patrimonial.",
      action: "Comece Agora",
    },
  ];

  return (
    <section id="get-involved" className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-blue-600 tracking-wide uppercase text-sm sm:text-base">Participe</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-4 mb-4 sm:mb-6 font-bold">
            Faça a Diferença Hoje
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
            Existem muitas maneiras de apoiar nossa missão e ajudar a criar um mundo mais inclusivo 
            para indivíduos com autismo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16">
          {ways.map((way, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <way.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>{way.title}</CardTitle>
                <CardDescription className="text-base">
                  {way.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Campaign */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-64 sm:h-80 md:h-full md:min-h-[400px] order-1">
              <ImageWithFallback
                src="https://s2-redeglobo.glbimg.com/8tiLfpEPY7kBUqIlAPRS-TQ11RI=/0x0:700x437/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2020/R/5/8RCdo6RUSOt6VZqvJn3w/crianca-esperanca-globo.jpg"
                alt="Apoio comunitário"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center order-2">
              <span className="text-blue-600 tracking-wide uppercase mb-3 sm:mb-4 text-sm sm:text-base">Campanha Anual</span>
              <h3 className="text-2xl sm:text-3xl text-gray-900 mb-3 sm:mb-4 font-bold">
                Construindo Esperança Juntos
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Nossa campanha anual de arrecadação apoia programas e serviços críticos para famílias 
                afetadas pelo autismo. Este ano, estamos arrecadando fundos para expandir nossos serviços 
                de intervenção precoce e lançar novos grupos de apoio em comunidades carentes.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                  <span className="text-sm sm:text-base text-gray-700">Progresso da Campanha</span>
                  <span className="text-sm sm:text-base text-gray-900 font-semibold">R$ 375.000 de R$ 500.000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" 
                    style={{ width: '75%' }}
                  ></div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mt-2">75% da meta alcançada</p>
              </div>
              <Button size="lg" className="w-full sm:w-fit bg-blue-600 hover:bg-blue-700">
                <Heart className="mr-2 h-5 w-5" />
                Apoie Esta Campanha
              </Button>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl text-gray-900 mb-6 sm:mb-8 font-bold">Seu Impacto</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <div className="text-3xl sm:text-4xl text-blue-600 mb-2 font-bold">R$ 50</div>
              <div className="text-sm sm:text-base text-gray-700">Fornece materiais educacionais para uma família</div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <div className="text-3xl sm:text-4xl text-purple-600 mb-2 font-bold">R$ 150</div>
              <div className="text-sm sm:text-base text-gray-700">Patrocina uma sessão de terapia</div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <div className="text-3xl sm:text-4xl text-teal-600 mb-2 font-bold">R$ 500</div>
              <div className="text-sm sm:text-base text-gray-700">Apoia uma semana de colônia de férias</div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <div className="text-3xl sm:text-4xl text-orange-600 mb-2 font-bold">R$ 1.000</div>
              <div className="text-sm sm:text-base text-gray-700">Financia um grupo de apoio por 3 meses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}