import { useState, useEffect } from 'react';
import axios from 'axios';
import { TaskItem, TaskList, TodoEditInput } from './TodoStyle';
import { Button, Container, Input, Title } from '../UtilsStyle';

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState('');

  const fetchTasks = async () => {
    const response = await axios.get(API_URL);
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (task) {
      const newTask = { text: task };
      const response = await axios.post(API_URL, newTask);
      setTasks([...tasks, response.data]);
      setTask('');
    }
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, text) => {
    setEditingTaskId(id);
    setEditingTaskText(text);
  };

  const updateTask = async (id) => {
    const updatedTask = { text: editingTaskText };
    await axios.put(`${API_URL}/${id}`, updatedTask);
    setTasks(tasks.map((task) => (task.id === id
      ? { ...task, text: editingTaskText } : task)));
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
