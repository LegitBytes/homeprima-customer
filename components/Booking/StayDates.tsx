import { NextPage } from "next";
import { useState } from "react";
import { useDatepicker, START_DATE, FocusedInput, OnDatesChangeProps } from '@datepicker-react/hooks';
import DatepickerContext from "@context/DatepickerContext";
import Month from './Month'

type DatePickerState = {
  startDate: Date | null
  endDate: Date | null
  focusedInput: FocusedInput
}

const StayDates: NextPage = () => {
  const [state, setState] = useState<DatePickerState>({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE
  });
  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onDatesChange: handleDateChange,
    numberOfMonths: 1,
    minBookingDays: 7,
    exactMinBookingDays: true
  });

  function handleDateChange(data:OnDatesChangeProps) {
    if (!data.focusedInput) {
      setState({ ...data, focusedInput: START_DATE });
    } else {
      setState(data);
    }
  }

  return (
    <div className="py-4 mt-20 md:mt-32 relative w-full">
      <h1 className="text-5xl font-semibold"><span className="text-blue-500">When</span> and <span className="text-blue-500">How</span> long is your trip?</h1>
      <DatepickerContext.Provider
        value={{
          focusedDate,
          isDateFocused,
          isDateSelected,
          isDateHovered,
          isDateBlocked,
          isFirstOrLastSelectedDate,
          onDateSelect,
          onDateFocus,
          onDateHover
        }}
      >
      <div>
        <strong>Focused input: </strong>
        {state.focusedInput}
      </div>
      <div>
        <strong>Start date: </strong>
        {state.startDate && state.startDate.toLocaleString()}
      </div>
      <div>
        <strong>End date: </strong>
        {state.endDate && state.endDate.toLocaleString()}
      </div>

      <button type="button" onClick={goToPreviousMonths}>
        {"<"}
      </button>
      <button type="button" onClick={goToNextMonths}>
        {">"}
      </button>

      <div
        // style={{
        //   display: "grid",
        //   margin: "32px 0 0",
        //   gridTemplateColumns: `repeat(${activeMonths.length}, 300px)`,
        //   gridGap: "0 64px"
        // }}
        className="flex bg-white"
      >
        {activeMonths.map(month => (
          <Month
            key={`${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            firstDayOfWeek={firstDayOfWeek}
          />
        ))}
      </div>
      </DatepickerContext.Provider>
    </div>
  )
}

export default StayDates