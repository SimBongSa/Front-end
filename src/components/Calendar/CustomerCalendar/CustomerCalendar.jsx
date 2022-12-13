import { useState, useEffect } from "react";
import { StCalendarContainer, StCalendarWrap, StCalendar, StDiv } from "./CustomerCalendar.styled";
import moment from "moment";

const CustomerCalendar = ({ companyBoards }) => {
	const [value, setValue] = useState(new Date());
	const [mark, setMark] = useState([]);

	useEffect(() => {
		companyBoards?.map(item => {
			setMark(prev => [...prev, item.dueDay.split(" ")[0]]);
		});
	}, [companyBoards]);

	const getElCount = mark => mark.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
	const arr = getElCount(mark);

	return (
		<>
			<StCalendarContainer>
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

export default CustomerCalendar;
