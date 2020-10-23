/**
 *  Given a numbers array, find the number with most frequently 
 */

const arr = [1,2,3,4,4,4,5,5,6,7];

let object = {};
let numFreq = arr[0];
let max = 0;

for( let i = 0; i < arr.length; i++) {
   let el = arr[i];

   if( object[el] == undefined) {
       object[el] = 1;
   } else {
       object[el]++;

       if(object[el] > max) {
           max = object[el];
           numFreq = el;
       }
   }
};

console.log('The most frequent number is', numFreq);

let numbers = new Map();
max = 0;

for( let i = 0; i < arr.length; i++) {
   let el = arr[i];
   if(!numbers.has(el)) {
       numbers.set(el, 1);
   } else {
       numbers.set(el, numbers.get(el) + 1);
       if (numbers.get(el) > max) {
           max = numbers.get(el);
           numFreq = el;
       }
   }
};

console.log('The most frequent number is', numFreq);

max = 0;

arr.reduce((acum, current) => {
   if (acum[current] == undefined) {
       acum[current] = 1;
   } else {
       acum[current]++;
       if( acum[current] > max) {
           max = acum[current];
           numFreq = current;
       }
   }
   return numFreq;
}, {});

console.log('The most frequent number is', numFreq);
