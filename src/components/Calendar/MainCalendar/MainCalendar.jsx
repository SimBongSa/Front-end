import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getTotalCalendarList, __getCalendarList } from "../../../redux/modules/calendarSlice";
import Serverlist from "./Serverlist/Serverlist";
import moment from "moment";
import {
	StCalendarContainer,
	StCalendarList,
	StCalendarWrap,
	StCalendar,
} from "./MainCalendar.styled";

const MainCalendar = () => {
	const dispatch = useDispatch();
	const maindate = useSelector(state => state.calendarList.calendarList);
	const totallist = useSelector(state => state.calendarList.TotalcalendarList);

	const [value, setValue] = useState(new Date());
	const [date, setDate] = useState(new Date());
	const [result, setResult] = useState([]);
	const [mark, setMark] = useState([]);

	useEffect(() => {
		dispatch(__getTotalCalendarList(moment(value).format("YYYY-MM-DD")));
	}, [value]);

	useEffect(() => {
		dispatch(__getCalendarList(moment(value).format("YYYY-MM-DD")));
	}, [value]);

	useEffect(() => {
		if (maindate.constructor === Object && Object.keys(maindate).length !== 0) {
			maindate.data.map(item => {
				setMark(prev => [...prev, item.dueDay]);
			});
		}
	}, [maindate]);

	return (
		<>
			<StCalendarContainer>
				<h1>날짜별 봉사활동</h1>
				{/* <DropDown /> */}
				<StCalendarWrap>
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

							if (mark.find(item => item === moment(date).format("YYYY-MM-DD"))) {
								html.push(
									<div className="dot" key={date}>
										{maindate.data[value]?.length}
									</div>
								);
							}
							return (
								<>
									<div className="flex justify-center items-center absoluteDiv">{html}</div>
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