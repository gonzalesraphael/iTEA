import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { toast } from "sonner";

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const { user, updateUser } = useAuth();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [idade, setIdade] = useState<string>("");
  const [genero, setGenero] = useState<string>("prefiro-nao-informar");

  useEffect(() => {
    if (user) {
      setNome(user.nome ?? "");
      setEmail(user.email ?? "");
      setTelefone(user.telefone ?? "");
      setIdade(user.idade != null ? String(user.idade) : "");
      setGenero(user.genero ?? "prefiro-nao-informar");
    }
  }, [user]);

  if (!user) {
    onNavigate("login");
    return null;
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({
      nome,
      email,
      telefone: telefone || undefined,
      idade: idade ? Number(idade) : undefined,
      genero: genero as any,
    });
    toast.success("Perfil atualizado com sucesso");
  };

  return (
    <div className="container mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-gray-900 mb-6">Meu Perfil</h1>
      <form onSubmit={handleSave} className="space-y-6 bg-white rounded-xl border p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome completo</Label>
            <Input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="(11) 99999-9999" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="idade">Idade</Label>
            <Input id="idade" type="number" min={0} value={idade} onChange={(e) => setIdade(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Gênero</Label>
            <Select value={genero} onValueChange={setGenero}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="masculino">Masculino</SelectItem>
                <SelectItem value="feminino">Feminino</SelectItem>
                <SelectItem value="nao-binario">Não-binário</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
                <SelectItem value="prefiro-nao-informar">Prefiro não informar</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button type="button" variant="outline" onClick={() => onNavigate("dashboard")}>Voltar</Button>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Salvar alterações</Button>
        </div>
      </form>
    </div>
  );
}


