import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
	StHoverBox,
} from "./CardGrid.styled";
const CardGrid = ({ gridColumn, companyBoards, boards, userEnroll, userWait }) => {
	const navigate = useNavigate();

	const getDateDiff = (d1, d2) => {
		const dueDay = new Date(d1);
		const today = new Date(d2);
		const diffDate = dueDay.getTime() - today.getTime();
		return Math.round(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
	};
	
	const today = new Date().toISOString().split("T")[0];

	const [isHovering, setIsHovering] = useState(false);
	const [hoveritem, setHoverItem] = useState([]);

	return (
		<>
			<StCardGridContainer variant="Board">
				<StCards gridColumn={gridColumn} variant="Board">
					{/* boards 전체 게시물 리스트  */}
					{boards?.map(item => {
						const dDay = getDateDiff(item.dueDay, today);
						return (
							<StCard
								variant="Board"
								key={item.boardId}
								onClick={() => navigate(`/boards/${item.boardId}`)}
							>
								<StDate variant="Board">D-{dDay}</StDate>
								<StImgWrapper variant="Board">
									<img src={item.boardImage} loading="lazy" alt="thumbnail" />
								</StImgWrapper>
								<StContent variant="Board">
									<p className="title">{item.title}</p>
									<StCardInfo variant="Board">
										<StArea variant="Board">{item.area}</StArea>
										<StDetailArea variant="Board">{item.detailArea}</StDetailArea>
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

			{/* user page  */}
			<StCardGridContainer variant="userEnroll">
				<StCards variant="userEnroll">
					{userEnroll?.map(item => {
						const dDay = getDateDiff(item.dueDay, today);
						return (
							<StCard
								variant="userEnroll"
								key={item.boardId}
								onClick={() => navigate(`/boards/${item.boardId}`)}
							>
								<StDate variant="userEnroll">D-{dDay}</StDate>
								<StImgWrapper variant="userEnroll">
									<img src={item.boardImage} loading="lazy" alt="enrollImage" />
								</StImgWrapper>
								<StContent variant="userEnroll">
									<p className="title">{item.title}</p>
									<StCardInfo variant="userEnroll">
										<StArea variant="userEnroll">{item.area}</StArea>
										<StDetailArea variant="userEnroll">{item.detailArea}</StDetailArea>
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

			{/* companyBoards 기업 상세페이지 */}
			<StCardGridContainer variant="Company">
				<StCards variant="Company">
					{companyBoards?.map(item => {
						const dDay = getDateDiff(item.dueDay, today);
						const boardId = item.boardId;
						// let isEditState = hoveritem.indexOf(boardId) === -1 ? false : true;
						console.log(boardId);
						return (
							<StCard variant="Company" key={item.boardId}>
								<StDate variant="Company">D-{dDay}</StDate>
								<StImgWrapper
									variant="Company" // onMouseOver={() => [setIsHovering(true), setHoverItem(true)]}
									// onMouseOut={() => [setIsHovering(false), setHoverItem(false)]}
									onMouseOver={() => setIsHovering(true)}
									onMouseOut={() => setIsHovering(false)}
								>
									{isHovering ? (
										<>
											<img src={item.boardImage} loading="lazy" alt="enrollImage" />
											<StHoverBox>
												<div>수정</div>
												<span>삭제</span>
											</StHoverBox>
										</>
									) : (
										<img src={item.boardImage} loading="lazy" alt="enrollImage" />
									)}
								</StImgWrapper>
								<StContent variant="Company">
									<p className="title">{item.title}</p>
									<StCardInfo variant="Company">
										<StArea variant="Company">{item.area}</StArea>
										<StDetailArea variant="Company">{item.detailArea}</StDetailArea>
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
		</>
	);
};

export default CardGrid;
