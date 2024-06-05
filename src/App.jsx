import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Tarefas from "./pages/Tarefas.jsx";


function App() {
  const [count, setCount] = useState(0)
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/tarefas" element={<Tarefas/>}/>
        <Route path='*' element={<h1>Essa pagina não existe!</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
