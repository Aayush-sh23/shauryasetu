import React, { useState } from 'react';
import './AIAssistant.css';

const AIAssistant = ({ user }) => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! I\'m your educational assistant for learning about the Indian Army. I can help you with questions about army structure, careers, training, awards, and history. What would you like to know?'
    }
  ]);
  const [input, setInput] = useState('');

  const restrictedTopics = [
    'weapons', 'tactics', 'strategy', 'operational', 'deployment', 'classified'
  ];

  const sampleQuestions = [
    'What are the ranks in the Indian Army?',
    'How can I join the Indian Army through NDA?',
    'What is the Param Vir Chakra?',
    'Tell me about the 1971 war',
    'What is life like at the border?'
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages([...messages, userMessage]);

    // Check for restricted topics
    const isRestricted = restrictedTopics.some(topic => 
      input.toLowerCase().includes(topic)
    );

    setTimeout(() => {
      let botResponse;
      
      if (isRestricted) {
        botResponse = {
          type: 'bot',
          text: 'I can only provide educational information about the Indian Army\'s history, structure, and career paths. For operational or tactical details, please refer to official sources.'
        };
      } else {
        // Simulated responses - in real app, this would call an AI API
        botResponse = {
          type: 'bot',
          text: 'This is a demo response. In the full version, I would provide detailed educational information about your question. The AI would be integrated with a knowledge base about Indian Army history, structure, careers, and publicly available information.'
        };
      }
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInput('');
  };

  const handleQuestionClick = (question) => {
    setInput(question);
  };

  return (
    <div className="ai-assistant-page">
      <div className="container">
        <div className="page-header">
          <h1>AI Educational Assistant</h1>
          <p>Ask questions about the Indian Army - structure, careers, history, and more</p>
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
            </div>

            <div className="input-area">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask your question..."
                className="chat-input"
              />
              <button onClick={handleSend} className="btn btn-primary send-btn">
                Send
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