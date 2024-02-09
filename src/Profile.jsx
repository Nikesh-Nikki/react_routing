import React from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import Nikki from "./Nikki.jsx";
import Bucky from "./Bucky.jsx";
import DefaultProfile from "./DefaultProfile.jsx";

function Profile(){
  const {name} = useParams('nikki');
    return (
        <div>
          <h1>Hello from profile page!</h1>
          <p>So, how are you?</p>
          <h2>heyy you are </h2>
          <p>{name}</p>
          {name==="nikki" ? <Nikki /> : (
            name==="bucky" ? <Bucky/> : <DefaultProfile />
          ) 
          }
        </div>
      );
}

export default Profile;