//back-end logic//








//Front-end logic//
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
  //  var colorChoice = $("input:radio[name=color]:checked").val();
    var snackChoice = $("input:radio[name=snack]:checked").val();
    var dndChoice = $("input:radio[name=dnd]:checked").val();
  //  var clothingChoice = $("input:radio[name=clothing]:checked").val();
    var result;
    if (snackChoice === "waffles" && dndChoice === "paladin") {
      result = "MIKE";
    } else if (snackChoice === "waffles" && dndChoice === "sorceror") {
      result = "ELEVEN";
    } else if (snackChoice === "waffles" && dndChoice === "bard") {
      result = "DUSTIN";
    } else if (snackChoice === "waffles" && dndChoice === "ranger") {
      result = "MIKE";
    }
    if (snackChoice === "pudding" && dndChoice === "bard") {
      result = "DUSTIN";
    } else if (snackChoice === "pudding" && dndChoice === "ranger") {
      result = "LUCAS";
    } else if (snackChoice === "pudding" && dndChoice === "paladin") {
      result = "DUSTIN";
    } else if (snackChoice === "pudding" && dndChoice === "sorceror") {
      result = "LUCAS";
    }

    $("#output").text(result);
  });

});
