class Stack {
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}


class MaxStack extends Stack {
  constructor() {
    super();
  }

  getMax() {
    let last = this.items.peek;
    let max = last;
    
    // while (last) {

    // }
  }
}

const max = new MaxStack();

max.push(2);

max.push(1);

console.log(max.items);
