import { useState } from "react";
import AddButton from "./AddButton";
import AddFriend from "./AddFriend";
import Form from "./Form";
import Friend from "./Friend";
function App() {
  const [click, setClick] = useState(false);
  const [friends, setFriends] = useState([]);
  const [active, setActive] = useState(null);
  const [currentFriend, setCurrentFriend] = useState({});

  return (
    <div className="app-container">
      <h1>Friend List</h1>
      <div className="friend-list">
        {friends.length > 0 ? (
          friends.map((friend, index) => (
            <Friend
              key={index}
              name={friend.name}
              ImageUrl={friend.ImageUrl}
              amount={friend.amount}
              active={active}
              setActive={setActive}
              setCurrentFriend={setCurrentFriend}
              friends={friends}
              setFriends={setFriends}
              num={index}
            />
          ))
        ) : (
          <p className="no-friends">No friends added yet!</p>
        )}
      </div>
      {active !== null && currentFriend.name && (
        <Form
          name={currentFriend.name}
          amount={currentFriend.amount}
          setFriends={setFriends}
          setActive={setActive}
          friends={friends}
          key={currentFriend.name}
        />
      )}
      {click && (
        <AddFriend click={click} setClick={setClick} setFriends={setFriends} />
      )}
      <AddButton click={click} setClick={setClick} />
    </div>
  );
}

export default App;
