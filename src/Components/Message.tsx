import React from 'react'
import { MessageProps } from '../Types/Type'
import { FaTrash } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

const Message:React.FC<MessageProps> = ({todos, deleteMessage}) => {
  return (
    <div className='w-full mt-10'>
        {todos.map((todo,index) =>(
            <div key={index}>
               <div className='flex relative my-5'>
               <p className='ml-6 flex items-center'><BsDot className='text-2xl' />{todo.message} </p>
                <button className='absolute right-5  bg-blue-600 py-2 px-1 mr-2 flex items-center justify-center rounded' onClick={() => deleteMessage(todo.id)}><FaTrash /></button>
               </div>
            </div>
        ))}
    </div>
  )
}

export default Message