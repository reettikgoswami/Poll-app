import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import authApi from "../../apis/auth";

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const buildPayload = () => {
    return {
      user: {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      },
    };
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await authApi.signup(buildPayload());
      // console.log(response.data.success);
      props.history.push("/login");
    } catch (error) {
      // console.log(error.response.data.errors); //return an array
    }
  };

  return (
    <div className="w-2/5 mx-auto pb-2 pt-16">
      <Form>
        <Form.Field>
          <label>Full Name</label>
          <input
            type="text"
            required
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password Confirmation</label>
          <input
            placeholder="Password Confirmation"
            type="password"
            required
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
          />
        </Form.Field>

        <Button type="submit" color="green" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
