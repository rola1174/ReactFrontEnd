import React, { useState } from "react";
import "./CommunicateWithJobSeeker.css"; // Import the CSS file for styling

const CommunicateWithJobSeeker = ({ jobSeekerId }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() === "") return; // Don't submit empty messages

    // Add the new message to the messages array
    setMessages([...messages, { text: message, sender: "employer" }]);
    setMessage(""); // Clear the message input after sending
  };

  return (
    <div className="messenger-container">
      <div className="message-area">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "employer" ? "message sent" : "message received"}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="message-form">
        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message..."
          className="message-input"
          rows={3}
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

