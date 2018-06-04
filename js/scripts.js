$(document).ready(function(){
  debugger;
  var simpleNumbers = [1, 2, 3, 4, 5];
  var simpleAdditions = simpleNumbers.map(function(simpleNumber){
    return simpleNumber + 1;
  });
  $("span.arrayMap").prepend(simpleAdditions);

  var simpleStrings = ["hi", "hello", "no"];
  var simpleStringsUppcase = simpleStrings.map(function(simpleString){
    return simpleString.toUpperCase();
  });
  $("span.stringMap").prepend(simpleStringsUppcase);
});
