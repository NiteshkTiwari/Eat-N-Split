import { useState } from "react";

export default function AddFriend({ setClick, setFriends }) {
  const [name, setName] = useState("");

  function handleAdding(e) {
    e.preventDefault();
    if (!name) {
      alert("Please provide a Name!!!");
      return;
    }
    const randomId = Math.floor(Math.random() * 1000);
    const newFriend = {
      name,
      imageUrl: `https://i.pravatar.cc/48?u=${randomId}`,
      amount: 0,
    };

    setFriends((f) => [...f, newFriend]);

    setClick((c) => !c);
  }

  return (
    <form className="add-friend-form" onSubmit={handleAdding}>
      <label>👊 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter friend's name"
      />
      <label>📷 Image URL</label>
      <input type="text" placeholder="https://i.pravatar.cc/48" />
      <button className="add-button">Add Friend</button>
    </form>
  );
}
