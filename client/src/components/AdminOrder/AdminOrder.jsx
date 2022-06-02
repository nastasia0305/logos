import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllOrders } from "../../redux/thunk/admin";
import AdminOrderCard from "../AdminOrderCard.jsx/AdminOrderCard";

function AdminOrder(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders } = useSelector(state => state.admin)

  const { session } = useSelector((store) => store.session);
  const { isAdmin } = session;

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin, navigate]);

  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch]);


  return (
    <>
      <div>
        {orders?.map((el) => (
          <AdminOrderCard key={el.id} data={el} />
        ))}
      </div>
    </>
  );
}

export default AdminOrder;
