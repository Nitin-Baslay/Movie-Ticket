import "./Zone1.css";
import { useDispatch } from "react-redux";
const Zone1 = () => {
  const inputValue = useDispatch();
  const zoneOneClickHandler = (event) => {
    if (event.target.disabled === false) {
      event.target.disabled = true;
      event.target.className = "seat disabled";
    }
    inputValue({ type: "recliner", num: 600, seat: event.target.textContent });
  };
  return (
    <div className="zone1">
      <h4 className="heading">RECLINER ZONE ₹600.00 </h4>
      <main>
        {Array.from({ length: 15 }, (_, number) => (
          <button
            className="seat"
            onClick={zoneOneClickHandler}
            key={Math.random()}
          >
            {number + 1}
          </button>
        ))}
      </main>
    </div>
  );
};
export default Zone1;
