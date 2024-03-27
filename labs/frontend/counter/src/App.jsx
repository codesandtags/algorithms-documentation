import { useState } from 'react'

import './App.css'

// This is a warm up question to help you
// get familiar with the editor.
// Most of the code has been filled in for you.
export default function App() {
   const [count, setCount] = useState(0)

   return (
      <div>
         <button
            onClick={() => {
               setCount(count + 1)
            }}
         >
            Clicks: {count}
         </button>
      </div>
   )
}
