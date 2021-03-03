import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import pollsApi from "../../../apis/poll";
import PollCard from "./PollCard";

function PollList(props) {
  const [polls, setPolls] = useState([]);

  const fetchPolls = async () => {
    try {
      const response = await pollsApi.list();
      // console.log("pollList : ", response.data.polls);
      setPolls(response.data.polls);
    } catch (error) {
      // console.dir(error);
    }
  };

  useEffect(() => {
    fetchPolls();
  }, []);

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
      {polls.map(poll => (
        <Link key={poll.id} to={`/polls/${poll.id}/show`}>
          <PollCard question={poll.title} />
        </Link>
      ))}
    </div>
  );
}

export default PollList;
