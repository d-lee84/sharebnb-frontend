import {Form, Button, InputGroup} from 'react-bootstrap';
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
    <Form inline onSubmit={handleSubmit} className="justify-content-center">
        <InputGroup className="col-9 justify-content-center">
          <Form.Label htmlFor="SearchForm-searchInput" srOnly>
            Search Term
          </Form.Label>
          <Form.Control
            className="col-8"
            id="SearchForm-searchInput"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            />
          <InputGroup.Append>
            <Button type="submit" className="">
              Submit
            </Button>
          </InputGroup.Append>
        </InputGroup>
    </Form>
  );
}
export default SearchForm;
