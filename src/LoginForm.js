import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {Form,Button,InputGroup} from 'react-bootstrap';

/** Login form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls login function prop
 * - redirects to /companies route
 *
 * Routes -> LoginForm -> Alert
 * Routed as /login
 */

function LoginForm({ loginUser }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "LoginForm",
      "login=", typeof loginUser,
      "formData=", formData,
      "formErrors", formErrors,
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /companies.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await loginUser(formData);
    history.push("/");
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(l => ({ ...l, [name]: value }));
  }

  return (
    <div className="w-50 mx-auto p-3">
      <h2 className="m-3">Login!</h2>

      <Form onSubmit={handleSubmit}>
        <InputGroup size="lg" className="m-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              Username
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            className=""
            id="LoginForm-username"
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
            id="LoginForm-password"
            placeholder="Please don't type 'password'"
            type="password"
            name="password"
            value={formData.password}
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
export default LoginForm;
