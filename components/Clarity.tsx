import { useEffect } from "react";

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
    // Verifica se já foi carregado (evita duplicação)
    if ((window as any).clarity) {
      return;
    }

    const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID;
    
    if (!projectId) {
      if (import.meta.env.PROD) {
        console.warn("Microsoft Clarity: Project ID não configurado. Configure VITE_CLARITY_PROJECT_ID");
      }
      return;
    }

    // Carrega o script do Clarity dinamicamente
    // Este é o código oficial fornecido pelo Microsoft Clarity
    (function(c: any, l: Document, a: string, r: string, i: string) {
      c[a] = c[a] || function() {
        (c[a].q = c[a].q || []).push(arguments);
      };
      const t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      const y = l.getElementsByTagName(r)[0];
      if (y && y.parentNode) {
        y.parentNode.insertBefore(t, y);
      }
    })(window, document, "clarity", "script", projectId);
  }, []);

  return null;
}

