import { createTaskData } from "../../provider/firebase/functions/todos/createTask";
import { loadlistTasksData } from "../../provider/firebase/functions/todos/loadTasks";
import { createTask, loadTasks } from "./taskSlice";

export const startCreateTask = (task = {}) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authentication.userAuthenticated;

    const taskCreated = await createTaskData(task, uid);

    dispatch(createTask(taskCreated));

    dispatch(startLoadTasks());
  };
};

export const startLoadTasks = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().authentication.userAuthenticated;

    const listTaskData = await loadlistTasksData(uid);

    dispatch(loadTasks(listTaskData));
  };
};