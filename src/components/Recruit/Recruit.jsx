import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PopupDom from "../Map/PopupDom";
import PopupPostCode from "../Map/PopupPostCode";
// import InPut from "../common/input/Input";
import { __createBoard } from "../../redux/modules/boardSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";
import {
	RecruitContainer,
	RecruitNav,
	ScrollDown,
	RecruitSec,
	AreaBtn,
	RecruitTA,
	CustomeDatePicker,
	PickerBox,
	ImgSize,
} from "./Recruit.styled";
import Tags from "./Tags/Tags";
import { useNavigate } from "react-router-dom";

const Recruit = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const status = useSelector(state => state.boards.status);
	console.log(status);

	const [isPopupOpen, setIsPopupOpen] = useState(false);

	// date picker
	const today = new Date();
	const due = new Date();
	const [startDate, setStartDate] = useState(today);
	const [endDate, setEndDate] = useState(null);
	const [dueDay, setDueDay] = useState(due.setHours(due.setMinutes(new Date(), 30), 17));
	// 팝업창 열기
	const openPostCode = () => {
		setIsPopupOpen(true);
	};

	// 팝업창 닫기
	const closePostCode = () => {
		setIsPopupOpen(false);
	};

	const onChange = dates => {
		const [start, end, due] = dates;
		setStartDate(start);
		setEndDate(end);
		setDueDay(due);
	};

	// const onChangeDue = day => {
	// 	const [due] = day;
	// 	setDueDay(due);
	// };

	const init = {
		title: "",
		content: "",
		dueDay: "",
		startDate: "",
		endDate: "",
		area: "",
		detailArea: "",
	};

	//폼데이터 전송 스테이트
	const [input, setInput] = useState(init);
	console.log(input);
	const [tags, setTags] = useState([]);
	const [boardImage, setBoardImage] = useState(null);
	const [address, setAddress] = useState("");

	// console.log("input =>", input);
	console.log("tags", tags);

	// 이미지 미리보기 스테이트
	const [uploadpreview, setUploadpreview] = useState("");

	//텍스트데이터 스테이즈 저장
	const onChangeInput = e => {
		const { name, value } = e.target;
		setInput({ ...input, [name]: value, area: address, tags: tags });
	};

	const onChangeTags = e => {
		const tag = e;
		setTags([...tags, tag]);
	};

	//이미지 스테이트저장, 미리보기 온체인지 핸들러
	const onChangeImage = e => {
		setBoardImage(e.target.files[0]);
		let reader = new FileReader();

		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onloadend = () => {
			const previewImgUrl = reader.result;
			if (previewImgUrl) {
				setUploadpreview(previewImgUrl);
			}
		};
	};

	const submitHandler = e => {
		e.preventDefault();
		dispatch(
			__createBoard({
				...input,
				boardImage,
				startDate: moment(startDate).format("YYYY-MM-DD"),
				endDate: moment(endDate).format("YYYY-MM-DD"),
				dueDay: moment(dueDay).format("YYYY-MM-DD"),
			})
		);
		if (status === 200) {
			alert("게시물 등록 완료");
			navigate("/boards");
		} else {
			alert("게시물 등록에 실패했습니다. 내용을 다시 확인해주세요");
		}
	};
	console.log("dueDay =>", dueDay);

	return (
		<div data-spy="scroll" data-target="#navbar">
			<RecruitContainer>
				<Layout>
					<h2>봉사 등록하기</h2>
					<FormBox onSubmit={submitHandler}>
						<form action="submit">
							<div class="leftBox">
								<h3>
									<span>봉사 활동</span>에 대해 궁금해요!
								</h3>
								<h4>봉사 내용 주제</h4>
								<Input
									placeholder="봉사 활동 주제"
									type="text"
									name="title"
									value={input.title}
									onChange={e => onChangeInput(e)}
								/>
								{/* 어린이 장애인 노인 다문화가정 환경 유기동물 */}
								<Input type="text" placeholder="카테고리" name="caregory" />

								<h4>봉사활동 날짜 및 시각</h4>
								<RegisterDatePicker
									locale={ko}
									selected={dueDay}
									onChange={date => setDueDay(date)}
									showTimeSelect
									minTime={due.setHours(due.setMinutes(new Date(), 0), 9)}
									maxTime={due.setHours(due.setMinutes(new Date(), 0), 18)}
									dateFormat="📅 yyyy년-MM월-dd일 / 🕜 aa h:mm "
								/>

								<Input
									placeholder="행사 주소(우편번호 검색 클릭)"
									type="text"
									name="area"
									value={address}
									onClick={openPostCode}
								/>
								<div id="popupDom">
									{isPopupOpen && (
										<PopupDom>
											<PopupPostCode setAddress={setAddress} onClose={closePostCode} />
										</PopupDom>
									)}
								</div>
								<Input
									type="text"
									placeholder="봉사활동 상세주소"
									name="detailArea"
									value={input.detailArea}
									onChange={e => onChangeInput(e)}
								/>
								<h4>봉사 내용 상세</h4>
								<TextArea
									placeholder="봉사 활동 내용"
									type="text"
									name="content"
									value={input.content}
									onChange={e => onChangeInput(e)}
									cols="30"
									rows="10"
								></TextArea>
								<h1>봉사활동을 잘 나타내 줄 이미지를 올려보세요</h1>
								<ImageInput type="text" placeholder="이미지" />
							</div>
							<div class="rightBox">
								<h3>
									<span>모집 활동</span>궁금해요!
									<p>봉사활동 모집기간</p>
									<RegisterDatePicker
										locale={ko}
										dateFormat="📅 yyyy년-MM월-dd일"
										selected={startDate}
										onChange={onChange}
										startDate={startDate}
										endDate={endDate}
										selectsRange
									/>
								</h3>
								<h1>어떤 자원봉사자를 희망하시나요?</h1>
								<Input type="text" placeholder="선호하는 지원자" />

								<div class="tag">
									<p>
										<span>#19세</span> <span>#남성</span>
									</p>
								</div>
								<button>등록하기</button>
							</div>
							<div></div>
						</form>
					</FormBox>
				</Layout>
			</RecruitContainer>
		</div>
	);
};

