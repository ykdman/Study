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
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("GoodBye");
list.push("Ivan");

console.log("test");
