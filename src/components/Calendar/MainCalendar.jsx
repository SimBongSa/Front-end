import { useState, useQuery } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { CalendarContainer } from "./MainCalendar.styled";
import axios from "axios";
import Serverlist from "../Serverlist/Serverlist";

const MainCalendar = () => {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());

  const [result, setResult] = useState([]);

  const [mark, setMark] = useState([
    "2022-11-10",
    "2022-11-12",
    "2022-11-15",
    "2022-11-16",
  ]);

  const array = [
    {
      date: "2022-11-10",
      list: {
        name: "나다",
        location: "너냐",
      },
    },
    {
      date: "2022-11-12",
      list: {
        name: "너니",
        location: "나다",
      },
    },
    {
      date: "2022-11-15",
      list: {
        name: "나네",
        location: "너구나",
      },
    },
    {
      date: "2022-11-16",
      list: {
        name: "너니",
        location: "그래",
      },
    },
  ];

  const onClickDayHandler = (e) => {
    // console.log(e);
    setResult();
  };

  return (
    <>
      <CalendarContainer>
        <Calendar
          // onClickMonth={(e) => onClickMonthHandler(e)}
          onClickDay={(e) => onClickDayHandler(e)}
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

        <div className="text-gray-500 mt-4">
          {/* {moment(value).format("YYYY년 MM월 DD일")} */}
          <Serverlist result={array} key={date} mark={mark} />
        </div>
      </CalendarContainer>
    </>
  );
};

export default MainCalendar;
