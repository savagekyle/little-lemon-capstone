import React from "react";
import { Link } from "react-router-dom";

const ConfirmationMessage = () => {
  return (
    <div className="confirmation-page">
      <h1>Thank You for Your Reservation!</h1>
      <p>We look forward to welcoming you!</p>
      <button aria-label="On Click">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default ConfirmationMessage;
