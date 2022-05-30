import React from "react";

function Chats() {
  const postFetch = () => {
    console.log("Fetch!");
  };

  return (
    <>
      <div>Здесь будут чаты.</div>

      <button onClick={postFetch}>123</button>
    </>
  );
}

export default Chats;
