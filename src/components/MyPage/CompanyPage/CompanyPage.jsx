import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getCompanyInfo } from "../../../redux/modules/mypageSlice";
import { getCookieToken } from "../../../utils/cookie";
import { OrganizationPageContainer, BtnContainer } from "./CompanyPage.styled";
import styled from "styled-components";
import Profile from "../Profile/Profile";

const OrganizationPage = () => {

  const token = getCookieToken("access-token");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getCompanyInfo(token));
  }, [dispatch, token])

  const companyInfo = useSelector((state) => state.mypage.company)
  console.log(companyInfo)

  return (
    <>
      <Profile 
        email={companyInfo.email} 
        name={companyInfo.name} 
        phoneNumber={companyInfo.phoneNumber} 
        username={companyInfo.username}
        introduction={companyInfo.introduction}
        profileImage={companyInfo.profileImage}
      />

      <OrganizationPageContainer>
        <BtnContainer>
        <input type="radio" name="option" id="newActivity" />
        <input type="radio" name="option" id="myActivity" />
          <nav>
            <label htmlFor="newActivity">새로운 봉사자 신청</label>
            <label htmlFor="myActivity">나의 봉사</label>
          </nav>
        </BtnContainer>
      </OrganizationPageContainer>
      
    </>
  )
};

export default OrganizationPage;