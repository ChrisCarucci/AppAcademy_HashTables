function anagrams(str1, str2) {
  // Your code here
  let startTime = new Date();

  let table1 = table(str1);
  let table2 = table(str2);


  for (const letter of str1) {
    if (table1[letter] !== table2[letter]) return false;    
  }
  for (const letter of str2) {
    if (table1[letter] !== table2[letter]) return false;    
  } 
  let endTime = new Date();
  console.log("Time Taken: " + (endTime-startTime) + "ms")
  return true    
}

function table(str) {
  let table = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (table[letter] === undefined) table[letter] = 1;
    else table[letter]++;
  }
  return table;
}



function commonElements(arr1, arr2) {
  // Your code here
  let testSet = new Set(arr1);
  let newArray = [];

  for (const item of arr2) {
    if (testSet.has(item)) {
      newArray.push(item)
    }
  }
  return newArray;

}


function duplicate(arr) {
  // Your code here

  let testSet = new Set();

  for (const item of arr) {
    if (testSet.has(item)) {
      return item;
  } else {
    testSet.add(item)
  }
}
};


const twoSum = (nums, target) => {
  const valToIndex = {};
  for (let i = 0; i < nums.length; i++) {
      if (target - nums[i] in valToIndex) {
          console.log([valToIndex[target - nums[i]], i])
          return true;
      }
      valToIndex[nums[i]] = i;
  }
  return false;
};



function wordPattern(pattern, strings) {
  let strSet = new Set(strings);
  let charSet = new Set(pattern.split(''));
  let i = 0
  while (i < pattern.length){
    if (charSet.size !== strSet.size) {
      return false;
    } else {
      charSet.delete(pattern[i]);
      strSet.delete(strings[i]);
      i++;
    }
  }
  return true;
};

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];