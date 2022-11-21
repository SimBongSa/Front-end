import styled from "styled-components"

export const InputContainer = styled.div`
  width: 600px;
  height: 800px;
  position: relative;
  margin: auto;
  margin-bottom: 10rem;
  box-shadow: 2px 10px 40px rgba(22,20,19,0.4);
  border-radius: 10px;
  margin-top: 50px;
  background: #aaaaaa;
  transition: all 0.5s;
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0px 50px;
  text-align: center;
  margin-top: -550px;
  & img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`