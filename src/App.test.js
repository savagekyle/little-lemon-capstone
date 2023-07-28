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
