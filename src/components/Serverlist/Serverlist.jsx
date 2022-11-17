import { ServerlistContainer } from "./Serverlist.styled";
import { useState } from "react";

function Serverlist({ result, mark }) {
  const [moveIndex, setMoveIndex] = useState(0);
  return (
    <>
      {result && result.length > 0
        ? result.map((obj, boardId) => {
            return (
              <ServerlistContainer
                key={boardId}
                style={{ transform: `translateX(${moveIndex}%)` }}
              >
                {obj.startDate} ~ {obj.endDate}
                <div>{obj.dueDay}</div>
                <h3>{obj.title}</h3>
                <div>{obj.area}</div>
                <div>{obj.detailArea}</div>
              </ServerlistContainer>
            );
          })
        : ""}
    </>
  );
}

export default Serverlist;
