const _dataOfStack = new WeakMap();

class Stack {
  constructor() {
    _dataOfStack.set(this, []);
  }

  get count() {
    return _dataOfStack.get(this).length;
  }

  peek() {
    const items = _dataOfStack.get(this);
    if (items.length === 0) throw new Error("Stack is empty");
    console.log(items[items.length - 1]);
  }

  pop() {
    const items = _dataOfStack.get(this);
    if (items.length === 0) throw new Error("Stack is empty");
    return items.pop();
  }

  push(ele) {
    _dataOfStack.get(this).push(ele);
  }
}

const stack = new Stack();
stack.push("a");
stack.peek();
stack.push("b");
stack.peek();
stack.pop();
stack.peek();
