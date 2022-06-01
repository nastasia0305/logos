import React from 'react';
import { useSelector } from 'react-redux';

function ChatList(props) {
  const { chats }  = useSelector(state => state.chats)
  return (
    <>
      { chats.map((el) => <button key={el.id}> <p>{`${el.case}, ${el.help}`}</p></button>) }
    </>
  );
}

export default ChatList;