import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { ITEALogo } from "./ITEALogo";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-6 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                Construindo Compreensão Juntos
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl text-gray-900">
              ITEA
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Capacitando indivíduos com autismo e suas famílias através de apoio, 
              educação e aconselhamento por um mundo mais inclusivo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Obter Apoio
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="mr-2 h-5 w-5" />
                Doe Agora
              </Button>
            </div>
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-gray-200">
              <div>
                <div className="text-3xl text-blue-600">X.0K+</div>
                <div className="text-gray-600 mt-1">Famílias Atendidas</div>
              </div>
              <div>
                <div className="text-3xl text-purple-600">X.0+</div>
                <div className="text-gray-600 mt-1">Programas</div>
              </div>
              <div>
                <div className="text-3xl text-teal-600">X.0+</div>
                <div className="text-gray-600 mt-1">Profissionais</div>
              </div>
            </div>
          </motion.div>
          <div className="relative flex items-center justify-center">
            <div className="relative p-4 sm:p-6 md:p-8">
              <ITEALogo
                size="hero"
                animated={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}