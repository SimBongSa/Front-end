import { useState, useQuery } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { CalendarContainer } from "./MainCalendar.styled";
import axios from "axios";
import Modal from "../Modal/Modal";

const MainCalendar = () => {
  const [value, onChange] = useState(new Date());
  const marks = ["15-11-2022", "16-11-2022"];
  console.log(value);
  return (
    <>
      <CalendarContainer>
        <Calendar
          onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
          formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
          locale="en-EN"
          value={value}
          next2Label={null}
          prev2Label={null}
          minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
          maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
          calendarType="US" // 일요일 부터 start
          navigationLabel={null}
          // showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
          tileClassName={({ date, view }) => {
            if (marks.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
              return "highlight";
            }
          }}
        />
        <div className="text-gray-500 mt-4">
          {moment(value).format("YYYY년 MM월 DD일")}
        </div>
        <Modal />
      </CalendarContainer>
    </>
  );
};

export default MainCalendar;
