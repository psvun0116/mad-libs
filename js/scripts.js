$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personInput = $("input#person").val();
    var placeInput= $("input#place").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var adjectiveInput = $("input#adjective").val();
    var nounInput = $("input#noun").val();

    $(".person").text(personInput);
    $(".place").text(placeInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".adjective").text(adjectiveInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
