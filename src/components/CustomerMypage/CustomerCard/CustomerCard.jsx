import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getCustomer } from "../../../redux/modules/customerSlice";

import {
  More,
  CustomerCardContainer,
  Card,
  CardImg,
  CardTitle,
  CardContent,
} from "./CustomerCard.styled";

function CustomerCard() {
  const dispatch = useDispatch();
  const { customerList } = useSelector((state) => state.customerList);

  useEffect(() => {
    dispatch(__getCustomer());
  }, [dispatch]);

  // isLoading
  if (!customerList) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <More>View More</More>
      {customerList && customerList.length > 0
        ? customerList.map((obj, id) => {
            return (
              <CustomerCardContainer key={id}>
                <Card>
                  <CardImg>
                    {/* <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="test"/> */}
                  </CardImg>
                  <CardTitle>
                    <p>{customerList[id].title}</p>
                    <span>{customerList[id].content}</span>
                  </CardTitle>
                  <CardContent>{customerList[id].name}</CardContent>
                </Card>
              </CustomerCardContainer>
              //       <CustomerReviewContainer key={id}>
              //         <div>
              //           <StartBox>⭐⭐⭐⭐</StartBox>
              //           <h3>{customerList[id].title}</h3>
              //           <div>{customerList[id].content}</div>
              //           <div>{customerList[id].name}</div>
              //         </div>
              //       </CustomerReviewContainer>
            );
          })
        : ""}
      {/* <CustomerReviewContainer>
        <div>
          <StartBox>⭐⭐⭐⭐</StartBox>
          <h3>Children Christmas Santa Volunteer</h3>
          <div>W chidren Hospital 100 smart street </div>
          <div>Gannam-gu</div>
        </div>
      </CustomerReviewContainer> */}
    </>
  );
}

export default CustomerCard;
