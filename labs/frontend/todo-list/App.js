import { useState } from 'react'

import './styles.css'

let taskId = 0

const INITIAL_TASKS = [
   {
      id: taskId++,
      task: 'Walk the dog',
   },
   {
      id: taskId++,
      task: 'Water the plants',
   },
   {
      id: taskId++,
      task: 'Wash the dishes',
   },
]

export default function App() {
   const [newTask, setNewTask] = useState('')
   const [tasks, setTasks] = useState(INITIAL_TASKS)

   function handleInputTask(event) {
      setNewTask(event.target.value)
   }

   function addTask() {
      if (newTask === '') {
         return
      }

      setTasks(
         tasks.concat({
            id: taskId++,
            task: newTask,
         })
      )

      setNewTask('')
   }

   function deleteTask(id) {
      setTasks(tasks.filter((task) => task.id != id))
   }

   function renderTasks() {
      if (tasks.length === 0) {
         return (
            <div>
               <p>There are no tasks, please add one :) </p>
            </div>
         )
      }

      return (
         <ul>
            {tasks.map(({ id, task }) => {
               return (
                  <li id={id}>
                     <span>{task}</span>
                     <button
                        onClick={() => {
                           deleteTask(id)
                        }}
                     >
                        Delete
                     </button>
                  </li>
               )
            })}
         </ul>
      )
   }

   return (
      <div>
         <h1>Todo List</h1>
         <div>
            <input
               aria-label="Add your task"
               type="text"
               placeholder="Add your task"
               onChange={handleInputTask}
               value={newTask}
            />
            <div>
               <button onClick={addTask}>Submit</button>
            </div>
         </div>
         {renderTasks()}
      </div>
   )
}
