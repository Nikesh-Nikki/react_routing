import React from "react";
import { Outlet } from "react-router-dom";

function Profile(){
    return (
        <div>
          <h1>Hello from profile page!</h1>
          <p>So, how are you?</p>
          <h2>heyy you are </h2>
          <Outlet />
        </div>
      );
}

export default Profile;