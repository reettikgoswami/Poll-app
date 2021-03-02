import React from "react";
import { Progress } from "semantic-ui-react";

function PollResultOption(props) {
  return (
    <div className="w-4/6 pb-3">
      <div className="ui segment">
        <div className="flex justify-between pb-1">
          <span className="font-bold text-xl text-gray-700">Photoshop</span>
          <span className="font-bold text-xl text-gray-700">66 %</span>
        </div>
        <Progress percent={67} size="tiny" color="green">
          <span>56 vote</span>
        </Progress>
      </div>
    </div>
  );
}

export default PollResultOption;
