import { useState } from "react";

export default function Form({ name, amount, friends, setFriends, setActive }) {
  const [bill, setBill] = useState(null);
  const [yourExpense, setYourExpense] = useState(null);
  const [choice, setChoice] = useState("you");

  function handleSubmit(e) {
    e.preventDefault();

    if (yourExpense <= 0 || yourExpense >= bill) {
      alert("Your expense must be greater than 0 and less than the bill.");
      return;
    }

    const friendExpense = bill - yourExpense;
    let updatedAmount = amount;

    if (choice === "you") {
      updatedAmount += friendExpense;
    } else {
      updatedAmount -= yourExpense;
    }

    const updatedFriends = friends.map((friend) =>
      friend.name === name ? { ...friend, amount: updatedAmount } : friend
    );

    setFriends(updatedFriends);
    setActive(false);
  }

  const friendExpense = bill - yourExpense;

  return (
    <div className="split-bill-form">
      <h1>Split the Bill with {name}</h1>
      <form onSubmit={handleSubmit}>
        <label>💵 Bill Value</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          placeholder="Enter total bill"
        />
        <label> 🧑‍🦱 Your Expense</label>
        <input
          type="number"
          min="1"
          max={bill - 1}
          value={yourExpense}
          onChange={(e) => setYourExpense(Number(e.target.value))}
          placeholder="Enter your expense"
        />
        <label> 🧑‍🤝‍🧑 {name}'s Expense</label>
        <input type="text" value={friendExpense} disabled />

        <label>🤑 Who is paying the bill?</label>
        <select value={choice} onChange={(e) => setChoice(e.target.value)}>
          <option value="you">You</option>
          <option value="friend">{name}</option>
        </select>
        <div className="split-bill-form-buttons">
          <button type="submit">Split Bill</button>
          <button
            type="button"
            className="close-button"
            onClick={() => setActive(false)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
