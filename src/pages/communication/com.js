/*import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import axios from "axios";
import "./com.css";

const ChatApp = ({ commId, fromId, toId }) => {
  const [inputValue, setInputValue] = useState("");
  const [conversation, setConversation] = useState([]);

  const messageRef = useRef(null);

  useEffect(() => {
    fetchConversation();
  }, []);

  const fetchConversation = () => {
    axios
      .get("https://localhost:7047/api/conversation", {
        params: {
          commId,
          fromId,
          toId
        }
      })
      .then((response) => {
        setConversation(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch conversation:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newMessage = buildMessage(inputValue);
      setConversation([...conversation, newMessage]);
      animateMessage();
      setInputValue("");

      axios
        .post("https://localhost:7047/api/messages", {
          commId,
          fromId,
          toId,
          content: inputValue
        })
        .then(() => {
          setConversation([...conversation, newMessage]);
          animateMessage();
          setInputValue("");
        })
        .catch((error) => {
          console.error("Failed to send message:", error);
        });
    }
  };

  const buildMessage = (text) => {
    return (
      <li className="clearfix" key={Date.now()}>
        <div className="message-data text-right">
          <span className="message-data-time">{moment().format("h:mm A")}</span>
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            alt="avatar"
          />
        </div>
        <div className="message other-message float-right">{text}</div>
      </li>
    );
  };

  const animateMessage = () => {
    setTimeout(() => {
      const tick =
        messageRef.current &&
        messageRef.current.querySelector(".tick");
      if (tick) {
        tick.classList.remove("tick-animation");
      }
    }, 500);
  };

  return (
    <div className="container">
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card chat-app">
            <div className="chat">
              <div className="chat-header clearfix">
                <div className="row">
                  <div className="col-lg-6">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#view_info"
                    >
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="avatar"
                      />
                    </a>
                    <div className="chat-about">
                      <h6 className="m-b-0">Aiden Chavez</h6>
                      <small>Last seen: 2 hours ago</small>
                    </div>
                  </div>
                  <div className="col-lg-6 hidden-sm text-right">
                    <a href="javascript:void(0);" className="btn btn-outline-secondary">
                      <i className="fa fa-camera"></i>
                    </a>
                    <a href="javascript:void(0);" className="btn btn-outline-primary">
                      <i className="fa fa-image"></i>
                    </a>
                    <a href="javascript:void(0);" className="btn btn-outline-info">
                      <i className="fa fa-cogs"></i>
                    </a>
                    <a href="javascript:void(0);" className="btn btn-outline-warning">
                      <i className="fa fa-question"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="chat-history">
                <ul className="m-b-0">
                  {conversation.map((message, index) => (
                    <React.Fragment key={index}>{message}</React.Fragment>
                  ))}
                </ul>
              </div>
              <div className="chat-message clearfix">
                <form className="input-group mb-0" onSubmit={handleSubmit}>
                  <div className="input-group-prepend">
                    <button className="btn " type="submit">
                      Send
                    </button>
                  </div>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter text here..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;*/









// import React, { useState, useEffect, useRef } from "react";
// import moment from "moment";
// import "./com.css";

// const ChatApp = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [conversation, setConversation] = useState([]);

//   const messageRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim() !== "") {
//       const newMessage = buildMessage(inputValue);
//       setConversation([...conversation, newMessage]);
//       animateMessage();
//       setInputValue("");
//     }
//   };

//   const buildMessage = (text) => {
//     return (
//       <li className="clearfix" key={Date.now()}>
//         <div className="message-data text-right">
//           <span className="message-data-time">{moment().format('h:mm A')}</span>
//           <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
//         </div>
//         <div className="message other-message float-right">{text}</div>
//       </li>
//     );
//   };

//   const animateMessage = () => {
//     setTimeout(() => {
//       const tick = messageRef.current && messageRef.current.querySelector('.tick');
//       if (tick) {
//         tick.classList.remove('tick-animation');
//       }
//     }, 500);
//   };

//   return (
//     <div className="container">
//       <div className="row clearfix">
//         <div className="col-lg-12">
//           <div className="card chat-app">
//             <div className="chat">
//               <div className="chat-header clearfix">
//                 <div className="row">
//                   <div className="col-lg-6">
//                     <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
//                       <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
//                     </a>
//                     <div className="chat-about">
//                       <h6 className="m-b-0">Aiden Chavez</h6>
//                       <small>Last seen: 2 hours ago</small>
//                     </div>
//                   </div>
//                   <div className="col-lg-6 hidden-sm text-right">
//                     <a href="javascript:void(0);" className="btn btn-outline-secondary"><i className="fa fa-camera"></i></a>
//                     <a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-image"></i></a>
//                     <a href="javascript:void(0);" className="btn btn-outline-info"><i className="fa fa-cogs"></i></a>
//                     <a href="javascript:void(0);" className="btn btn-outline-warning"><i className="fa fa-question"></i></a>
//                   </div>
//                 </div>
//               </div>
//               <div className="chat-history">
//                 <ul className="m-b-0">
//                   {conversation.map((message, index) => (
//                     <React.Fragment key={index}>{message}</React.Fragment>
//                   ))}
//                 </ul>
//               </div>
//               <div className="chat-message clearfix">
//                 <form className="input-group mb-0" onSubmit={handleSubmit}>
//                   <div className="input-group-prepend">
//                     <button className="btn " type="submit">Send</button>
//                   </div>
//                   <textarea
//                     className="form-control"
//                     rows="3"
//                     placeholder="Enter text here..."
//                     value={inputValue}
//                     onChange={(e) => setInputValue(e.target.value)}
//                   />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;



