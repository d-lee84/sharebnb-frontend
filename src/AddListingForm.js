import React, { useState } from "react";
import { Form,Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

/** Add Listing form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls Add Listing function prop
 * - redirects to /listing route
 *
 * Routes -> AddListingForm -> Alert
 * Routed as /Register
 */

function AddListingForm({ addListing }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    zipcode: "",
    capacity: "",
    description: "",
    amenities:"",
    photo:""
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "AddListingForm",
      "Register=", typeof addListing,
      "formData=", formData,
      "formErrors", formErrors,
  );

  /** Handle form submit:
   *
   * Calls addListing func prop and, if successful, redirect to /listings.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await addListing(formData);
    history.push("/listings");
    // new FormData object
    // content-type: multipart/formdata
    //

  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("name", name);
    console.log("value", value);
    setFormData(l => ({ ...l, [name]: value }));
  }



  return (
    <div className="w-50 mx-auto p-3">
      <h2>Add a Listing:</h2>
      {/* name: "",
          price: "",
          zipcode: "",
          capacity: "",
          description: "",
          amenities:"",
          photoUrl:"" */}
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="AddListingForm-name">
          Name:
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="AddListingForm-name"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          />

        <Form.Label htmlFor="AddListingForm-price">
          Price: $
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="AddListingForm-price"
          placeholder="200"
          name="price"
          value={formData.price}
          onChange={handleChange}
          />

        <Form.Label htmlFor="AddListingForm-zipcode">
          Zipcode:
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="AddListingForm-zipcode"
          name="zipcode"
          placeholder="00000"
          value={formData.zipcode}
          onChange={handleChange}
          />
        <Form.Label htmlFor="AddListingForm-capacity">
          Capacity:
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="AddListingForm-capacity"
          name="capacity"
          placeholder="4"
          value={formData.capacity}
          onChange={handleChange}
          />

        <Form.Label htmlFor="AddListingForm-amenities">
          Amenities:
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="AddListingForm-amenities"
          name="amenities"
          placeholder="amenities"
          value={formData.amenities}
          onChange={handleChange}
          />
        <Form.Label htmlFor="AddListingForm-photo">
          photo:
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="AddListingForm-photo"
          name="photo"
          type="file"
          accept="image/*"
          placeholder="photo"
          value={formData.photo}
          onChange={handleChange}
          />
        <Button type="submit" className="mb-2">
          Submit
        </Button>
      </Form>
    </div>


  );
}
export default AddListingForm;
