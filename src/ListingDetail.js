import { useEffect, useState } from 'react';
import {Jumbotron, Badge} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import ShareBnBApi from './apiHelper';
import './ListingDetail.css'
import NewMessageModal from "./NewMessageModal";

/**  Listing Component
 * Props: name, description, price, zipcode, capacity, photoUrl
 * State:
 *
 * App -> Listing
 */
function ListingDetail(){
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

        <NewMessageModal listingName={listing.name} />

      </Jumbotron>
    );
}
export default ListingDetail;
