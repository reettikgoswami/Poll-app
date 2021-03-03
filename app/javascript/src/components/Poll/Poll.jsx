import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Label } from "semantic-ui-react";
import pollsApi from "../../../apis/poll";

function Poll(props) {
  const { id } = useParams();
  const [pollQuestion, setPollQuestion] = useState("");
  const [pollOptions, setPollOptions] = useState([]);

  const fetchPoll = async () => {
    try {
      const response = await pollsApi.show(id);
      setPollQuestion(response.data.poll.title);
      setPollOptions(response.data.options);
      // console.log(response.data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchPoll();
  }, []);

  return (
    <div className="min-h-screen w-2/4 mx-auto pb-2">
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
      {/* poll */}
      {pollOptions.map(option => (
        <div key={option.id} className="w-4/5 pb-2">
          <div className="ui  segment flex items-center">
            <div className="ui fitted toggle checkbox">
              <input
                type="radio"
                className="hidden"
                readOnly=""
                tabIndex="0"
                // checked="true"
              />
              <label></label>
            </div>
            <div className="pl-4 text-2xl font-bold text-gray-700">
              {option.value}
            </div>
          </div>
        </div>
      ))}
      {/* ======= */}
      {/* <PollOption />
      <PollOption />
      <PollOption />
      <PollOption /> */}
      <div className="mt-2 flex flex-row-reverse w-4/5">
        <button className="ui positive button">submit you vote</button>
      </div>
    </div>
  );
}

export default Poll;
