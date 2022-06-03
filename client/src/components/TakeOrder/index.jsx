import React from 'react'
import { useSelector } from 'react-redux'
import OrderCard from '../OrderCard/OrderCard'

function TakeOrder() {
const [allRequest] = useSelector(state => state.request.allRequest)
  return (
    <>
      <div className="dialog__bar">Активные заявки</div>
      {allRequest?.map(elem => <OrderCard key={elem.id} data={elem} />)}
    </>
  )
}

export default TakeOrder
