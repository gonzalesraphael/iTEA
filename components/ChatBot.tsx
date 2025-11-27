import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Send, X, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Sou a assistente virtual do ITEA. Como posso ajudá-lo hoje? 😊",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll para última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Respostas automáticas da IA (mock)
  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes("olá") ||
      lowerMessage.includes("oi") ||
      lowerMessage.includes("bom dia") ||
      lowerMessage.includes("boa tarde") ||
      lowerMessage.includes("boa noite")
    ) {
      return "Olá! É um prazer conversar com você. Como posso ajudar? 😊";
    }

    if (
      lowerMessage.includes("tea") ||
      lowerMessage.includes("autismo") ||
      lowerMessage.includes("autista")
    ) {
      return "O ITEA tem recursos especializados para pessoas com TEA! Oferecemos mapas de estabelecimentos amigáveis, eventos sensoriais adequados e uma comunidade de apoio. Posso te ajudar a encontrar algo específico?";
    }

    if (
      lowerMessage.includes("estabelecimento") ||
      lowerMessage.includes("lugar") ||
      lowerMessage.includes("local")
    ) {
      return "Temos uma lista completa de estabelecimentos inclusivos! Você pode filtrar por tipo de acessibilidade, localização e avaliações da comunidade. Faça login para acessar nosso mapa interativo! 🗺️";
    }

    if (lowerMessage.includes("evento") || lowerMessage.includes("atividade")) {
      return "Organizamos e divulgamos eventos inclusivos regularmente! De oficinas de arte até sessões de cinema adaptadas. Confira nossa agenda na seção de Eventos! 🎉";
    }

    if (
      lowerMessage.includes("comunidade") ||
      lowerMessage.includes("grupo") ||
      lowerMessage.includes("conhecer")
    ) {
      return "Nossa comunidade é incrível! Conecte-se com outras famílias, profissionais e pessoas que compartilham experiências similares. Juntos somos mais fortes! 💙";
    }

    if (
      lowerMessage.includes("cadastro") ||
      lowerMessage.includes("cadastrar") ||
      lowerMessage.includes("registrar")
    ) {
      return "Para se cadastrar é super fácil! Clique em 'Entrar' no menu e depois em 'Criar Conta'. É rápido e gratuito! ✨";
    }

    if (
      lowerMessage.includes("ajuda") ||
      lowerMessage.includes("dúvida") ||
      lowerMessage.includes("como funciona")
    ) {
      return "Estou aqui para te ajudar! O ITEA conecta pessoas com necessidades específicas a espaços, eventos e comunidades inclusivas. Explore nosso site ou pergunte algo específico! 🌟";
    }

    if (
      lowerMessage.includes("humano") ||
      lowerMessage.includes("atendente") ||
      lowerMessage.includes("pessoa")
    ) {
      return "Entendo! Para falar com um atendente humano, envie um email para contato@itea.org.br ou ligue para (11) 98765-4321. Nossa equipe está pronta para ajudar! 📞";
    }

    if (
      lowerMessage.includes("obrigad") ||
      lowerMessage.includes("valeu") ||
      lowerMessage.includes("agradeço")
    ) {
      return "Por nada! Fico feliz em ajudar. Se tiver mais dúvidas, é só chamar! 😊💙";
    }

    if (lowerMessage.includes("tchau") || lowerMessage.includes("até")) {
      return "Até logo! Volte sempre que precisar. Estamos aqui para você! 👋✨";
    }

    // Resposta padrão
      return "Interessante! Posso te ajudar com informações sobre estabelecimentos inclusivos, eventos, nossa comunidade ou como usar o ITEA. O que você gostaria de saber? 🤔";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Adiciona mensagem do usuário
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setIsTyping(true);

    // Simula delay de digitação da IA
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Delay aleatório entre 1-2s
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Botão Flutuante (FAB) */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 sm:bottom-20 md:bottom-8 right-4 sm:right-6 md:right-8 z-40 
                   bg-gradient-to-r from-blue-500 via-green-500 to-blue-600
                   text-white rounded-full p-3 sm:p-4 shadow-lg
                   hover:shadow-xl transition-shadow
                   focus:outline-none focus:ring-4 focus:ring-blue-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 10px 25px rgba(59, 130, 246, 0.5)",
            "0 10px 35px rgba(34, 197, 94, 0.5)",
            "0 10px 25px rgba(59, 130, 246, 0.5)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-label="Abrir chat com IA"
      >
        <MessageCircle className="w-6 h-6" />

        {/* Badge de notificação */}
        <motion.span
          className="absolute -top-1 -right-1 bg-orange-500 text-white 
                     rounded-full w-6 h-6 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Sparkles className="w-3 h-3" />
        </motion.span>
      </motion.button>

      {/* Janela do Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 sm:bottom-20 md:bottom-8 right-2 sm:right-4 md:right-8 z-50
                       w-[calc(100vw-1rem)] sm:w-[calc(100vw-2rem)] md:w-[380px] max-w-[calc(100vw-1rem)] sm:max-w-[calc(100vw-2rem)] md:max-w-[380px]
                       h-[calc(100vh-7rem)] sm:h-[calc(100vh-10rem)] md:h-[600px] max-h-[calc(100vh-7rem)] sm:max-h-[calc(100vh-10rem)] md:max-h-[600px]
                       bg-white rounded-2xl shadow-2xl
                       flex flex-col overflow-hidden
                       border-2 border-blue-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 via-green-500 to-blue-600 p-4 text-white">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">IA Especialista ITEA</h3>
                    <div className="flex items-center gap-1 text-xs text-white/90">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                      Online
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-1 rounded-full transition-colors"
                  aria-label="Fechar chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm">
                  Tire suas dúvidas rápido com nossa IA especialista
                </p>
                <p className="text-xs text-white/75 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Fique tranquilo, você pode solicitar atendimento humano a qualquer momento
                </p>
              </div>
            </div>

            {/* Área de Mensagens */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === "bot"
                        ? "bg-gradient-to-br from-blue-500 to-green-500"
                        : "bg-gradient-to-br from-orange-500 to-pink-500"
                    }`}
                  >
                    {message.sender === "bot" ? (
                      <Bot className="w-4 h-4 text-white" />
                    ) : (
                      <User className="w-4 h-4 text-white" />
                    )}
                  </div>

                  {/* Mensagem */}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                      message.sender === "bot"
                        ? "bg-white text-gray-800 rounded-tl-none shadow-sm"
                        : "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Indicador de digitação */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input de Mensagem */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           focus:border-transparent transition-all"
                  aria-label="Digite sua mensagem"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-blue-500 to-green-500 
                           text-white p-3 rounded-full
                           hover:shadow-lg transition-all
                           disabled:opacity-50 disabled:cursor-not-allowed
                           focus:outline-none focus:ring-4 focus:ring-blue-300"
                  aria-label="Enviar mensagem"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

