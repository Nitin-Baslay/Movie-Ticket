import "./Submit.css";
import { Link } from "react-router-dom";
const Submit = () => {
  return (
    <div className="masterbttn">
      <Link to="/tickets">
        <button className="next">Next</button>
      </Link>
    </div>
  );
};
export default Submit;
