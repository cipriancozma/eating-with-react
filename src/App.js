import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FormBill from "./components/FormBill";
import ListOfFriends from "./components/ListOfFriends";
import { initialFriends } from "./data";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleClick = () => {
    setShowAddFriend((prevState) => !prevState);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <ListOfFriends friends={friends} />
        {showAddFriend && <AddFriendForm handleAddFriend={handleAddFriend} />}
        <Button handleClick={handleClick}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormBill />
    </div>
  );
}

export default App;
