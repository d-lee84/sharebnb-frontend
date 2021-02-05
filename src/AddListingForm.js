import React, { useState } from "react";
import { Form,Button,InputGroup } from 'react-bootstrap';
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
    photo:"",
    photoFile:null,
    description: ""
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
    if (name === "photo") {
      setFormData(fd => ({
        ...fd,
        photoFile: evt.target.files[0],
        photo: value
      }));
    } else {
      setFormData(fd => ({ ...fd, [name]: value }));
    }
  }



  return (
    <div className="w-50 mx-auto p-3 text-white">
      <h2>Add a Listing:</h2>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
      <InputGroup size="lg" className="m-3">
        <InputGroup.Prepend>
          <InputGroup.Text className="vw-50">
            Name:
          </InputGroup.Text>
        </InputGroup.Prepend>
          <Form.Control
                id="AddListingForm-name"
                name="name"
                placeholder="name"
                value={formData.name}
                onChange={handleChange}/>
      </InputGroup>
      <InputGroup size="lg" className="m-3">
        <InputGroup.Prepend>
          <InputGroup.Text>
            Price:
          </InputGroup.Text>
        </InputGroup.Prepend>
          <Form.Control
                id="AddListingForm-price"
                placeholder="200"
                name="price"
                value={formData.price}
                onChange={handleChange}
                />
      </InputGroup>
        <InputGroup size="lg" className="m-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              Zipcode:
            </InputGroup.Text>
          </InputGroup.Prepend>
            <Form.Control
                  id="AddListingForm-zipcode"
                  name="zipcode"
                  placeholder="00000"
                  value={formData.zipcode}
                  onChange={handleChange}/>
      </InputGroup>
      <InputGroup size="lg" className="m-3">
        <InputGroup.Prepend>
          <InputGroup.Text>
            Capacity:
          </InputGroup.Text>
        </InputGroup.Prepend>
          <Form.Control
                id="AddListingForm-capacity"
                name="capacity"
                placeholder="4"
                value={formData.capacity}
                onChange={handleChange}/>
      </InputGroup>
      <InputGroup size="lg" className="m-3">
        <InputGroup.Prepend>
          <InputGroup.Text>
            Amenities:
          </InputGroup.Text>
        </InputGroup.Prepend>
          <Form.Control
                id="AddListingForm-amenities"
                name="amenities"
                placeholder="amenities"
                value={formData.amenities}
                onChange={handleChange}
                />
      </InputGroup>

        <InputGroup size="lg" className="m-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              Description:
            </InputGroup.Text>
          </InputGroup.Prepend>
            <Form.Control
                  as="textarea"
                  id="AddListingForm-description"
                  name="description"
                  placeholder="description"
                  value={formData.description}
                  onChange={handleChange}/>
        </InputGroup>

        <InputGroup size="sm" className="m-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              Photo:
            </InputGroup.Text>
            </InputGroup.Prepend>
            <InputGroup.Append>
            <Form.Control
                  className="d-inline-block p-1"
                  id="AddListingForm-photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  placeholder="photo"
                  value={formData.photo}
                  onChange={handleChange} />
            </InputGroup.Append>
        </InputGroup>
        <Button type="submit" size="lg" className="">
          Submit
        </Button>
      </Form>
    </div>


  );
}
export default AddListingForm;
