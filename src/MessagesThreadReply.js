import {Form, Button, InputGroup} from 'react-bootstrap';
import {useState} from "react";

/**  MessagesThreadReply Component
 * Props: 
 *  - sendMessage: function brought from the parent to send a message
 * State:
 *  - replyContent: the content of the message to send
 *
 * App -> Route -> Messages -> MessageThread -> MessagesThreadReply
 */
function MessagesThreadReply({sendMessage}){
  const [replyContent, setReplyContent] = useState("");

  /** Tell parent to filter */
  function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    sendMessage(replyContent.trim());
    setReplyContent("");
  }

  /** Update form fields */
  function handleChange(evt) {
    setReplyContent(evt.target.value);
  }

  return(
    <Form onSubmit={handleSubmit} className="justify-content-center">
        <InputGroup size="lg" className="col-12 p-0 justify-content-center">
          <Form.Label htmlFor="MessagesThreadReply-searchInput" srOnly>
            Reply Content
          </Form.Label>
          <Form.Control
            className="rounded"
            id="MessagesThreadReply-searchInput"
            placeholder="Send a reply!"
            value={replyContent}
            onChange={handleChange}
            />
          <InputGroup.Append>
            <Button type="submit" className="">
              Send
            </Button>
          </InputGroup.Append>
        </InputGroup>
    </Form>
  );
}
export default MessagesThreadReply;
