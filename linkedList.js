import Node from "./node";

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
  };
};

export default LinkedList;
