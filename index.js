import LinkedList from "./linkedList.js";

// Create a new LinkedList
const list = LinkedList();

// Test appending values to the list
list.append(1);
list.append(2);
list.append(3);
console.log(list.toString()); // Expected output: ( 1 ) -> ( 2 ) -> ( 3 ) -> null

// Test prepending values to the list
list.prepend(0);
console.log(list.toString()); // Expected output: ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null

// Test size of the list
console.log(list.size()); // Expected output: 4

// Test getting the head and tail of the list
console.log(list.head().value); // Expected output: 0
console.log(list.tail().value); // Expected output: 3

// Test getting a node at a specific index
console.log(list.at(2).value); // Expected output: 2

// Test popping the last element from the list
list.pop();
console.log(list.toString()); // Expected output: ( 0 ) -> ( 1 ) -> ( 2 ) -> null

// Test if the list contains a specific value
console.log(list.contains(1)); // Expected output: true
console.log(list.contains(3)); // Expected output: false

// Test finding the index of a node with a specific value
console.log(list.find(1)); // Expected output: 1
console.log(list.find(3)); // Expected output: null

// Test inserting a node at a specific index
list.insertAt(0.5, 1);
console.log(list.toString()); // Expected output: ( 0 ) -> ( 0.5 ) -> ( 1 ) -> ( 2 ) -> null

// Test removing a node at a specific index
list.removeAt(2);
console.log(list.toString()); // Expected output: ( 0 ) -> ( 0.5 ) -> ( 2 ) -> null

// Test inserting a node at the beginning
list.insertAt(-1, 0);
console.log(list.toString()); // Expected output: ( -1 ) -> ( 0 ) -> ( 0.5 ) -> ( 2 ) -> null

// Test inserting a node at the end
list.insertAt(3, 4);
console.log(list.toString()); // Expected output: ( -1 ) -> ( 0 ) -> ( 0.5 ) -> ( 2 ) -> ( 3 ) -> null

// Test removing a node at the beginning
list.removeAt(0);
console.log(list.toString()); // Expected output: ( 0 ) -> ( 0.5 ) -> ( 2 ) -> ( 3 ) -> null

// Test removing a node at the end
list.removeAt(3);
console.log(list.toString()); // Expected output: ( 0 ) -> ( 0.5 ) -> ( 2 ) -> null
