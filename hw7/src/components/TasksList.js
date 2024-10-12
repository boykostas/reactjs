import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../features/tasksSlice';

const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);
  const taskStatus = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    if (taskStatus === 'idle') {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);

  if (taskStatus === 'loading') {
    return <div>Loading tasks...</div>;
  }

  if (taskStatus === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Tasks List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.completed ? '(Completed)' : '(Not completed)'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
