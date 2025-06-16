import React, { useState } from 'react';

const Chatbot = () => {
  const [chat, setChat] = useState(["Hi! How can I help you?"]);

  const sendMessage = () => {
    setChat([...chat, "Thanks for your message! We'll get back to you."]);
  };

  return (
    <div>
      <h2>Chatbot</h2>
      {chat.map((msg, i) => <p key={i}>{msg}</p>)}
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default Chatbot;
