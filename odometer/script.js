var temp = 56287;
var arr = [];
for (var j = 0; j < temp; j++) {
  arr.push(j);
}
var i = 0,
  len = arr.length,
  reg = /(4)/g;
for (; i < len; i++) {
  if (String(arr[i]).match(reg)) {
    arr.splice(i, 1);
  }
}
document.querySelectorAll('.test')[0].textContent = "The actual reading on the Odometer is: " + arr.length;
console.log("The actual reading on the Odometer is: " + arr.length);
