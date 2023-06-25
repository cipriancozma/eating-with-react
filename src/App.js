import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FormBill from "./components/FormBill";
import ListOfFriends from "./components/ListOfFriends";
import { initialFriends } from "./data";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleClick = () => {
    setShowAddFriend((prevState) => !prevState);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  const handleSelection = (friend) => {
    // setSelectedFriend(friend);
    setSelectedFriend((currentState) =>
      currentState?.id === friend?.id ? null : friend
    );
    setShowAddFriend(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <ListOfFriends
          friends={friends}
          selectedFriend={selectedFriend}
          handleSelection={handleSelection}
        />
        {showAddFriend && <AddFriendForm handleAddFriend={handleAddFriend} />}
        <Button handleClick={handleClick}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && <FormBill selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
