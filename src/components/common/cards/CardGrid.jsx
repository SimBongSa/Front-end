import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getCookieToken } from "../../../utils/cookie";
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
	StBoardMisc,
} from "./CardGrid.styled";
import { __delBoard, __getBoardId } from "../../../redux/modules/boardSlice";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

const CardGrid = ({ gridColumn, companyBoards, boards, userEnroll, userWait }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const username = getCookieToken(["username"]);

	const getDateDiff = (d1, d2) => {
		const dueDay = new Date(d1);
		const today = new Date(d2);
		const diffDate = dueDay.getTime() - today.getTime();
		return Math.round(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
	};

	const today = new Date().toISOString().split("T")[0];

	const [isHovering, setIsHovering] = useState("");

	return (
		<>
			<ToastContainer />
			<StCardGridContainer variant="board">
				<StCards gridColumn={gridColumn} variant="board">
					{/* boards 전체 게시물 리스트  */}
					{boards?.map(item => {
						const dDay = getDateDiff(item.dueDay, today);
						return (
							<StCard
								variant="board"
								key={item.boardId}
								onClick={() => navigate(`/boards/${item.boardId}`)}
							>
								<StDate variant="board">D-{dDay}</StDate>
								<StImgWrapper variant="board">
									<img src={item.boardImage} loading="lazy" alt="thumbnail" />
								</StImgWrapper>
								<StContent variant="board">
									<p className="title">{item.title}</p>
									<StCardInfo variant="board">
										<StArea variant="board">{item.area}</StArea>
										<StDetailArea variant="board">{item.detailArea}</StDetailArea>
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
			<StCardGridContainer variant="company">
				<StCards variant="company">
					{companyBoards?.map(item => {
						const dDay = getDateDiff(item.dueDay, today);
						return (
							<>
								{item.author === username ? (
									<StCard variant="company" key={item.boardId}>
										<StDate variant="company">D-{dDay}</StDate>
										<StImgWrapper
											variant="myCompany"
											onMouseEnter={() => setIsHovering(item.boardId)}
											onMouseLeave={() => setIsHovering("")}
										>
											{isHovering === item.boardId && (
												<StBoardMisc>
													<span
														onClick={() => {
															dispatch(__getBoardId(item.boardId));
															navigate(`/edit/${item.boardId}`);
														}}
													>
														수정
													</span>
													<span
														onClick={() => {
															dispatch(__delBoard(item.boardId));
															toast.success("게시물이 삭제되었습니다.");
															setTimeout(() => {
																window.location.reload();
															}, 1000);
														}}
													>
														삭제
													</span>
												</StBoardMisc>
											)}
											<img
												src={item.boardImage}
												loading="lazy"
												alt="enrollImage"
												onClick={() => {
													navigate(`/boards/${item.boardId}`);
												}}
											/>
										</StImgWrapper>
										<StContent variant="company">
											<p className="title">{item.title}</p>
											<StCardInfo variant="company">
												<StArea variant="company">{item.area}</StArea>
												<StDetailArea variant="company">{item.detailArea}</StDetailArea>
											</StCardInfo>
											<StTagBox>
												{item?.tags?.map(tag => {
													return <li>{tag}</li>;
												})}
											</StTagBox>
										</StContent>
									</StCard>
								) : (
									<StCard variant="company" key={item.boardId}>
										<StDate variant="company">D-{dDay}</StDate>
										<StImgWrapper variant="company">
											<img src={item.boardImage} loading="lazy" alt="enrollImage" />
										</StImgWrapper>
										<StContent variant="company">
											<p className="title">{item.title}</p>
											<StCardInfo variant="company">
												<StArea variant="company">{item.area}</StArea>
												<StDetailArea variant="company">{item.detailArea}</StDetailArea>
											</StCardInfo>
											<StTagBox>
												{item?.tags?.map(tag => {
													return <li>{tag}</li>;
												})}
											</StTagBox>
										</StContent>
									</StCard>
								)}
							</>
						);
					})}
				</StCards>
			</StCardGridContainer>
		</>
	);
};

export default CardGrid;
