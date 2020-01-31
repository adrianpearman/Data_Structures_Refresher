// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    //Case where no node list exists
    if (!this.head) {
      return null;
    }

    let node = this.head;
    // Loop through the nodelist
    while (node) {
      // When node.next === null || falsy return nodelist
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // Return if no node list exists
    if (!this.head) {
      return;
    }
    // set the first node item to the next node item
    this.head = this.head.next;
  }

  removeLast() {
    // In the case that the node does not include anythiung inside of it
    if (!this.head) {
      return;
    }

    // In the case that the node list has one value inside of it
    if (!this.head.next) {
      this.clear();
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    let last = this.getLast();
    // Empty node list scenario
    if (!this.head) {
      this.insertFirst(data);
    } else {
      last.next = new Node(data);
    }
  }

  getAt(index) {
    //Like Arrays, nodelists are zero based
    let node = this.head;
    let counter = 0;
    // Loop through nodelist
    while (node) {
      if (index === counter) {
        return node;
      }

      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    // I f no node list exists
    if (!this.head) {
      return;
    }
    // Handle case for when index === 0
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let previousNode = this.getAt(index - 1);
    // If there is no previous node or if the next node is null
    if (!previousNode || !previousNode.next) {
      return;
    }
    previousNode.next = previousNode.next.next;
  }

  insertAt(data, index) {
    // Empty node list
    if (!this.head) {
      this.insertFirst(data);
      return;
    }
    // case for index being 0
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    // set previous node to the previous node value or setting it to the last value ion the node list
    let previousNode = this.getAt(index - 1) || this.getLast();
    // setting a new node as the value passed with from the arguement and the previous node
    let node = new Node(data, previousNode.next);
    previousNode.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
