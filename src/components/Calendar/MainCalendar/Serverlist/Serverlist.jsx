import {
	StServerListContainer,
	StServerListImg,
	StBody,
	StArea,
	StDetailArea,
	StCardInfo,
	StMore,
	StMoreBox,
} from "./Serverlist.styled";

function Serverlist({ result, mark, totallist }) {
	return (
		<>
			{result && result.length > 0
				? result.map((obj, boardId) => {
						return (
							<StServerListContainer key={boardId}>
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
			{totallist?.length > 4 ? (
				<StMoreBox>
					<StMore></StMore>
					<StMore></StMore>
				</StMoreBox>
			) : (
				""
			)}
		</>
	);
}

export default Serverlist;
