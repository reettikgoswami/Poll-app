import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Label } from "semantic-ui-react";
import PollResultOption from "./PollResultOption";

import pollsApi from "../../../apis/poll";

function PollResult(props) {
  const { id } = useParams();
  const [pollQuestion, setPollQuestion] = useState("");
  const [pollOptions, setPollOptions] = useState([]);
  const [selectedOptionId, setOptionId] = useState("");
  const [totalVote, setTotalVote] = useState(0);

  const fetchPoll = async () => {
    try {
      const response = await pollsApi.show(id);
      setPollQuestion(response.data.poll.title);
      setPollOptions(response.data.options);
      const totalVote = response.data.options.reduce(
        (total, currentOption) => total + currentOption.votes,
        0
      );
      setTotalVote(totalVote);
      // console.log("poll responce", response.data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchPoll();
  }, []);

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
            {pollQuestion}
            <div className="text-base text-gray-400 pt-1">
              Asked by anonymous about 3 hour ago
            </div>
          </h2>
        </div>
        {pollOptions.map(option => (
          <PollResultOption
            key={option.id}
            value={option.value}
            voteCounts={option.votes}
            votePercentage={totalVote ? (option.votes / totalVote) * 100 : 0}
          />
        ))}
      </div>
      <div className="w-1/4 pt-32">
        <div className="ui stacked segment">
          <div className="text-sm font-bold text-gray-400 pb-3">votes</div>
          <div className="text-3xl font-extrabold ">{totalVote}</div>
        </div>
      </div>
    </div>
  );
}

export default PollResult;
