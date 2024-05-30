function findCircleNum(isConnected: number[][]): number {
   const dfs = (city) => {
      for (let i = 0; i < isConnected.length; i++) {
         if (isConnected[city][i] === 1 && !visited[i]) {
            visited[i] = true
            dfs(i)
         }
      }
   }

   const visited = new Array(isConnected.length).fill(false)
   let provinces = 0

   for (let city = 0; city < isConnected.length; city++) {
      if (!visited[city]) {
         dfs(city)
         provinces++
      }
   }

   return provinces
}
