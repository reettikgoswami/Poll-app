import React from "react";
import PollCard from "./PollCard";

function PollList(props) {
  return (
    <div className="min-h-screen w-2/4 mx-auto pb-2">
      <div className="pt-16 pb-4">
        <h2 className="font-bold text-4xl text-gray-600">
          Public Polls
          <div className="text-base text-gray-400">
            Below are the polls created by Poll game members
          </div>
        </h2>
      </div>
      <PollCard />
      <PollCard />
      <PollCard />
      <PollCard />
      <PollCard />
    </div>
  );
}

export default PollList;
