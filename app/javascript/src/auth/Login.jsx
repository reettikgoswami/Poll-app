import React from "react";
import { Button, Form } from "semantic-ui-react";

function Login(props) {
  return (
    <div className="w-2/5 mx-auto pb-2 pt-16">
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" type="password" />
        </Form.Field>
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
