import styled from "styled-components";
import { getCookieToken } from "../../../utils/cookie";

const ProfileEdit = () => {

  const role = getCookieToken(["authority"])
  console.log(role)

  return (
    <MyPageEditContainer>
      {
        role === "ROLE_ADMIN" ? (
          <div>
            관리자 수정 페이지임
          </div>
        ) : null
      }

      {
        role === "ROLE_MEMBER" ? (
          <div>
            사용자 수정 페이지임
          </div>
        ) : null
      }
    </MyPageEditContainer>
  )
};

export default ProfileEdit;

export const MyPageEditContainer = styled.div`
  margin-top: 10rem;
`