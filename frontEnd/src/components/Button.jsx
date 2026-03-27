import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-yellow-600 text-black py-2 rounded-lg font-bold w-full md:w-full hover:bg-yellow-500 transition-all duration-300'>{props.btnName}</button>
    </div>
  )
}

export default Button
