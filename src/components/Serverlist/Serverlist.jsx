import { ServerlistContainer } from "./Serverlist.styled";
import { useState } from "react";

function Serverlist({ result, mark }) {
  return (
    <>
      {result && result.length > 0
        ? result.map((obj, date) => {
            return (
              <ServerlistContainer key={date}>
                {obj.date}
                <h3>{obj.list.name}</h3>
                <div>{obj.list.location}</div>
              </ServerlistContainer>
            );
          })
        : ""}
    </>
  );
}

export default Serverlist;
