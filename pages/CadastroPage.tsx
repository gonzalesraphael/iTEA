import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "sonner";
import { ITEALogo } from "../components/ITEALogo";

interface CadastroPageProps {
  onNavigate: (page: string) => void;
}

export function CadastroPage({ onNavigate }: CadastroPageProps) {
  const { cadastrar } = useAuth();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (senha !== confirmarSenha) {
      setError("As senhas não coincidem");
      toast.error("As senhas não coincidem");
      return;
    }

    if (!aceitouTermos) {
      setError("Você precisa aceitar os termos de uso");
      toast.error("Você precisa aceitar os termos de uso");
      return;
    }

    setLoading(true);
    const success = await cadastrar(nome, email, senha);
    setLoading(false);

    if (success) {
      toast.success("Conta criada com sucesso! Bem-vindo ao ITEA");
      onNavigate("dashboard");
    } else {
      setError("Erro ao criar conta. Tente novamente.");
      toast.error("Erro ao criar conta. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* Logo */}
          <div className="flex justify-center -mb-4">
            <ITEALogo size="md" animated={true} />
          </div>

          {/* Título */}
          <div className="text-center space-y-2">
            <h1 className="text-gray-900">Criar Conta</h1>
            <p className="text-gray-600">
              Junte-se à comunidade ITEA e encontre espaços inclusivos
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome completo</Label>
              <Input
                id="nome"
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="w-full"
              />
            </div>

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
                placeholder="Mínimo 8 caracteres"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                minLength={8}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmarSenha">Confirmar senha</Label>
              <Input
                id="confirmarSenha"
                type="password"
                placeholder="Digite a senha novamente"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <Checkbox
                id="termos"
                checked={aceitouTermos}
                onCheckedChange={(checked) =>
                  setAceitouTermos(checked === true)
                }
              />
              <Label
                htmlFor="termos"
                className="text-gray-600 cursor-pointer leading-tight"
              >
                Aceito os termos de uso e política de privacidade do ITEA
              </Label>
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
              {loading ? "Criando conta..." : "Cadastrar"}
            </Button>
          </form>

          {/* Link para login */}
          <div className="text-center">
            <p className="text-gray-600">
              Já tem uma conta?{" "}
              <button
                onClick={() => onNavigate("login")}
                className="text-blue-600 hover:text-blue-700"
              >
                Entrar
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
