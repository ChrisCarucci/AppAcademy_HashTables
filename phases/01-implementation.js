class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);


  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here

    let newNode = new KeyValuePair(key, value);
    let dataLocation = this.hashMod(key);

    // If Space Is Occupied
    if(this.data[dataLocation]) {
      let nodeItem = this.data[dataLocation];
      
      while (nodeItem !== null && nodeItem.key !== key) {
        nodeItem = nodeItem.next;
      }
    
      // If Space Is Vacant
      if (nodeItem === null) {
        newNode.next = this.data[dataLocation]; // Connect to LinkedList
        
        this.data[dataLocation] = newNode; // Set head to new node
        this.count++;
      } else {

      nodeItem.value = newNode.value;
      };
      
    } else {
      this.data[dataLocation] = newNode;
      this.count++;
    }



  }


  read(key) {
    // Your code here

    let mod = this.hashMod(key);
    let newNode = this.data[mod];


    while (newNode !== null && !(key === newNode.key)) {
      newNode = newNode.next
    } 
    // If Note Found
    if (newNode === null) return undefined;

    return newNode.value;

  }


  resize() {
    // Your code here

    // 1. Copy The Data + Store Current Count
    let dataCopy = this.data.slice();
    let countCopy = this.count;

    // 2. `Capacity` should now be double its previous value.
    this.capacity = this.capacity * 2;

    // 3. `Data` should now be a new `Array` scaling to the new `capacity`.
    this.data = new Array(this.capacity).fill(null);

    //4. Redistribute all of the elements in the copy
    // Check For Nested LL's With While Loop.
    for (let i = 0; i < dataCopy.length; i++) {
      let copied = dataCopy[i];
      while (copied) {
        this.insert(copied.key, copied.value);
        copied = copied.next;
      }

    this.count = countCopy;
  
    }

  }


  delete(key) {
    // Your code here

    // Set Location + Data to be Deleted

    let mod = this.hashMod(key);  
    let node = this.data[mod];
    let prev;     

    // Check for Node
    while (node !== null && !(key === node.key)) {
      prev = node;
      node = node.next
    }

    // If Node is Not Found
    if (node === null) return "Key not found";
    
     
    //Remove Node that is not on either end of the LL
    if (prev) { // node with key is  middle
      prev.next  = node.next;

    // Remove the Node at the Front.
    } else { 
      this.data[mod] = node.next;
    }

    this.count--;
  }
}


module.exports = HashTable;