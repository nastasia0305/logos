import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../../redux/thunk/asyncChats";



function Chats() {
  const dispatch = useDispatch();
  const { chats }  = useSelector(state => state.chats)
const [state, setState] = useState(true) 
  const postFetch = () => {
    console.log("Fetch!");
    
  };
useEffect(() => {
  dispatch(getChats())
}, [dispatch])
console.log(chats);
 
  return (
    <>
      <div>Диалог</div>
{ chats.map((el) => <div key={el.id} ><p>{`${el.case}, ${el.help}`}</p></div>) }
      
    </>
  );
}

export default Chats;
