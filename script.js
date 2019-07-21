var john = [89, 120, 103];
var mike = [116, 94, 123];

johnSum = function(john){
  return john.reduce(function(a,b){
    return a + b
  }, 0);
}

  console.log("johnSum");
