const saludo = '👋 Hola mamá'
const lenta = new Promise((resolve, reject) => {
   setTimeout(resolve, 2000, '🐢 leeenta')
})
const rapida = Promise.resolve('⚡️ juaaazzz!')
const conErrores = () =>
   new Promise((resolve, reject) => {
      setTimeout(() => {
         reject('🤮 Sorry')
      }, 5000)
   })

async function magic() {
   try {
      console.log({
         results: await Promise.all([lenta, saludo, rapida]),
      })
   } catch (error) {
      console.log(error)
   }
}

console.log(magic())
