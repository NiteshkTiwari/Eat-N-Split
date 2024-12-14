export default function AddButton({ click, setClick }) {
  return (
    <button onClick={() => setClick((c) => !c)} className="toggle-button">
      {click ? "Close" : "Add Friend"}
    </button>
  );
}
