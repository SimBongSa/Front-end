import { StSidePanel, StContact, StContactWrap, StContactMeta } from "./ChatList.styled";

export const ChatList = () => {
  return (
    <StSidePanel>
      <h1>Message : </h1>
      <StContact>
        <ul>
          <li>
            {/* <StContactWrap>
              <img src="https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c48f324a0b9c48f77dbce3a43bd11ce785" />
              <StContactMeta>
                <p className="name">Sungho123</p>
                <p className="time">On: 11 Dec 2022</p>
              </StContactMeta>
            </StContactWrap> */}
          </li>
        </ul>
      </StContact>
    </StSidePanel>
  )
}

export default ChatList;