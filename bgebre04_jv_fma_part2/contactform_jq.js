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
  han:'required',
  email: {
    required: true,
    email: true
         }
       },
  messages:
  {
    firstName:{
      required:"*first name is required. Please enter your first name",
      minlength:"your first name must consist of atleast two characters."
    },
    lastName:{
      required:"*last name is required. Please enter your first name",
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