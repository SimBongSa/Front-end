import styled from "styled-components"

export const ProfileContainer = styled.div`
  float: left;
  position: fixed;
  margin-top: 10rem;
  margin-left: 2rem;
  border-radius: 5px;
  padding: 30px 10px 10px 10px;
  width: 200px;
	max-width: 100%;
	text-align: center;
  z-index: 1;
  & h3 {
    font-size: 1.2rem;
    margin: 10px 0
  }
  & h4 {
    text-align: left;
  }
  & h5 {
    text-align: left;
    margin: 1rem;
    color: gray;
    @media ( max-width: 1024px) {
      text-align: center;
    }
  }
  & p {
    text-align: left;
    color: gray;
    font-size: .9rem;
    width: 90%;
    margin: 1rem;
  }
  & img {
    width: 10rem;
    border: 1px solid #ffffff;
	  border-radius: 50%;
	  padding: 7px;
  }
  @media ( max-width: 1024px) {
    display: flex;
    position: sticky;
    flex-direction: column;
    position: relative;
    width: 90%;
    margin-top: 25rem;
    z-index: 1;
  }
`

export const ProfileBox = styled.div`
  background: #aaaaaa;
  padding: 30px 10px 10px 10px;
  width: 120%;
  @media ( max-width: 1024px) {
    flex-direction: column;
    margin: 0 auto;
    margin-top: -15rem;
    width: 500px;
  }
`

export const ProfileTag = styled.span`
	color: #231E39;
	background-color: #FEBB0B;
	border-radius: 3px;
	font-size: 14px;
	font-weight: bold;
	padding: 3px 7px;
	position: absolute;
	top: 4rem;
	left: 2rem;
  z-index: 4;
`

export const ProfileSkills = styled.div`
	text-align: left;
  & h5 {
    color: #ffffff;
    margin: 10px 0;
    margin-left: 10px;
  }
`
export const ProfileSkill = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
  & li {
    display: flex;
    border: 1px solid #232323;
    border-radius: 4px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 7px;
    padding: 7px;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-3%);
    }
  }
`

export const ProfileCategory = styled.h4`
  text-align: left;
  color: black;
  margin: 1rem;
  margin-top: 2rem;
`

export const ProfileMisc = styled.div`
  text-align: left;
  margin: 4rem 0rem 1rem 0rem;
  & h2 {
    font-size: 1.4rem;
  }
  & h4 {
    cursor: pointer;
    font-size: .8rem;
    margin-top: 2rem;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-15%);
    }
  }
  & span {
    margin-top: 1rem;
    position: absolute;
    width: 230px;
    height: 1px;
    background: #aaaaaa;
  }
`