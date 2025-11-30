import { motion } from "motion/react";

interface ITEALogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "hero";
  animated?: boolean;
  className?: string;
}

export function ITEALogo({ 
  size = "md", 
  animated = true,
  className = "" 
}: ITEALogoProps) {
  // Tamanhos otimizados para impacto visual - AUMENTADOS
  const sizeMap = {
    sm: { width: 140, height: 140 },
    md: { width: 220, height: 220 },
    lg: { width: 300, height: 300 },
    xl: { width: 420, height: 420 },
    "2xl": { width: 520, height: 520 },
    hero: { width: 600, height: 600 }
  };

  const { width, height } = sizeMap[size];
  
  // Classes responsivas: max-width apenas no mobile para evitar overflow
  const responsiveClasses = {
    sm: "",
    md: "max-w-[85vw] sm:max-w-none",
    lg: "max-w-[85vw] sm:max-w-none",
    xl: "max-w-[85vw] sm:max-w-none",
    "2xl": "max-w-[85vw] sm:max-w-none",
    hero: "max-w-[85vw] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[600px]"
  };

  // Variantes de animação para cada elemento
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const pieceVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const LogoContent = (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-auto ${responsiveClasses[size]} ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Fundo com gradiente suave */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#F3E8FF" />
        </linearGradient>
        
        {/* Gradientes para as peças */}
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        
        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
        
        <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14B8A6" />
          <stop offset="100%" stopColor="#0D9488" />
        </linearGradient>

        {/* Sombra suave */}
        <filter id="softShadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
          <feOffset dx="2" dy="4" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Brilho suave */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Círculo de pessoas conectadas - simbolizando inclusão */}
      <g filter="url(#glow)">
        {/* Pessoa 1 - Azul */}
        <motion.circle
          cx="250"
          cy="140"
          r="38"
          fill="url(#blueGrad)"
          variants={animated ? pieceVariants : {}}
        />
        
        {/* Pessoa 2 - Verde */}
        <motion.circle
          cx="340"
          cy="200"
          r="38"
          fill="url(#greenGrad)"
          variants={animated ? pieceVariants : {}}
        />
        
        {/* Pessoa 3 - Laranja */}
        <motion.circle
          cx="340"
          cy="300"
          r="38"
          fill="url(#orangeGrad)"
          variants={animated ? pieceVariants : {}}
        />
        
        {/* Pessoa 4 - Roxo */}
        <motion.circle
          cx="250"
          cy="360"
          r="38"
          fill="url(#purpleGrad)"
          variants={animated ? pieceVariants : {}}
        />
        
        {/* Pessoa 5 - Teal */}
        <motion.circle
          cx="160"
          cy="300"
          r="38"
          fill="url(#tealGrad)"
          variants={animated ? pieceVariants : {}}
        />
        
        {/* Pessoa 6 - Rosa */}
        <motion.circle
          cx="160"
          cy="200"
          r="38"
          fill="url(#purpleGrad)"
          opacity="0.85"
          variants={animated ? pieceVariants : {}}
        />

        {/* Linhas conectando as pessoas - união e inclusão */}
        <motion.path
          d="M 250 140 L 340 200 L 340 300 L 250 360 L 160 300 L 160 200 Z"
          stroke="#60A5FA"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
          variants={animated ? {
            hidden: { pathLength: 0 },
            visible: {
              pathLength: 1,
              transition: { duration: 1.5, ease: "easeInOut" as const }
            }
          } : {}}
        />
        
        {/* Linhas internas para reforçar conexão */}
        <motion.line
          x1="250"
          y1="140"
          x2="250"
          y2="360"
          stroke="#A78BFA"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.3"
          variants={animated ? {
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 0.3,
              transition: { duration: 1.2, delay: 0.5, ease: "easeInOut" as const }
            }
          } : {}}
        />
        <motion.line
          x1="160"
          y1="200"
          x2="340"
          y2="300"
          stroke="#34D399"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.3"
          variants={animated ? {
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 0.3,
              transition: { duration: 1.2, delay: 0.6, ease: "easeInOut" as const }
            }
          } : {}}
        />
        <motion.line
          x1="160"
          y1="300"
          x2="340"
          y2="200"
          stroke="#FB923C"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.3"
          variants={animated ? {
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 0.3,
              transition: { duration: 1.2, delay: 0.7, ease: "easeInOut" as const }
            }
          } : {}}
        />

        {/* Centro - símbolo de mais (+) representando inclusão */}
        <motion.g 
          variants={animated ? pieceVariants : {}}
          filter="url(#glow)"
        >
          <rect
            x="230"
            y="215"
            width="40"
            height="70"
            rx="12"
            fill="url(#orangeGrad)"
          />
          <rect
            x="215"
            y="230"
            width="70"
            height="40"
            rx="12"
            fill="url(#orangeGrad)"
          />
          {/* Brilho adicional no centro do + */}
          <circle
            cx="250"
            cy="250"
            r="15"
            fill="white"
            opacity="0.3"
          />
        </motion.g>
      </g>

      {/* Texto "iTEA" */}
      <motion.text
        x="250"
        y="435"
        textAnchor="middle"
        fill="#1E293B"
        fontSize="72"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        variants={animated ? textVariants : {}}
      >
        iTEA
      </motion.text>

      {/* Subtítulo */}
      <motion.text
        x="250"
        y="470"
        textAnchor="middle"
        fill="#64748B"
        fontSize="20"
        fontWeight="600"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="1"
        variants={animated ? textVariants : {}}
      >
        Conectando pessoas, acolhendo trajetórias
      </motion.text>
    </svg>
  );

  if (!animated) {
    return LogoContent;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="inline-block"
    >
      {LogoContent}
    </motion.div>
  );
}

