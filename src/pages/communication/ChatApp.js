import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import WaitingRoom from './waitingroom';
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useState } from "react";
import ChatRoom from './chatroom';
<<<<<<< Updated upstream
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
=======
export const ChatApp = () => {

  const [conn, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const joinChatRoom = async (username, chatroom) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("http://localhost:5275/chat")
        .configureLogging(LogLevel.Information) // Remove the semicolon here
        .build();

      conn.on("JoinSpecificChatRoom", (username, msg) => {
        console.log("msg: ", msg);
      });
>>>>>>> Stashed changes

      conn.on("RecieveSpecificMessage", (username, msg) => {
        setMessages(messages => [...messages, { username, msg }]);
        console.log("From app.js" + messages);
      });

<<<<<<< Updated upstream
    await conn.start();
    await conn.invoke("JoinSpecificChatRoom", { username, chatroom });
    setConnection(conn);
=======
      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", { username, chatroom });
>>>>>>> Stashed changes

      setConnection(conn);
    } catch (e) {
      console.log(e);
    }
  }
<<<<<<< Updated upstream
const sendMessage =async(message)=>{
    try{
       await conn.invoke("SendMessage",message);
    }catch(e){
        console.log(e)
    }
}
=======

  const sendMessage = async (message) => {
    try {
      await conn.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  }

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
             ?<WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
             :<ChatRoom messages={messages} SendMessage={sendMessage}></ChatRoom>

=======
            ? <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
            : <ChatRoom messages={messages} sendMessage={sendMessage}></ChatRoom>
>>>>>>> Stashed changes
          }
        </Container>
      </main>
    </>
  );
}
<<<<<<< Updated upstream
 }
export default ChatApp;
=======
export default ChatApp;

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from "react-bootstrap";
// import WaitingRoom from './waitingroom';
// import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
// import { useState } from "react";
// import ChatRoom from './chatroom';
// import { sendMessage } from '@microsoft/signalr/dist/esm/Utils';

// export const ChatApp = () => {

//   const [conn, setConnection] = useState();
//   const [messages, setMessages] = useState();
//   const joinChatRoom = async (username, chatroom,) => {
//     try {
//       const conn = new HubConnectionBuilder()
//         .withUrl("http://localhost:5275/chat")
//         .configureLogging(LogLevel.Information) // Remove the semicolon here
//         .build();

//       conn.on("JoinSpecificChatRoom", (username, msg) => {
//         console.log("msg", msg);
//       });
//       conn.on("ReceiveSpecificChatRoom", (username, msg) => {
//         console.log("msg" + msg + "username" + username)
//         setMessages(messages => [...messages, { username, msg }]);
//       })


//       await conn.start();
//       await conn.invoke("JoinSpecificChatRoom", { username, chatroom });
//       setConnection(conn);

//     } catch (e) {
//       console.log(e);
//     }
//     const sendMessage = async (message) => {
//       try {
//         await conn.invoke("SendMessage", message);
//       } catch (e) {
//         console.log(e)
//       }
//     }
//     return (
//       <>

//         <main>
//           <Container>
//             <Row class='px-5 my-5'>
//               <Col sm='12'>
//                 <h1 className=' font-weight-Light'>Welcome to the F1 ChatApp</h1>
//               </Col>

//             </Row>
//             {!conn
//               ? <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
//               : <ChatRoom messages={messages} SendMessage={sendMessage}></ChatRoom>

//             }
//           </Container>
//         </main>
//       </>
//     );
//   }
// }
// export default ChatApp;
>>>>>>> Stashed changes
