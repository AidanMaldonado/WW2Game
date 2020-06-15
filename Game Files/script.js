let operationNamesArray = ["Tiger"];

function operationGenerator() {
  var arrayLength = operationNamesArray.length;
  var randomNum = Math.random() * arrayLength;
  console.log(randomNum);

  document.getElementById("operationName").innerHTML = "Operation Pain";
}

operationGenerator();
