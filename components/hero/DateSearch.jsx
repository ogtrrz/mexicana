import React, { useState, useEffect } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

import { useDispatch } from "react-redux";
import { addSearchDetail } from "../../features/hero/hotelSearchSlice";

const DateSearch = () => {
  // const [dates, setDates] = useState([
  //   new DateObject({ year: 2023, month: 1, day: 22 }),
  //   "December 09 2020",
  //   1597994736000, //unix time in milliseconds (August 21 2020)
  // ]);

  const dispatch = useDispatch();

  const [dates, setDates] = useState([
    new DateObject().setDay(5),
    new DateObject().setDay(14).add(1, "month"),
  ]);

  useEffect(() => {
    let date = {};
    date.init = dates[0] ? dates[0].unix : "";
    date.end = dates[1] ? dates[1].unix : "";
    dispatch(addSearchDetail({ date }));
  }, [dates]);

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        onChange={setDates}
        numberOfMonths={2}
        offsetY={10}
        range
        rangeHover
        format="D, MMMM"
        months={months}
        weekDays={weekDays}
      />
    </div>
  );
};

export default DateSearch;

const months = [
  ["Enero", "j"], //[["name","shortName"], ... ]
  ["Febrero", "f"],
  ["Marzo", "m"],
  ["Abril", "a"],
  ["Mayo", "m"],
  ["Junio", "j"],
  ["Julio", "j"],
  ["Agosto", "a"],
  ["Septiembre", "s"],
  ["Octubre", "o"],
  ["Noviembre", "n"],
  ["Diciembre", "d"],
];
const weekDays = [
  ["sun", "D"], //[["name","shortName"], ... ]
  ["mon", "L"],
  ["tue", "M"],
  ["wed", "M"],
  ["thu", "J"],
  ["fri", "V"],
  ["sat", "S"],
];
