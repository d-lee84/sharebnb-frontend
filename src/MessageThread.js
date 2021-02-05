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

  useEffect(function getMessagesOnRender() {
    async function getMessagesByThread() {
      let newMessages = await ShareBnBApi.getMessagesByThread(id);
      setMessages(newMessages);
    }
    getMessagesByThread();
  }, [id]);

  async function sendMessage(content) {
    let newMessage = await ShareBnBApi.sendAMessage(
      { toId, fromId: currentUser.id, content, threadId: id }
    );
    setMessages( [...messages.map( message => ({...message})), newMessage]);
  }

  return (
    <>
      <h2 className="rounded">Message Thread with: {fromUsername}</h2>
      <ListGroup variant="flush" className="text-dark rounded">
        {messages.map( m => (
          <ListGroup.Item key={`messages-${m.id}`}>
            {(currentUser.id === m.fromId)
            ? <div className="text-right"> From: <b>You </b>
              At: <i>{m.sentAt}</i><p>{m.content}</p></div>
            : <div className="text-left"> From: <b>{fromUsername} </b>
              At: <i>{m.sentAt}</i><p>{m.content}</p></div>}


          </ListGroup.Item>))}
        <MessagesThreadReply sendMessage={sendMessage} />
      </ListGroup>
    </>
  )
}
export default MessageThread;
