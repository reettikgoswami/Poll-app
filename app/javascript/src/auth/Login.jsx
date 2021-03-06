import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

import authApi from "../../apis/auth";
import { setAuthHeaders } from "../../apis/axios";
import { setToLocalStorage } from "../Utils/index";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");

  const buildPayload = () => {
    return {
      login: { email: email, password: password },
    };
  };

  const handleSubmit = async e => {
    try {
      const response = await authApi.login(buildPayload());
      setToLocalStorage({
        authToken: response.data.auth_token,
        authEmail: email,
        authUserId: response.data.userId,
      });
      // console.log(response.data.success);
      setAuthHeaders();
      props.history.push("/");
    } catch (error) {
      // console.log(error.response.data.errors); //return an array
    }
  };

  return (
    <div className="w-2/5 mx-auto pb-2 pt-16">
      <Form>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            onChange={e => setPassord(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" color="green" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
