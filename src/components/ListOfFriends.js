import React from "react";
import Friend from "./Friend";

function ListOfFriends({ friends, handleSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
            handleSelection={handleSelection}
          />
        );
      })}
    </ul>
  );
}

export default ListOfFriends;
