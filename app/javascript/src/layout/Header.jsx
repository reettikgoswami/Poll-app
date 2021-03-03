import React from "react";
import { Icon, Button } from "semantic-ui-react";

import authApi from "../../apis/auth";
import { setToLocalStorage } from "../Utils/index";
import { deleteAuthTokenFormHeader } from "../../apis/axios";

function Header({ isUserLoggedIn }) {
  const handleLogout = async e => {
    try {
      const response = await authApi.logout();
      setToLocalStorage({
        authToken: null,
        authEmail: null,
        authUserId: null,
      });
      deleteAuthTokenFormHeader();
      // console.log(response.data.success);
    } catch (error) {
      // console.log(error.response.data.errors); //return an array
    }
  };

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
          <a href="/polls/new">
            <button className="ui positive button">Create Poll</button>
          </a>
        </div>
        {isUserLoggedIn ? (
          <div className="flex">
            <div>loggedIn</div>
            {/* <a href="/"> */}
            <Button
              basic
              color="teal"
              content="Logout"
              onClick={handleLogout}
            />
            {/* </a> */}
          </div>
        ) : (
          <div className="flex">
            <a href="/login">
              <Button basic color="teal" content="Login" />
            </a>
            <a href="/signup">
              <Button primary>Sign Up</Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
