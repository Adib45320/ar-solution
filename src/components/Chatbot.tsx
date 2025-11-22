import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m Jasmine, your AR Solution assistant. I\'m here to help you learn about our services, pricing, and how we can help your business!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const companyContext = `
You are Jasmine, a helpful and friendly assistant for AR Solution, a digital services company. Here's what you need to know:

COMPANY OVERVIEW:
AR Solution empowers businesses and startups with cutting-edge website services, AI automation, and comprehensive digital marketing solutions.

SERVICES:

1. WEB DEVELOPMENT:
- Landing Pages: $50
- Business Websites (5-8 pages): $200
- E-commerce Websites: $500
- Custom Web Applications: Starting at $1000
- Blog/Portfolio Sites: $150

Add-ons:
- SSL Certificate & Security Setup: $30
- Advanced SEO Package: $100
- Payment Gateway Integration: $50
- Custom Contact Forms: $25
- Google Analytics Setup: $20

2. AI AUTOMATION:
Bundle Packs:
- Premium AI Automation Bundle: $500/month (5 workflows + API integration)
- Starter AI Automation Bundle: $300/month (3 workflows + API integration)

Individual Workflows: $50 each (add $10 for API integration)
Categories include:
- Content Creation & Marketing
- Data Processing & Analysis
- Customer Service & Support
- Business Operations
- Social Media Management
- Sales & Lead Generation
- Human Resources
- E-commerce & Retail
- Financial Management
- And many more specialized workflows

3. DIGITAL MARKETING:
- 1 Platform Management: $50/month
- 2 Platform Management: $100/month
- 3 Platform Management: $200/month

Includes: Content creation, posting, analytics, engagement, and performance reporting.

CONTACT:
- Email: arsolution45320@gmail.com
- WhatsApp: +8801763636997
- LinkedIn: linkedin.com/company/ar-solution
- Facebook: Available

Always be helpful, professional, and encourage users to contact via WhatsApp or email for custom quotes and detailed consultations.
`;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192',
          messages: [
            {
              role: 'system',
              content: companyContext
            },
            ...messages.map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            {
              role: 'user',
              content: input
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again or contact us directly via WhatsApp at +8801763636997.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        className={`chatbot-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <h3>Jasmine - AR Solution Assistant</h3>
              <p>Ask me anything!</p>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${message.role}`}
              >
                <div className="message-content">
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message assistant">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="chatbot-input"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              className="chatbot-send-button"
              disabled={isLoading || !input.trim()}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
