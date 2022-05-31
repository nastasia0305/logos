import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../redux/thunk/asyncChats";

function Chats() {
  const dispatch = useDispatch();
  const { chat } = useSelector(state => state.chat )
  console.log(chat[0]);
  const postFetch = () => {
    console.log("Fetch!");
    
  };

  useEffect(() => {
    dispatch(getMessages())
  }, [dispatch])

  return (
    <>
      <div>Диалог</div>
    {chat?.map((el) => <h1 key={el.id} >{`${el.lawyer_messages}, ${el.client_messages}`}</h1>)}
      {/* <form onSubmit={}>
       
       <button type='submit' onClick={postFetch}>123</button> 
      </form> */}
      
    </>
  );
}

export default Chats;
