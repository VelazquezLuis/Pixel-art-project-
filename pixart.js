// Select color input

// Select size input
// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event) {
  event.preventDefault();
  var height = $("#inputHeight").val();
  var width = $("#inputWidth").val();
  makeGrid(height, width);
  
});

function makeGrid(a, b) {
  $("tr").remove();
  // Your code goes here!
  for (var r = 1; r <= a; r++) {
    $("#pixelCanvas").append("<tr id=table" + r + "></tr>");
    var c = 1;
    while (c <= b) {
      c++;
      $("#table" + r).append("<td></td>");
    }
  }
  //add color to each cell
  $("td").click(function addColor() {
    var color = $("#colorPicker").val();

    if ($(this).attr("style")) {
      $(this).removeAttr("style");
    } else {
      $(this).attr("style", "background-color:" + color);
    }
  });
}
