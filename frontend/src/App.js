// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';
import ChatContainer from './components/chatContainer.js';

const socket = io(process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000');

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 0 20px;
`;

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = (message) => {
    socket.emit('message', message);
  };

  return (
    <AppContainer>
      <ChatContainer messages={messages} sendMessage={sendMessage} />
    </AppContainer>
  );
}

export default App;
