import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {Form,Button} from 'react-bootstrap';

/** Register form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls Register function prop
 * - redirects to /companies route
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
    if (result.success) {
      history.push("/listings");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(l => ({ ...l, [name]: value }));
  }

  return (
    <div>
      <h2>Register!</h2>

      <Form inline onSubmit={handleSubmit}>
        <Form.Label htmlFor="RegisterForm-username" srOnly>
          Username
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="RegisterForm-username"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          />

        <Form.Label htmlFor="RegisterForm-password" srOnly>
          Password
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="RegisterForm-password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          />

        <Form.Label htmlFor="RegisterForm-firstName" srOnly>
          First Name
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="RegisterForm-firstName"
          name="firstName"
          placeholder="firstName"
          value={formData.firstName}
          onChange={handleChange}
          />
        <Form.Label htmlFor="RegisterForm-lastName" srOnly>
          Last Name
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="RegisterForm-LastName"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          />

        <Form.Label htmlFor="RegisterForm-email" srOnly>
          email
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="RegisterForm-email"
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
export default RegisterForm;
