import { ServerListContainer, ServerListImg, Body } from "./Serverlist.styled";

function Serverlist({ result, mark }) {
	return (
		<>
			{result && result.length > 0 ? (
				result.map((obj, boardId) => {
					return (
						<ServerListContainer key={boardId}>
							<ServerListImg>
								<img src={obj.boardImage} alt="test" />
							</ServerListImg>
							<Body>
								<div>{obj.title}</div>
								<div>{obj.area}</div>
								<div>{obj.detailArea}</div>
								<div1>
									{obj.startDate} ~ {obj.endDate}
								</div1>
							</Body>
						</ServerListContainer>
					);
				})
			) : (
				<Body>{/* <div>봉사 내역이 없습니다.</div> */}</Body>
			)}
		</>
	);
}

export default Serverlist;
