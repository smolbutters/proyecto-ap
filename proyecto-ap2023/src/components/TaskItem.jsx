import React, { useState } from 'react';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleComplete = () => {
    setIsCompleted(!isCompleted);
    onToggleComplete(task.id);
  };

  return (
     <div className="task-item-container" style={{ backgroundColor: isCompleted ? '#9e9993' : '#fff4e6' }}>
      <p className="task-item" style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>Nombre: <br />{task.name}</p>
      <p className="task-item" style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>Número de teléfono: <br /> {task.numTel}</p>
      <p className="task-item" style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>Correo Electrónico: <br /> {task.email}</p>
      <p className="task-item" style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>Auto para alquilar: <br /> {task.autosel}</p>
      <p className="task-item" style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>ID: {task.id}</p>
      <div className="button-container">
        <button className='completado' onClick={toggleComplete}>Completado</button>
        <button className='eliminar' onClick={() => onDelete(task.id)}>Eliminar</button>
      </div>
     </div>
  );
};

export default TaskItem;
