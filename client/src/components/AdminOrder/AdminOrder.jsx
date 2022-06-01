import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminOrder(props) {
  const navigate = useNavigate();
  const [allChats, setAllChats] = useState([]);

  const { session } = useSelector((store) => store.session);
  const { isAdmin } = session;

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin, navigate]);

  useEffect(() => {
    fetch("/allOrders")
      .then((res) => res.json())
      .then((data) => setAllChats(data));
  }, []);


  return (
    <>
      <div>

{allChats?.map(el => <button key={el.id}>{`${el.case}, ${el.help}`}</button>)}
      

      </div>
    </>
  );
}

export default AdminOrder;
