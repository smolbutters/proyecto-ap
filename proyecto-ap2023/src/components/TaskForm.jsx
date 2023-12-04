import React, { useState } from 'react';

const TaskForm = ({ onAddTask, enFormularioEnviado}) => {
  const [nomTask, setNomTask] = useState('');
  const [numTel, setNumTel] = useState('');
  const [email, setEmail] = useState('');
  const [autoSel, setAutoSel] = useState('');

  const handleCambioDeInputs = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'nomTask':
        setNomTask(value);
        break;
      case 'numTel':
        setNumTel(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'autoSel':
        setAutoSel(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (formulario) => {
    formulario.preventDefault();
    if (nomTask.trim() !== '' && numTel.trim() !== '' && email.trim() !== '' && autoSel.trim() !== '') {
      const newTask = {
        id: Date.now(),
        name: nomTask,
        numTel: numTel,
        email: email,
        autosel: autoSel,
        completado: false,
      };
      onAddTask(newTask);
      setNomTask('');
      setNumTel('');
      setEmail('');
      setAutoSel('');
      enFormularioEnviado();
    }
  };

  const opcionesAutos = ['Fiat 600', 'Renault 12', 'Chevrolet Chevy','Ford Falcon','Citroën 3cv','Batimovil'];

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label>
        Nombre/s y Apellido/s: <br />
        <input
          type="text"
          name="nomTask"
          value={nomTask}
          onChange={handleCambioDeInputs}
        />
      </label>
      <label>
        Número de teléfono/Cel: <br />
        <input
          type="tel"
          name="numTel"
          value={numTel}
          onChange={handleCambioDeInputs}
        />
      </label>
      <label>
        Correo Electrónico: <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleCambioDeInputs}
        />
      </label>
      <label>
        Auto para alquilar: <br />
        <select
          name="autoSel"
          value={autoSel}
          onChange={handleCambioDeInputs}
        >
          <option value="" disabled>
            Selecciona un auto
          </option>
          {opcionesAutos.map((car, index) => (
            <option key={index} value={car}>
              {car}
            </option>
          ))}
        </select>
      </label>
      <button className="button-submit" type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;

