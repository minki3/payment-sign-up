import React, { useState, useEffect } from "react";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const client = new WebSocket("ws://localhost:3000/community");

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
      setIsConnected(true);
    };

    client.onmessage = (message) => {
      setMessages([...messages, message.data]);
    };

    return () => {
      client.close();
    };
  }, [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isConnected && client.readyState === WebSocket.OPEN) {
      client.send(message);
      setMessage("");
    }
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
