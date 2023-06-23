import React from "react";
import { initialFriends } from "../data";
import Friend from "./Friend";

function ListOfFriends() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => {
        return <Friend friend={friend} key={friend.id} />;
      })}
    </ul>
  );
}

export default ListOfFriends;
