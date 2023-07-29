import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const navigate = useNavigate();

  const handleDateChange = (event) => {
    event.preventDefault();
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    event.preventDefault();
    setTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    event.preventDefault();
    setGuests(event.target.value);
  };

  const handleOccasionChange = (event) => {
    event.preventDefault();
    setOccasion(event.target.value);
  };

  return (
    <div className="container booking">
      <div className="reservation-box">
        <h1>Create a Reservation</h1>
        <form onSubmit={props.onSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            required
          />
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={time} onChange={handleTimeChange}>
            {!props.isLoading &&
              props.availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            {props.isLoading && <option disabled>Loading...</option>}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={handleGuestsChange}
            required
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={handleOccasionChange}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
          </select>
          <button type="submit">Make Your Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
