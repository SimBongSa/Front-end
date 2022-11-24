import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __getBoardId, __editBoard } from "../../redux/modules/boardSlice";
import styled from "styled-components";
import { DetailContainer, DetailContent } from "./Detail.styled";
import MainBg from "../MainBg/MainBg";
import PopupDom from "../Map/PopupDom";
import PopupPostCode from "../Map/PopupPostCode";

const DetailEdit = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [boardImage, setBoardImage] = useState(null);
  const [input, setInput] = useState("");
  const [uploadpreview, setUploadpreview] = useState("");

  const boardsId = useSelector((state) => state?.boards?.boardsId);

  useEffect(() => {
    DetailEdit();
  }, [DetailEdit]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };
  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  //이미지 스테이트저장
  const onChangeImage = (e) => {
    setBoardImage(e.target.files[0]);

    // 미리보기 온체인지 핸들러
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

  //해당 페이지의 id에 해당되는 객체 불러오기
  console.log(boardsId);

  useEffect(() => {
    dispatch(__getBoardId(id));
  }, [dispatch, id]);

  const onChangeHandler = (e) => {
    console.log("인풋=>", input);
    const { name, value } = e.target;
    // setInput({ ...input, [name]: value, area: address });
    setInput({ ...input, [name]: value });
  };
  const upDate = { ...input, boardImage };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__editBoard({ upDate, id }));
    // navigate(`/detail/${id}`);
  };

  console.log("Detail.jsx boardsId =>", boardsId);

  return (
    <form onSubmit={onSubmitHandler}>
      <MainBg image={boardsId?.boardImage} />

      <DetailContainer>
        <DetailContent>
          <Content>
            봉사 활동 주제:
            <input
              type="text"
              defaultValue={boardsId?.title}
              name={"title"}
              onChange={onChangeHandler}
            />
          </Content>

          <Content>
            봉사 모집 시작일:
            <input
              type="date"
              defaultValue={boardsId?.startDate}
              name={"startDate"}
              onChange={onChangeHandler}
            />
          </Content>

          <Content>
            봉사 모집 마감일:
            <input
              type="date"
              defaultValue={boardsId?.endDate}
              name={"endDate"}
              onChange={onChangeHandler}
            />
          </Content>

          <Content>
            행사 일:
            <input
              type="date"
              defaultValue={boardsId?.dueDay}
              name={"dueDay"}
              onChange={onChangeHandler}
            />
          </Content>

          <Content>
            봉사 활동 장소:
            <input
              type="text"
              defaultValue={boardsId?.area}
              name={"area"}
              onChange={onChangeHandler}
            />
          </Content>

          {/* <Content>
            <p>행사 장소</p>
            <input
              placeholder="행사 장소"
              type="text"
              name="area"
              value={address}
              
            />
        
            <button type="button" onClick={openPostCode}>
              우편번호 검색
            </button>
         
            <div id="popupDom" style={{ position: "fixed" }}>
              {isPopupOpen && (
                <PopupDom>
                  <PopupPostCode
                    setAddress={setAddress}
                    onClose={closePostCode}
                  />
                </PopupDom>
              )}
            </div>
          </Content> */}

          <Content>
            행사 상세 주소:
            <input
              type="text"
              name={"detailArea"}
              defaultValue={boardsId?.detailArea}
              onChange={onChangeHandler}
            />
          </Content>

          <Content>
            봉사 내용 및 설명:
            <input
              type="text"
              defaultValue={boardsId?.content}
              name={"content"}
              onChange={onChangeHandler}
            />
          </Content>
          <Content>
            <ImgSize src={uploadpreview} alt="" />
            <input
              name="thumbNail"
              type={"file"}
              accept={"image/*"}
              placeholder="이미지업로드"
              onChange={onChangeImage}
            />
          </Content>
        </DetailContent>
      </DetailContainer>
      {/* <button type={"submit"} onClick={() => navigate(`/boards/${id}`)}> */}
      <button type={"submit"}>수정 완료</button>
    </form>
  );
};

export default DetailEdit;

const Content = styled.li`
  text-align: center;
  margin-top: 20px;
  list-style: none;
  padding-left: 0px;
`;

export const ImgSize = styled.img`
  width: 70px;
  height: 70px;
`;
