import { useEffect } from "react";
import clarity from "@microsoft/clarity";

/**
 * Componente para integrar Microsoft Clarity
 * 
 * Instalação via React (recomendado para projetos React)
 * 
 * Para configurar:
 * 1. Crie uma conta em https://clarity.microsoft.com
 * 2. Crie um novo projeto
 * 3. Copie o Project ID
 * 4. Configure a variável de ambiente VITE_CLARITY_PROJECT_ID
 *    - Local: crie arquivo .env com VITE_CLARITY_PROJECT_ID=seu-id
 *    - Vercel: Settings → Environment Variables → Adicione VITE_CLARITY_PROJECT_ID
 */
export function Clarity() {
  useEffect(() => {
    const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID;

    if (!projectId) {
      if (import.meta.env.PROD) {
        console.warn("Microsoft Clarity: Project ID não configurado. Configure VITE_CLARITY_PROJECT_ID");
      }
      return;
    }

    // Evita inicializar mais de uma vez
    if ((window as any).__CLARITY_INITIALIZED__) {
      return;
    }

    clarity.init(projectId);
    (window as any).__CLARITY_INITIALIZED__ = true;
  }, []);

  return null;
}

