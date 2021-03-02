import React from "react";
import { Label } from "semantic-ui-react";
import PollResultOption from "./PollResultOption";

function PollResult(props) {
  return (
    <div className="min-h-screen w-3/5 mx-auto justify-around pb-2 flex">
      <div className="w-3/4">
        <div className="pt-16 pb-4">
          <h2 className="font-bold text-3xl text-gray-600">
            <div>
              <Label.Group circular color="blue">
                <Label as="a">Health Care</Label>
              </Label.Group>
            </div>
            What design tool do you use the most?
            <div className="text-base text-gray-400 pt-1">
              Asked by anonymous about 3 hour ago
            </div>
          </h2>
        </div>

        <PollResultOption className="w-full" />
        <PollResultOption />
        <PollResultOption />
        <PollResultOption />
      </div>
      <div className="w-1/4 pt-32">
        <div className="ui stacked segment">
          <div className="text-sm font-bold text-gray-400 pb-3">votes</div>
          <div className="text-3xl font-extrabold ">127</div>
        </div>
      </div>
    </div>
  );
}

export default PollResult;
