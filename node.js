const Node = (value) => {
  let nextNode = null;

  return {
    value: null,
    nextNode: null,
    getNext: () => nextNode,
    setNext: (node) => {
      nextNode = node;
    },
  };
};

export default Node;
