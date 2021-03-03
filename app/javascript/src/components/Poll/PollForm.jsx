import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

import pollsApi from "../../../apis/poll";

function PollForm(props) {
  const [title, setTitle] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");

  const buildPayload = () => {
    return {
      poll: {
        title: title,
        options_attributes: [
          { value: option1 },
          { value: option2 },
          { value: option3 },
          { value: option4 },
        ],
      },
    };
  };

  const handelSubmitPoll = async e => {
    try {
      const response = await pollsApi.create(buildPayload());
      // console.log("poll", response.data);
      props.history.push("/");
    } catch (error) {
      // console.dir(error);
    }
  };

  return (
    <div className="w-2/4 mx-auto pb-2 pt-16">
      <Form>
        <Form.Field>
          <label>Poll Question</label>
          <input
            type="text"
            placeholder="First Name"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Option 1</label>
          <input
            placeholder="Option 1"
            type="text"
            value={option1}
            onChange={e => setOption1(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Option 2</label>
          <input
            placeholder="Option 2"
            type="text"
            value={option2}
            onChange={e => setOption2(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Option 3</label>
          <input
            placeholder="Option 3"
            type="text"
            value={option3}
            onChange={e => setOption3(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Option 4</label>
          <input
            placeholder="Option 4"
            type="text"
            value={option4}
            onChange={e => setOption4(e.target.value)}
          />
        </Form.Field>

        <Button type="submit" color="green" onClick={handelSubmitPoll}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default PollForm;
