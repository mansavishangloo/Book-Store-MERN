import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        aria-label="Go Back"
        className="bg-sky-800 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-sky-700 transition duration-200"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

BackButton.propTypes = {
  destination: PropTypes.string,
};

export default BackButton;
