import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getBoardId } from "../../../redux/modules/boardSlice";
import styled from "styled-components";
import { StSidePanel, StContact, StContactWrap } from "./ChatList.styled";

export const ChatList = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const chatList = useSelector(state => state?.chat?.chatList);

	return (
		<StSidePanel>
			<h1>문의 내역</h1>
			<StContact>
				<ul>
					{chatList.length === 0 ? (
						<div
							onClick={() => {
								navigate("/boards");
							}}
						>
							<h4>문의 내역이 없어요!</h4>
							<h4>게시물 조회하기</h4>
						</div>
					) : (
						chatList?.map(item => {
							return (
								<StListGroup
									key={item.chatRoomId}
									onClick={() => {
										navigate(`/chat/${item.chatRoomId}`);
										dispatch(__getBoardId(item.boardId));
									}}
								>
									<StContactWrap>{item.roomName}</StContactWrap>
								</StListGroup>
							);
						})
					)}
				</ul>
			</StContact>
		</StSidePanel>
	);
};

export default ChatList;

export const StListGroup = styled.li`
	margin: auto 15px;
	padding: 0;
`;
