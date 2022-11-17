import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;

  .react-calendar {
    width: 25rem;
    height: 25rem;
    max-width: 100%;
    background: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1rem;
    border-radius: 12px;
    border-style: outset;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.3;
  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  // nav 화살표
  .react-calendar__navigation {
    margin-left: 2rem;
    margin-right: 2rem;
    display: flex;
    height: 5rem;
    margin-bottom: 0.5em;
    background: none;
  }

  // nav 년월
  .react-calendar__navigation button:disabled {
    margin-top: 1rem;
    background-color: #ffffff;
    font-size: 2rem;
    color: #232323;
  }
  .react-calendar__navigation button:enabled {
    background-color: #ffffff;
    border-radius: 50%;
  }
  .react-calendar__navigation button:enabled:hover {
    background-color: #ffffff;
    border-radius: 50%;
  }
  .react-calendar__navigation button:enabled:focus {
    background-color: #ffffff;
  }

  // 요일
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
  }
  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  // 요일 박스
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 1.2rem 0.5rem;
    background: none;
    text-align: center;
    line-height: 0.5rem;
    transition: 0.4s;
    &:hover {
      transform: translateY(-5%);
    }

    .dot {
      height: 5px;
      width: 5px;
      background-color: #f87171;
      border-radius: 50%;
      margin: 0 auto;
      display: flex;
    }
    .highlight {
      background: #ed0086;
      border-radius: 30% 20%;
    }
  }

  .react-calendar__tile--now > abbr {
    background: #232323;
    padding: 24px;
    border-radius: 50%;
    color: #fff;
  }

  .react-calendar__tile--now:enabled:hover > abbr {
    background: #d9d9d9;
    padding: 24px;
    border-radius: 50%;
    color: #fff;
  }

  .react-calendar__tile--active > abbr {
    background: #d9d9d9;
    padding: 24px;
    border-radius: 50%;
    color: #fff;
  }
`;
