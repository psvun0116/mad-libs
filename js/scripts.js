$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person", "place", "exclamation", "verb", "adjective", "noun"];

    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});
