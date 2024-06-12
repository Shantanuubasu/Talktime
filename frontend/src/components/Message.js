// frontend/src/components/Message.js
import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #e1ffc7;
  border-radius: 8px;
  align-self: flex-start;
`;

const Message = ({ text }) => (
  <MessageContainer>
    {text}
  </MessageContainer>
);

export default Message;
