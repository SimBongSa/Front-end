import { useNavigate } from "react-router-dom";
import {
	StCardGridContainer,
	StCards,
	StCard,
	StImgWrapper,
	StContent,
	StTagBox,
	StCardInfo,
	StDate,
	StArea,
	StDetailArea,
} from "./CardGrid.styled";
const CardGrid = ({ gridColumn, companyBoards, boards, userEnroll }) => {
	const navigate = useNavigate();

	const getDateDiff = (d1, d2) => {
		const dueDay = new Date(d1);
		const today = new Date(d2);
		const diffDate = dueDay.getTime() - today.getTime();
		return Math.round(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
	};
	const today = new Date().toISOString().split("T")[0];

	return (
		<StCardGridContainer>
			<StCards gridColumn={gridColumn}>
				{/* companyBoards 기업 상세페이지 */}
				{companyBoards?.map(item => {
					const dDay = getDateDiff(item.dueDay, today);
					return (
						<StCard variant="StCompanyCard" key={item.boardId}>
							<StDate>D-{dDay}</StDate>
							<StImgWrapper>
								<img src={item.boardImage} loading="lazy" alt="thumbnail" />
							</StImgWrapper>
							<StContent>
								<p className="title">{item.title}</p>
								<StCardInfo>
									<StArea>{item.area}</StArea>
									<StDetailArea>{item.detailArea}</StDetailArea>
								</StCardInfo>
								<StTagBox>
									{item?.tags?.map(tag => {
										return <li>{tag}</li>;
									})}
								</StTagBox>
							</StContent>
						</StCard>
					);
				})}

				{/* boards 전체 게시물 리스트  */}
				{boards?.map(item => {
					const dDay = getDateDiff(item.dueDay, today);
					return (
						<StCard
							variant="StBoardCard"
							key={item.boardId}
							onClick={() => navigate(`/boards/${item.boardId}`)}
						>
							<StDate>D-{dDay}</StDate>
							<StImgWrapper>
								<img src={item.boardImage} loading="lazy" alt="thumbnail" />
							</StImgWrapper>
							<StContent>
								<p className="title">{item.title}</p>
								<StCardInfo>
									<StArea>{item.area}</StArea>
									<StDetailArea>{item.detailArea}</StDetailArea>
								</StCardInfo>
								<StTagBox>
									{item?.tags?.map(tag => {
										return <li>{tag}</li>;
									})}
								</StTagBox>
							</StContent>
						</StCard>
					);
				})}

				{userEnroll?.map(item => {
					const dDay = getDateDiff(item.dueDay, today);
					return (
						<StCard key={item.boardId} onClick={() => navigate(`/boards/${item.boardId}`)}>
							<StDate>D-{dDay}</StDate>
							<StImgWrapper>
								<img src={item.boardImage} loading="lazy" alt="enrollImage" />
							</StImgWrapper>
							<StContent>
								<p className="title">{item.title}</p>
								<StCardInfo>
									<StArea>{item.area}</StArea>
									<StDetailArea>{item.detailArea}</StDetailArea>
								</StCardInfo>
								<StTagBox>
									{item?.tags?.map(tag => {
										return <li>{tag}</li>;
									})}
								</StTagBox>
							</StContent>
						</StCard>
					);
				})}
			</StCards>
		</StCardGridContainer>
	);
};

export default CardGrid;
