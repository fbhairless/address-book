
$(document).ready(function() {
  //  definitions pertaining to the initial submitting of the contact information
  $("#blanks form").submit(function() {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var name2Input = $("input#name2").val();
    var address1Input = $("input#address1").val();
    var address2Input = $("input#address2").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();
    var address1InputA = $("input#address1A").val();
    var address2InputA = $("input#address2A").val();
    var cityInputA = $("input#cityA").val();
    var stateInputA = $("input#stateA").val();
    var zipInputA = $("input#zipA").val();

    var contactInfo = new Contact(nameInput, name2Input);
    var addressInfo = new Address(address1Input, address2Input, cityInput, stateInput, zipInput);
    var addressInfoA = new Address(address1InputA, address2InputA, cityInputA, stateInputA, zipInputA);

//  Populating collection of information for displaying

    $("#receipt").show();

    contactInfo.addresses.push(addressInfo, addressInfoA);
    $("#indEntry").append("<li>" + contactInfo.fullName() + "</li>")
    contactInfo.addresses.forEach(function(address) {
      $("#indEntry").append("<ul>" +
      "<li>" + address.fullAddress() + "</li>" +
      "</ul>")
    });
// clearing the input so that the next itteration starts out blanks
    $("input#name").val('');
    $("input#name2").val('');
    $("input#address1").val('');
    $("input#address2").val('');
    $("input#city").val('');
    $("input#state").val('');
    $("input#zip").val('');
    $("input#address1A").val('');
    $("input#address2A").val('');
    $("input#cityA").val('');
    $("input#stateA").val('');
    $("input#zipA").val('');
  });

//preparation of second address input and submittal

  $('#add-address').click(function() {
    $('.secondAddress').show();
  })
});

//================== Backend ============================
// object and method definitions
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses =[];
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address (address1, address2, city, state, zip){
  this.address1 = address1;
  this.address2 = address2;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

Address.prototype.fullAddress = function () {
  return this.address1 + " " + this.address2 + " " + this.city + " " + this.state + " " + this.zip;
};
