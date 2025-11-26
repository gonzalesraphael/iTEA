import { motion } from "motion/react";
import logoImg from "/logo.png";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  onClick?: () => void;
  className?: string;
  enableHover?: boolean;
  animate?: boolean;
  pulse?: boolean;
}

export function AnimatedLogo({ 
  size = "md", 
  onClick, 
  className = "",
  enableHover = true,
  animate = false,
  pulse = false
}: AnimatedLogoProps) {
  // Tamanhos responsivos otimizados para PWA
  const sizeClasses = {
    sm: "h-6 sm:h-8",
    md: "h-10 sm:h-12",
    lg: "h-14 sm:h-16",
    xl: "h-20 sm:h-24",
    "2xl": "h-32 sm:h-40 md:h-48"
  };

  const logoElement = (
    <img
      src={logoImg}
      alt="ITEA"
      className={`w-auto object-contain ${sizeClasses[size]} ${className}`}
    />
  );

  if (!enableHover && !onClick && !animate && !pulse) {
    return logoElement;
  }

  // Animação de pulsação para chamar atenção
  const pulseAnimation = pulse ? {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: 3,
      ease: "easeInOut" as const
    }
  } : {};

  return (
    <motion.div
      onClick={onClick}
      className={onClick ? "cursor-pointer inline-block" : "inline-block"}
      initial={animate ? { opacity: 0, scale: 0.8 } : {}}
      animate={animate ? { opacity: 1, scale: 1, ...pulseAnimation } : pulseAnimation}
      whileHover={enableHover ? { scale: 1.05 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {logoElement}
    </motion.div>
  );
}
