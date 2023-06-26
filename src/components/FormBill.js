import React, { useState } from "react";
import Button from "./Button";

function FormBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : ""; // derived state

  const handlePaidByUser = (e) => {
    const greaterThanTheBill =
      Number(e.target.value) > bill ? paidByUser : Number(e.target.value);
    setPaidByUser(greaterThanTheBill);
  };

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your expense</label>
      <input type="text" value={paidByUser} onChange={handlePaidByUser} />

      <label>{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value={"user"}>You</option>
        <option value={"friend"}>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormBill;
