import React, { useState } from 'react';
import './Tarefas.css'; // Import your CSS file if applicable

const Tarefas = () => {
  const [tarefas, setTarefas] = useState([]); // Array to store tasks

  const adicionarTarefa = (novaTarefa) => {
    
    
    setTarefas([...tarefas, novaTarefa]);
  };

  const removerTarefa = (index) => {
    // Logic to remove a task from the 'tarefas' array based on index
    const updatedTarefas = [...tarefas];
    updatedTarefas.splice(index, 1);
    setTarefas(updatedTarefas);
  };

  return (
    <main className="flex-container">
      <div className="name-container">
        <h1>Suas tarefas</h1>
      </div>
      <div className="tarefas-container">
        <ol id="lista-tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ol>
        <button id="addTarefa" onClick={() => adicionarTarefa('Nova Tarefa')}>
          Adicionar Tarefa
        </button>
        <button id="removeTarefa" onClick={() => removerTarefa(0)}> 
          Remover Tarefa
        </button>
      </div>
    </main>
  );
};

export default Tarefas;
