import React from 'react'
import { InputProps } from '../Types/Type'


const input:React.FC<InputProps> = ({todo, setTodo, addMessage}) => {
    return (
        <div className='w-full flex items-center justify-around'>
            <input className='w-[20rem] ml-2 px-2 py-1 bg-slate-600 border border-slate-500 rounded' value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='Yazınız...' />
            <button className='w-[5rem] bg-blue-600 px-2 py-1 mr-2 rounded' onClick={() => addMessage()}>Add</button>
        </div>
    )
}

export default input