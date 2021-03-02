import React from "react";
import { Icon, Button } from "semantic-ui-react";

function Header(props) {
  return (
    <div className="h-16 w-3/4 mx-auto flex items-center justify-between">
      <div className="">
        <h2 className="ui header">
          <Icon name="align left" size="large" className="text-green-600" />
          <div className="content text-gray-600">
            Poll <span className="text-green-600">Game</span>
          </div>
        </h2>
      </div>
      <div className="flex ">
        <div className="mr-8">
          <button className="ui positive button">Create Poll</button>
        </div>

        <div className="flex">
          <a href="/login">
            <Button basic color="teal" content="Login" />
          </a>
          {/* <a href="/">
            <button className="ui primary button">Sign Up</button>
          </a> */}
          <a href="/signup">
            <Button primary>Sign Up</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
