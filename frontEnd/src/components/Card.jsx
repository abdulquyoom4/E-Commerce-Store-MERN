import React, { useState } from "react";
import cartIcon from "../assets/cart.svg";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true",
  );

  const navigate = useNavigate();

  const handleSubmit = () => {
    let selectedItem = `Title: ${props.title}, Price: ${props.price}pkr`;
    localStorage.setItem("selectedItem", selectedItem);
    navigate("/orderform");
  };

  return (
    <div
      className="w-80 md:w-72 bg-[#0F2F24] rounded-2xl p-5 m-4  
shadow-lg hover:shadow-2xl hover:-translate-y-2 
transition-all duration-300 border border-[#D4AF37]/20 flex flex-col justify-between"
    >
      
      <div className="rounded-xl h-44 flex items-center justify-center overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          className="h-full w-full object-contain"
        />
      </div>

     
      <div className="mt-4 flex flex-col grow">

        <h2 className="text-lg font-semibold text-[#D4AF37] text-center">
          {props.title}
        </h2>

        <div className="text-white text-base font-medium mt-2 text-center">
          {props.price} PKR
        </div>


        <button
          onClick={() => {
            !isLoggedIn ? alert("Login first to Order") : handleSubmit();
          }}
          className="flex items-center justify-center gap-2 w-full mt-4 
      bg-[#D4AF37] text-black py-2 rounded-lg font-medium 
      hover:opacity-90 transition"
        >
         <img className="w-6" src={cartIcon} alt="Cart Icon" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
