// Collection Functions (Arrays or Objects)

// myEach
function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (const value of values) {
      callback(value);
    }
    return collection;
  }
  
  // myMap
  function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (const value of values) {
      result.push(callback(value));
    }
    return result;
  }
  
  // myReduce
  function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let accumulator = acc === undefined ? values[0] : acc;
    const startIdx = acc === undefined ? 1 : 0;
    for (let i = startIdx; i < values.length; i++) {
      accumulator = callback(accumulator, values[i], collection);
    }
    return accumulator;
  }
  
  // myFind
  function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (const value of values) {
      if (predicate(value)) {
        return value;
      }
    }
    return undefined;
  }
  
  // myFilter
  function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (const value of values) {
      if (predicate(value)) {
        result.push(value);
      }
    }
    return result;
  }
  
  // mySize
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // Array Functions
  
  // myFirst
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  // myLast
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  // BONUS: mySortBy
  function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
      const aValue = callback(a);
      const bValue = callback(b);
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    });
  }
  
  // BONUS: myFlatten
  function myFlatten(array, shallow = false, newArr = []) {
    for (const element of array) {
      if (Array.isArray(element)) {
        if (shallow) {
          newArr.push(...element);
        } else {
          myFlatten(element, shallow, newArr);
        }
      } else {
        newArr.push(element);
      }
    }
    return newArr;
  }



  // index.js

// Function to retrieve all the names of an object's own enumerable properties
function myKeys(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new TypeError('Argument must be an object');
    }
    return Object.keys(obj);
  }
  
  // Function to retrieve all the values of an object's own properties
  function myValues(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new TypeError('Argument must be an object');
    }
    return Object.values(obj);
  }
  
  // Exporting the functions for testing
  module.exports = { myKeys, myValues };
  
  
  // Test Examples
  console.log(myEach([1, 2, 3], console.log));
  console.log(myMap([1, 2, 3], num => num * 2));
  console.log(myReduce([1, 2, 3], (acc, val) => acc + val, 0));
  console.log(myFind([1, 2, 3, 4], num => num % 2 === 0));
  console.log(myFilter([1, 2, 3, 4], num => num % 2 === 0));
  console.log(mySize({ one: 1, two: 2, three: 3 }));
  console.log(myFirst([5, 4, 3, 2, 1]));
  console.log(myLast([5, 4, 3, 2, 1]));
  console.log(mySortBy([1, 2, 3, 4, 5, 6], Math.sin));
  console.log(myFlatten([1, [2], [3, [[4]]]]));
  