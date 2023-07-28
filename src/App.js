import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./scenes/Landing";
import BookingPage from "./scenes/BookingPage";
import { Route, Routes } from "react-router";
import { useReducer } from "react";

function App() {
  const initialState = {
    availableTimes: ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
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

  const updateTimes = (event) => {
    event.preventDefault();
    dispatch({ type: "UPDATE_TIMES", payload: initialState.availableTimes });
  };
  const initializeTimes = () => {
    dispatch({ type: "UPDATE_TIMES", payload: initialState.availableTimes });
  };
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={state.availableTimes}
              updateTimes={updateTimes}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