// import React, { useState } from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";

// const MessageContainer = ({ messages }) => {
//   return (
//     <div>
//       {messages.map((msg, index) => (
//         <table striped bordered key={index}>
//           <tbody>
//             <tr>
//               <td>
//                 {msg.msg} - {msg.username}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       ))}
//     </div>
//   );
// };

// const ChatRoom = ({ messages }) => (
//   <div>
//     <Row className="px-5 py-5">
//       <Col sm={10}>
//         <h2>ChatRoom</h2>
//       </Col>
//     </Row>
//     <Row className="px-5 py-5">
//       <Col sm={12}>
//         <MessageContainer messages={messages} />
//       </Col>
//     </Row>
//   </div>
// );

// const WaitingRoom = ({ joinChatRoom }) => {
//   const [username, setUsername] = useState("");
//   const [chatroom, setChatroom] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     joinChatRoom(username, chatroom);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Row className="px-5 py-5">
//         <Col sm={12}>
//           <Form.Group>
//             <Form.Control
//               placeholder="Username"
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <Form.Control
//               placeholder="Chatroom"
//               onChange={(e) => setChatroom(e.target.value)}
//             />
//           </Form.Group>
//         </Col>
//         <Col sm={12}>
//           <hr />
//           <Button variant="success" type="submit">
//             Join
//           </Button>
//         </Col>
//       </Row>
//     </Form>
//   );
// };

// const Comm = () => {
//   const [messages, setMessages] = useState([]);

//   const joinChatRoom = (username, chatroom) => {
//     // Implement your logic to join the chatroom here
//     // You can update the state or perform any necessary actions
//     console.log("Joining chatroom:", username, chatroom);
//   };

//   return (
//     <div>
//       <WaitingRoom joinChatRoom={joinChatRoom} />
//       <ChatRoom messages={messages} />
//     </div>
//   );
// };

// export default Comm;






import React, { useState } from "react";
import { Form, InputGroup, Button, Row, Col } from "react-bootstrap";

const SendMessageForm = ({ sendMessage }) => {
  const [msg, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (msg.trim() !== '') {
      sendMessage(msg);
      setMessage('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text>Chat</InputGroup.Text>
        <Form.Control
          onChange={(e) => setMessage(e.target.value)}
          value={msg}
          placeholder="Type a message"
        />
        <Button variant="primary" type="submit" disabled={!msg}>
          Send
        </Button>
      </InputGroup>
    </Form>
  );
};

const MessageContainer = ({ messages }) => (
  <div>
    {messages.map((msg, index) => (
      <table key={index} striped bordered>
        <tbody>
          <tr>
            <td>
              {msg.msg} - {msg.username}
            </td>
          </tr>
        </tbody>
      </table>
    ))}
  </div>
);

const ChatRoom = ({ messages }) => (
  <div>
    <Row className="px-5 py-5">
      <Col sm={10}>
        <h2>ChatRoom</h2>
      </Col>
    </Row>
    <Row className="px-5 py-5">
      <Col sm={12}>
        <MessageContainer messages={messages} />
      </Col>
    </Row>
  </div>
);

const WaitingRoom = ({ joinChatRoom }) => {
  const [username, setUsername] = useState('');
  const [chatroom, setChatroom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '' && chatroom.trim() !== '') {
      joinChatRoom(username, chatroom);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="px-5 py-5">
        <Col sm={12}>
          <Form.Group>
            <Form.Control
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Control
              placeholder="Chatroom"
              onChange={(e) => setChatroom(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col sm={12}>
          <hr />
          <Button variant="success" type="submit">
            Join
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

const Comm = () => {
  const [messages, setMessages] = useState([]);

  const joinChatRoom = (username, chatroom) => {
    // Implement your logic to join the chatroom here
    // You can update the state or perform any necessary actions
    console.log("Joining chatroom:", username, chatroom);
  };

  return (
    <div>
      <WaitingRoom joinChatRoom={joinChatRoom} />
      <ChatRoom messages={messages} />
    </div>
  );
};

export default Comm;
