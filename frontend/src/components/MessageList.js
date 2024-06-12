// frontend/src/components/MessageList.js
import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const List = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: scroll;
`;

const MessageList = ({ messages }) => (
  <List>
    {messages.map((msg, index) => (
      <Message key={index} text={msg} />
    ))}
  </List>
);

export default MessageList;
