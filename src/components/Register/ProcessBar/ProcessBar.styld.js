import styled from "styled-components"

export const ProcessContainer = styled.div`
  width: 50%;
  margin: 50px auto;
  margin-bottom: 8rem;
`

export const ProcessWrap = styled.div`
  width: 100%;
  min-width: 320px;
  display: flex;
`

export const ProcessStepCont = styled.div`
  font-family: sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`

export const ProcessStep = styled.div`
  cursor: pointer;
  border: 5px #ebebeb solid;
  border-radius: 100%;
  line-height: 0;
  background: #959595;
  text-align: center;
  align-items: center;
  justify-content: center;
  align-self: center;
  display: flex;
  color: #fff;
  width: 35px;
  height: 35px;
  font-weight: 700;
  margin-bottom: 7px;
  z-index: 2;
`

export const ProcessActive = styled.div`
  cursor: pointer;
  border: 5px #ebebeb solid;
  border-radius: 100%;
  line-height: 0;
  background: green;
  text-align: center;
  align-items: center;
  justify-content: center;
  align-self: center;
  display: flex;
  color: #fff;
  width: 35px;
  height: 35px;
  font-weight: 700;
  margin-bottom: 7px;
  z-index: 2;
  transition: color 0.5s;
`

export const ProcessItem = styled.div`
  width: 25%;
  position: relative;
  &:nth-child(1) .peocess-step:before {
    content: '1';
  }
  &:nth-child(2) .peocess-step:before {
    content: '2';
  }
  &:last-child .peocess-step:before {
    content: '3';
  }
  &:not(:first-child)::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    top: 17.5px;
    left: calc(-50% + 15px);
    right: 0;
    border: 2px #ebebeb solid;
    -o-transition: .4s;
    -ms-transition: .4s;
    -moz-transition: .4s;
    -webkit-transition: .4s;
    transition: .4s;
  }
`

export const ProcessLabel = styled.span`
  color: ${(props) => props.theme.textColor};
  font-weight: 600;
  width: 100%;
  text-align: center;
  margin-top: 5rem;
  margin-left: -20px;
`

export const BtnContainer = styled.div`
  display: flex;
  width: 200px;
  margin: 3rem;
  flex-direction: row;
  justify-content: space-between;
  flex-direction: row-reverse;
  & button {
    cursor: pointer;
    border: none;
    background: transparent;
    font-size: 2rem;
    color: ${(props) => props.theme.textColor};
    transition: all 0.3s;
    &:hover {
      transform: translateY(-7%);
    }
  }
`