import { useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";

export const useReducerTodos = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onHandleAddToDo = (todo) => {
    
    const action = {
      type: "ADD",
      payload: todo,
    };
    dispatch(action);
  };

  const onHandleRemoveTodo = (id) => {
    const action = {
      type: "REMOVE",
      payload: id,
    };

    dispatch(action);
  };

  const onHandleDoneTodo = id =>{
    const action= {
      type: 'DONE',
      payload: id
    }

    dispatch(action);
  }

  let todosCounter = todos.length;
  
  let todosPendingCounter = todos.filter(todo=> todo.done).length;
  
  return {
    todos,
    todosCounter,
    todosPendingCounter, 
    onHandleAddToDo,
    onHandleRemoveTodo,
    onHandleDoneTodo
  };
};
