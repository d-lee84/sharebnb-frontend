import {Form, Button} from 'react-bootstrap';
import {useState} from "react";

/**  SearchForm Component
 * Props: name, price, zipcode, capacity, photoUrl
 * State:
 *
 * App -> Listings -> SearchForm
 */
function SearchForm({searchListings}){
  const [searchTerm, setSearchTerm] = useState("");

  /** Tell parent to filter */
  function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    searchListings(searchTerm.trim());
    setSearchTerm("");

  }

  /** Update form fields */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return(
    <Form inline onSubmit={handleSubmit}>
        <Form.Label htmlFor="SearchForm-searchInput" srOnly>
          Search Term
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="SearchForm-searchInput"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <Button type="submit" className="mb-2">
          Submit
        </Button>
    </Form>
  );
}
export default SearchForm;
