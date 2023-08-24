/**
 * @param {string} selector
 * @return {{css: Function}}
 */
export default function $(selector) {
   const domElement = document.querySelector(selector)

   return {
      css: function (prop, value) {
         // Get value when it's not defined explicitely
         if (value === undefined) {
            if (domElement == null) {
               return undefined
            }

            const value = domElement.style[prop]

            return value === '' ? undefined : value
         }

         // Setter case
         if (domElement != null) {
            domElement.style[prop] = value
         }

         return this
      },
   }
}
