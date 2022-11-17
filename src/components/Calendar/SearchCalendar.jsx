import { useState, useQuery, useEffect } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { CalendarContainer } from "./SearchCalendar.styled";
import axios from "axios";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __getCustomer } from "../../redux/modules/customerSlice";

const SearchCalendar = () => {
  const dispatch = useDispatch();
  const maindate = useSelector((state) => state.customerList);
  // console.log(maindate);
  const [value, setValue] = useState(new Date());
  const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   dispatch(__getCustomer());
  // }, [dispatch]);

  return (
    <>
      <CalendarContainer>
        <Calendar
          selectRange={true}
          onChange={setValue} // useState로 포커스 변경 시 현재 날짜 받아오기
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
        />
      </CalendarContainer>
    </>
  );
};

export default SearchCalendar;
