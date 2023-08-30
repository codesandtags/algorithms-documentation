/**
 * Class representing a vertex in a graph.
 *
 * The vertex is the most basic part of a graph and it is also called a node.
 * A vertex has a value associated with it, called a key.
 */

class Vertex {
   constructor(value) {
      this.value = value
      this.adjacents = []
   }

   addAdjacentDirect(vertex) {
      this.adjacents.push(vertex)
   }

   addAdjacentIndirect(vertex) {
      // Validates if the vertex does not exist in the adjacents array
      if (this.adjacents.indexOf(vertex) === -1) {
         this.adjacents.push(vertex)
         vertex.adjacents.push(this)
      }
   }

   removeAdjacent(vertex) {
      const index = this.adjacents.indexOf(vertex)
      if (index > -1) {
         this.adjacents.splice(index, 1)
         return vertex
      }
   }

   dfs() {
      const stack = [this]
      const visited = new Set()
      visited.add(this)

      while (stack.length > 0) {
         const current = stack.pop()
         console.log(current.value)

         for (const neighbour of current.adjacents) {
            if (!visited.has(neighbour)) {
               stack.push(neighbour)
               visited.add(neighbour)
            }
         }
      }
   }

   dfsTraverse(vertex, visitedVertices = {}) {
      visitedVertices[vertex.value] = true

      console.log(vertex.value)

      for (const neighbour of vertex.adjacents) {
         if (!visitedVertices[neighbour.value]) {
            this.dfsTraverse(neighbour, visitedVertices)
         }
      }
   }

   /**
    * Given a vertex return the neighbour if it exists.
    *
    * @param {*} vertex
    * @param {*} target
    * @param {*} visitedVertices
    */
   searchNeighbour(vertex, target, visitedVertices = {}) {
      visitedVertices[vertex.value] = true

      if (vertex.value === target.value) {
         return vertex
      }

      for (const neighbour of vertex.adjacents) {
         let found = null
         if (!visitedVertices[neighbour.value]) {
            found = this.searchNeighbour(neighbour, target, visitedVertices)
         }

         if (found) {
            return found
         }
      }
   }

   bfs() {
      // It starts with a queue and adds the first Vertex
      const queue = [this]
      const visitedVertices = new Set()
      visitedVertices.add(this)

      // Then iterates over the queue
      // and adds the adjacent vertices to the queue
      // and marks them as visited
      while (queue.length > 0) {
         const current = queue.shift()
         console.log(current.value)

         for (const neighbour of current.adjacents) {
            if (!visitedVertices.has(neighbour)) {
               queue.push(neighbour)
               visitedVertices.add(neighbour)
            }
         }
      }
   }
}

// Example of a direct graph of a social network
// where people follow other people
/*
const churrita = new Vertex('churrita')
const churrito = new Vertex('churrito')
const nala = new Vertex('nala')
const lucho = new Vertex('lucho')

churrita.addAdjacentDirect(churrito)
churrita.addAdjacentDirect(nala)

churrito.addAdjacentDirect(churrita)
churrito.addAdjacentDirect(lucho)
churrito.addAdjacentDirect(nala)

nala.addAdjacentDirect(churrita)
nala.addAdjacentDirect(churrito)

console.log(churrita)

churrita.removeAdjacent(churrito)

console.log(nala.adjacents*/

// Example of an undirected graph of a social network
// where people follow other people
/*
const alice = new Vertex('alice')
const bob = new Vertex('bob')
const charlie = new Vertex('charlie')

alice.addAdjacentIndirect(bob)
alice.addAdjacentIndirect(bob)

console.log(alice.adjacents)
console.log(bob.adjacents)
*/

const alice = new Vertex('alice')
const bob = new Vertex('bob')
const candy = new Vertex('candy')
const derek = new Vertex('derek')
const elaine = new Vertex('elaine')
const fred = new Vertex('fred')
const gina = new Vertex('gina')
const helen = new Vertex('helen')
const irena = new Vertex('irena')

alice.addAdjacentIndirect(bob)
alice.addAdjacentIndirect(candy)
alice.addAdjacentIndirect(derek)
alice.addAdjacentIndirect(elaine)

bob.addAdjacentIndirect(fred)
candy.addAdjacentIndirect(helen)

derek.addAdjacentIndirect(elaine)
derek.addAdjacentIndirect(gina)

fred.addAdjacentIndirect(helen)

gina.addAdjacentIndirect(irena)

console.log('\nTraverse using a DFS\n')
alice.dfsTraverse(alice)

console.log('\nTraverse using a BFS\n')
alice.bfs()
