import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ITEALogo } from "./ITEALogo";

function CounterAnimation({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 segundos
    const steps = 60; // 60 frames
    const increment = to / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [to]);

  return <span>{count.toFixed(1)}{suffix}</span>;
}

export function Hero() {
  const handleObterApoio = () => {
    const programsSection = document.getElementById("programs");
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDoar = () => {
    window.open("https://doacoes.criancaesperanca.unesco.org/", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-20 px-4 sm:px-6 md:py-32 overflow-x-hidden w-full">
      <div className="container mx-auto max-w-7xl w-full">
        <div className="flex flex-col items-center w-full">
          <div className="relative flex items-center justify-center w-full overflow-hidden mb-4 sm:mb-6">
            <div className="relative p-2 sm:p-4 md:p-6 lg:p-8 w-full flex justify-center">
              <ITEALogo
                size="hero"
                animated={true}
                className=""
              />
            </div>
          </div>
          <motion.div 
            className="space-y-4 sm:space-y-6 w-full max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Capacitando indivíduos com autismo e suas famílias através de apoio, 
              educação e aconselhamento por um mundo mais inclusivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                onClick={handleObterApoio}
              >
                Obter Apoio
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto"
                onClick={handleDoar}
              >
                <Heart className="mr-2 h-5 w-5" />
                Doe Agora
              </Button>
            </div>
            <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 border-t border-gray-200">
              <div className="text-center">
                <motion.div 
                  className="text-xl sm:text-2xl md:text-3xl text-blue-600 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CounterAnimation to={10} suffix="K+" />
                </motion.div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">Famílias Atendidas</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-xl sm:text-2xl md:text-3xl text-purple-600 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <CounterAnimation to={10} suffix="+" />
                </motion.div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">Programas</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-xl sm:text-2xl md:text-3xl text-teal-600 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <CounterAnimation to={10} suffix="+" />
                </motion.div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">Profissionais</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}