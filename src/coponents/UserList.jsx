import React from "react";
import { Image } from "./UserList.styled";
import "./UserList.css"
import { FcDislike, FcCloseUpMode } from "react-icons/fc";
const UserList =({people})=>{
  return (
    <div>
      <ul className="list">
        {people.map((user) => (
          <li className="item">
            <img src={user.avatar} alt={user.name} />
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <h2>{user.online === true ? <FcDislike /> : <FcCloseUpMode />}</h2>
          </li>
        ))}
      </ul>
    </div>
   )
}



export default UserList;
