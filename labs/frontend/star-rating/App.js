import { useState } from 'react'

import StarRating from './StarRating'

import './styles.css'

export default function App() {
   const [currentStars, setCurrentStars] = useState(3)

   return (
      <div>
         <StarRating
            max={5}
            value={currentStars}
            onChange={(stars) => {
               console.log(`Updating current stars ${stars}`)
               setCurrentStars(stars)
            }}
         />
      </div>
   )
}
