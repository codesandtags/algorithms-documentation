// Libera a todos los animales del Zoológico
// Se espera un arreglo unicamente con los animales
const zoologico = [[], ['🐒'], ['🦒'], [['🦏', '🦄']], [[['🦁']]]]

const liberarAnimales = (zoologico) => {
   let animales = []

   zoologico.forEach((jaula) => {
      if (Array.isArray(jaula)) {
         animales = animales.concat(liberarAnimales(jaula))
      } else {
         animales.push(jaula)
      }
   })

   return animales
}

// Solucion con flat
const liberarAnimalesFlat = (zoologico) => {
   return zoologico.flat(Infinity)
}

console.log(liberarAnimales(zoologico))
console.log(liberarAnimalesFlat(zoologico))
