console.warn("index(Map,Filter,Reduce).js");
/******* Map Method Start *******/
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];



console.log(typeof(arr));
console.log(Array.isArray(arr));
console.log(arr);



var anotherArr = []
for(var i = 0; i < arr.length; i++) {
   anotherArr.push(arr[i] * arr[i])
}
console.log("Type Of Map Method: " + typeof(anotherArr));
console.log(anotherArr);
console.log("Map Method: " + anotherArr);



function getSquares(item) {
   return item * item;
}
var newArr = arr.map(getSquares);
console.log("Type Of Map Method: " + typeof(newArr));
console.log(newArr);
console.log("Map Method: " + newArr);



var newArrs = arr.map(function(item) {
   return item * item;
})
console.log("Type Of Map Method: " + typeof(newArrs));
console.log(newArrs);
console.log("Map Method: " + newArrs);



const newArrsss = arr.map(item => item * item);
console.log("Type Of Map Method: " + typeof(newArrsss));
console.log(newArrsss);
console.log("Map Method: " + newArrsss);



var newArrss = arr.map(function(item, index, fullArr) {
    console.log('Item: ' + item + ' and index: ' + index + '. Full Array: ' + fullArr)
})
/******* Map Method End *******/











/******* Filter Method Start *******/
const nwArrr = arr.filter(function(item) {
	return item % 2 === 0;
});
console.log("Type Of Filter Method: " + typeof(nwArrr));
console.log(nwArrr);
console.log("Filter Method: " + nwArrr);



const newArrr = arr.filter(item => item % 2 === 0);
console.log("Type Of Filter Method: " + typeof(newArrr));
console.log(newArrr);
console.log("Filter Method: " + newArrr);



var newAr = arr.filter(function(item, index, fullArr) {
    console.log('Item: ' + item + ' and index: ' + index + '. Full Array: ' + fullArr)
})
/******* Filter Method End *******/













/******* Reduce Method Start *******/
var total = arr.reduce(function(sum, item){
   return sum += item;
}, 0);
console.log("Type Of Reduce Method: " + typeof(total));
console.log(total);
console.log("Reduce Method: " + total);



const t = arr.reduce((sum, item) => sum += item, 0)
console.log("Type Of Reduce Method: " + typeof(t));
console.log(t);
console.log("Reduce Method: " + t);



var total = arr.reduce(function(sum, item, index, fullArr) {
   console.log('Item: ' + item + ' and index: ' + index + '. Full Array: ' + fullArr + ' and sum: ' + sum);
   return sum += item
}, 0)
/******* Reduce Method End *******/