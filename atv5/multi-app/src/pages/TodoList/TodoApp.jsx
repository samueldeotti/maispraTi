import { useState, useEffect } from 'react';
import { TaskItem, TaskList, TodoEditInput } from './TodoStyle';
import { Button, Container, Input, Title } from '../UtilsStyle';

function TodoApp() {
  const [taskId, setTaskId] = useState(0);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState('');

  const fetchTasks = async () => {
    const tasksList = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(tasksList);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (task) {
      const newTask = { id: taskId, text: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
      setTask('');
      setTaskId((prevId) => prevId + 1);
    }
  };

  const deleteTask = async (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const editTask = (id, text) => {
    setEditingTaskId(id);
    setEditingTaskText(text);
  };

  const updateTask = async (id) => {
    const updatedTasks = tasks.map((task) => (task.id === id
      ? { ...task, text: editingTaskText } : task));
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setEditingTaskId(null);
    setEditingTaskText('');
  };

  return (
    <Container maxWidth="500px">
      <Title>Todo App</Title>

      <Input
        type="text"
        value={ task }
        onChange={ (e) => setTask(e.target.value) }
        placeholder="Add a new task"
      />
      <Button onClick={ addTask }>Add Task</Button>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={ task.id }>
            {editingTaskId === task.id ? (
              <TodoEditInput
                type="text"
                value={ editingTaskText }
                onChange={ (e) => setEditingTaskText(e.target.value) }
                onBlur={ () => updateTask(task.id) }
              />
            ) : (
              <>
                {task.text}
                <div>
                  <button onClick={ () => editTask(task.id, task.text) }>Edit</button>
                  <button onClick={ () => deleteTask(task.id) }>Delete</button>
                </div>
              </>
            )}
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
}

export default TodoApp;
