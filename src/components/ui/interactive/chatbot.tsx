"use client";

import { useState } from "react"

interface Message {
  id: number
  text: string
  isUser: boolean
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! What would you like to know?",
      isUser: false
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const suggestedQuestions = [
    "What industries do you specialize in?"
  ]

  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || inputValue
    if (!textToSend.trim()) return

    const userMessage = {
      id: Date.now(),
      text: textToSend,
      isUser: true
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "AI deployment involves several key phases: data preparation, model training, testing, and production deployment.",
        "Our team specializes in enterprise-scale AI solutions that deliver measurable ROI within 90 days.",
        "We help companies integrate AI into their existing workflows with minimal disruption and maximum impact.",
        "From proof-of-concept to full production, we ensure your AI solutions are scalable and reliable.",
        "Our approach focuses on practical AI applications that solve real business problems in your industry."
      ]
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
      
      const aiMessage = {
        id: Date.now() + 1,
        text: randomResponse,
        isUser: false
      }

      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question)
  }

  const handleClearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hi! I can help you learn about AI deployment. What would you like to know?",
        isUser: false
      }
    ])
    setInputValue("")
    setIsTyping(false)
  }

  return (
    <div className="relative -ml-[10vw]">
      <div className="bg-gray-900 rounded-2xl shadow-2xl w-[450px] h-[500px] overflow-hidden border border-gray-700 flex flex-col">
        <div className="bg-gray-800 text-white p-4 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">AI Agent</h3>
              <p className="text-xs text-gray-400">Online</p>
            </div>
          </div>
          
          <button
            onClick={handleClearChat}
            className="w-8 h-8 rounded-full hover:bg-gray-700 flex items-center justify-center transition-colors duration-200 group"
            title="Clear conversation"
          >
            <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 space-y-4 flex-1 overflow-y-auto bg-gray-900 relative">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg px-4 py-3 max-w-xs ${
                message.isUser 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-700 text-gray-200'
              }`}>
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-gray-200 rounded-lg px-4 py-3 max-w-xs">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}

          {/* Suggested Questions Overlay */}
          {messages.length <= 1 && !isTyping && (
            <div className="absolute bottom-4 left-4 right-4 flex flex-col items-center space-y-3">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="bg-gray-800 bg-opacity-80 hover:bg-opacity-100 border border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-white transition-all duration-200 w-full max-w-xs text-left backdrop-blur-sm"
                >
                  {question}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="px-4 py-4 border-t border-gray-700 bg-gray-800">
          <div className="flex items-center space-x-2">
            <input 
              type="text" 
              placeholder="Ask about AI deployment..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isTyping}
              className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl -z-10"></div>
    </div>
  )
}

export default ChatBot