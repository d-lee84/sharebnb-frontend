import {ListGroup, ListGroupItem, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./Listing.css";

/**  Listing Component
 * Props: name, price, zipcode, capacity, photoUrl
 * State:
 *
 * App -> Listing
 */
function Listing({id, name, price, zipcode, capacity, photoUrl}){
return(
    <Card style={{ width: '18rem' }} as={Link} to={`/listings/${id}`} className="m-3 Listing">
      <div className="Listing-image-wrapper">
        <Card.Img variant="top" src={photoUrl || "/random.jpeg"} className="Listing-image" />
      </div>
      <Card.Body>
        <Card.Title> Name: {name} </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Price: $ {price}</ListGroupItem>
        <ListGroupItem>Zipcode: {zipcode}</ListGroupItem>
        <ListGroupItem>Capacity: {capacity}</ListGroupItem>
      </ListGroup>
    </Card>
  );
}
export default Listing;
