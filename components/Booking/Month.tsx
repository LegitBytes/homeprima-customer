import React from "react";
import { useMonth, UseMonthProps, UseMonthResult } from "@datepicker-react/hooks";
import Day from "./Day";
import { NextPage } from "next";

interface MonthResult extends UseMonthResult {
  days: ({date: Date, dayLabel: string})[]
}

const Month:NextPage<UseMonthProps> = ({ year, month, firstDayOfWeek }) => {
  const { 
    days, 
    weekdayLabels, 
    monthLabel 
  } = useMonth({
    year,
    month,
    firstDayOfWeek
  }) as MonthResult;

  return (
    <div>
      <div style={{ textAlign: "center", margin: "0 0 16px" }}>
        <strong>{monthLabel}</strong>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          justifyContent: "center"
        }}
      >
        {weekdayLabels.map(dayLabel => (
          <div style={{ textAlign: "center" }} key={dayLabel}>
            {dayLabel}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          justifyContent: "center"
        }}
      >
        {days.map(day => (
          <Day 
            date={day.date} 
            key={day.dayLabel} 
            day={day.dayLabel} />
        ))}
      </div>
    </div>
  );
}

export default Month;
