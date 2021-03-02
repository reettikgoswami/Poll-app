import React from "react";
import { Label } from "semantic-ui-react";
import PollOption from "./OptionCard";

function Poll(props) {
  return (
    <div className="min-h-screen w-2/4 mx-auto pb-2">
      <div className="pt-16 pb-4">
        <h2 className="font-bold text-3xl text-gray-600">
          <div>
            <Label.Group circular color="blue">
              <Label as="a">Health Care</Label>
            </Label.Group>
          </div>
          Are you a morning, evening or night person?
          <div className="text-base text-gray-400 pt-1">
            Asked by anonymous about 3 hour ago
          </div>
        </h2>
      </div>

      <PollOption />
      <PollOption />
      <PollOption />
      <PollOption />
      <div className="mt-2 flex flex-row-reverse w-4/5">
        <button className="ui positive button">submit you vote</button>
      </div>
    </div>
  );
}

export default Poll;
