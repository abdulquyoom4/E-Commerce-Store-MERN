import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  
const navigate = useNavigate();

 const handleSubmit = () => {
  let selectedItem = `Title: ${props.title}, Price: ${props.price}pkr`;
  localStorage.setItem('selectedItem', selectedItem);
    navigate('/orderform');
  }

  return (
    <div>
      <div className="container h-90 w-70 bg-zinc-800 rounded-lg flex flex-col items-center p-4 m-4 hover:scale-105 duration-500 transition-transform
      ">
       <div className='flex flex-col items-center justify-center h-[85%] gap-5'>
       <div className="picture overflow-hidden"><img src={props.image} alt={props.title} className='overflow-y-hidden'/></div>
        <div className="title font-bold text-yellow-500 font-mono text-xl">{props.title}</div>
        </div> 
        <div className='flex justify-between w-full mt-5'>
        <div className="price">{props.price}pkr</div>
        <button onClick={()=> {!isLoggedIn ? alert("Login first to Order") : handleSubmit()} } className='border rounded-lg px-2 py-1 hover:bg-yellow-500 cursor-pointer' >Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
