import {useState} from "react";
import {Button, Modal, Form,InputGroup, FormControl} from "react-bootstrap";
import {useHistory} from "react-router-dom";

/** NewMessageModal
 * Props:
 * listingName: name of the listing this modal was called from
 * sendMessage: function - sends a message
 * App -> Listings -> ListingDetail -> NewMessageModal
 */
function NewMessageModal({listingName, sendMessage}) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    content: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  async function handleSubmit(evt) {
    evt.preventDefault();
    // let result = await loginUser(formData);
    await sendMessage(formData.content);
    handleClose();
    history.push("/listings");
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(l => ({ ...l, [name]: value }));
  }

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Message the host!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message the host of <i>{listingName}</i></Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Message Content</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                aria-label="message textarea"
                name="content"
                rows={7}
                value={formData.content}
                onChange={handleChange} />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="lg" onClick={handleClose}>
              Close
            </Button>
            <Button variant="info" size="lg" type="submit">Send!</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default NewMessageModal;
