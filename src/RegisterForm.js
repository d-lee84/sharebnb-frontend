import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {Form,Button,InputGroup} from 'react-bootstrap';

/** Register form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls Register function prop
 * - redirects to / route
 *
 * Routes -> RegisterForm -> Alert
 * Routed as /Register
 */

function RegisterForm({ registerNewUser }) {
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
      "RegisterForm",
      "Register=", typeof registerNewUser,
      "formData=", formData,
      "formErrors", formErrors,
  );

  /** Handle form submit:
   *
   * Calls registerNewUser func prop and, if successful, redirect to /companies.
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
      <h2 className="m-3">Register!</h2>

      <Form onSubmit={handleSubmit}>
        <InputGroup size="lg" className="m-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              Username
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            className=""
            id="RegisterForm-username"
            name="username"
            placeholder="ex: worldTravelr"
            value={formData.username}
            onChange={handleChange}
            />
        </InputGroup>

        <InputGroup size="lg" className="m-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              Password
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            className=""
            id="RegisterForm-password"
            placeholder="Please do not use 'password'"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
        </InputGroup>

        <InputGroup size="lg" className="m-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              First Name
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            className=""
            id="RegisterForm-firstName"
            name="firstName"
            placeholder="ex: Joel"
            value={formData.firstName}
            onChange={handleChange}
            />
        </InputGroup>
        
        <InputGroup size="lg" className="m-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              Last Name
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            className=""
            id="RegisterForm-LastName"
            name="lastName"
            placeholder="ex: Burton"
            value={formData.lastName}
            onChange={handleChange}
            />
        </InputGroup>

        <InputGroup size="lg" className="m-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              Email
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            className=""
            id="RegisterForm-email"
            name="email"
            placeholder="ex: joel@test.com"
            value={formData.email}
            onChange={handleChange}
            />
        </InputGroup>
        
        <Button type="submit" className="m-3 btn-block btn-lg">
          Submit
        </Button>
      </Form>
    </div>


  );
}
export default RegisterForm;
