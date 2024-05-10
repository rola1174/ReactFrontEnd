import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Col } from "react-bootstrap";
import WaitingRoom from './waitingroom';
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useState } from "react";
import ChatRoom from './chatroom';
import { sendMessage } from '@microsoft/signalr/dist/esm/Utils';

 export const ChatApp=()=> {

const[conn,setConnection] = useState();
const [messages,setMessages] =useState();
const joinChatRoom = async (username, chatroom,) => {
  try {
    const conn = new HubConnectionBuilder()
      .withUrl("http://localhost:5275/chat")
      .configureLogging(LogLevel.Information) // Remove the semicolon here
      .build();

    conn.on("JoinSpecificChatRoom", (username, msg) => {
      console.log("msg", msg);
    });
    conn.on("ReceiveSpecificChatRoom", (username, msg) => {
        console.log("msg" + msg + "username" +username)
      setMessages(messages=> [...messages , {username , msg}]);
    })


    await conn.start();
    await conn.invoke("JoinSpecificChatRoom", { username, chatroom });
    setConnection(conn);

  } catch (e) {
    console.log(e);
  }
const sendMessage =async(message)=>{
    try{
       await conn.invoke("SendMessage",message);
    }catch(e){
        console.log(e)
    }
}
  return (
    <>
      
      <main>
        <Container>
          <Row class='px-5 my-5'>
            <Col sm='12'>
              <h1 className=' font-weight-Light'>Welcome to the F1 ChatApp</h1>
            </Col>

          </Row>
          {!conn
             ?<WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
             :<ChatRoom messages={messages} SendMessage={sendMessage}></ChatRoom>

          }
        </Container>
        </main>
    </>
  );
}
 }
export default ChatApp;