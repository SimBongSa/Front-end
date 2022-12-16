import CardGrid from "../common/cards/CardGrid";
import Stbtn from "../common/button/Button";
import { BoardContainer, BoardContent, ListMap, StMap, StArrow } from "./BoardList.styled";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard, __getBoardCnt } from "../../redux/modules/boardSlice";
import { ToastContainer } from "react-toastify";
import KaMarker from "./../Map/KaMarker";
import ClipLoader from "react-spinners/ClipLoader";

const Board = () => {
	const dispatch = useDispatch();
	const [modal, setModal] = useState(false);

	const boardsCnt = useSelector((state) => state.boards.boardsCnt);
	const { boards, isLoading } = useSelector((state) => ({
		boards: state.boards.boards,
		isLoading: state.boards.isLoading,
	}));

	// 무한 스크롤
	const page = useRef(1);
	const size = useRef(6);
	const [bottom, setBottom] = useState(null);
	const bottomObserver = useRef(null);

	useEffect(() => {
		window.scrollTo({top: 0, left: 0});
		dispatch(__getBoard({ page: page.current, size: size.current }));
		page.current++;
	}, [dispatch])

	useEffect(() => {
		dispatch(__getBoardCnt());
		
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					dispatch(__getBoardCnt());
					dispatch(__getBoard({ page: page.current++, size: size.current }))
				}
			},
			{ threshold: 1, rootMargin: '-50px' },
		);
		bottomObserver.current = observer;
	}, [dispatch]);

	useEffect(() => {
		const observer = bottomObserver.current;
		if (bottom) {
			observer.observe(bottom);
		}
		return () => {
			if (bottom) {
				observer.unobserve(bottom);
			}
		};
	}, [bottom]);

	return (
		<BoardContainer>
			<ToastContainer/>
			<BoardContent>
				<Stbtn 
					variant="scroll-to-top" 
					onClick={() => {
						window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
					}}>
						<StArrow/>
				</Stbtn>
				<Stbtn 
					variant="boards-map-open" 
					onClick={() => {
						setModal(!modal)
					}}>
					지도 보기 <StMap />
				</Stbtn>
				{modal ? (
					<ListMap>
						<Stbtn variant="boards-map-close" onClick={() => setModal(false)}>
							X
						</Stbtn>
						<KaMarker boards={boards} />
					</ListMap>
				) : null}
				<CardGrid boards={boards} gridColumn={5} />
				{
					isLoading ? 
						<ClipLoader
							size={150}
							color={(props) => props.theme.btnColor}
						/> : null
				}
			</BoardContent>
			{ boardsCnt === boards.length ? null : <div style={{ marginTop: '25rem'}} ref={setBottom}/>}
		</BoardContainer>
	);
};

export default Board;