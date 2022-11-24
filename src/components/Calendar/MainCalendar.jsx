import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { CalendarContainer } from "./MainCalendar.styled";
import Serverlist from "../Serverlist/Serverlist";
import { useSelector, useDispatch } from "react-redux";
import { __getCustomer } from "../../redux/modules/calendarSlice";

const MainCalendar = () => {
  const dispatch = useDispatch();
  const maindate = useSelector((state) => state.calendarList.calendarList);

  const [value, setValue] = useState(new Date());
  const [date, setDate] = useState(new Date());

  const [result, setResult] = useState([]);

  const [mark, setMark] = useState([]);

  useEffect(() => {
    dispatch(__getCustomer(moment(value).format("YYYY-MM-DD")));
  }, [dispatch, value]);

  useEffect(() => {
    if (maindate.constructor === Object && Object.keys(maindate).length !== 0) {
      maindate.data.map((item) => {
        setMark((prev) => [...prev, item.dueDay]);
      });
    }
  }, [maindate]);

  return (
    <>
      <CalendarContainer>
        <Calendar
          onChange={setValue}
          formatDay={(locale, date) => moment(date).format("DD")}
          locale="en-EN"
          value={value}
          next2Label={null}
          prev2Label={null}
          minDetail="month"
          maxDetail="month"
          calendarType="US"
          navigationLabel={null}
          tileContent={({ date, view }) => {
            let html = [];

            if (
              mark.find((item) => item === moment(date).format("YYYY-MM-DD"))
            ) {
              html.push(
                <div className="dot" key={date}>
                  {/* {maindate.data[value].length} */}
                </div>
              );
            }
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  {html}
                </div>
              </>
            );
          }}
        />
        <div className="text-gray-500 mt-4">
          <div>ToDay : {moment(value).format("YYYY년 MM월 DD일")}</div>
          <Serverlist result={maindate.data} key={date} mark={mark} />
        </div>
      </CalendarContainer>
    </>
  );
};

export default MainCalendar;
