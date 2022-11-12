import styled from "styled-components";

const Review = () => {
  return (
    <ReviewContainer>
      <ReviewItem>
        <ul>

          <li>
            <ReviewHandle>제목임 ㅋㅋ</ReviewHandle>
            <ReviewPanel className="acc-panel">
              <p>내용 1번임 ㅋㅋ</p>
            </ReviewPanel>
          </li>
          
          <li>
            <ReviewHandle>제목임 ㅋㅋ</ReviewHandle>
            <ReviewPanel className="acc-panel">
              <p>내용 2번임 ㅋㅋ</p>
            </ReviewPanel>
          </li>

          <li>
            <ReviewHandle>제목임 ㅋㅋ</ReviewHandle>
            <ReviewPanel className="acc-panel">
              <p>내용 3번임 ㅋㅋ</p>
            </ReviewPanel>
          </li>

          <li>
            <ReviewHandle>제목임 ㅋㅋ</ReviewHandle>
            <ReviewPanel className="acc-panel">
              <p>내용 4번임 ㅋㅋ</p>
            </ReviewPanel>
          </li>

        </ul>
      </ReviewItem>
    </ReviewContainer>
  )
};

export default Review;

export const ReviewContainer = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  /* margin-left: 12rem; */
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1rem;
  margin-bottom: 5rem;
`

export const ReviewItem = styled.div`
  display:block;
  position: relative;
  width: 500px;
  margin: 10px auto;
  height: auto;
  box-shadow: 0 2px 5px rgba(0,0,0,.25);
  & > ul {
    display: block;
    list-style: none;
    padding :0;
    margin: 0;
  }
  & > ul > li {
    display: block;
    position: relative;
    margin-bottom: -1px;
    overflow: hidden;
    color: #486992;
    background: #fafafa;
    border: 1px solid #D1D1D1;
  }
`

export const ReviewHandle = styled.button`
  cursor: pointer;
  display: block;
  position: relative;
  padding: 1.5em;
  text-align: left;
  /* color: #486992; */
  background: #f1f1f1;
  text-decoration: none;
  z-index: 3;
  width: 100%;
  border: none;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.8);
  transition: all .25s ease;
  &:hover {
    color: #2F71C4;
    background: #fafafa;
  }
  &::before, &::after {
    content: '';
    position: absolute;
    transition: all .3s ease;
  }
  &::before {
    width: 1em;
    border-top: .15em solid;
    border-bottom: .15em solid;
    top: 50%;
    margin-top: -0.15em; 
    right: 1.45em;
  }
  &::after {
    height: 1em;
    width: 0.3em;
    border-top: 0.5em solid;
    border-bottom: 0.5em solid;
    right: 1.8em;
    top: 50%;
    margin-top: -0.55em;
  }
  &:focus {
    outline: none;
    background: #e7e7e7;
  }
  &:focus::after {
    height: 0;
    border: 0;
    margin-top: 0;
    opacity: 0;
  }
  &:focus + .acc-panel {
    margin-top: 0;
    border-top: 1px solid #d1d1d1;
    transition: all 0.6s ease-in-out;
  }
`

export const ReviewPanel = styled.div`
  padding: 1.5em;
  position: relative;
  float: left;
  width: 100%;
  clear: both;
  margin-top: -100%;
  z-index: 1;
  transition: all 1.2s ease;
  & * {
    /* opacity: 0; */
    transition: all 1s linear;
  }
  &:focus + .acc-panel {
    opacity: 1;
  }
  & p {
    color: black;
  }
`