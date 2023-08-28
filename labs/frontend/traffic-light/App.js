import TrafficLight from './TrafficLight'

import './styles.css'

const config = {
   red: {
      duration: 4000,
      next: 'yellow',
   },
   yellow: {
      duration: 500,
      next: 'green',
   },
   green: {
      duration: 3000,
      next: 'red',
   },
}

export default function App() {
   return <TrafficLight config={config} />
}
