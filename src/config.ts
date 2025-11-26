// Configuração da API URL
// Em produção, usa a URL relativa (mesmo domínio)
// Em desenvolvimento, usa localhost
export const API_URL =
  import.meta.env.PROD
    ? "/api" // Produção: usa a mesma origem
    : import.meta.env.VITE_API_URL || "http://localhost:4000/api"; // Dev: usa variável de ambiente ou localhost

