import React, {useState} from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom'

const OrderForm = () => {
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [formData, setFormData] = useState({name: '', email: '', phone: '', address: '', order: ''});
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            order: localStorage.getItem('selectedItem') || ''
        });
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
           const res = await axios.post('http://localhost:3000/order/placeorder', formData);
           setIsError(false);
           setMessage(res.data.message);
        } catch (error){
            setIsError(true);
            setMessage(error.response.data.message);
        }
    }
  return (
   <>
      <div className=' w-screen flex justify-center mt-10 '>
        <form onSubmit={handleSubmit} className='flex flex-col flex-wrap gap-10 min-w-1/2 bg-black p-5 rounded-lg shadow-lg mb-10 '>
             <input value={formData.name} onChange={handleChange} className='border rounded-md py-1' type="text" name='name' placeholder='Full Name' required/>
             <input value={formData.email} onChange={handleChange} className='border rounded-md py-1' type="text" name='email' placeholder='Email' required/>
             <input value={formData.phone} onChange={handleChange} className='border rounded-md py-1' type="text" name='phone' placeholder='Phone Number' required/>
             <textarea value={formData.address} onChange={handleChange} className='border rounded-md py-1' name="address" id="address" placeholder='Complete Address'></textarea>
             {message && <p className={isError? "text-red-600" : "text-green-600"}>{message}</p>}
        <div className='flex flex-row gap-10 self-center'>
    <button className='bg-yellow-600 py-1 rounded-lg font-bold hover:text-yellow-500 hover:bg-transparent hover:border cursor-pointer w-[100px] mt-5'>Confirm</button>
    <NavLink to='/menu' className='bg-yellow-600 py-1 rounded-lg font-bold hover:text-yellow-500 hover:bg-transparent hover:border cursor-pointer w-[100px] mt-5 text-center'>Back</NavLink>
    </div>
        </form>
      </div>
   </>
  )
}


export default OrderForm;
