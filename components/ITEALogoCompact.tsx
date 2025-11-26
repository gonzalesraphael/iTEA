import { motion } from "motion/react";

interface ITEALogoCompactProps {
  onClick?: () => void;
  className?: string;
}

export function ITEALogoCompact({ 
  onClick,
  className = "" 
}: ITEALogoCompactProps) {
  return (
    <motion.div
      onClick={onClick}
      className={`cursor-pointer inline-flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="compactBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          
          <linearGradient id="compactGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          
          <linearGradient id="compactOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>

          <filter id="compactGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Versão simplificada - 3 círculos conectados */}
        <g filter="url(#compactGlow)">
          <circle cx="50" cy="25" r="12" fill="url(#compactBlue)" />
          <circle cx="70" cy="55" r="12" fill="url(#compactGreen)" />
          <circle cx="30" cy="55" r="12" fill="url(#compactOrange)" />
          
          {/* Linhas de conexão */}
          <line
            x1="50"
            y1="25"
            x2="70"
            y2="55"
            stroke="#60A5FA"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.5"
          />
          <line
            x1="50"
            y1="25"
            x2="30"
            y2="55"
            stroke="#60A5FA"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.5"
          />
          <line
            x1="30"
            y1="55"
            x2="70"
            y2="55"
            stroke="#60A5FA"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* Símbolo + no centro */}
          <rect
            x="45"
            y="35"
            width="10"
            height="20"
            rx="3"
            fill="url(#compactOrange)"
          />
          <rect
            x="40"
            y="40"
            width="20"
            height="10"
            rx="3"
            fill="url(#compactOrange)"
          />
        </g>

        {/* Texto "ITEA" */}
        <text
          x="50"
          y="85"
          textAnchor="middle"
          fill="#1E293B"
          fontSize="16"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          ITEA
        </text>
      </svg>
    </motion.div>
  );
}

