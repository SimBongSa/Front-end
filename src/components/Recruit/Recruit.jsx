import { useState } from "react";
import { useDispatch } from "react-redux";
import PopupDom from "../Map/PopupDom";
import PopupPostCode from "../Map/PopupPostCode";
// import InPut from "../common/input/Input";
import { __createBoard } from "../../redux/modules/boardSlice";
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

const Recruit = () => {
	const dispatch = useDispatch();
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	// date picker
	const today = new Date();
	const [startDate, setStartDate] = useState(today);
	const [endDate, setEndDate] = useState(null);
	const [dueDay, setDueDay] = useState(new Date());

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
	};

	return (
		<div data-spy="scroll" data-target="#navbar">
			<RecruitContainer>
				{/* <form onSubmit={submitHandler}>
					<RecruitSec className="section section1" id="section1">
						<h1>봉사 등록하기</h1>
						<h1>봉사 활동에 대해 궁금해요!</h1>
						<Tags category={true} onChangeTags={onChangeTags} />
						<Input
							placeholder="봉사 활동 주제"
							type="text"
							name="title"
							value={input.title}
							onChange={e => onChangeInput(e)}
						/>
						<RecruitTA
							placeholder="봉사 활동 내용"
							type="text"
							name="content"
							value={input.content}
							onChange={e => onChangeInput(e)}
						/>
					</RecruitSec>

					<RecruitSec className="section section2" id="section2">
						<h1>언제, 어디서 열리나요?</h1>
						<PickerBox>
							<CustomeDatePicker
								locale={ko}
								dateFormat="📅 yyyy년-MM월-dd일"
								selected={startDate}
								onChange={onChange}
								startDate={startDate}
								endDate={endDate}
								selectsRange
							/>
							<CustomeDatePicker
								locale={ko}
								dateFormat="📅 yyyy년-MM월-dd일 "
								selected={dueDay}
								onChange={date => setDueDay(date)}
							/>
						</PickerBox>
						<Input
							placeholder="행사 장소(우편번호 검색 클릭)"
							type="text"
							name="area"
							value={address}
							readOnly
						/>
						<AreaBtn type="button" onClick={openPostCode}>
							우편번호 검색
						</AreaBtn>
						<div id="popupDom">
							{isPopupOpen && (
								<PopupDom>
									<PopupPostCode setAddress={setAddress} onClose={closePostCode} />
								</PopupDom>
							)}
						</div>
						<Input
							placeholder="상세 주소"
							type="text"
							name="detailArea"
							value={input.detailArea}
							onChange={e => onChangeInput(e)}
						/>
					</RecruitSec>

					<RecruitSec className="section section3" id="section3">
						<h1>어떤 자원봉사자를 희망하시나요?</h1>
						<Tags category={false} onChangeTags={onChangeTags} />
					</RecruitSec>

					<RecruitSec className="section section4" id="section4">
						<h1>마지막으로, 봉사활동을 잘 나타내 줄 이미지를 올려보세요</h1>
						<ImgSize src={uploadpreview} alt="" />
						<Input
							name="thumbNail"
							type={"file"}
							accept={"image/*"}
							placeholder="이미지업로드"
							onChange={onChangeImage}
						/>
						<button>봉사활동 등록하기</button>
					</RecruitSec>
				</form> */}

				<Layout>
					<h2>봉사 등록하기</h2>
					<FormBox>
						<form action="submit">
							<div class="leftBox">
								<h3>
									<span>봉사 활동</span>에 대해 궁금해요!
								</h3>
								<Input type="text" placeholder="내용" />
								<Input type="text" placeholder="카테고리" />
								<Input type="text" placeholder="봉사 기간" />
								<Input type="text" placeholder="봉사 장소" />
								<TextArea name="" id="" cols="30" rows="10"></TextArea>
								<Input type="text" placeholder="이미지" />
							</div>
							<div class="rightBox">
								<h3>
									<span>모집 활동</span>궁금해요!
								</h3>
								<Input type="text" placeholder="기간" />
								<Input type="text" placeholder="필수" />
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
	margin: 0 auto;
	& h2 {
		color: #333;
		z-index: 1000;
	}
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

const TextArea = styled.textarea`
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
