import TodoItem from "./todoitem";
import { useState } from "react";
import './App.css'

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState("");

  const agregarTareas = () => {
    if (input.trim()) {
      setTareas([...tareas, { id: Date.now(), texto: input.trim(), completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (id) => {
  setTareas(
    tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
    )
  );

}

  console.log(tareas.map(tarea => tarea.texto));

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-center">Mi lista de tareas react</h1>
      <div className="flex gap-3 mb-4">
        <input className="flex-1 p-3 shadow-md rounder" type="text" value={input} onChange={e => setInput(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 rounder" onClick={agregarTareas}>Agregar tarea</button>
      </div>
      <div>
        {tareas.map((tarea) => (
          <TodoItem key={tarea.id} tarea={tarea} toggleComplete={toggleComplete} eliminarTarea={id => setTareas(tareas.filter(t => t.id !== id))} />
        ))}
      </div>
    </div>
  );
}