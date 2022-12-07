import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	__getTotalCalendarList,
	__getCalendarList,
	__getMonthList,
} from "../../../redux/modules/calendarSlice";
import Serverlist from "./Serverlist/Serverlist";
import moment from "moment";
import {
	StCalendarContainer,
	StCalendarList,
	StCalendarWrap,
	StCalendar,
	StDiv,
} from "./MainCalendar.styled";

const MainCalendar = () => {
	const dispatch = useDispatch();
	const maindate = useSelector(state => state.calendarList.calendarList);
	const totallist = useSelector(state => state.calendarList.TotalcalendarList);
	const monthlist = useSelector(state => state.calendarList.montList);

	const [value, setValue] = useState(new Date());
	const [date, setDate] = useState(new Date());
	const [result, setResult] = useState([]);
	const [mark, setMark] = useState([]);

	// dueDay
	useEffect(() => {
		dispatch(__getTotalCalendarList(moment(value).format("YYYY-MM-DD")));
	}, [dispatch, value]);

	// dueDay page 4
	useEffect(() => {
		dispatch(__getCalendarList(moment(value).format("YYYY-MM-DD")));
	}, [dispatch, value]);

	// month
	useEffect(() => {
		dispatch(
			__getMonthList({ year: moment(value).format("YYYY"), month: moment(value).format("MM") })
		);
	}, []);

	useEffect(() => {
		setMark([]);
		if (monthlist.constructor === Object && Object.keys(monthlist).length !== 0) {
			monthlist.data.map(item => {
				setMark(prev => [...prev, item.dueDay.split(" ")[0]]);
			});
		}
	}, [monthlist]);

	const getElCount = mark => mark.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
	const arr = getElCount(mark);

	return (
		<>
			<StCalendarContainer>
				<h1>날짜별 봉사활동</h1>
				{/* <DropDown /> */}
				<StCalendarWrap>
					<StCalendar
						onChange={setValue}
						formatDay={(locale, date) => moment(date).format("DD")}
						value={value}
						next2Label={null}
						prev2Label={null}
						minDetail="month"
						maxDetail="month"
						calendarType="US"
						navigationLabel={null}
						tileContent={({ date, view }) => {
							let html = [];

							const momentDate = moment(date).format("YYYY-MM-DD");

							if (mark.find(item => item === momentDate)) {
								html.push(
									<div className="dot" key={date}>
										<StDiv>{arr[momentDate] ? arr[momentDate] : ""}</StDiv>
									</div>
								);
							}
							return (
								<>
									<div className="html">{html}</div>
								</>
							);
						}}
					/>
					<StCalendarList className="text-gray-500 mt-4">
						<h2>봉사활동 : {maindate.data?.length}개</h2>
						<Serverlist result={maindate.data} key={date} mark={mark} totallist={totallist.data} />
					</StCalendarList>
				</StCalendarWrap>
			</StCalendarContainer>
		</>
	);
};

export default MainCalendar;
