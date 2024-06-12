// frontend/src/components/ChatContainer.js
import React from 'react';
import styled from 'styled-components';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: 100vh;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ChatContainer = ({ messages, sendMessage }) => (
  <Container>
    <MessageList messages={messages} />
    <MessageInput sendMessage={sendMessage} />
  </Container>
);

export default ChatContainer;
