import React from "react";
import Friend from "./Friend";

function ListOfFriends({ friends }) {
  return (
    <ul>
      {friends.map((friend) => {
        return <Friend friend={friend} key={friend.id} />;
      })}
    </ul>
  );
}

export default ListOfFriends;
