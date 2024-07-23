function sortPeople(names, heights) {
   const people = []
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
