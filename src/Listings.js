// import Search from './Search';
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
      <ul>
        <Listing/>
      </ul>
    </div>
  );
}
export default Listings;
