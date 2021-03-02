import React from "react";
import { Button, Form } from "semantic-ui-react";

function PollForm(props) {
  return (
    <div className="w-2/4 mx-auto pb-2 pt-16">
      <Form>
        <Form.Field>
          <label>Poll Question</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Option 1</label>
          <input placeholder="Option 1" />
        </Form.Field>
        <Form.Field>
          <label>Option 2</label>
          <input placeholder="Option 2" />
        </Form.Field>
        <Form.Field>
          <label>Option 3</label>
          <input placeholder="Option 3" />
        </Form.Field>
        <Form.Field>
          <label>Option 4</label>
          <input placeholder="Option 4" />
        </Form.Field>

        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default PollForm;