export default Recruit;

const Layout = styled.div`
	width: 1440px;
	margin: 300px auto;
`;

const FormBox = styled.form`
	& form {
		width: 100%;
		display: flex;
		justify-content: space-between;
		& div {
			display: flex;
			flex-direction: column;
			& h3 {
				font-size: 30px;

				& p {
					font-size: 20px;
				}

				& span {
					color: #66885d;
				}
			}
		}
	}
`;

const Input = styled.input`
	display: block;
	width: 590px;
	height: 60px;
	border-radius: 30px;
	/* background-image: url(); */
	background-position: center right 10px;
	background-repeat: no-repeat;
	margin-bottom: 10px;
	border: 1px solid #66885d;
	padding-left: 10px;
`;

const ImageInput = styled.input`
	display: block;
	width: 590px;
	height: 300px;
	border-radius: 30px;
	/* background-image: url(); */
	background-position: center right 10px;
	background-repeat: no-repeat;
	margin-bottom: 10px;
	border: 1px solid #66885d;
	padding-left: 10px;
`;

const TextArea = styled.textarea`
	margin: 1rem;
	width: 590x;
	border-radius: 10px;
	height: 300px;

	border: 1px solid #66885d;
	resize: none;
	textarea:focus {
		outline: none;
	}
	input:focus {
		outline: none;
	}
	button {
		width: 300px;
		height: 60px;
		border-radius: 30px;
		background-color: #66885d;
		border: none;
	}
`;

const RegisterDatePicker = styled(DatePicker)({
	margin: "12px",
	fontSize: "15px",
	padding: "20px",
	width: "590px",
	paddingLeft: "20px",
	border: "none",
	borderRadius: "15px",
	outline: "none",
	marginBottom: "1rem",
	background: `${props => props.theme.textColor}`,
});
