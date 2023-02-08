import "./Ticket.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Ticket = () => {
  const ticketNumber = useSelector((state) => state.count);
  const ticketValue = useSelector((state) => state.amount);
  const ticketSeat = useSelector((state) => state.seat);
  return (
    <div className="mainSection">
      <div className="masterTicket">
        <h2>Your Ticket Details</h2>
      </div>
      <h3>Total Number of Ticket : {ticketNumber}</h3>
      <h3>Selected Seats : {ticketSeat}</h3>
      <h3 className="amount">Total Amount : {ticketValue}</h3>
      <div className="backbtn">
        <Link to="/">
          <button className="btn">Back</button>
        </Link>
      </div>
    </div>
  );
};
export default Ticket;
