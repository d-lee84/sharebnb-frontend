import {useState} from "react";
import {Button, Modal, Form,InputGroup, FormControl} from "react-bootstrap";

function NewMessageModal({listingName}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    content: "",
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    // let result = await loginUser(formData);
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
        <Form>
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