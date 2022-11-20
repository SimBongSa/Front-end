import { useState, useQuery, useEffect } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { CalendarContainer } from "./MainCalendar.styled";
import Serverlist from "../Serverlist/Serverlist";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __getCustomer } from "../../redux/modules/calendarSlice";

const MainCalendar = () => {
  const dispatch = useDispatch();
  const maindate = useSelector((state) => state.calendarList.calendarList);
  // let markday = maindate.data.dueDay;
  // console.log(maindate.data[0].dueDay);
  console.log(maindate);
  const [value, setValue] = useState(new Date());
  const [date, setDate] = useState(new Date());

  const [result, setResult] = useState([]);

  const [mark, setMark] = useState([]);
  // console.log(mark);

  useEffect(() => {
    dispatch(__getCustomer(moment(value).format("YYYY-MM-DD")));
  }, [dispatch, value]);

  useEffect(() => {
    if (maindate.constructor === Object && Object.keys(maindate).length !== 0) {
      maindate.data.map((item) => {
        // console.log(item);
        setMark((prev) => [...prev, item.dueDay]);
      });
    }
  }, [maindate]);

  // const onClickDayHandler = (e) => {
  //   console.log(moment(value).format("YYYY-MM-DD"));
  //   // dispatch(__getCustomer(moment(value).format("YYYY-MM-DD")));
  // };

  return (
    <>
      <CalendarContainer>
        <Calendar
          // onClickDay={(e) => onClickDayHandler(e)}
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
          tileContent={({ date, view }) => {
            // 날짜 타일에 컨텐츠 추가하기 (html 태그)
            // 추가할 html 태그를 변수 초기화
            let html = [];
            // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
            if (
              mark.find((item) => item === moment(date).format("YYYY-MM-DD"))
            ) {
              // console.log(mark);
              html.push(
                <div className="dot" key={date}>
                  {/* {maindate.data[value].length} */}
                </div>
              );
            }
            // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
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
