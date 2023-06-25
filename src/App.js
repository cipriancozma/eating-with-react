import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FormBill from "./components/FormBill";
import ListOfFriends from "./components/ListOfFriends";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleClick = () => {
    setShowAddFriend((prevState) => !prevState);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <ListOfFriends />
        {showAddFriend && <AddFriendForm />}
        <Button handleClick={handleClick}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormBill />
    </div>
  );
}

export default App;
