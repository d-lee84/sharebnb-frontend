// import Search from './Search';
import { ListGroup } from 'react-bootstrap';
import Listing from './Listing';

// import Messages from './Messages';


/**  Listings Component
 * Props:
 * State:
 *
 * App -> Listings
 */
function Listings(){
  return(
    <div>
      <h2>Book a covid-safe outdoor location!</h2>
      <ListGroup>
        <Listing/>
      </ListGroup>
    </div>
  );
}
export default Listings;
