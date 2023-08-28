import Node from "./node.js";

const LinkedList = () => {
  let head = null;
  let tail = null;
  let size = 0;

  return {
    append: (value) => {
      const newNode = Node(value);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail.setNext(newNode);
        tail = newNode;
      }
      size++;
    },

    prepend: (value) => {
      const newNode = Node(value);
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        newNode.setNext(head);
        head = newNode;
      }
      size++;
    },

    size: () => size,

    head: () => head,

    tail: () => tail,

    at: (index) => {
      if (index < 0 || index >= size) return null;
      let current = head;
      for (let i = 0; i < index; i++) {
        current = current.getNext();
      }
      return current;
    },

    pop: () => {
      if (!head) return;
      if (head === tail) {
        head = null;
        tail = null;
      } else {
        let current = head;
        while (current.getNext() !== tail) {
          current = current.getNext();
        }
        tail = current;
        current.setNext(null);
      }
      size--;
    },

    contains: (value) => {
      let current = head;
      while (current) {
        if (current.value === value) return true;
        current = current.getNext();
      }
      return false;
    },

    find: (value) => {
      let current = head;
      let index = 0;
      while (current) {
        if (current.value === value) return index;
        current = current.getNext();
        index++;
      }
      return null;
    },

    toString: () => {
      let current = head;
      let str = "";
      while (current) {
        str += `( ${current.value} ) -> `;
        current = current.getNext();
      }
      return str + "null";
    },

    insertAt: (value, index) => {
      if (index < 0 || index > size) return; // Invalid index
      const newNode = Node(value);
      if (index === 0) {
        // Inserting at the beginning
        newNode.setNext(head);
        head = newNode;
        if (!tail) tail = newNode; // If list was empty
      } else {
        let current = head;
        for (let i = 0; i < index - 1; i++) {
          current = current.getNext();
        }
        newNode.setNext(current.getNext());
        current.setNext(newNode);
        if (index === size) tail = newNode; // Inserting at the end
      }
      size++;
    },

    removeAt: (index) => {
      if (index < 0 || index >= size) return; // Invalid index
      if (index === 0) {
        // Removing the first node
        head = head.getNext();
        if (!head) tail = null; // If list becomes empty
      } else {
        let current = head;
        for (let i = 0; i < index - 1; i++) {
          current = current.getNext();
        }
        current.setNext(current.getNext().getNext());
        if (index === size - 1) tail = current; // Removing the last node
      }
      size--;
    },
  };
};

export default LinkedList;
