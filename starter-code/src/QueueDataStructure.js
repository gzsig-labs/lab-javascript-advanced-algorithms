class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }
  isEmpty() {
    return this.queueControl.length > 0 ? false : true;
  }
  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE ? true : false;
  }
  enqueue(item) {
    if(this.canEnqueue()){
      this.queueControl.unshift(item)
      return this.queueControl
    } else {
      return "Queue Overflow"
    }
  }
  dequeue() {
    if (this.isEmpty()){
      return "Queue Underflow"
    } else {
      return this.queueControl.pop()
    }
  }
}
