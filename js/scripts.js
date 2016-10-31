
$(document).ready(function() {
  $("#blanks form").submit(function() {
    var nameInput = $("input#name").val();
    var name2Input = $("input#name2").val();
    var address1Input = $("input#address1").val();
    var address2Input = $("input#address2").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".name").text(nameInput)
    $(".name2").text(name2Input)
    $(".address1").text(address1Input)
    $(".address2").text(address2Input)
    $(".city").text(cityInput)
    $(".state").text(stateInput)
    $(".zip").text(zipInput)


    $("#receipt").show();

    event.preventDefault();

    $(".receipt-hidden").hide();
  });
});
