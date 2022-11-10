import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 8rem;

  // calendar css

  .react-calendar {
    width: 80rem;
    height: 40rem;
    max-width: 100%;
    background: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 5rem;
    border-radius: 12px;
    border-style: outset;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }

  /* .react-calendar--doubleView {
    width: 700px;
  } */
  /* .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  } */
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
  /* .react-calendar__navigation button {
    min-width: 44px;
  } */

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
  /* .react-calendar__month-view__weekNumbers .react-calendar__tile {
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    background: black;
  } */
  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }
  /* .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
    text-decoration: none;
  } */
  /* .react-calendar__year-view
    .react-calendar__tile
    .react-calendar__decade-view 
    .react-calendar__tile, */
  /* .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  } */
  .react-calendar__tile {
    max-width: 100%;
    padding: 1rem 0.5rem;
    background: none;
    text-align: center;
    line-height: 2.5rem;
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

  /* .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  } */
  /* .react-calendar__tile:enabled:hover {
    border-radius: 50%;
  } */
  /* .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  } */
  .react-calendar__tile--now > abbr {
    background: #232323;
    padding: 24px;
    border-radius: 50%;
    color: #fff;
  }
  /* .react-calendar button {
    background: #ff8331;
    padding: 24px;
    border-radius: 50%;
    color: #fff;
  } */

  .react-calendar__tile--now:enabled:hover > abbr {
    background: #d9d9d9;
    padding: 24px;
    border-radius: 50%;
    color: #fff;
  }
  /* .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
  } */
  /* .react-calendar__tile--hasActive {
    background: #76baff;
  } */
  /* .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #232323;
  } */
  .react-calendar__tile--active > abbr {
    background: #d9d9d9;
    padding: 24px;
    border-radius: 50%;
    color: #fff;
  }
  /* .react-calendar__tile--active:enabled:hover {
  }
  .react-calendar__tile--active:enabled:focus {
    background: #d9d9d9;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  } */
`;

//  background: #ff8331;
// padding: 24px;
// border-radius: 50%;
// color: #fff;
