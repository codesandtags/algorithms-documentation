function sortPeople(names: string[], heights: number[]): string[] {
   const people: {
      name: string
      height: number
   }[] = []
   const N = names.length

   // Join arrays
   for (let i = 0; i < N; i++) {
      people.push({
         name: names[i],
         height: heights[i],
      })
   }

   // Sort
   people.sort((a, b) => {
      return b.height - a.height
   })

   // Return only names
   return people.map((p) => p.name)
}

function sortPeople(names: string[], heights: number[]): string[] {
   const hash: { [key: number]: string } = {}

   for (let i = 0; i < names.length; i++) {
      hash[heights[i]] = names[i]
   }

   return Object.values(hash).reverse()
}
