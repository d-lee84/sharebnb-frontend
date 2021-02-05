import { useEffect, useState } from 'react';
import {Jumbotron, Badge, Button} from 'react-bootstrap';
import {useParams, Link} from 'react-router-dom';
import ShareBnBApi from './apiHelper';
import './ListingDetail.css'
import NewMessageModal from "./NewMessageModal";

/**  Listing Component
 * Props: name, description, price, zipcode, capacity, photoUrl
 * State:
 *
 * App -> Listing
 */
function ListingDetail({currentUser}){
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [listing, setListing] = useState(null);

  useEffect(function getListingOnMount (){
    async function getListing(id){
      let list = await ShareBnBApi.getListingById(id);
      setListing(list);
      setIsLoading(false);
    }
    if (isLoading) getListing(id);
  });

  async function sendAMessageToNewThread(content) {
    const newThread = await ShareBnBApi.createAThread(
      {
        hostId: listing.host.id,
        guestId: currentUser.id,
        listingId: listing.id
      }
    );

    await ShareBnBApi.sendAMessage(
      { toId:listing.host.id,
        fromId:currentUser.id,
        threadId:newThread.id,
        content });

  }

  if (isLoading) return(<Jumbotron>
                          <h1>Loading Listing Details...</h1>
                        </Jumbotron>);
  return(
      <Jumbotron>
        <h1>{listing.name}</h1>
        <img className="ListingDetail-image rounded" src={listing.photoUrl || "/random.jpeg"} alt={listing.name} />
        <p>Capacity: {listing.capacity}</p>
        <p>Price: ${listing.price} per night</p>
        <p>Located in Zipcode: {listing.zipcode}</p>
        <p>
          Amenities:
          <Badge variant="info">{listing.amenities}</Badge>
        </p>
        <p>
          Description: {listing.description}
        </p>

        {currentUser
          ? <NewMessageModal sendMessage={sendAMessageToNewThread} listingName={listing.name} />
          : <Button variant="warning" as={Link} to="/login">
              Sign in to message host
            </Button>}

      </Jumbotron>
    );
}
export default ListingDetail;
