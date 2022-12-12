import { FcCalendar } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { __getAllAppliList, __putApprove, __putDisapprove } from "../../../../redux/modules/mypageSlice";
import { StTagBox } from "../../../common/cards/CardGrid.styled";
import Stbtn from "../../../common/button/Button";
import {
	AppliCard,
	AppliCardImg,
	AppliCardText,
	PreviewText,
	AppliBtnWrap,
} from "./MyApplicant.styled";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';

const MyApplicant = ({ list }) => {
	const dispatch = useDispatch();

	const [size, setSize] = useState(10);
	const [page, setPage] = useState(1);

	return (
		<>
			<ToastContainer/>
			{list.map(item => {
				return (
					<>
						{item.approval === "WAITING" ? (
							<AppliCard key={item.enrollId}>
								<AppliCardImg>
									<img src={item.boardImage} alt="applicantImage" />
								</AppliCardImg>
								<AppliCardText>
									<AppliBtnWrap>
										<Stbtn
											variant="applicant-approve"
											onClick={() => {
												dispatch(__putApprove(item.enrollId));
												toast.success(item.username + '님의 요청을 승인했습니다.')
												dispatch(__getAllAppliList({ page, size }));
											}}
										>
											승인
										</Stbtn>
										<Stbtn
											variant="applicant-reject"
											onClick={() => {
												dispatch(__putDisapprove(item.enrollId));
												toast.success(item.username + '님의 요청을 거절했습니다.')
												dispatch(__getAllAppliList({ page, size }));
											}}
										>
											거절
										</Stbtn>
									</AppliBtnWrap>
									<h1>{item.title}</h1>
									<time>
										<FcCalendar />
										{item.dueDay?.split("T")[0]}
									</time>
									<div className="bar" />
									<PreviewText>StartDate : {item.startDate}</PreviewText>
									<PreviewText>EndDate : {item.endDate}</PreviewText>
									<PreviewText>Name : {item.username}</PreviewText>
									<PreviewText>Address : {item.area}</PreviewText>
									<StTagBox>
										{list.tags?.map((item, idx) => {
											return <li key={idx}>{item}</li>;
										})}
									</StTagBox>
								</AppliCardText>
							</AppliCard>
						) : (
							""
						)}
					</>
				);
			})}
		</>
	);
};

export default MyApplicant;
