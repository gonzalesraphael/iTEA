import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import logoImg from "/logo.png";

export function Footer() {
  const footerLinks = {
    about: [
      { label: "Nossa História", href: "#" },
      { label: "Equipe", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Relatórios Anuais", href: "#" },
    ],
    programs: [
      { label: "Intervenção Precoce", href: "#" },
      { label: "Apoio Educacional", href: "#" },
      { label: "Serviços Familiares", href: "#" },
      { label: "Programas para Adultos", href: "#" },
    ],
    resources: [
      { label: "Centro de Aprendizagem", href: "#" },
      { label: "Grupos de Apoio", href: "#" },
      { label: "Calendário de Eventos", href: "#" },
      { label: "Blog", href: "#" },
    ],
    getInvolved: [
      { label: "Doar", href: "#" },
      { label: "Voluntariar-se", href: "#" },
      { label: "Defender", href: "#" },
      { label: "Seja Nosso Parceiro", href: "#" },
    ],
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Newsletter Section */}
        <div className="py-8 sm:py-12 border-b border-gray-800">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl mb-2 font-semibold">Mantenha-se Conectado</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Inscreva-se em nossa newsletter para atualizações, recursos e histórias de nossa comunidade.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Digite seu e-mail" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 w-full"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap w-full sm:w-auto">
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 grid sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImg} 
                alt="ITEA" 
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Capacitando indivíduos com autismo e suas famílias através de apoio e 
              educação.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>(11) 1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contato@itea.org.br</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Rua da Esperança, 123<br />Rio Grande do Sul, POA 01234-567</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="mb-4">Sobre</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Programas</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Participe</h4>
            <ul className="space-y-2">
              {footerLinks.getInvolved.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm sm:text-base text-gray-400 order-3 md:order-1">
            © 2025 ITEA. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 order-1 md:order-2">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 order-2 md:order-3">
            <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}