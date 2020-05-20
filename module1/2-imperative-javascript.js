var result;

function getText() {
  var someText = prompt("Give me something to capitalize");
  capWords(someText);
  alert(result.join(" "));
}

function capWords(input) {
  var counter;
  var inputArray = input.split(" ");
  var transformed = "";
  result = [];
  for (counter = 0; counter < inputArray.length; counter++) {
    transformed = [
      inputArray[counter].charAt(0).toUpperCase(),
      inputArray[counter].substring(1),
    ].join("");
    result.push(transformed);
  }
}

document.getElementById("main_button").onClick = getText;

//  //    ISSUES  WITH IMPERATIVE STYLE
// - variables defined in the global scope, outside function
// - interdependent function for capWords() and getText()
// - values being passed aroudn and redefined
// - native javascritpt and dom methids mixed together
// - unclear what is happening out side the Script
// - function names being repeated in other stripts
// - brittle code that won't work outside specific context
