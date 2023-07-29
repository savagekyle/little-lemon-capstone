import React from "react";
import BookingForm from "../components/BookingForm";

const BookingPage = (props) => {
  return (
    <>
      <BookingForm
        availableTimes={props.availableTimes}
        updateTimes={props.updateTimes}
        onSubmit={props.onSubmit}
      />
    </>
  );
};

export default BookingPage;
