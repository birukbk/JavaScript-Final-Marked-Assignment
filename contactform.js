function init() {
    checkForm();
    setHintForAllFields();
    setFocus();

    
}

function checkForm() {
	document.getElementById("contactForm").onsubmit=function(){
		var allowsubmit = false;
		if (checkMandatoryFields()) {
			validate("firstName","lastName");

		}
		//checkMandatoryFields();
		
			

		
	
		//checkMandatoryFields();
		//console.log(validate("firstName","lastName"));
		console.log(checkMandatoryFields());
		
		
  return allowsubmit;
  
 };
}

function validate(firstName,lastName){
	var allowsubmit=true;
	var firstName=document.getElementById(firstName).value;
	var lastName=document.getElementById(lastName).value;
	var firstNameRegex = /^[A-Za-z]+$/.test(firstName);
	//var lastNameRegex = 

	var messeges = {
        firstNameValidationError: "First name can't contain numbers or other non-allowed alphabetic characters.Only hyphen(e.g Whittaker-Jones)",
        lastNameValidationError:"Error message for lastName"}

	if (!firstNameRegex) {
			document.getElementById("firstNameValidationError").innerHTML = messeges.firstNameValidationError;
			allowsubmit=false;
		}
		else document.getElementById("firstNameValidationError").innerHTML = '';
	if (!lastNameRegex ) {
			document.getElementById("lastNameValidationError").innerHTML = messeges.lastNameValidationError;
		}
		else document.getElementById("lastNameValidationError").innerHTML = '';

		return allowsubmit;

}
      function checkMandatoryFields()
      {
      	var allowsubmit = true;
      	var errorCollection=[];
      
         if( document.getElementById("firstName").value===""||document.getElementById("firstName").value==="Enter your first name")
         {
         	errorCollection.push("firstName");
            allowsubmit = false;
         }
          else clearError("firstName");
         
         if( document.getElementById("lastName").value===""||document.getElementById("lastName").value==="Enter your last name")
         {
            errorCollection.push("lastName");
            allowsubmit = false;
         }
         else clearError("lastName");
          if( document.getElementById("title").value==="select a title")
         {
            errorCollection.push("title");
            allowsubmit = false;
         }
          else clearError("title");
          if( document.getElementById("healthAuthorityNumber").value===""||document.getElementById("healthAuthorityNumber").value==="e.g. ZHA346783")
         {
             errorCollection.push("healthAuthorityNumber");
            allowsubmit = false;
         }
         else clearError("healthAuthorityNumber");

         if( document.getElementById("email").value===""||document.getElementById("email").value==="Enter your email")
         {
             errorCollection.push("email");
            allowsubmit = false;
           
         }
          else clearError("email");
          if(!allowsubmit){
          	for (var i = 0; i < errorCollection.length; i++) {
          	showError(errorCollection[i]);
          }

          }
          
         return( allowsubmit );
      }
function textHint(txtElem, defaultText) {
    //var defaultText;
    //var txtElem;
    txtElem.value = defaultText;
    txtElem.style.color = "#A8A8A8";
    txtElem.style.fontStyle = "italic";
    txtElem.onfocus = function() {
        if (this.value === defaultText) {
            this.value = "";
            this.style.color = "#000";
            this.style.fontStyle = "normal";
        }
    }
    txtElem.onblur = function() {
        if (this.value === "") {
            this.value = defaultText;
            this.style.color = "#A8A8A8";
            this.style.fontStyle = "italic";
        }
    }
}
function setHintForAllFields(){
	textHint(document.getElementById("firstName"), "Enter your first name");
	textHint(document.getElementById("lastName"), "Enter your last name");
	textHint(document.getElementById("healthAuthorityNumber"), "e.g. ZHA346783");
	textHint(document.getElementById("email"), "Enter your email");
	textHint(document.getElementById("telephoneNumber"), "Enter your telephone number");
}
function setFocus(){
	document.getElementById("firstName").focus();
}
function getElementsValue(element){
	var element;
	return document.getElementById(element).value;
}
function showError(errorId){
	var er=errorId+"Error";
	document.getElementById(er).style.display="inline";
}
function clearError(errorId){
	var er=errorId+"Error";
	document.getElementById(er).style.display="none";
}
window.onload = init;
//window.onload=checkForm;
