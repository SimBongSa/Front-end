import { useEffect } from "react";
import { useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
	SearchBarContainer,
	SearchModal,
	SearchBarWrapper,
	SearchLabel,
	SearchList,
	CustomeDatePicker,
	PickerBox,
} from "./SearchBar.styled";
import Stbtn from "../common/button/Button";
import { __getSearchBoards } from "../../redux/modules/boardSlice";

const SearchBar = () => {
	
	const dispatch = useDispatch();
	const [modal, setModal] = useState(false);
	const [animation, setAnimation] = useState(false);
	const node = useRef();

	// modal 바깥 클릭 시 닫히는 기능
	useEffect(() => {
		const clickOutside = e => {
			if (modal && node.current && !node.current.contains(e.target)) {
				setAnimation(true);
				setTimeout(() => {
					setAnimation(false);
					setModal(false);
				}, 500);
			}
		};
		document.addEventListener("mousedown", clickOutside);
		return () => {
			document.removeEventListener("mousedown", clickOutside);
		};
	}, [modal]);

	// date picker
	const today = new Date();
	const [startDate, setStartDate] = useState(today);
	const [endDate, setEndDate] = useState(today);

	//search state
	const [search, setSearch] = useState({
		category: "",
		location: "",
	});
	console.log(search);

	const searchChange = (e) => {
		const { name, value } = e.target;
		setSearch({...search, [name]: value});
	}

	const searchHandler = e => {
		e.preventDefault();
		dispatch(__getSearchBoards({
			...search,
			startDate : moment(startDate).format("YYYY-MM-DD"), 
			endDate : moment(endDate).format("YYYY-MM-DD"),
		}));
		console.log(search.category)
	};
	console.log(search.category);

	return (
		<SearchBarContainer ref={node} modal={modal} animation={animation}>
			{modal === false ? (
				<Stbtn variant="searchbar-open" onClick={() => setModal(prev => !prev)}>
					<StMagnifying />
					<span>어떤 봉사활동을 찾고 계세요?</span>
					<MagnityingBtn />
				</Stbtn>
			) : (
				<form onSubmit={searchHandler}>
					<SearchModal animation={animation}>
						<h1>활동 검색하기</h1>
						<SearchBarWrapper>
							<SearchLabel>
								<SearchList>
									<li>
										<h4>Category</h4>
										<select
											name={"category"}
											onChange={searchChange}
										>
											<option value={"CHILD"}>어린이</option>
											<option value={"DISABLED"}>장애인</option>
											<option value={"SENIOR"}>노인</option>
											<option value={"MULTICULTURAL_FAMILY"}>다문화가정</option>
											<option value={"ENVIRONMENT"}>환경</option>
											<option value={"ABANDONED_ANIMAL"}>유기동물</option>
										</select>
									</li>
									<li>
											<PickerBox>
												<CustomeDatePicker
													name={'startDate'}
													locale={ko}
													dateFormat="📅 yyyy년-MM월-dd일"
													selected={startDate}
													onChange={date => setStartDate(date)}
													selectsStart
													startDate={startDate}
													endDate={endDate}
												/>
												<CustomeDatePicker
													name={'endDate'}
													locale={ko}
													dateFormat="📅 yyyy년-MM월-dd일 "
													selected={endDate}
													onChange={date => setEndDate(date)}
													selectsEnd
													startDate={startDate}
													endDate={endDate}
													minDate={startDate}
												/>
											</PickerBox>
									</li>
									<li>
										<h4>Location</h4>
										<select
											name={"location"}
											onChange={searchChange}
										>
											<option value={'ALL'}>전체</option>
											<option value={'서울'}>서울</option>
											<option value={'경기'}>경기</option>
											<option value={'인천'}>인천</option>
											<option value={'강원'}>강원</option>
											<option value={'충북'}>충북</option>
											<option value={'충남'}>충남</option>
											<option value={'세종'}>세종</option>
											<option value={'전북'}>전북</option>
											<option value={'전남'}>전남</option>
											<option value={'경북'}>경북</option>
											<option value={'경남'}>경남</option>
											<option value={'제주'}>제주</option>
										</select>
									</li>
								</SearchList>
								<Stbtn variant="search">검색</Stbtn>
							</SearchLabel>
						</SearchBarWrapper>
					</SearchModal>
				</form>
			)}
		</SearchBarContainer>
	);
};

export default SearchBar;

export const StMagnifying = styled(HiMagnifyingGlass)`
	font-size: 1.5rem;
	margin: 15px;
`;

export const MagnityingBtn = styled(HiMagnifyingGlass)`
	position: fixed;
	font-size: 1rem;
	background: ${props => props.theme.btnColor};
	color: ${props => props.theme.bgColor};
	border-radius: 50%;
	padding: 3px;
	width: 35px;
	height: 35px;
	right: 10px;
`;
