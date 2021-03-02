import React from "react";
import { Segment, Label } from "semantic-ui-react";

function Poll(props) {
  return (
    <div className="mb-3">
      <Segment padded className="relative">
        <div className="absolute -right-4 -top-4">
          <a href="/" className="ui blue basic label">
            156 Vote
          </a>
        </div>
        <div>
          <Label.Group circular color="blue">
            <Label as="a">Health Care</Label>
          </Label.Group>
        </div>
        <div className="font-bold text-gray-600 text-3xl">
          Are you a morning, evening or night person?
        </div>
        <div className="text-base text-gray-500 pt-2">About 3 hour ago</div>
      </Segment>
    </div>
  );
}

export default Poll;
