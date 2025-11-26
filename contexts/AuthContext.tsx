import { createContext, useContext, useState, ReactNode } from "react";

// API URL - usa relativa em produção, localhost em dev
const API_URL =
  import.meta.env.PROD
    ? "/api"
    : import.meta.env.VITE_API_URL || "http://localhost:4000/api";

interface User {
  id: string;
  nome: string;
  email: string;
  telefone?: string;
  idade?: number;
  genero?: "masculino" | "feminino" | "nao-binario" | "outro" | "prefiro-nao-informar";
}

interface AuthContextType {
  user: User | null;
  login: (email: string, senha: string) => Promise<boolean>;
  cadastrar: (nome: string, email: string, senha: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (partial: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, senha: string): Promise<boolean> => {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      if (!res.ok) return false;
      const u = await res.json();
      setUser({
        id: String(u._id || u.id || "1"),
        nome: u.nome || email.split("@")[0],
        email: u.email,
        telefone: u.telefone,
        idade: u.idade,
        genero: u.genero,
      });
      return true;
    } catch (e) {
      return false;
    }
  };

  const cadastrar = async (
    nome: string,
    email: string,
    senha: string
  ): Promise<boolean> => {
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });
      if (!res.ok) return false;
      const u = await res.json();
      setUser({
        id: String(u._id || u.id || "1"),
        nome: u.nome,
        email: u.email,
        telefone: u.telefone,
        idade: u.idade,
        genero: u.genero,
      });
      return true;
    } catch (e) {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (partial: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...partial } : prev));
    const email = partial.email || (user && user.email);
    if (email) {
      fetch(`${API_URL}/profile/${encodeURIComponent(email)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(partial),
      }).catch(() => {});
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, cadastrar, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
}
