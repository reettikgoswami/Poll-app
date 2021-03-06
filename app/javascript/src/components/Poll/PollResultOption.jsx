import React from "react";
import { Progress } from "semantic-ui-react";

function PollResultOption({ value, voteCounts, votePercentage }) {
  return (
    <div className="w-4/6 pb-3">
      <div className="ui segment">
        <div className="flex justify-between pb-1">
          <span className="font-bold text-xl text-gray-700">{value}</span>
          <span className="font-bold text-xl text-gray-700">
            {votePercentage} %
          </span>
        </div>
        <Progress percent={votePercentage} size="tiny" color="green">
          <span>{voteCounts} vote</span>
        </Progress>
      </div>
    </div>
  );
}

export default PollResultOption;
