import React, { useState } from 'react';
import './AIAssistant.css';

const AIAssistant = ({ user }) => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! I\'m SetuAI, your educational assistant for learning about the Indian Army. I can help you with questions about army structure, careers, training, awards, and history. What would you like to know?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiEnabled, setAiEnabled] = useState(false);

  // Check if API key is configured
  React.useEffect(() => {
    setAiEnabled(!!process.env.REACT_APP_OPENROUTER_API_KEY);
  }, []);

  // SetuAI System Prompt - Exact as specified
  const SYSTEM_PROMPT = `Identity:
You are SetuAI, the educational AI assistant of ShauryaSetu.

Platform Purpose:
ShauryaSetu is a free, civilian-focused educational platform explaining the history, structure, careers, and values of the Indian Army using public information.

Core Behavior Rules:
- You are NOT trained or fine-tuned
- You are a pre-trained AI model accessed via API
- You do NOT store memory
- Each response must be independent
- Maintain calm, respectful, neutral tone

You MAY Answer Questions About:
- Indian Army ranks and structure
- Career paths (NDA, CDS, Agniveer, etc.)
- Training academies (overview only)
- Wars after Indian independence (historical facts)
- Gallantry awards and recipients
- Soldier life (non-sensitive, high-level)
- Movies inspired by soldiers (contextual analysis)
- Myths vs reality

You MUST REFUSE Questions About:
- Weapons usage or handling
- Tactical or strategic details
- Current or future military operations
- Sensitive locations or deployments
- Combat training methods

Refusal Style (MANDATORY):
When refusing, be polite, do not mention "policy", and redirect to safe educational topics.
Example: "I can't help with that, but I can explain the historical or educational context if you'd like."

Answer Style Rules:
- Educational framing only
- No glorification of violence
- No political views
- No speculation
- Cite historical context where relevant
- Use simple language for students

Mandatory Closing Behavior:
If a topic involves war or sacrifice, emphasize historical learning, avoid emotional exaggeration, and maintain dignity and respect.`;

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    // If AI is not enabled, show demo response
    if (!aiEnabled) {
      setTimeout(() => {
        const demoResponse = {
          type: 'bot',
          text: `This is a demo response. To enable real AI responses, please add your OpenRouter API key to the .env file.

To set up:
1. Get free API key from https://openrouter.ai
2. Create .env file in root directory
3. Add: REACT_APP_OPENROUTER_API_KEY=your_key_here
4. Restart the app

For now, I can show you that I understand your question: "${currentInput}"

In production mode, I would provide detailed educational information about the Indian Army based on the SetuAI system prompt.`
        };
        setMessages(prev => [...prev, demoResponse]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      // Dynamic import of OpenAI to avoid errors if not installed
      const OpenAI = (await import('openai')).default;
      
      const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: process.env.REACT_APP_OPENROUTER_API_KEY,
        dangerouslyAllowBrowser: true // Note: Use backend proxy in production
      });

      const completion = await openai.chat.completions.create({
        model: "meta-llama/llama-3.1-8b-instruct:free", // Free model
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT
          },
          {
            role: "user",
            content: currentInput
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      });

      const botResponse = {
        type: 'bot',
        text: completion.choices[0].message.content
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('AI Error:', error);
      
      let errorMessage = 'I apologize, but I encountered an error. ';
      
      if (error.message?.includes('openai')) {
        errorMessage += 'Please install the OpenAI package: npm install openai';
      } else if (error.message?.includes('API key')) {
        errorMessage += 'Please check your OpenRouter API key in the .env file.';
      } else {
        errorMessage += 'Please try again or rephrase your question.';
      }
      
      const errorResponse = {
        type: 'bot',
        text: errorMessage
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const sampleQuestions = [
    'What are the ranks in the Indian Army?',
    'How can I join the Indian Army through NDA?',
    'What is the Param Vir Chakra?',
    'Tell me about the 1971 war',
    'What is life like at the border?',
    'Explain the Agniveer scheme',
    'What are the different regiments?',
    'How long is NDA training?'
  ];

  const handleQuestionClick = (question) => {
    setInput(question);
  };

  return (
    <div className="ai-assistant-page">
      <div className="container">
        <div className="page-header">
          <h1>SetuAI - Educational Assistant</h1>
          <p>Ask questions about the Indian Army - structure, careers, history, and more</p>
          {!aiEnabled && (
            <div className="ai-status-banner demo">
              <strong>⚠️ Demo Mode:</strong> Real AI not configured. Add OpenRouter API key to enable.
            </div>
          )}
          {aiEnabled && (
            <div className="ai-status-banner active">
              <strong>✓ AI Active:</strong> Real-time responses enabled
            </div>
          )}
        </div>

        <div className="assistant-container">
          <div className="chat-box">
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}`}>
                  <div className="message-content">
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="message bot">
                  <div className="message-content loading">
                    <span className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                    SetuAI is thinking...
                  </div>
                </div>
              )}
            </div>

            <div className="input-area">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                placeholder="Ask your question..."
                className="chat-input"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend} 
                className="btn btn-primary send-btn"
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>

          <div className="sidebar">
            <div className="info-card card">
              <h3>Allowed Topics</h3>
              <ul>
                <li>✓ Army ranks and structure</li>
                <li>✓ Career options and exams</li>
                <li>✓ Training pathways</li>
                <li>✓ Awards and honors</li>
                <li>✓ Historical wars and events</li>
                <li>✓ Myths vs reality</li>
              </ul>
            </div>

            <div className="info-card card restricted">
              <h3>Restricted Topics</h3>
              <ul>
                <li>✗ Weapons specifications</li>
                <li>✗ Tactical operations</li>
                <li>✗ Sensitive locations</li>
                <li>✗ Current deployments</li>
              </ul>
            </div>

            <div className="sample-questions">
              <h3>Sample Questions</h3>
              {sampleQuestions.map((q, index) => (
                <button
                  key={index}
                  className="sample-question-btn"
                  onClick={() => handleQuestionClick(q)}
                  disabled={isLoading}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;