
import { useEffect, useState } from 'react';
import {Jumbotron} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import ShareBnBApi from './apiHelper';

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
        <img href={listing.photoUrl} alt={listing.name} />
        <p>Capacity: {listing.capacity}</p>
        <p>Price: ${listing.price} per night</p>
        <p>Located in Zipcode: {listing.zipcode}</p>
        <p>
          Description: {listing.description}
        </p>
      </Jumbotron>
    );
}
export default ListingDetail;
