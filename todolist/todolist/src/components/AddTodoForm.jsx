import React from 'react'
import { useForm } from '../hooks/useForm'

export const AddTodoForm = ({ onHandleAddToDo }) => {

  const {formState, onChangeForm } = useForm({
    description: ''
  });

  const {description} = formState;

  const onFormSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: new Date().getTime() + 1,
      description,
      done: false
    }

    onHandleAddToDo(todo);
  }

  return (
    <>

      <h4 className='text-center'>Add ToDo</h4><hr />
      <form onSubmit={onFormSubmit}>
        <input
          type='text'
          placeholder='what is there to do?'
          className='form-control'
          name="description"
          value={description}
          onChange={onChangeForm}
        />
        <button type="submit" className='btn btn-primary mt-2'>Add</button>
      </form>
    </>
  )
}
