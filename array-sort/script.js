var txt = '';
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
    txt = xmlhttp.responseText;
    txt = txt.split(/\s+/);
    arraySort(txt);
    keyFilter();
  }
};
xmlhttp.open("GET","unsorted.txt",true);
xmlhttp.send();

var arr = [], map = {};

function arraySort(arr) {
  // Store the arr items to map obj as key:value pair
  for(var j=0; j<arr.length;j++){
    if(map[arr[j]] >= 1){
      map[arr[j]] += 1;
    } else {
      map[arr[j]] = 1;
    }
  }
  return map;
}
var finalArray = [];
function keyFilter() {
  Object.keys(map).forEach(function(key) {
    if(map[key]>0){
      for(var i=1;i<=map[key];i++){
        finalArray.push(key);
      }
    }
  });
  var download = document.getElementById('download');
  download.onclick = function() {
    download.href = "data:text/plain;base64," + btoa(JSON.stringify(finalArray));
  };
}
