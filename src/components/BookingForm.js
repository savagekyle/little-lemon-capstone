import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (event) => {
    event.preventDefault();
    setDate(event.target.value);

    // Call the updateTimes function when the date field is changed
    props.updateTimes(event);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Guests:", guests);
    console.log("Occasion:", occasion);
  };

  return (
    <div className="container booking">
      <div className="reservation-box">
        <h1>Create a Reservation</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            required
          />
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time " value={time} onChange={handleTimeChange}>
            {props.availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
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
