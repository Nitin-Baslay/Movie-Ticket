import { useDispatch } from "react-redux";
const Zone3 = () => {
  const inputValue = useDispatch();
  const zoneThreeClickHandler = (event) => {
    if (event.target.disabled === false) {
      event.target.disabled = true;
      event.target.className = "seat disabled";
    }
    inputValue({ type: "classic", num: 450, seat: event.target.textContent });
  };
  return (
    <div className="zone1">
      <h4 className="heading">CLASSIC ZONE ₹450.00</h4>
      <main>
        {Array.from({ length: 45 }, (_, number) => (
          <button
            className="seat"
            onClick={zoneThreeClickHandler}
            key={Math.random()}
          >
            {number + 1}
          </button>
        ))}
      </main>
    </div>
  );
};
export default Zone3;
