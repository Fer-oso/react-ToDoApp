import React, { useEffect, useReducer, useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { useReducerTodos } from "../hooks/useReducerTodos";
import { ToDoList } from "./TodoList";

export const ToDoListApp = () => {
  const { todos, todosCounter, todosPendingCounter, onHandleAddToDo, onHandleRemoveTodo, onHandleDoneTodo } = useReducerTodos();

  return (
    <>
      <h2 className="text-center">To Do List </h2>
      <hr></hr>
      <div className="row">
        <div className="col-7 col-md-6">
          <h4>
            Remain:{todosCounter} Success: {todosPendingCounter}
          </h4>
          <hr></hr>
          <ul className="list-group ">
            <ToDoList
              todos={todos}
              onHandleRemoveTodo={onHandleRemoveTodo}
              onHandleDoneTodo={onHandleDoneTodo}
            />
          </ul>
        </div>

        <div className="col-5">
          <AddTodoForm onHandleAddToDo={onHandleAddToDo} />
        </div>
      </div>
    </>
  );
};
