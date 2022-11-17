import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getCreate } from "../../redux/modules/addCreateSlice";

const GetActivity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getCreate());
  }, [dispatch]);

  const boards = useSelector((state) => state?.addCreateSlice?.boards);
  console.log(boards);

  return (
    <div>
      title={boards?.title}
      content={boards?.content}
      dueDay={boards?.dueDay}
      startDate={boards?.startDate}
      endDate={boards?.endDate}
      area={boards?.area}
      detailArea={boards?.detailArea}
      boardImage={boards?.boardImage}
    </div>
    // <div>
    //     {boards.map(board) => {
    //         return (
    //             <>
    //           <h5>{boards.title}</h5>
    //           <p>{boards?.content}</p>
    //           <p>{boards.dueDay}</p>
    //           <p>{boards.startDate}</p>
    //           <p>{boards.endDate}</p>
    //           <p>{boards.area}</p>
    //           <p>{boards.detailArea}</p>
    //           <p>{boards.boardImage}</p>
    //             </>
    //         )
    //     }}
    // </div>
  );
};

export default GetActivity;
