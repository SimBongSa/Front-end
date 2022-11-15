import { useState, useQuery } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { CalendarContainer } from "./CustomerClaendar.styled";
import axios from "axios";

const MainCalendar = () => {
  const [value, onChange] = useState(new Date());

  const [mark, setMark] = useState([
    "2022-11-10",
    "2022-11-12",
    "2022-11-15",
    "2022-11-16",
  ]);

  // const { data } = useQuery(
  //   ["logDate", month],
  //   async () => {
  //     const result = await axios.get(
  //       `/`
  //     );
  //     return result.data;
  //   },
  //   {
  //     onSuccess: (data) => {
  //       setMark(data);
  //      // ["2022-02-02", "2022-02-02", "2022-02-10"] 형태로 가져옴
  //     },
  //   }
  // );
  // console.log(mark);
  // console.log(value);
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
          className="mx-auto w-full text-sm border-b"
          tileContent={({ date, view }) => {
            // 날짜 타일에 컨텐츠 추가하기 (html 태그)
            // 추가할 html 태그를 변수 초기화
            let html = [];
            // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
            if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
              html.push(<div className="dot"></div>);
            }
            // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
            // return (
            //   <>
            //     <div className="flex justify-center items-center absoluteDiv">
            //       {html}
            //     </div>
            //   </>
            // );
          }}
        />
      </CalendarContainer>
    </>
  );
};

export default MainCalendar;
