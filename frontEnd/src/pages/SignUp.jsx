import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

  const [formData, setFormData] = useState({fullname: '', email: '', password: ''});
  const [isError, setIsError] = useState(false);
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
     const res = await axios.post('http://localhost:3000/user/signup', formData);
     setIsError(false);
     setMessage(res.data.message);
     setFormData({fullname: '', email: '', password: ''});
    } catch(error){
      setIsError(true);
      setMessage(error.response?.data?.message || "Something went wrong");

    }
  }

  return (
   <>
    <form onSubmit={handleSubmit} className='bg-black flex flex-col w-[75%] md:w-[400px] md:min-h-[70vh] m-auto mt-15 items-center gap-5 rounded-xl shadow-lg'>
    <div className='flex flex-col items-start mt-5'>
    <label htmlFor="fullname">Enter FullName: </label>
    <input type="text" placeholder='Full Name' name='fullname' value={formData.fullname} onChange={handleChange} required className='border rounded-sm md:w-2xs h-9'/>
    </div>
    <div className='flex flex-col items-start '>
    <label htmlFor="email">Enter Your Email: </label>
    <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} required className='border rounded-sm md:w-2xs h-9'/>
    </div>
    <div className='flex flex-col items-start '>
    <label htmlFor="password">Enter Password: </label>
    <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} required className='border rounded-sm md:w-2xs h-9'/>
    </div>
    {message && <p className={isError? "text-red-600" : "text-green-600"}>{message}</p>}
       <div className='flex flex-row gap-5'>
    <button className='bg-yellow-600 py-1 rounded-lg font-bold hover:text-yellow-500 hover:bg-transparent hover:border cursor-pointer w-[100px] mt-5'>SignUp</button>
    <NavLink to='/'className='bg-yellow-600 py-1 rounded-lg font-bold hover:text-yellow-500 hover:bg-transparent hover:border cursor-pointer w-[100px] mt-5 text-center'>Back</NavLink>
    </div>
    <p>Already have an Account?  <NavLink to='/login' className='text-yellow-500 underline'>Login</NavLink></p>
   </form>
   </>
  )
}

export default SignUp
