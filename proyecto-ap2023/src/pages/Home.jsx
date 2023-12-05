import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const [formularioEnviado, setFormularioEnviado] = useState(false);

  useEffect(() => {
    if (formularioEnviado) {
      alert('Se ha actualizado la lista de tareas');
      setFormularioEnviado(false)
    }
  }, [tasks, formularioEnviado]);

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <div>
        <h1>Alquileres Pendientes</h1>
        <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />
      </div>
      <h1>Formulario de Alquiler</h1>
      <TaskForm onAddTask={handleAddTask} enFormularioEnviado={() => setFormularioEnviado(true)} />
    </div>
  );
};

export default Home
