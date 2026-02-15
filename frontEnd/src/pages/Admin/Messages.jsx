import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Messages = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get('http://localhost:3000/contact/admin/messages');
                setMessages(res.data.messages);
            } catch (error) {
                console.log(error);
            }}
            getMessages();
        }, []);
    return (
        <>
        <div className='flex flex-col items-center mt-10'>
              <h2 className='text-3xl'>Total Messages: {messages.length}</h2>
              {messages.map((message) => (
                <div key={message._id} className='border p-5 m-5 w-1/2 rounded-lg shadow-lg'>
                    <h3 className='font-bold'>Name: {message.name}</h3>
                    <p className='font-semibold'>Email: {message.email}</p>
                    <p className='mt-2'>Message: {message.message}</p>
                </div>
              ))}
        </div>
        </>
    )
}


export default Messages
