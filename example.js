const List = require('./index.js');

const list1 = new List();

list1.append('a');
list1.append('b')
list1.append('c')
console.log('length after appending 3 elements =', list1.length());

list1.insert('d', 1);
console.log('inserted element =', list1.get(1));
console.log('length after inserting element =', list1.length());

list1.delete(0);
console.log('new element on deleted position', list1.get(0));
console.log('length after deleting element =', list1.length());

list1.append('a');
list1.insert('a', 0);

console.log('length after adding 2 "a" elements =', list1.length());
list1.deleteAll('a');
console.log('length after deleting all "a" elements', list1.length());

console.log('list1 elements =', list1.get(0), list1.get(1), list1.get(2));
const list2 = list1.clone();
console.log('clonned list length =', list2.length());
console.log('clonned list elements =', list2.get(0), list2.get(1), list2.get(2));
list2.reverse();
console.log('reversed list2 elements =', list2.get(0), list2.get(1), list2.get(2));
console.log('list1 has no changes: ', list1.get(0), list1.get(1), list1.get(2));

const list3 = new List();
list3.append('a');
list3.append('a');
list3.append('a');
list3.append('a');
console.log('index of first "a"', list3.findFirst('a'));
console.log('index of last "a"', list3.findLast('a'));

list3.clear();
console.log('list3 length after called clear method =', list3.length());

console.log('list1 length =', list1.length());
console.log('list2 length =', list2.length());
list1.extend(list2);
console.log('new list1 length =', list1.length());