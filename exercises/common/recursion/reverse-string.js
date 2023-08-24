function reverseStringRecursive(str) {
   return str === ''
      ? ''
      : reverseStringRecursive(str.substr(1)) + str.charAt(0)
}

reverseStringRecursive('This is sparta') // atraps si sihT

function reverseString(message) {
   // Base
   if (message.length <= 1) {
      return message
   }

   // Return recursion
   return reverseString(message.substr(1)) + message.charAt(0)
}

console.log(reverseString(message))

// Implementa una función que voltee el
// contenido de un string, usando recursión
// Es decir, no for, while, ni métodos
// utilitarios como Array.reverse
//
// Ejemplo:
// This is Sparta => atrapS si sihT

// Implementa una función que voltee el
// contenido de un string, usando recursión
// Es decir, no for, while, ni métodos
// utilitarios como Array.reverse
//
// Ejemplo:
// This is Sparta => atrapS si sihT

// Paso 0: Pensar en la solución
// Paso 1: Definir función
function reverse(text) {
   // Paso 2: Definir caso base
   if (text === '') {
      return text
   }
   console.log(text)

   // Paso 3: Aplicar recursión
   return reverse(text.substr(1)) + text.at(0)
}

// Paso 4: Probar que funcione
reverse('This is sparta')
