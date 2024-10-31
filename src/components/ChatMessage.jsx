import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

export default function ChatMessage({ message, query }) {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 10; // Kecepatan mengetik (ms per karakter)

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= message.length) { // Pastikan index tidak melebihi panjang message
        setDisplayedText(message.substring(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [message]);

  return (
    <div className="container chat-message-cstm">
      {/* user question */}
      <div className="d-flex justify-content-end mb-3">
        <div className="p-3 border shadow-sm rounded-user-cstm bg-primary-subtle">
          <i className="bi bi-person-circle me-2"></i>
          <strong>Question:</strong> {query}
        </div>
      </div>

      {/* ai response */}
      <div className="d-flex justify-content-start">
        <div className="p-3 border shadow-sm rounded-ai-cstm bg-primary-subtle">
          <i className="bi bi-robot me-2"></i> <strong>Answer:</strong>
          <div>
            <Markdown>{displayedText}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}
