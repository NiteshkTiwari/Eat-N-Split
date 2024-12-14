export default function Friend({
  name,
  ImageUrl,
  amount,
  setActive,
  setCurrentFriend,
  friends,
  setFriends,
}) {
  function handleSelect() {
    const Friend = {
      name,
      ImageUrl,
      amount,
    };

    setCurrentFriend(Friend);
    setActive((a) => !a);
  }
  function handleRemove() {
    const updatedFriends = friends.filter((friend) => friend.name !== name);
    setFriends(updatedFriends);
  }

  function handleResetAmount() {
    const updatedFriends = friends.map((friend) =>
      friend.name === name ? { ...friend, amount: 0 } : friend
    );
    setFriends(updatedFriends);
  }
  return (
    <div className="friend-card">
      <img src={ImageUrl} alt={name} className="friend-image" />
      <h2>{name}</h2>
      <p>
        {amount > 0
          ? `${name} owes you $${amount}`
          : amount < 0
          ? `You owe ${name} $${Math.abs(amount)}`
          : `You and ${name} are even`}
      </p>
      <button className="select-button" onClick={handleSelect}>
        Select
      </button>
      <button className="select-button" onClick={handleResetAmount}>
        Reset
      </button>
      <button className="select-button" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}
