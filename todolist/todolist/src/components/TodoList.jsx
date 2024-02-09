import React from 'react'

export const ToDoList = ({todos, onHandleRemoveTodo, onHandleDoneTodo}) => {
    return (
      <>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span
              className={`align-self-center ${
                todo.done && "text-decoration-line-through text-success"
              } `}
            >
              {todo.description}
            </span>
            <div className="btn-group">
              <button
                className={`btn btn-success ${
                  todo.done && "btn-outline-success disabled"
                } `}
                onClick={() => onHandleDoneTodo(todo.id)}
              >
                Done
              </button>
              <button
                className={`btn btn-warning ${
                  todo.done && "btn-success enabled"
                } `}
                onClick={() => onHandleDoneTodo(todo.id)}
              >
                Not Done
              </button>
              <button
                onClick={() => {
                  onHandleRemoveTodo(todo.id);
                }}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </>
    );
}
