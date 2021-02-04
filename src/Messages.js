import {Tab, Row, Col, ListGroup} from 'react-bootstrap';
import MessageThread from './MessageThread';

/**  Messages Component
 * Props:
 * State:
 *
 * App -> Messages
 */
function Messages({messages}){

  return(
    <div className="text-white">
      <h1> Messages! </h1>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={2}>
          <ListGroup>
            {/* Map over all threads and display a link to the thread here  */}
            <ListGroup.Item action href="#link1">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Link 2
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            {/* Map over all threads and display the thread here  */}
            <Tab.Pane eventKey="#link1">
              <MessageThread from_user="david"/>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <MessageThread from_user="sterling"/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
}
export default Messages;
