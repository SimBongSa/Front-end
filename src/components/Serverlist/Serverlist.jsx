import {
	ServerListContainer,
	ServerListImg,
	Body,
	StArea,
	StDetailArea,
	StCardInfo,
	StMore,
	StMoreBox,
} from "./Serverlist.styled";

function Serverlist({ result, mark }) {
	return (
		<>
			{result && result.length > 0
				? result.map((obj, boardId) => {
						return (
							<ServerListContainer key={boardId}>
								<ServerListImg>
									<img src={obj.boardImage} alt="test" />
								</ServerListImg>
								<Body>
									<div>{obj.title}</div>
									<StCardInfo>
										<StArea>{obj.area}</StArea>
										<StDetailArea>{obj.detailArea}</StDetailArea>
									</StCardInfo>
									<span>
										{obj.startDate} - {obj.endDate}
									</span>
								</Body>
							</ServerListContainer>
						);
				  })
				: null}
			<StMoreBox>
				<StMore></StMore>
				<StMore></StMore>
			</StMoreBox>
		</>
	);
}

export default Serverlist;
