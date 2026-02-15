import axios from 'axios'
import { useState, useEffect } from 'react'

const ManageMenu = () => {

  const [menuItems, setMenuItems] = useState([])
  const [showAdd, setShowAdd] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({ itemCode: '', title: '', price: '', category: '', isAvailable: false});

  useEffect(() => {
    const getItems = async () =>{
       try{
      const res = await axios.get('http://localhost:3000/items');
      setMenuItems(res.data);
    }
   catch{
    console.log("something wrong occured")
  }}
  getItems();
  }, [])

      const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleAddition = async (e) =>{
    e.preventDefault();
   try{
     const res = await axios.post('http://localhost:3000/items/admin/menu', formData)
     setMessage(res.data.message);
    setFormData({ itemCode: '', title: '', price: '', category: '', isAvailable: false});
    setMenuItems([...menuItems, res.data]);
    } catch(error){
     setMessage(error.response.data.message);
    }
  }



  const handleDelete = async (e) =>{
    e.preventDefault();
    try{
     const res = await axios.delete('http://localhost:3000/items/admin/menu',
      {
        data: { itemCode: formData.itemCode }
      }
    )
    setMessage(res.data.message)
    setMenuItems(menuItems.filter(item => item.itemCode !== formData.itemCode));
    } catch(error){
      setMessage(error.response.data.message);
    }
  }
  return (
   <>
          <div className='flex justify-center gap-10 m-10'>
            <button className='border rounded-lg px-3 py-1 cursor-pointer' onClick={() => {setShowAdd(true), setShowDelete(false)}}>Add Item</button>
            <button className='border rounded-lg px-3 py-1' onClick={() => {setShowDelete(true), setShowAdd(false)}}>Delete Item</button>
          </div>

          <form onSubmit={handleAddition} className={showAdd? 'block'  : 'hidden' }>
            <div className= 'flex flex-wrap justify-center gap-5 my-5 '>
              <input onChange={handleChange} value={formData.itemCode} type="text" id="itemCode" name="itemCode" placeholder='Item Code' className='border rounded-sm' required/>
              <input onChange={handleChange} value={formData.title} type="text" id="title" name="title" placeholder='Title' className='border rounded-sm' required/>
              <input onChange={handleChange} value={formData.price} type="number" id="price" name="price" placeholder='Price' className='border rounded-sm' required/>
              <input onChange={handleChange} value={formData.category} type="text" id="category" name="category" placeholder='Category' className='border rounded-sm' required />
             <select placeholder="Is Available" name="isAvailable" id="isAvailable" onChange={handleChange} value={formData.isAvailable} className='border rounded-sm' required
            >
               <option value={true}>Available</option>
               <option value={false}>Not Available</option>
             </select>
          </div>
          <div className='text-center text-red-600 font-bold mb-3'>{message}</div>
          <div className='flex justify-center gap-10 my-7'>
           <button className='border rounded-lg px-3 py-1 border-green-500 cursor-pointer'>Submit</button>
           <button onClick={()=> {setShowAdd(false)}} className='border rounded-lg px-3 py-1 border-red-600 cursor-pointer'>Back</button>
          </div>
          </form>
          
      

          <form onSubmit={handleDelete} className={showDelete ? 'block'  : 'hidden' } >
            <div className= 'flex flex-wrap justify-center gap-5 my-5 '>
              <input onChange={handleChange} value={formData.itemCode} type="text" id="itemCode" name="itemCode" placeholder='Item Code' className='border-2 border-white rounded-sm p-2 font-bold' required/>
              </div>
              <div className='text-center text-red-600 text-xl mb-3'>{message}</div>
          <div className='flex justify-center gap-10 my-7'>
           <button className='border rounded-lg px-3 py-1 border-red-500 cursor-pointer'>Submit</button>
           <button onClick={()=> {setShowDelete(false)}} className='border rounded-lg px-3 py-1 border-red-600 cursor-pointer'>Back</button>
          </div>
          </form>

           <div>
            <table className='table-auto w-[90%] m-auto text-center border-collapse border border-slate-400 bg-black mb-10'>
              <thead className='text-yellow-500'>
             <tr>
              <th>Item Code</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>IsAvailable</th>
             </tr>
             </thead>
             <tbody >
            {
              menuItems.map((item)=>(
               <tr key={item._id} className='border border-slate-300 '> 
               <td className='border'>{item.itemCode}</td>               
               <td className='border py-1'>{item.title}</td>
                <td className='border'>{item.price}</td>
                <td className='border'>{item.category}</td>
                <td className='border'>{item.isAvailable ? "Yes" : "No"}</td>
               </tr>
              ))
            }
            </tbody>
            </table>
           </div>
   </>
  )
}

export default ManageMenu
