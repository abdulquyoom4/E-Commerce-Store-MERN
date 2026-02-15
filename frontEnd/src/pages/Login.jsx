import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({email: '', password: ''});
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

   const handleSubmit = async (e) =>{
      e.preventDefault();
     try{
       const res = await axios.post('http://localhost:3000/user/login', formData);
       setIsError(false);
       setMessage(res.data.message);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("token", res.data.token);
         if (res.data.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
       setFormData({email: '', password: ''});
      } catch(error){
        setIsError(true);
       setMessage(error.response.data.message);
      }
    }


  return (
   <>
   <form onSubmit={handleSubmit} className='bg-black flex flex-col w-[75%] md:w-[400px] md:min-h-[60vh] m-auto mt-15 items-center gap-5 rounded-xl shadow-2xl'>
    <div className='flex flex-col items-start mt-5'>
    <label htmlFor="email">Enter Your Email: </label>
    <input type="email" placeholder='Email' name='email' onChange={handleChange} value={formData.email} required className='border rounded-sm md:w-2xs h-9'/>
    </div>
    <div className='flex flex-col items-start '>
    <label htmlFor="email">Enter Password: </label>
    <input type="password" placeholder='Password' name='password' onChange={handleChange} value={formData.password} className='border rounded-sm md:w-2xs h-9' required/>
    </div>
    {message && <p className={isError? "text-red-600" : "text-green-600"}>{message}</p>}
        <div className='flex flex-row gap-5'>
    <button className='bg-yellow-600 py-1 rounded-lg font-bold hover:text-yellow-500 hover:bg-transparent hover:border cursor-pointer w-[100px] mt-5'>Login</button>
    <NavLink to='/' className='bg-yellow-600 py-1 rounded-lg font-bold hover:text-yellow-500 hover:bg-transparent hover:border cursor-pointer w-[100px] mt-5 text-center'>Back</NavLink>
    </div>
    <p>new to Sanabel Sweets? <NavLink to='/signup' className='text-yellow-500 underline'>Sign Up </NavLink></p>
   </form>
   </>
  )
}

export default Login
