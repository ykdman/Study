// 단일 연결 리스트
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let first = new Node("hi");
first.next = new Node("2");
first.next.next = new Node("3");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      // 리스트가 비어있는 상태
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 리스트가 비어있지 않을 때

      this.tail.next = newNode; // 현재 tail의 next가 새로운 Node를 바라보게하고
      this.tail = newNode; // 현재 tail이 새로운 Node를 바라본다.
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  unshift(data) {
    const newNode = new Node(data);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
      this.length++;
      return this.head;
    }
  }

  /**
   * index 에 해당하는 Node 반환
   * @param index {number}
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (index !== counter) {
      current = current.next;
      counter++;
    }
    return current;
  }

  leftToRight() {
    if (!this.head) return undefined;
    let currentNode = this.head;

    while (currentNode.next) {
      console.log("currentNode", currentNode);
      currentNode = currentNode.next;
    }

    return currentNode;
  }
  set(index, inputData) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.data = inputData;
    }
    return foundNode;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(data) ?? false;
    if (index === 0) return this.shift(data) ?? false;

    const newNode = new Node(data);
    const prevNode = this.get(index - 1);
    const temp = prevNode.next;
    newNode.next = temp;
    prevNode.next = newNode;

    this.length++;
    return true;
  }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("GoodBye");
list.push("Ivan");
list.push("4");
list.push("<3>");

console.log("test");
