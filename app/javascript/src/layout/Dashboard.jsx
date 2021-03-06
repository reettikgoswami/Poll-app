import React from "react";
import PollList from "../components/Poll/PollList";
// import Poll from "./Poll/Poll";
// import PollResult from "./Poll/PollResult";
// import PollForm from "./Poll/PollForm";
// import LoginForm from "./Auth/Login";
// import SignupForm from "./Auth/Signup";

function Dashboard(props) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <PollList />
      {/* <Poll /> */}
      {/* <PollResult /> */}
      {/* <PollForm /> */}
      {/* <LoginForm /> */}
    </div>
  );
}

export default Dashboard;
