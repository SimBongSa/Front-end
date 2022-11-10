import { ServerlistContainer } from "./Serverlist.styled";

function Serverlist({ result, mark }) {
  return (
    <>
      {result && result.length > 0
        ? result.map((obj) => {
            return (
              <ServerlistContainer>
                <h3>Children Christmas Santa Volunteer</h3>
                <div>W chidren Hospital 100 smart street, Gannam-gu</div>
              </ServerlistContainer>
            );
          })
        : ""}
    </>
  );
}

export default Serverlist;
