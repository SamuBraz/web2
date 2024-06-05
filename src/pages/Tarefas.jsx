import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Tarefas(){
    
    
    return(
        <main class="flex-container">
        <div class="name-container">
            <h1>Suas tarefas</h1>
        </div>
        <div class="tarefas-container">
            <ol id="lista-tarefas">

            </ol>
            <button id="addTarefa" onclick="adicionarTarefa()">Adicionar Tarefa</button>
            <button id="addTarefa" onclick="removerTarefa()">Remove Tarefa</button>
        </div>
    </main>
    )
}