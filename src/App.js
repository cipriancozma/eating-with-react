import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FormBill from "./components/FormBill";
import ListOfFriends from "./components/ListOfFriends";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <ListOfFriends />
        <AddFriendForm />
        <Button>Add Friend</Button>
      </div>
      <FormBill />
    </div>
  );
}

export default App;
