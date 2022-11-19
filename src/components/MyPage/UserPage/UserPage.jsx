import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getUserEnroll, __getUserInfo } from "../../../redux/modules/mypageSlice";
import { getCookieToken } from "../../../utils/cookie";
import Profile from "../Profile/Profile";

const UserPage = () => {

  const token = getCookieToken("access-token");
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.mypage?.userInfo);
  const userEnroll = useSelector((state) => state.mypage?.userEnroll);

  useEffect(() => {
    dispatch(__getUserInfo());
    // dispatch(__getUserEnroll());
  }, [dispatch, token])

  const [userPageOpt, setUserPageOpt] = useState();

  return (
    <>
      <Profile
        userInfo={userInfo}
      />

    </>
  )
};

export default UserPage;