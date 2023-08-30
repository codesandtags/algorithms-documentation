// This is an input class. Do not edit.
class BinaryTree {
   constructor(value) {
      this.value = value
      this.left = null
      this.right = null
   }
}

const operations = {
   '-1': (a, b) => a + b,
   '-2': (a, b) => a - b,
   '-3': (a, b) => Math.trunc(a / b),
   '-4': (a, b) => a * b,
}

function evaluateExpressionTree(tree) {
   const { value, left, right } = tree

   if (operations[value]) {
      return operations[value](
         evaluateExpressionTree(left),
         evaluateExpressionTree(right)
      )
   }

   return value
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree
exports.evaluateExpressionTree = evaluateExpressionTree
