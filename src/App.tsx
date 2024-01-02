import { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import { Todos } from './Types/Type';
import Message from './Components/Message';

const App:React.FC = () => {
 const [todo,setTodo] =useState<string>("");
 const[todos,setTodos] = useState<Todos[]>([])

 const addMessage = () =>{
  if (todo) {
    setTodos([...todos,{message:todo,id: todos.length +1}]);
    setTodo('');
  }
 }

 const deleteMessage = (id:number) =>{
  setTodos(todos.filter(todo => todo.id !== id))
 }
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-700 text-white">
      <div className='flex flex-col items-center bg-slate-800 w-[30rem] h-[40rem] rounded-xl'>
      <h3 className='text-xl font-medium my-5'>Todos App</h3>
      <Input todo={todo} setTodo={setTodo} addMessage={addMessage} />
      <Message todos={todos} deleteMessage={deleteMessage} />
      </div>
    </div>
  );
}

export default App;
