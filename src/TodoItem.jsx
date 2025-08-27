import { TrashIcon } from '@heroicons/react/24/solid';
export default function todoitem({tarea, toggleComplete, eliminarTarea}) {
    
    return (
        <div className="flex items-center gap-3 mb-2 p-3 shadow-md rounded">
            <span className={tarea.completed ? "line-through" : ""}>{tarea.texto}</span>
            <div className="flex items-center ml-auto">
                <input className="cursor-pointer w-5 h-5" type="checkbox" checked={tarea.completed} onChange={() => toggleComplete && toggleComplete(tarea.id)} />
                <button className="ml-2" onClick={() => eliminarTarea && eliminarTarea(tarea.id)}>
                    <TrashIcon className="w-5 h-5 text-red-500" />
                </button>
            </div>
        </div>
    )
}