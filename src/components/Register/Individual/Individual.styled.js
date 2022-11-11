import styled from "styled-components"

export const InputContainer = styled.div`
  width: 600px;
  height: 1000px;
  position: relative;
  margin: auto;
  box-shadow: 2px 10px 40px rgba(22,20,19,0.4);
  border-radius: 10px;
  margin-top: 50px;
  background: #aaaaaa;
`

export const InputForm = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0px 50px;
  text-align: center;
`

export const InputBox = styled.div`
  width: calc(385px - 50px * 2);
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0px 50px;
  text-align: center;
  margin-top: -250px;
`