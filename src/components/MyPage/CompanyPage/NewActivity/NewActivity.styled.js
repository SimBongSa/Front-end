import styled from "styled-components";

export const NewActivityContainer = styled.section`
  max-width: 1024px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  display: grid;
`

export const NewActivityWrap = styled.div`
  gap: 3rem 1.25rem;
`

export const NewActivityCard = styled.article`
  position: relative;
  background-color: #aaaaaa;
  padding: 2rem 1.5rem 2.5rem;
  margin-top: 2rem;
  border-radius: 1.75rem;
  transition: .4s;
`

export const CardSymbol = styled.div`
  position: absolute;
  background: linear-gradient(157deg, hsl(210, 96%, 69%) -12%, hsl(210, 96%, 54%) 109%);
  width: 60px;
  height: 88px;
  right: 1.5rem;
  top: -1rem;
  padding-top: 1.25rem;
  text-align: center;
  user-select: none;
`