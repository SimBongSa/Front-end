import { useState, useEffect } from "react";
import { StCalendarContainer, StCalendarWrap, StCalendar, StDiv } from "./UserCalendar.styled";
import moment from "moment";

const UserCalendar = ({ userEnroll }) => {
	const [value, setValue] = useState(new Date());
	const [month, setMonth] = useState({ userEnroll });
	const [mark, setMark] = useState([]);

	useEffect(() => {
		if (month.constructor === Object && Object.keys(month).length !== 0) {
			month.userEnroll.map(item => {
				setMark(prev => [...prev, item.dueDay.split(" ")[0]]);
			});
		}
	}, [month]);

	const getElCount = mark => mark.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
	const arr = getElCount(mark);
	console.log(userEnroll);
	console.log(mark);
	return (
		<>
			<StCalendarContainer>
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
									<div className="dotdiv">{html}</div>
								</>
							);
						}}
					/>
				</StCalendarWrap>
			</StCalendarContainer>
		</>
	);
};

export default UserCalendar;
