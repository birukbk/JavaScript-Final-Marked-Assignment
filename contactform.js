function init() {
    checkForm();
}

function checkForm() {
    //textHint();
    //textHint(document.getElementById("fristName"), "Enter your first name");
    textHintForAllFields();

}


function textHint(txtElem, defaultText) {
    var defaultText;
    var txtElem;
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
function textHintForAllFields(){
	textHint(document.getElementById("fristName"), "Enter your first name");
	textHint(document.getElementById("lastName"), "Enter your last name");
	textHint(document.getElementById("healthAuthorityNumber"), "health Autorith Number");
	textHint(document.getElementById("fristName"), "Enter your email");
	textHint(document.getElementById("email"), "Enter your email");
	textHint(document.getElementById("telephoneNumber"), "Enter your telephone number");


}

window.onload = init;
