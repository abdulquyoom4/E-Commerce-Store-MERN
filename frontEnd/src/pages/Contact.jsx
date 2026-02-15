import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import rollSweet from '../assets/sweets2.png'

const Contact = () => {

  const [formData, setFormData] = useState({fullname: '', email: '', message: ''});
    const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
   try{
     const res = await axios.post('http://localhost:3000/contact', formData)
    setMessage(res.data.message);
    setFormData({fullname: '', email: '', message: ''});
    } catch(error){
     setMessage(error.response.data.message);
    }
  }
  return (
    <>
    <div className='flex justify-around md:h-[80vh]'>
   <form onSubmit={handleSubmit} className=' flex flex-col w-[90%] md:w-[400px] h-[90%] md:h-[60vh] mt-35 md:mt-15 items-center gap-5 '>
    <div className='flex flex-col items-start mt-5'>
    <label htmlFor="email">Enter Your Name: </label>
    <input type="text" placeholder='Name' name='name' onChange={handleChange} className='border rounded-sm md:w-xs h-9'/>
    </div>
    <div className='flex flex-col items-start'>
    <label htmlFor="email">Enter Your Email: </label>
    <input type="email" placeholder='Email' name='email' onChange={handleChange} className='border rounded-sm md:w-xs h-9'/>
    </div>
    <div className='flex flex-col items-start '>
    <label htmlFor="Messag">Enter Message: </label>
    <textarea name="message" onChange={handleChange} id="" placeholder='Message' className='border rounded-sm w-[190px] md:w-xs md:h-17'></textarea>
    </div>
    {message && <p className='text-red-500'>{message}</p> }
    <div className='flex flex-row gap-5 pb-20'>
    <button className='bg-yellow-600 py-1 rounded-lg font-bold hover:text-yellow-500 hover:bg-transparent hover:border cursor-pointer w-[100px] mt-5'>Submit</button>
    <NavLink to='/' className=''><button className='bg-yellow-600 py-1 rounded-lg font-bold hover:text-yellow-500 hover:bg-transparent hover:border cursor-pointer w-[100px] mt-5'>Back</button></NavLink>
    </div>
   </form>
   <div className="rightPart mt-10">
     <img src={rollSweet} alt="Sweets Photo" className='w-90 hidden md:block'/>
   </div>
   </div>
   </>
  )
}

export default Contact
