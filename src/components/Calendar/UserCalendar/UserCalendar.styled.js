import styled from "styled-components";
import Calendar from "react-calendar";

export const StCalendarList = styled.div`
	width: 100%;
	& h2 {
		font-size: 1.6rem;
	}
	@media (max-width: 1280px) {
		margin-top: 5rem;
		width: 100%;
	}
`;

export const StCalendarWrap = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	@media (max-width: 1280px) {
		flex-direction: column;
	}
`;

export const StCalendar = styled(Calendar)`
	min-width: min-content;
	@media (max-width: 1280px) {
		min-width: fit-content;
	}
`;

export const StCalendarContainer = styled.div`
	width: 100%;
	justify-content: center;
	overflow: hidden;
	transition: all 0.5s;
	& h1 {
		font-size: 2rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		color: ${props => props.theme.textColor};
	}

	.react-calendar {
		/* width: 55rem; */
		background-color: ${props => props.theme.bgColor};
		font-family: Arial, Helvetica, sans-serif;
		line-height: 2.5rem;
		border-radius: 12px;
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
		background-color: ${props => props.theme.bgColor};
		font-size: 2rem;
		color: ${props => props.theme.textColor};
	}
	.react-calendar__navigation button:enabled {
		color: ${props => props.theme.textColor};
		background-color: ${props => props.theme.bgColor};
		border-radius: 50%;
	}

	// 요일
	.react-calendar__month-view__weekdays {
		text-align: center;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 1rem;
		color: ${props => props.theme.subTextColor};
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
		color: ${props => props.theme.textColor};
		background: none;
		text-align: center;
		line-height: 3rem;
		.dot {
			bottom: 50%;
			height: 15px;
			width: 30px;
			background-color: ${props => props.theme.bgColor};
			border: 1px solid ${props => props.theme.subBtnColor};
			border-radius: 5rem;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			padding: 2px 8px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		.html {
			position: relative;
		}
	}

	// 다른날짜 선택시 오늘날짜 타일
	.react-calendar__tile--now > abbr {
		background-color: ${props => props.theme.btnColor};
		padding: 15px;
		border-radius: 50%;
		color: ${props => props.theme.bgColor};
		border: 1px solid ${props => props.theme.btnColor};
	}

	// 선택 날짜 tile
	.react-calendar__tile--active > abbr {
		background-color: ${props => props.theme.bgColor};
		padding: 15px;
		border-radius: 50%;
		border: 1px solid ${props => props.theme.subBtnColor};
		color: ${props => props.theme.textColor};
	}
`;

export const StDiv = styled.div`
	position: absolute;
	top: -17px;
	color: ${props => props.theme.subBtnColor};
`;
