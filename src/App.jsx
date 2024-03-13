
import { useState } from "react"

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, {todoName: todo}]);
    setTodo("");
  };

  const deleteTodo = (deleteValue) => {
    const restTodoList = [...todoList.filter((val) => {
      return val.todoName !== deleteValue;
    }),];
    setTodoList(restTodoList);
  }

  return (
    <div className="bg-gray-200 w-full h-screen flex items-center">
      <div className="text-center w-[400px] bg-white p-5 mx-auto">
        <h1 className="text-5xl mb-8 font-bold">Todo List</h1>
        <form onSubmit={handleForm}>
          <input value={todo} onChange={(e) => setTodo(e.target.value)} className="border-2 border-black w-full placeholder:text-gray-500 rounded-lg p-5 mb-5 text-black" type="text" placeholder="Add Todo" id="" />
          <button type="submit" className="bg-red-600 text-white py-3 px-8 rounded-lg mb-8">Add Todo</button>
        </form>
        <div className="todo-show-area">
          <ul>
            {todoList.map((singleTodo, index) => {
              return (
              <li key={index} className="bg-black mb-5 py-5 rounded-lg text-2xl px-5 flex justify-between text-white">
                {singleTodo.todoName}{""} 
                <span onClick={() => deleteTodo(singleTodo.todoName)} className="text-red-600 cursor-pointer">x</span>
              </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
