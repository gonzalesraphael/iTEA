import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Building2, Calendar, Users, ArrowRight } from "lucide-react";
import { ITEALogo } from "./ITEALogo";

interface WelcomeModalProps {
  userName: string;
  onClose: () => void;
}

export function WelcomeModal({ userName, onClose }: WelcomeModalProps) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: `Bem-vindo, ${userName}! 🎉`,
      description:
        "Estamos felizes em ter você no ITEA. Vamos fazer um tour rápido pelas funcionalidades?",
      icon: null,
    },
    {
      title: "Estabelecimentos 🏢",
      description:
        "Encontre locais adaptados com nosso sistema de selos de qualidade (Bronze, Prata e Ouro). Use filtros para achar o lugar perfeito!",
      icon: Building2,
    },
    {
      title: "Eventos 🎭",
      description:
        "Descubra workshops, palestras e encontros inclusivos. Participe de atividades que fazem diferença na comunidade.",
      icon: Calendar,
    },
    {
      title: "Comunidades 🤝",
      description:
        "Conecte-se com grupos de apoio, compartilhe experiências e faça parte de uma rede de suporte.",
      icon: Users,
    },
    {
      title: "Pronto para começar! ✨",
      description:
        "Explore as funcionalidades, faça buscas e conecte-se com nossa comunidade inclusiva. Boa jornada!",
      icon: null,
    },
  ];

  const currentStep = steps[step];
  const Icon = currentStep.icon;

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onClose();
    }
  };

  const handleSkip = () => {
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            {Icon ? (
              <div className="bg-blue-100 p-4 rounded-full">
                <Icon className="h-8 w-8 text-blue-600" />
              </div>
            ) : step === 0 ? (
              <ITEALogo size="md" animated={true} />
            ) : null}
          </div>
          <DialogTitle className="text-center">{currentStep.title}</DialogTitle>
          <DialogDescription className="text-center pt-2">
            {currentStep.description}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 mt-4">
          {/* Progress dots */}
          <div className="flex justify-center gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === step ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            {step > 0 && (
              <Button variant="outline" onClick={handleSkip} className="flex-1">
                Pular
              </Button>
            )}
            <Button onClick={handleNext} className="flex-1 bg-blue-600 hover:bg-blue-700">
              {step < steps.length - 1 ? (
                <>
                  Próximo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "Começar"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
