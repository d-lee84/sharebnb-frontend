import {useState, useEffect} from "react";
import {ListGroup} from "react-bootstrap";
import ShareBnBApi from "./apiHelper";
import MessagesThreadReply from "./MessagesThreadReply";

/** MessageThread Component 
 * 
 *  Props:
 *  - id: id of the thread
 *  - fromUsername: username of the other user in this thread
 *  - listingId: id of listing
 *  - startedAt: when the conversation was started
 *  - toId: the id of the user sending the message to
 * 
 *  State:
 *  - messages: array of message objects 
 *    [{id, toId, fromId, content, sentAt}, ...]
 * 
 *  App -> Route -> Messages -> MessageThread
 */

function MessageThread({id, fromUsername, listingId, startedAt, currentUser, toId}){
  const [messages, setMessages] = useState([]);

  useEffect(function getMesssagesOnRender() {
    async function getMessagesByThread() {
      let newMessages = await ShareBnBApi.getMessagesByThread(id);
      setMessages(newMessages);
    }
    getMessagesByThread();
  }, [id]);

  async function sendMessage(content) {
    let newMessages = await ShareBnBApi.sendAMessage(
      { toId, fromId: currentUser.id, content, threadId: id }
    );
  }

  return (
    <>
      <div>Message Thread from: {fromUsername}</div>
      <ListGroup variant="flush" className="text-dark">
        {messages.map( m => (
          <ListGroup.Item key={`messages-${m.id}`}>
            <div>
              From: <b>{(currentUser.id === m.fromId) ? "YOU" : fromUsername}</b> 
            </div>
            <div>
              At: <i>{m.sentAt}</i>
            </div>
            <p>
              {m.content}
            </p>
          </ListGroup.Item>))}
        <MessagesThreadReply sendMessage={sendMessage} />
      </ListGroup>
    </> 
  )
}
export default MessageThread;
