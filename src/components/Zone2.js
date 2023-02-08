import { useDispatch} from "react-redux";
const Zone2 = () => {
  const inputValue = useDispatch();
  const zoneTwoClickHandler = (event) => {
    if (event.target.disabled === false) {
      event.target.disabled = true;
      event.target.className = "seat disabled";
    }
    inputValue({ type: "prime", num: 500, seat: event.target.textContent });
  };
  return (
    <div className="zone1">
      <h4 className="heading">PRIME ZONE ₹500.00</h4>
      <main>
        {Array.from({ length: 30 }, (_, number) => (
          <button className="seat" onClick={zoneTwoClickHandler} key={Math.random()}>
            {number + 1}
          </button>
        ))}
      </main>
    </div>
  );
};
export default Zone2;
