import styled from "styled-components";

export const StChatContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  float: right;
  position: relative;
  height: 100%;
  width: 100%;
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.subBgColor};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const StMyMessage = styled.li`
  display: inline-flex;
  clear: both;
  float: right;
  height: max-content;
  width: fit-content;
  max-width: 100%;
  align-items: end;
  & h4 {
    border-radius: 50px 0px 50px 50px;
    width: fit-content;
    margin: 15px 20px 0px 0px;
    padding: 15px;
    font-size: 12px;
    background: white;
    color: #232323;
    border: 2px solid ${(props) => props.theme.btnColor};
  }
  & span {
    color: ${(props) => props.theme.textColor};
    font-size: 0.7rem;
    margin-right: 10px;
  }
`

export const StReceiveMsg = styled.li`
  display: flex;
  flex-direction: row-reverse;
  clear: both;
  float: left;
  height: max-content;
  width: fit-content;
  max-width: 60%;
  align-items: end;
  & h4 {
    border-radius: 0px 50px 50px 50px;
    width: fit-content;
    margin: 15px 0px 0px 20px;
    padding: 15px;
    font-size: 12px;
    background: white;
    color: #232323;
    border: 2px solid ${(props) => props.theme.subTextColor};
  }
  & span {
    color: #232323;
    font-size: 0.7rem;
    margin-left: 10px;
  }
`

export const ChatCard = styled.div`
  display: flex;
  position: sticky;
  position: -webkit-sticky;
  font-size: 0.9rem;
  cursor: pointer;
  clear: both;
  width: 30%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 2rem;
  top: 10px;
  height: 3rem;
  border: none;
  border-radius: 20px;
  color: #ccc;
  background: #232323;
  transition: all 0.3s;
  & h2 {
    width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & img {
    display: none;
    width: 120px;
    max-height: 80px;
    border-radius: 15px;
    margin-right: 2rem;
  }
  &:hover {
    width: 95%;
    height: 7rem;
    justify-content: flex-start;
    padding: 2rem;
    & h2 {
      width: 100%;
      overflow: none;
      text-overflow: clip;
    }
    & img {
      display: block;
      float: left;
    }
    & span {
      display: block;
    }
  }
`

export const ChatCardText = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  & h2 {
    font-weight: 300;
    text-align: center;
  }
  & span {
    display: none;
    font-weight: 300;
    font-size: 12px;
    &:nth-child(2) {
      margin-top: 15px;
    }
  }
`