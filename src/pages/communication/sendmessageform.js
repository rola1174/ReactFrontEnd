import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";


const SendMessageForm = ({ sendMessage }) => {
  const [msg, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(msg);
    setMessage('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text>Chat</InputGroup.Text>
        <Form.Control
          onChange={(e) => setMessage(e.target.value)}
          value={msg}
          placeholder="type a message"
        ></Form.Control>
        <Button variant="primary" type="submit" disabled={!msg}>
          Send
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SendMessageForm;