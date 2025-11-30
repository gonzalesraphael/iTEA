import { Target, Users, Award, BookOpen } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Nossa Missão",
      description: "Fornecer apoio abrangente e recursos para indivíduos com autismo e suas famílias, promovendo compreensão e aceitação.",
    },
    {
      icon: Users,
      title: "Inclusão",
      description: "Acreditamos na criação de uma sociedade inclusiva onde indivíduos com autismo possam prosperar e alcançar seu pleno potencial.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometidos com práticas baseadas em evidências e melhoria contínua em todos os nossos programas e serviços.",
    },
    {
      icon: BookOpen,
      title: "Educação",
      description: "Capacitando famílias e comunidades através do conhecimento, treinamento e conscientização sobre o transtorno do espectro autista.",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 bg-white w-full overflow-x-hidden">
      <div className="container mx-auto max-w-7xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-blue-600 tracking-wide uppercase text-sm sm:text-base">Sobre Nós</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-4 mb-4 sm:mb-6 font-bold">
            Construindo um Amanhã Melhor
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
            O ITEA é dedicado a apoiar indivíduos com autismo 
            e suas famílias através de programas abrangentes, aconselhamento e educação comunitária.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl items-center justify-center">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl text-gray-900 mb-3 sm:mb-4 font-bold">
                Nossa História
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Fundado em 2025, o ITEA foi estabelecido por estudantes da pós graduação SENAC em parceria com 
                pessoas e profissionais que reconheceram a necessidade de serviços de apoio abrangentes e 
                educação comunitária sobre autismo.
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                Oferecemos programas que vão desde intervenção precoce até serviços de transição para adultos, 
                enquanto continuamente defendemos mudanças políticas que beneficiam a comunidade autista.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}