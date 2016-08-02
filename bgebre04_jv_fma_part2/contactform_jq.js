$(document).ready (function (){
  $("#firstName").focus();
  switchToolTip();
  addDeafultText("#lastName","Enter last name");
  addDeafultText("#han","e.g. ZHA346783");
  addDeafultText("#email","Enter email");
  addDeafultText("#telephoneNumber","Enter telephone number (optional)");
  $('#contactForm').validate({
  rules: {
  firstName: {
    required:true,
    minlength:2
  },
   lastName: {
    required:true,
    minlength:2
  },
  title:'required',
  email: {
    required: true,
    email: true
         },
    han:{
      required:true,
      validHAN:true
    },
    telephoneNumber:{
      validTelephoneNumber:true
    }
       },
  messages:
  {
    firstName:{
      required:"*first name is required. Please enter first name",
      minlength:"First name must consist of at least two characters."
    },
    lastName:{
      required:"*last name is required. Please enter last name",
      minlength:"Last name must consist of at least two characters."
    },
    title:{
      required:"*Title is required,please select a title"
      
    },
    email:{
      required:"email is required, please enter email"
    }
  }
  });
});

/* [adds a custom validator for Health authority number]*/
$.validator.addMethod("validHAN",
  function (value){
    return /ZHA\d{6}/.test(value);
  },
  "* You must enter a valid health authority number. (e.g ZHA346783)"
  );

/*[adds a custom validator for telephone number] */
$.validator.addMethod("validTelephoneNumber",
  function (telephoneNumber,element){
    return this.optional(element) || /0\d{10}$| /.test(telephoneNumber);
  },
  "* You must enter a valid UK telephone number"
  );
/* adds tool tip on mouse over and mouse out functionality*/
function switchToolTip() { 
$("#qmark").mouseover(function() {
  $("#ttip").show();
}).mouseout(function(){
  $("#ttip").hide();
});
}

/**
 * adds default text to input field, and clears out the text on focus out
 * @param {[inputname, default text]} inputname [name of the input to set the default text to and the text]
 */
function addDeafultText(inputname,text){
    $(inputname).focusin(function () {
        $(this).attr("placeholder", "");
    });
    $(inputname).focusout(function () {
        $(this).attr("placeholder", text);
    }).focusout();
}
