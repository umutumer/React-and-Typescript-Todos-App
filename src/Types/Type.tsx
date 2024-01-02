export type Todos = {
    message: string,
    id: number
}
export type InputProps = {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    addMessage: () => void
}
export type MessageProps = {
    todos: Todos[],
    deleteMessage: (id:number) => void
}