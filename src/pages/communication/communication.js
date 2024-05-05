import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import "./com.css";
//import "./communication.css";

const ChatApp = () => {
  const [memes] = useState([
    'Dude, you smashed my turtle saying "I\'M MARIO BROS!"',
    'Dude, you grabbed seven oranges and yelled "I GOT THE DRAGON BALLS!"',
    'Dude, you threw my hamster across the room and said "PIKACHU I CHOOSE YOU!"',
    'Dude, you congratulated a potato for getting a part in Toy Story',
    'Dude, you were hugging an old man with a beard screaming "DUMBLEDORE YOU\'RE ALIVE!"',
    'Dude, you were cutting all my pineapples yelling "SPONGEBOB! I KNOW YOU\'RE THERE!"',
  ]);

  const [randomMeme, setRandomMeme] = useState("");

  useEffect(() => {
    setRandomMeme(memes[Math.floor(Math.random() * memes.length)]);
  }, []);

  const [deviceTime, setDeviceTime] = useState(moment().format('h:mm'));
  useEffect(() => {
    const interval = setInterval(() => {
      setDeviceTime(moment().format('h:mm'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [conversation, setConversation] = useState([]);
  const messageRef = useRef(null); // Move useRef here

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      const newMessage = buildMessage(inputValue);
      setConversation([...conversation, newMessage]);
      animateMessage(); // No need to pass messageRef here
      setInputValue("");
    }
  };

  const buildMessage = (text) => {
    return (
      <div className="message sent" ref={messageRef} key={Date.now()}>
        {text}
        <span className="metadata">
          <span className="time">{moment().format('h:mm A')}</span>
          <span className="tick tick-animation">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              {/* SVG paths */}
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              {/* SVG paths */}
            </svg>
          </span>
        </span>
      </div>
    );
  };

  const animateMessage = () => {
    setTimeout(() => {
      const tick = messageRef.current.querySelector('.tick');
      if (tick) {
        tick.classList.remove('tick-animation');
      }
    }, 500);
  };

  return (
    // <div>
    //   <div id="random">{randomMeme}</div>
    //   <div className="status-bar">
    //     <div className="time">{deviceTime}</div>
    //   </div>
    //   <div className="conversation-container">
    //     {conversation.map((message, index) => (
    //       <div key={index}>{message}</div>
    //     ))}
    //   </div>
    //   <form className="conversation-compose" onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       name="input"
    //       value={inputValue}
    //       onChange={(e) => setInputValue(e.target.value)}
    //     />
    //     <button type="submit">Send</button>
    //   </form>
    // </div>
    <>
    <div class="container">
<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card chat-app">
            {/* <div id="plist" class="people-list">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-search"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Search..."/>
                </div>
                <ul class="list-unstyled chat-list mt-2 mb-0">
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Vincent Porter</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>                                            
                        </div>
                    </li>
                    <li class="clearfix active">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Aiden Chavez</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Mike Thomas</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>                                    
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Christian Kelly</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> left 10 hours ago </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Monica Ward</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar"/>
                        <div class="about">
                            <div class="name">Dean Henry</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> offline since Oct 28 </div>
                        </div>
                    </li>
                </ul>
            </div> */}
            <div class="chat">
                <div class="chat-header clearfix">
                    <div class="row">
                        <div class="col-lg-6">
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
                            </a>
                            <div class="chat-about">
                                <h6 class="m-b-0">Aiden Chavez</h6>
                                <small>Last seen: 2 hours ago</small>
                            </div>
                        </div>
                        <div class="col-lg-6 hidden-sm text-right">
                            <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
                            <a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-image"></i></a>
                            <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-cogs"></i></a>
                            <a href="javascript:void(0);" class="btn btn-outline-warning"><i class="fa fa-question"></i></a>
                        </div>
                    </div>
                </div>
                <div class="chat-history">
                    <ul class="m-b-0">
                        <li class="clearfix">
                            <div class="message-data text-right">
                                <span class="message-data-time">10:10 AM, Today</span>
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"/>
                            </div>
                            <div class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                        </li>
                        <li class="clearfix">
                            <div class="message-data">
                                <span class="message-data-time">10:12 AM, Today</span>
                            </div>
                            <div class="message my-message">Are we meeting today?</div>                                    
                        </li>                               
                        <li class="clearfix">
                            <div class="message-data">
                                <span class="message-data-time">10:15 AM, Today</span>
                            </div>
                            <div class="message my-message">Project has been already finished and I have results to show you.</div>
                        </li>
                    </ul>
                </div>
                <div class="chat-message clearfix">
                    <div class="input-group mb-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-send"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Enter text here..."/>                                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</>
  );
};

export default ChatApp;


