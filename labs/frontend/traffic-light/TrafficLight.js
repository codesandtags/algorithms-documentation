import { useState, useEffect } from 'react'

function Light({ color, isActive }) {
   return <div className={`light ${color} ${isActive ? 'active' : ''}`}></div>
}

export default function TrafficLight({ initialLight = 'red', config }) {
   const [activeLight, setActiveLight] = useState(initialLight)

   useEffect(() => {
      const { next, duration } = config[activeLight]
      setTimeout(() => {
         setActiveLight(next)
      }, duration)
   }, [activeLight])

   const isLightActive = (light) => activeLight === light

   return (
      <div className="traffic-light-container">
         <Light color="red" isActive={isLightActive('red')} />
         <Light color="yellow" isActive={isLightActive('yellow')} />
         <Light color="green" isActive={isLightActive('green')} />
      </div>
   )
}
