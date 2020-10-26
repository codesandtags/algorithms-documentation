class Solution {
  constructor() {
    this.queue = [];
    this.stack = [];
  }

  pushCharacter(ch) {
    this.stack.push(ch);
  }

  popCharacter() {
    return this.stack.pop();
  }

  enqueueCharacter(ch) {
    this.queue.unshift(ch);
  }

  dequeueCharacter() {
    return this.queue.pop();
  }
}

var s = new Solution();
var text = "yes";

for (let l of text) {
  s.pushCharacter(l);
  s.enqueueCharacter(l);
}

console.log("Stack => ", s.stack);
console.log("Queue => ", s.queue);

for (let l of text) {
  console.log(`${s.popCharacter()}  === ${s.dequeueCharacter()}`);
}
