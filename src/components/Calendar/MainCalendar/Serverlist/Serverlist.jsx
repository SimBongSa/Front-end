import {
	StServerListContainer,
	StServerListImg,
	StBody,
	StArea,
	StDetailArea,
	StCardInfo,
} from "./Serverlist.styled";
import { useNavigate } from "react-router-dom";

const Serverlist = ({ result }) => {
	const navigate = useNavigate();

	return (
		<>
			{result && result.length > 0
				? result.map((obj, boardId) => {
						return (
							<StServerListContainer
								key={boardId}
								onClick={() => {
									navigate(`/boards/${obj.boardId}`);
								}}
							>
								<StServerListImg>
									<img src={obj.boardImage} alt="test" />
								</StServerListImg>
								<StBody>
									<div>{obj.title}</div>
									<StCardInfo>
										<StArea>{obj.area}</StArea>
										<StDetailArea>{obj.detailArea}</StDetailArea>
									</StCardInfo>
									<span>
										{obj.startDate} - {obj.endDate}
									</span>
								</StBody>
							</StServerListContainer>
						);
				  })
				: null}
		</>
	);
};

export default Serverlist;
