import {useState, useEffect} from 'react';
import Card from '../components/Card';
import axios from 'axios';

const Menu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
      const getItems = async () => { 
        const res = await axios.get('http://localhost:3000/items')
        setItems(res.data);
      }
   getItems();
  }, [])
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 place-items-center '>
     {items.map((item) => (
      <Card key={item._id} title={item.title} image={`http://localhost:3000//${item.image}`} price={item.price}/>
     ))}
    </div>
  )
} 

export default Menu
