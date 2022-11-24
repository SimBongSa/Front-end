import { useState } from "react";
import styled from "styled-components";

const Tags = ({ category, onChangeTags }) => {

  const [check, setChecked] = useState(false);

  const [categories] = useState([{CHILD : "어린이"}, {DISABLED : "장애인"}, {SENIOR : "노인"}, {MULTICULTURAL_FAMILY : "다문화가정"}, {ENVIRONMENT : "환경"}, {ABONDONED_ANIMAL : "유기동물"}]);
  const [conditions] = useState([{ADULT: "성인"}, {MALE: "남성"}, {FEMALE: "여성"}]);
  const [skills] = useState([{ACTIVE: "활발한 사람이 좋아요"}, {LIKE_CHILD : "아이를 좋아하는 분"}, {CAREFUL: "꼼꼼한 사람이 좋아요"}, {MILITARY: "군필자를 우대해요"}, {LIKE_ANIMAL: "동물을 사랑하는 분"}])

  const checkHandler = ({ target }) => {
    onChangeTags(target.id)
  }

  return (
    <TagWrap>
      <TagColumn>
        <ul>
          {
            category === true ? (
              <>
                {
                  categories.map((item) => {
                    return(
                      <li key={Object.keys(item)}>
                        <input type="checkbox" id={Object.keys(item)} value={Object.keys(item)} onChange={(e) => checkHandler(e)} name="tags" />
                        <label htmlFor={Object.keys(item)}>{Object.values(item)}</label>
                      </li>
                    )
                  })
                }
              </>
            ) : null
          }

          {
            category === false ? (
              <>
                {
                  conditions.map((item) => {
                    return (
                      <li key={Object.keys(item)}>
                        <input type="checkbox" id={Object.keys(item)} value={Object.keys(item)} onChange={(e) => checkHandler(e)} name="tags"/>
                        <label htmlFor={Object.keys(item)}>{Object.values(item)}</label>
                      </li>
                    )
                  })
                }
                {
                  skills.map((item) => {
                    return (
                      <li key={Object.keys(item)}>
                        <input type="checkbox" id={Object.keys(item)} value={Object.keys(item)} onChange={(e) => checkHandler(e)} name="tags" />
                        <label htmlFor={Object.keys(item)}>{Object.values(item)}</label>
                      </li>
                    )
                  })
                }
              </>
            ) : null
          }
        </ul>
      </TagColumn>
    </TagWrap>
  )
};

export default Tags;

export const TagWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TagColumn = styled.div`
  display: block;
  position: relative;
  height: auto;
  font-size: 20px;
  & ul {
    list-style: none;
    margin: 0rem 15rem 5rem 15rem;
    padding: 0;
    @media ( max-width: 1024px) {
      margin: 0;
    }
    & li {
      display: block;
      position: relative;
      float: left;
      justify-content: center;
      align-items: center;   
      width: auto;
      height: 80px;
      user-select: none;
      & input[type="checkbox"] {
        position: absolute;
        visibility: hidden;
        &:checked ~ label {
          color: ${(props) => props.theme.btnColor};
        }
      }
      & label {
        display: block;
        position: relative;
        font-weight: 300;
        font-size: 1.35em;
        padding: 25px 25px 25px 80px;
        margin: 10px auto;
        height: 30px;
        z-index: 9;
        cursor: pointer;
        transition: all 0.25s linear;
      }
      &:hover label {
        color: ${(props) => props.theme.btnColor};
      }
    }
  }
`;