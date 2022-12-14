import styled from "styled-components";

export const StSidePanel = styled.div`
  float: left;
  width: 25%;
  height: 100%;
  overflow: hidden;
  background: ${(props) => props.theme.subBgColor};
  border-right: 10px solid ${(props) => props.theme.bgColor};
  & h1 {
    font-size: 1.8rem;
    padding-top: 2rem;
    text-align: center;
    font-weight: 300;
  }
`

export const StContact = styled.div`
  height: 90%;
  overflow-y: scroll;
  overflow-x: hidden;
  & h4 {
    cursor: pointer;
    padding-top: 2rem;
    padding-left: 2rem;
  }
  &:nth-child(1) {
    padding-top: 25px;
  }
  & li {
    position: relative;
    padding: 2rem;
    font-size: 1.2em;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.5s;
    border-bottom: 1px solid ${(props) => props.theme.subTextColor};
    &:hover {
      color: ${(props) => props.theme.bgColor};
      background: ${(props) => props.theme.btnColor};
    }
    @media screen and (max-width: 768px) {
      padding: 6px 0 46px 8px;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
`

export const StContactWrap = styled.div`
  width: 100%;
  padding-top: 10px;
  margin: 0 auto;
  font-size: .95rem;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (max-width: $break) {
    width: 100%;
  }
`

export const StContactMeta = styled.div`
  padding: 5px 0 0 0;
  & .name {
    font-weight: 600;
  }
  & .time {
    margin: 5px 0 0 0;
    padding: 0 0 1px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (max-width: $break) {
    display: none;
  }
`