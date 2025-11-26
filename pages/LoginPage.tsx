import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "sonner";
import { ITEALogo } from "../components/ITEALogo";

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const success = await login(email, senha);
    setLoading(false);

    if (success) {
      toast.success("Login realizado com sucesso!");
      onNavigate("dashboard");
    } else {
      setError("Email ou senha inválidos");
      toast.error("Email ou senha inválidos");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* Logo */}
          <div className="flex justify-center -mb-4">
            <ITEALogo size="md" animated={true} />
          </div>

          {/* Título */}
          <div className="text-center space-y-2">
            <h1 className="text-gray-900">Entrar no ITEA</h1>
            <p className="text-gray-600">
              Conecte-se a espaços e comunidades inclusivas
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha">Senha</Label>
              <Input
                id="senha"
                type="password"
                placeholder="••••••••"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                className="w-full"
              />
            </div>

            {error && (
              <div className="text-red-600 bg-red-50 p-3 rounded-lg">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          {/* Link para cadastro */}
          <div className="text-center">
            <p className="text-gray-600">
              Ainda não tem conta?{" "}
              <button
                onClick={() => onNavigate("cadastro")}
                className="text-blue-600 hover:text-blue-700"
              >
                Cadastre-se
              </button>
            </p>
          </div>

          {/* Link para voltar */}
          <div className="text-center pt-4 border-t border-gray-200">
            <button
              onClick={() => onNavigate("home")}
              className="text-gray-600 hover:text-gray-700"
            >
              ← Voltar para o site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
