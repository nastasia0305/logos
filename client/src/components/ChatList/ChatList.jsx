import React from 'react';
import { useSelector } from 'react-redux';

function ChatList({ data }) {

  return (
    <>
    <div>
<p>{`${data.case}, ${data.help}`}</p>
   <button> Открыть </button>
    </div>
 
    </>
  );
}

export default ChatList;