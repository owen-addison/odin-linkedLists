const Node = (value = null) => {
  let nextNode = null;

  return {
    value, // Use the passed value directly
    getNext: () => nextNode,
    setNext: (node) => {
      nextNode = node;
    },
  };
};

export default Node;
