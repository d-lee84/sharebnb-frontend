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
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "AddListingForm",
      "Register=", typeof registerNewUser,
      "formData=", formData,
      "formErrors", formErrors,
  );

  /** Handle form submit:
   *
   * Calls registerNewUser func prop and, if successful, redirect to /listings.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await registerNewUser(formData);
    history.push("/listings");
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(l => ({ ...l, [name]: value }));
  }

  return (
    <div className="w-50 mx-auto p-3">
      <h2>Register!</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="AddListingForm-username">
          Username
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="AddListingForm-username"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          />

        <Form.Label htmlFor="AddListingForm-password">
          Password
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="AddListingForm-password"
          placeholder="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          />

        <Form.Label htmlFor="AddListingForm-firstName">
          First Name
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="AddListingForm-firstName"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          />
        <Form.Label htmlFor="AddListingForm-lastName">
          Last Name
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="AddListingForm-LastName"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          />

        <Form.Label htmlFor="AddListingForm-email">
          Email
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="AddListingForm-email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
