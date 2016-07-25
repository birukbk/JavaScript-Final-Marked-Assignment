function init() {
    checkForm();
    setHintForAllFields();
    setFocus();
}

function checkForm() {
	document.getElementById("contactForm").onsubmit=function(){
  if(document.getElementById("firstName").value===""||document.getElementById("firstName").value==="Enter your first name"){
  //if(getElementsValue("firstName")===""||getElementsValue("firstName")==="Enter your first name"){
  showError("firstName");
    return false;
  } else {
    return true;
  }
  //return false;
  
 };
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
window.onload = init;
//window.onload=checkForm;
