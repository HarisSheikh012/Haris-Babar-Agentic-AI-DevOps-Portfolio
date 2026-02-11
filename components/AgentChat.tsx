
import React, { useState, useRef, useEffect } from 'react';
import { getAgentResponse } from '../services/agent';

interface Message {
  role: 'user' | 'agent';
  content: string;
}

const AgentChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'agent', content: "System initialized. I am Haris's Groq-powered digital agent. How can I assist you with his credentials or projects today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);

    const response = await getAgentResponse(userMsg);
    setMessages(prev => [...prev, { role: 'agent', content: response || "I'm having trouble connecting to my logic center." }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        id="chat-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-[#ff4d00] rounded-full flex items-center justify-center shadow-2xl shadow-[#ff4d00]/20 hover:scale-110 transition-transform active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-[60] w-[90vw] md:w-96 h-[600px] max-h-[70vh] bg-black border border-white/20 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="mono text-xs font-bold tracking-widest uppercase">Haris's Agent</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-sm text-sm leading-relaxed ${msg.role === 'user'
                  ? 'bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-white'
                  : 'bg-white/5 border border-white/10 text-white/80 mono'
                  }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 border border-white/10 rounded-sm text-xs mono animate-pulse">
                  Analyzing data points...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-white/[0.02]">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my stack, projects or contact info..."
                className="w-full bg-black border border-white/20 rounded-sm py-2 pl-3 pr-10 text-sm focus:outline-none focus:border-[#ff4d00] transition-all"
              />
              <button
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="absolute right-2 top-1.5 text-white/40 hover:text-[#ff4d00] disabled:opacity-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="mt-2 text-[10px] text-white/20 mono text-center uppercase">
              Secure Transmission Encrypted
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AgentChat;
