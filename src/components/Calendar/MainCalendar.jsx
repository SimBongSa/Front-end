import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { CalendarContainer } from "./MainCalendar.styled";
import Serverlist from "../Serverlist/Serverlist";
import { useSelector, useDispatch } from "react-redux";
import { __getCustomer } from "../../redux/modules/calendarSlice";
import styled from "styled-components";
import DropDown from "../common/dropDown/DropDown";

const MainCalendar = () => {
  const dispatch = useDispatch();
  const maindate = useSelector((state) => state.calendarList.calendarList);
  console.log(maindate)

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
        <h1>날짜별 봉사활동</h1>
        <DropDown/>
        <CalendarWrap>
          <StCalendar
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
          <CalendarList className="text-gray-500 mt-4">
            {/* <h2>Today : {moment(value).format("YYYY년 MM월 DD일")}</h2> */}
            <h2>봉사활동 : </h2>
            <Serverlist result={maindate.data} key={date} mark={mark} />
          </CalendarList>
        </CalendarWrap>
      </CalendarContainer>
    </>
  );
};

export default MainCalendar;

export const CalendarList = styled.div`
  width: 35%;
  & h2 {
    font-size: 1.6rem;
  }
  @media (max-width: 1280px) {
    margin-top: 5rem;
    width: 100%;
  }
`

export const CalendarWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`

export const StCalendar = styled(Calendar)`
  min-width: min-content;
  @media (max-width: 1280px) {
    min-width: fit-content;
  }
`