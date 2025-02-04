import { useState } from "react";
import { Form } from "react-bootstrap";
import { InputGroup } from 'react-bootstrap';

export const SendMessageForm = ({ sendMessage }) => {
  const [msg, setMessage] = useState('');

  return (
    <Form onSubmit={e => {
      e.preventDefault();
      sendMessage(msg);
      setMessage('');
    }}>
      <InputGroup className="mb-3">
        <InputGroup.Text>Chat</InputGroup.Text>
        <Form.Control onChange={e => setMessage(e.target.value)} value={msg} placeholder="type a message" />
        <button variant="primary" type="submit" >Send</button>
      </InputGroup>
    </Form>
  );
};

export default SendMessageForm;