$(document).ready (function (){
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
      required:"*first name is required. Please enter your first name",
      minlength:"your first name must consist of atleast two characters."
    },
    lastName:{
      required:"*last name is required. Please enter your last name",
      minlength:"your last name must consist of atleast two characters."
    },
    title:{
      required:"*Title is required,please select a title"
      
    },
    email:{
      required:"email is required, please enter your email"
    }
  }
  });
});
$.validator.addMethod("validHAN",
  function (value){
    return /ZHA\d{6}/.test(value);
  },
  "* You must enter a valid health authority number. (e.g ZHA346783)"
  );
$.validator.addMethod("validTelephoneNumber",
  function (telephoneNumber,element){
    return this.optional(element) || /0\d{10}$| /.test(telephoneNumber);
  },
  "* You must enter a valid telephone number"
  );
