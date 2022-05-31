import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function Chats() {
  const dispatch = useDispatch();
  // const { chat } = useSelector(state => state.chat )
  const postFetch = () => {
    console.log("Fetch!");
    
  };

  // useEffect(() => {
  //   dispatch(getMessages())
  // }, [dispatch])

  return (
    <>
      <div>Диалог</div>
    {/* {chat?.map((el) => <h1 key={el.id} >{`${el.lawyer_messages}, ${el.client_messages}`}</h1>)} */}
      {/* <form onSubmit={}>
       
       <button type='submit' onClick={postFetch}>123</button> 
      </form> */}
      
    </>
  );
}

export default Chats;
