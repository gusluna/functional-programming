(function () {
  "use sctrict";
  var SomeText = function (text) {
    this.text = text;
  };
  SomeText.prototype.capify = function (str) {
    var firstLetter = str.charAt(0);
    var remaider = str.substring(1);
    return [firstLetter.toUpperCase(), remaider].join("");
  };
  SomeText.prototype.capifyWords = function () {
    var result = [];
    var textArray = this.text.split(" ");
    for (var counter = 0; counter < textArray.length; counter++) {
      result.push(this.capify(textArray[counter]));
    }
    return result.join(" ");
  };

  document
    .getElementById("main_button")
    .addEventListener("click", function (e) {
      var something = prompt("give me something to capitalize");
      var newText = new SomeText(something);
      alert(newText.capifyWords());
    });
})();
