import {useState, useEffect} from 'react';
import {Tab, Row, Col, ListGroup} from 'react-bootstrap';
import ShareBnBApi from './apiHelper';
import MessageThread from './MessageThread';

/**  Messages Component
 * Props:
 * - isHost: Boolean; whether the current user is viewing
 *    the threads for which the user is a host.
 * - currentUser: object containing information about the logged
 *    in user. 
 * State:
 * - threads: array of thread objects
 *    [{id, listingId, hostId, guestId, startedAt, fromUsername}, ...]
 * App -> Routes -> Messages
 */
function Messages({currentUser, isHost}){
  const [threads, setThreads] = useState([]);

  useEffect(function getThreadsOnRender() {
    async function getThreads() {
      let newThreads;
      if(isHost) {
        newThreads = await ShareBnBApi.getThreadsForHost(currentUser.id);
      } else {
        newThreads = await ShareBnBApi.getThreadsForGuest(currentUser.id);
      }
      setThreads(newThreads);
    }
    getThreads();
  }, [isHost, currentUser.id]);

  return(
    <div className="text-white">
      <h1> Messages! </h1>
      <Tab.Container id="Messages-list-group-tabs" defaultActiveKey="#directions">
      <Row>
        <Col sm={3}>
          <ListGroup>
            {/* Map over all threads and display a link to the thread here  */}
            <ListGroup.Item action href="#directions">
              Directions
            </ListGroup.Item>
           {threads.map( thread => (
                  <ListGroup.Item
                    action
                    key={`listItem-${thread.id}`}
                    href={`#${thread.id}`}>
                    from: <b>{thread.fromUsername}</b> about listing: <i>{thread.listingId}</i>
                  </ListGroup.Item>))}

          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            {/* Map over all threads and display the thread here  */}
            <Tab.Pane eventKey="#directions">
              <h3>Use the navigation on the left to look at your messages</h3>
              { isHost
                ? <p>Viewing booking requests for your listing.</p>
                : <p>Viewing your booking requests to hosts.</p>}
            </Tab.Pane>
            {threads.map(thread => (
                    <Tab.Pane key={`tab.pane-${thread.id}`}
                              eventKey={`#${thread.id}`}>
                      <MessageThread
                        id={thread.id}
                        key={`thread-${thread.id}`}
                        currentUser={currentUser}
                        fromUsername={thread.fromUsername}
                        toId={(currentUser.id !== thread.guestId) 
                          ? thread.guestId 
                          : thread.hostId}
                        listingId={thread.listingId}
                        startedAt={thread.startedAt} />
                    </Tab.Pane>))}

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
}
export default Messages;
