import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [dateError, setDateError] = useState("");
  const [guestsError, setGuestsError] = useState("");

  const handleDateChange = (event) => {
    event.preventDefault();
    const selectedDate = new Date(event.target.value);
    const today = new Date();

    selectedDate.setDate(selectedDate.getDate() + 1);

    if (selectedDate < today) {
      setDateError("Selected date cannot be in the past.");
    } else {
      setDateError("");
    }

    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    event.preventDefault();
    setTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    event.preventDefault();
    const guestsValue = parseInt(event.target.value);

    if (guestsValue < 1 || guestsValue > 10) {
      setGuestsError("Number of guests must be between 1 and 10.");
    } else {
      setGuestsError("");
    }

    setGuests(guestsValue);
  };

  const handleOccasionChange = (event) => {
    event.preventDefault();
    setOccasion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      date,
      time,
      guests,
      occasion,
    });
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
            aria-label="On Click"
            required
          />
          {dateError && <div className="error-message">{dateError}</div>}

          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={handleTimeChange}
            aria-label="On Click"
          >
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
          {guestsError && <div className="error-message">{guestsError}</div>}

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={handleOccasionChange}
            aria-label="On Click"
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
          </select>

          <button type="submit" aria-label="On Click">
            Make Your Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
