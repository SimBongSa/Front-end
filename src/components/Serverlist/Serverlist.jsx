import { ServerListContainer, ServerListImg, Body } from "./Serverlist.styled";
import { useState } from "react";

function Serverlist({ result, mark }) {
  const [moveIndex, setMoveIndex] = useState(0);
  console.log(result);
  return (
    <>
      {result && result.length > 0 ? (
        result.map((obj, boardId) => {
          return (
            <ServerListContainer
              key={boardId}
              style={{ transform: `translateX(${moveIndex}%)` }}
            >
              <ServerListImg>
                <img src={obj.boardImage} alt="test" />
              </ServerListImg>
              <Body>
                <div>{obj.title}</div>
                <div>{obj.area}</div>
                <div>{obj.detailArea}</div>
                <div>
                  {obj.startDate} ~ {obj.endDate}
                </div>
              </Body>
            </ServerListContainer>
          );
        })
      ) : (
        <div>봉사 내역이 없습니다.</div>
      )}
    </>
  );
}

export default Serverlist;
