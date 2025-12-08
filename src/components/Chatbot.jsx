/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const Chatbot = ({ onChatbotToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm MTech - Miracle's AI Assistant. Ask me anything about my projects, skills, or experience!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Notify parent when chatbot opens/closes
  useEffect(() => {
    if (onChatbotToggle) {
      onChatbotToggle(isOpen);
    }
  }, [isOpen, onChatbotToggle]);

  // Portfolio knowledge base
  const portfolioKnowledge = {
    projects: {
      description:
        "I have completed over 10 projects including front-end applications using React, JavaScript, CSS, and HTML5.",
      technologies: "React JS, JavaScript, CSS, HTML5, Vite, Bootstrap",
      examples:
        "My projects range from responsive web applications to interactive user interfaces.",
      completed:
        "You can view my projects on my GitHub profile (MiracleChibuike) - https://github.com/MiracleChibuike.",
    },
    experience: {
      years: "2+ years of industry experience",
      clients: "10+ verified clients worldwide",
      specialization: "Front-End Web Development",
      role: "Certified Front-End Engineer",
    },
    trust: {
      reliability: "Reliable and timely delivery of projects",
      quality: "High-quality code and best practices",
      communication:
        "Clear and consistent communication throughout the project",
      testimonials:
        "Positive feedback from previous clients (real clients only) - look on my LinkedIn and GitHub profiles",
    },
    skills: {
      technical:
        "React JS, JavaScript, CSS, HTML5, Git, GitHub, VS Code, NPM, Vite, Bootstrap",
      learning: "Node JS, Figma",
      soft: "Teamwork, Communication, Teaching, Mentoring",
    },
    education: {
      diploma:
        "Yes I am a Certified Front-End Engineer -Diploma in Software Development from Oluaka Institute of Technology (2023)",
      certification:
        "Certified Web Developer Internship from Zidio Development (2024)",
    },
    interests:
      "Coding, Teaching, Reading, Contributing to open-source projects",
    location: "Owerri, Nigeria",
    contact:
      "You can connect with me on LinkedIn (onyia-miracle) or GitHub (MiracleChibuike)",
    about:
      "I'm a Front-End Web Developer who enjoys turning ideas into clean, responsive, and user-friendly websites. I have experience teaching and coaching 50+ students both in-person and online.",
  };

  // Function to check if input is meaningful (not just gibberish)
  const isMeaningfulInput = (message) => {
    const trimmed = message.trim().toLowerCase();

    // Check minimum length
    if (trimmed.length < 2) return false;

    // Check if it contains at least some vowels (basic validity check)
    const hasVowels = /[aeiou]/.test(trimmed);

    // Check if it contains at least some real words (not just repeated characters)
    const hasRepeatingChars = /(.)\1{2,}/.test(trimmed);

    // List of common stop words and gibberish patterns
    const gibberishPatterns = [
      /^[a-z]{1,3}$/, // Single or 2-3 letter random strings
      /^[^a-z0-9\s?!.,'"-]{2,}$/, // Just symbols
      /^[\d\s]{2,}$/, // Just numbers and spaces
    ];

    // Check against gibberish patterns
    const isGibberish = gibberishPatterns.some((pattern) =>
      pattern.test(trimmed)
    );

    // Must have vowels and not be gibberish
    return hasVowels && !isGibberish && trimmed.length >= 3;
  };

  const generateBotResponse = (userMessage) => {
    // Check if input is meaningful
    if (!isMeaningfulInput(userMessage)) {
      const notMeaningfulResponses = [
        "I didn't quite understand that. Could you ask a proper question? 😊",
        "That doesn't seem like a meaningful question. Please try asking about my projects, skills, or experience!",
        "I need a clearer question to help you. What would you like to know about me?",
        "Please enter a valid question or statement. I'm here to help with information about my portfolio! 💡",
      ];
      return notMeaningfulResponses[
        Math.floor(Math.random() * notMeaningfulResponses.length)
      ];
    }

    const lowerMessage = userMessage.toLowerCase();

    // What can I do / What do you do / What are your abilities
    if (
      lowerMessage.includes("what can you") ||
      lowerMessage.includes("what do you") ||
      lowerMessage.includes("what are you") ||
      lowerMessage.includes("abilities") ||
      lowerMessage.includes("who is onyia miracle") ||
      lowerMessage.includes("services")
    ) {
      return "I'm a Front-End Web Developer specializing in:\n• React JS & JavaScript applications\n• Responsive & interactive websites\n• UI/UX development\n• Teaching & mentoring\n\nI can also discuss my portfolio, experience, or discuss potential collaborations!";
    }

    // Website development / Can you build / Website creation
    if (
      lowerMessage.includes("develop") ||
      lowerMessage.includes("build") ||
      lowerMessage.includes("create") ||
      lowerMessage.includes("website") ||
      lowerMessage.includes("application") ||
      lowerMessage.includes("app ")
    ) {
      return "Yes! I specialize in developing front-end websites and applications using React, JavaScript, CSS, and HTML5. I've completed 10+ projects with responsive designs and interactive features. Feel free to reach out to discuss your project requirements! 🚀";
    }

    // Pricing / Cost / Charge / Rate
    if (
      lowerMessage.includes("price") ||
      lowerMessage.includes("cost") ||
      lowerMessage.includes("charge") ||
      lowerMessage.includes("rate") ||
      lowerMessage.includes("fee") ||
      lowerMessage.includes("how much") ||
      lowerMessage.includes("pay") ||
      lowerMessage.includes("afford")
    ) {
      return "Great question! My rates depend on the project scope, complexity, and timeline. I work with different budget ranges and prefer to discuss specifics directly. Please reach out on LinkedIn (onyia-miracle), GitHub (MiracleChibuike) or a WhatsApp message to +2349056255572 to discuss your project and I'll provide a custom quote! 💼";
    }

    // Project types / Examples
    if (
      lowerMessage.includes("example") ||
      lowerMessage.includes("sample") ||
      lowerMessage.includes("portfolio") ||
      lowerMessage.includes("project") ||
      lowerMessage.includes("work")
    ) {
      return `${portfolioKnowledge.projects.description} I've worked with ${portfolioKnowledge.projects.technologies}. ${portfolioKnowledge.projects.examples}. See my GitHub for the projects I have/currently building: ${portfolioKnowledge.projects.completed} or check my Projects section on this portfolio website.`;
    }

    if (
      lowerMessage.includes("experience") ||
      lowerMessage.includes("background") ||
      lowerMessage.includes("history")
    ) {
      return `I have ${portfolioKnowledge.experience.years} and have worked with ${portfolioKnowledge.experience.clients}. I specialize in ${portfolioKnowledge.experience.specialization}.`;
    }

    if (
      lowerMessage.includes("skill") ||
      lowerMessage.includes("technology") ||
      lowerMessage.includes("tech stack") ||
      lowerMessage.includes("stack")
    ) {
      return `My technical skills include: ${portfolioKnowledge.skills.technical}. I'm currently learning: ${portfolioKnowledge.skills.learning}. I also have strong ${portfolioKnowledge.skills.soft} skills.`;
    }

    if (
      lowerMessage.includes("education") ||
      lowerMessage.includes("degree") ||
      lowerMessage.includes("certification") ||
      lowerMessage.includes("qualified") ||
      lowerMessage.includes("qualifications") ||
      lowerMessage.includes("certified")
    ) {
      return `${portfolioKnowledge.education.diploma}. ${portfolioKnowledge.education.certification}`;
    }

    if (
      lowerMessage.includes("interest") ||
      lowerMessage.includes("hobby") ||
      lowerMessage.includes("passion") ||
      lowerMessage.includes("like")
    ) {
      return `My interests include: ${portfolioKnowledge.interests}. I'm passionate about continuous learning and giving back to the tech community!`;
    }

    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("connect") ||
      lowerMessage.includes("reach")
    ) {
      return `${portfolioKnowledge.contact}. Feel free to reach out! 🤝`;
    }

    if (
      lowerMessage.includes("location") ||
      lowerMessage.includes("where") ||
      lowerMessage.includes("based")
    ) {
      return `I'm based in ${portfolioKnowledge.location}. Open to remote opportunities and collaborations! 🌍`;
    }

    if (
      lowerMessage.includes("about") ||
      lowerMessage.includes("who are you") ||
      lowerMessage.includes("introduce") ||
      lowerMessage.includes("tell me")
    ) {
      return `${portfolioKnowledge.about}`;
    }

    if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hey") ||
      lowerMessage.includes("greet")
    ) {
      return "Hello! Welcome to Miracle's portfolio. Feel free to ask me about projects, skills, experience, or anything else you'd like to know! 😊";
    }

    // Result for trust-related questions
    if (
      lowerMessage.includes("trust") ||
      lowerMessage.includes("why work with you") ||
      lowerMessage.includes("legit")
    ) {
      return `You can trust me because of my:\n• ${portfolioKnowledge.trust.reliability}\n• ${portfolioKnowledge.trust.quality}\n• ${portfolioKnowledge.trust.communication}\n• ${portfolioKnowledge.trust.testimonials}\n\nI prioritize client satisfaction and deliver high-quality work on time! 🤝`;
    }

    if (lowerMessage.includes("help") || lowerMessage.includes("assist")) {
      return "I can help you learn about:\n• My projects and completed work\n• Technical skills and expertise\n• Professional experience\n• Education and certifications\n• Interests and passions\n• How to get in touch\n• Website & app development services\n• Pricing & project inquiries\n\nJust ask me anything! 💡";
    }

    // Default response for valid but unmatched questions
    return "That's a great question! While I may not have a specific answer for that, feel free to ask me about my projects, skills, experience, services, or how to contact me. If you have other questions, you can reach out directly! 😊";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 800);
  };

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chatbot Widget Button */}
      <div
        className="chatbot-widget-btn"
        onClick={handleToggleChat}
        title="Chat with Miracle's AI Assistant"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === "Enter" && handleToggleChat()}>
        {isOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-robot"></i>
        )}
      </div>

      {/* Chatbot Container */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Miracle's AI Assistant</h3>
            <p className="chatbot-subtitle">
              Ask me anything about my portfolio
            </p>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${
                  message.sender === "user" ? "user-message" : "bot-message"
                }`}>
                <div className="message-content">{message.text}</div>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="chat-message bot-message">
                <div className="message-content">
                  <span className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chatbot-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your question..."
              className="chatbot-input"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="chatbot-send-btn"
              disabled={isLoading || !inputValue.trim()}>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
