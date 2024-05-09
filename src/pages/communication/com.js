import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import "./com.css";

const ChatApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [conversation, setConversation] = useState([]);

  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newMessage = buildMessage(inputValue);
      setConversation([...conversation, newMessage]);
      animateMessage();
      setInputValue("");
    }
  };

  const buildMessage = (text) => {
    return (
      <li className="clearfix" key={Date.now()}>
        <div className="message-data text-right">
          <span className="message-data-time">{moment().format('h:mm A')}</span>
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
        </div>
        <div className="message other-message float-right">{text}</div>
      </li>
    );
  };

  const animateMessage = () => {
    setTimeout(() => {
      const tick = messageRef.current && messageRef.current.querySelector('.tick');
      if (tick) {
        tick.classList.remove('tick-animation');
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
                    <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                      <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                    </a>
                    <div className="chat-about">
                      <h6 className="m-b-0">Aiden Chavez</h6>
                      <small>Last seen: 2 hours ago</small>
                    </div>
                  </div>
                  <div className="col-lg-6 hidden-sm text-right">
                    <a href="javascript:void(0);" className="btn btn-outline-secondary"><i className="fa fa-camera"></i></a>
                    <a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-image"></i></a>
                    <a href="javascript:void(0);" className="btn btn-outline-info"><i className="fa fa-cogs"></i></a>
                    <a href="javascript:void(0);" className="btn btn-outline-warning"><i className="fa fa-question"></i></a>
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
                    <button className="btn " type="submit">Send</button>
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

export default ChatApp;
