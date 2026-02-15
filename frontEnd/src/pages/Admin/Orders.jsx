import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Orders = () => {
    const [orders, setOrders] = useState([])

   

    useEffect(() => {
         const getOrders = async () => {
        try {
            const res = await axios.get('http://localhost:3000/order/getorder');
           setOrders(res.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }}

        getOrders();
    }, [])


  return (
   <>
    <div className='flex flex-col items-center mt-10'>
        <h2>Total Orders: {orders.length}</h2>
              {orders.map((order) => (
                <div key={order._id} className='border p-5 m-5 w-1/2 rounded-lg shadow-lg'>
                    <h3 className='font-bold'>Name: {order.name}</h3>
                    <p className='font-semibold'>Email: {order.email}</p>
                    <p className='mt-2'>Phone: {order.phone}</p>
                    <p className='mt-2'>Address: {order.address}</p>
                    <p className='mt-2'>Order: {order.order}</p>
                </div>
              ))}
        </div>
   </>
  )
}

export default Orders
