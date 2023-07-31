import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

const availableTimesMock = [
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={availableTimesMock} />);
  const headingElement = screen.getByText("Create a Reservation");
  expect(headingElement).toBeInTheDocument();
});

test("updateTimes is called correctly when date form field is changed", () => {
  const mockUpdateTimes = jest.fn();

  render(
    <BookingForm
      availableTimes={availableTimesMock}
      updateTimes={mockUpdateTimes}
    />
  );

  const dateInput = screen.getByLabelText("Choose date");
  fireEvent.change(dateInput, { target: { value: "2023-07-30" } });

  expect(mockUpdateTimes).toHaveBeenCalledTimes(1);
  expect(mockUpdateTimes).toHaveBeenCalledWith(expect.any(Object));
});

test("Date input has required attribute", () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toHaveAttribute("required");
});

test("Number of guests input has min and max attributes", () => {
  render(<BookingForm />);
  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("Handle Date Change - Past Date", () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText("Choose date");
  const today = new Date();
  const pastDate = new Date(today.getTime() - 1000 * 60 * 60 * 24);
  const pastDateString = pastDate.toISOString().split("T")[0];

  fireEvent.change(dateInput, { target: { value: pastDateString } });
  expect(
    screen.getByText("Selected date cannot be in the past.")
  ).toBeInTheDocument();
});

test("Handle Date Change - Future Date", () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText("Choose date");
  const today = new Date();
  const futureDate = new Date(today.getTime() + 1000 * 60 * 60 * 24); // One day after today
  const futureDateString = futureDate.toISOString().split("T")[0]; // Convert to string in "yyyy-mm-dd" format

  fireEvent.change(dateInput, { target: { value: futureDateString } });
  expect(
    screen.queryByText("Selected date cannot be in the past.")
  ).not.toBeInTheDocument();
});

test("Handle Guests Change - Valid Number", () => {
  render(<BookingForm />);
  const guestsInput = screen.getByLabelText("Number of guests");
  fireEvent.change(guestsInput, { target: { value: "5" } });
  expect(guestsInput.value).toBe("5");
});

test("Handle Guests Change - Invalid Number (less than 1)", () => {
  render(<BookingForm />);
  const guestsInput = screen.getByLabelText("Number of guests");
  fireEvent.change(guestsInput, { target: { value: "0" } });
  expect(guestsInput.value).toBe("1");
});

test("Handle Guests Change - Invalid Number (greater than 10)", () => {
  render(<BookingForm />);
  const guestsInput = screen.getByLabelText("Number of guests");
  fireEvent.change(guestsInput, { target: { value: "15" } });
  expect(guestsInput.value).toBe("10");
});
