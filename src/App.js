import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./scenes/Landing";
import BookingPage from "./scenes/BookingPage";
import ConfirmedBooking from "./scenes/ConfirmedBooking";
import { Route, Routes } from "react-router";
import { useReducer } from "react";
import "./App.css";
import { fetchAPI, submitAPI } from "./api.js";
import { useNavigate } from "react-router-dom";

function App() {
  const initialState = {
    availableTimes: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return {
          ...state,
          availableTimes: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);

  const initializeTimes = async () => {
    try {
      const today = new Date();
      const formattedDate = today.toISOString().split("T")[0];
      const availableTimes = await fetchAPI(formattedDate);

      dispatch({ type: "UPDATE_TIMES", payload: availableTimes });
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching available times:", error);
      setIsLoading(false);
    }
  };

  const navigate = useNavigate();

  const submitForm = async (formData) => {
    setIsLoading(true);
    const isSubmitted = await submitAPI(formData);
    setIsLoading(false);

    // If the API call returns true, navigate to the booking confirmation page
    if (isSubmitted) {
      navigate("/booking-confirmation");
    }
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={fetchAPI(new Date())}
              isLoading={isLoading}
              onSubmit={submitForm}
            />
          }
        ></Route>
        <Route
          path="/booking-confirmation"
          element={<ConfirmedBooking />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
