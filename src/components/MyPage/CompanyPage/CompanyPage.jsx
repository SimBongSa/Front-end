import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getCompanyBoards, __getCompanyInfo } from "../../../redux/modules/mypageSlice";
import { getCookieToken } from "../../../utils/cookie";
import { OrganizationPageContainer, BtnContainer } from "./CompanyPage.styled";
import Profile from "../Profile/Profile";
import NewActivity from "./NewActivity/NewActivity";
import CardGrid from "../../common/cards/CardGrid";

const CompanyPage = () => {

  const token = getCookieToken("access-token");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getCompanyInfo(token));
    dispatch(__getCompanyBoards(token));
  }, [dispatch, token])

  const companyInfo = useSelector((state) => state.mypage?.companyInfo);
  const companyBoards = useSelector((state) => state.mypage.companyBoards);

  const [option, setOption] = useState(null);
  console.log(option)
  return (
    <>
      <Profile 
        companyInfo={companyInfo}
      />

      <OrganizationPageContainer>
        <BtnContainer>
        <input type="radio" name="option" id="newActivity" onClick={() => setOption("newActivity")}/>
        <input type="radio" name="option" id="myActivity" onClick={() => setOption("myActivity")}/>
          <nav>
            <label htmlFor="newActivity">새로운 봉사자 신청</label>
            <label htmlFor="myActivity">나의 봉사</label>
          </nav>
        </BtnContainer>

        {
          option !== null && option === "newActivity" ? <NewActivity/> : null
        }

        {
          option !== null && option === "myActivity" ? <CardGrid companyBoards={companyBoards} /> : null
        }

      </OrganizationPageContainer>
    </>
  )
};

export default CompanyPage;