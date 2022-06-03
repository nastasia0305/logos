import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../../redux/thunk/asyncChats";
import ChatList from "../ChatList/ChatList";



function Chats() {
  const dispatch = useDispatch();
  const { chats } = useSelector(state => state.chats)

  const postFetch = () => {
    console.log("Fetch!");

  }
  useEffect(() => {
    dispatch(getChats())
  }, [dispatch])

  return (
    <>
      <div className="dialog__bar" >Диалог</div>
      {chats?.map(el => <ChatList key={el.id} data={el} />)}

    </>
  );
}

export default Chats;
