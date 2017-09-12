var myObj = {};
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    jsonParse(myObj);
  }
};
xmlhttp.open("GET", "sample.log", true);
xmlhttp.send();

function jsonParse(obj) {
  var textnode,
      node = document.createElement("div");
  const methodCountMap = {};
  for(element of myObj) {
    if(!methodCountMap[element.method]) {
      methodCountMap[element.method] = 0
    }
    methodCountMap[element.method] += 1;
  };
  Object.keys(methodCountMap).forEach(function(key) {
    textnode = "Processing by SprintsController => " + key  + " action ran " + methodCountMap[key] + " times";
    node.innerHTML += textnode + "<br>";
    document.getElementsByClassName('test')[0].appendChild(node);
  });
}
