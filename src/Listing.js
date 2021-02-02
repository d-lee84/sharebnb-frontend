import {ListGroup, ListGroupItem, Card} from 'react-bootstrap';

/**  Listing Component
 * Props: name, price, zipcode, capacity, photoUrl
 * State:
 *
 * App -> Listing
 */
function Listing({id, name, price, zipcode, capacity, photoUrl}){
return(
    <ListGroup.Item action href={`/listings/${id}`}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={photoUrl} />
        <Card.Body>
          <Card.Title> Name: {name} </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: $ {price}</ListGroupItem>
          <ListGroupItem>Zipcode: {zipcode}</ListGroupItem>
          <ListGroupItem>Capacity: {capacity}</ListGroupItem>
        </ListGroup>
      </Card>
    </ListGroup.Item>
  );
}
export default Listing;
