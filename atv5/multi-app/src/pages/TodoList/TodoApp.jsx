// Importa os hooks useState e useEffect da biblioteca React para gerenciar estado e efeitos colaterais.
import { useState, useEffect } from 'react';
// Importa a biblioteca axios para fazer requisições HTTP.
import axios from 'axios';
import { TaskItem, TaskList,
  TodoButton, TodoContainer, TodoEditInput, TodoInput, TodoTitle } from './TodoStyle';
// Importa a biblioteca styled-components para criar componentes estilizados.

// Define a URL da API que será usada para obter, adicionar, editar e excluir tarefas.
const API_URL = 'http://localhost:5000/tasks';

// Define o componente funcional TodoApp.
function TodoApp() {
  // Usa o hook useState para criar variáveis de estado para a tarefa atual, lista de tarefas, tarefa em edição e texto da tarefa em edição.
  const [task, setTask] = useState(''); // Estado para a nova tarefa a ser adicionada.
  const [tasks, setTasks] = useState([]); // Estado para a lista de tarefas.
  const [editingTaskId, setEditingTaskId] = useState(null); // Estado para o id da tarefa que está sendo editada.
  const [editingTaskText, setEditingTaskText] = useState(''); // Estado para o texto da tarefa que está sendo editada.

  // Usa o hook useEffect para buscar as tarefas quando o componente é montado.
  const fetchTasks = async () => {
    const response = await axios.get(API_URL); // Faz uma requisição GET para obter as tarefas.
    setTasks(response.data); // Atualiza o estado com os dados recebidos.
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Função que busca as tarefas da API e atualiza o estado com as tarefas recebidas.

  // Função que adiciona uma nova tarefa.
  const addTask = async () => {
    if (task) { // Verifica se o campo da tarefa não está vazio.
      const newTask = { text: task }; // Cria um objeto de tarefa com o texto fornecido.
      const response = await axios.post(API_URL, newTask); // Faz uma requisição POST para adicionar a nova tarefa.
      setTasks([...tasks, response.data]); // Atualiza o estado com a nova tarefa adicionada.
      setTask(''); // Limpa o campo de entrada.
    }
  };

  // Função que exclui uma tarefa.
  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`); // Faz uma requisição DELETE para excluir a tarefa com o id fornecido.
    setTasks(tasks.filter((task) => task.id !== id)); // Atualiza o estado removendo a tarefa excluída.
  };

  // Função que inicia o processo de edição de uma tarefa.
  const editTask = (id, text) => {
    setEditingTaskId(id); // Define o id da tarefa que está sendo editada.
    setEditingTaskText(text); // Define o texto da tarefa que está sendo editada.
  };

  // Função que atualiza uma tarefa existente.
  const updateTask = async (id) => {
    const updatedTask = { text: editingTaskText }; // Cria um objeto de tarefa com o texto atualizado.
    await axios.put(`${API_URL}/${id}`, updatedTask); // Faz uma requisição PUT para atualizar a tarefa.
    setTasks(tasks.map((task) => (task.id === id
      ? { ...task, text: editingTaskText } : task))); // Atualiza o estado com a tarefa modificada.
    setEditingTaskId(null); // Limpa o id da tarefa em edição.
    setEditingTaskText(''); // Limpa o texto da tarefa em edição.
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <TodoContainer>
      <TodoTitle>Todo App</TodoTitle>
      {' '}
      {/* Exibe o título do aplicativo de tarefas */}
      <TodoInput
        type="text"
        value={ task }
        onChange={ (e) => setTask(e.target.value) }
        placeholder="Add a new task"
      />
      <TodoButton onClick={ addTask }>Add Task</TodoButton>
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
    </TodoContainer>
  );
}

// Exporta o componente TodoApp para que possa ser utilizado em outras partes da aplicação.
export default TodoApp;
