function calc(i){
  if (i % 2 == 0){
    return(i / 2);
  } else {
    return(3 * i + 1);
  }
}

function recurse(i, counter) {
  if(i > 1) {
    return(recurse(calc(i), counter + 1));
  } else {
    return(counter);
  }
}

var i=0;
var max_i = 0;
var max=0;
var temp=0;
var hashMap = {};

for(i; i < 1000000; i++) {
  temp = recurse(i, 1);
  if(temp > max){
    hashMap[i] = max;
    max_i = i;
    max = temp;
  }
}

console.log(max);
console.log(max_i);
