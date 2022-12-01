import styled from "styled-components";

export const StSidePanel = styled.div`
  float: left;
  width: 25%;
  height: 100%;
  background: #232323;
  & h1 {
    font-size: 2rem;
    padding: 2rem;
  }
`

export const StContact = styled.div`
  height: 90%;
  overflow-y: scroll;
  overflow-x: hidden;
  &:nth-child(1) {
    padding-top: 25px;
  }
  & li {
    position: relative;
    padding: 10px 0 15px 0;
    font-size: 0.9em;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      background: green;
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
  width: 88%;
  margin: 0 auto;
  position: relative;
  border-bottom: 1px solid #ccc;
  & img {
    width: 40px;
    border-radius: 50%;
    float: left;
    margin-right: 10px;
    @media screen and (max-width: 768px) {
      margin-right: 0px;
    }
  }
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