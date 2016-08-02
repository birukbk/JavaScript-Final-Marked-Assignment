function init() {
    checkForm();
    setHintForAllFields();
    setFocus();
    switchToolTip();
}

function checkForm() {
    document.getElementById("contactForm").onsubmit = function() {
        var allowsubmit = false;
        if (checkMandatoryFields()) {
            validate("firstName", "lastName", "han", "email", "telephoneNumber");
        }
        return allowsubmit;

    };
}

function validate(firstName, lastName, han, email, telephoneNumber) {
    var allowsubmit = true;
    var firstName = document.getElementById(firstName).value;
    var lastName = document.getElementById(lastName).value;
    var han = document.getElementById(han).value;
    var email = document.getElementById(email).value;
    var telephoneNumber = document.getElementById(telephoneNumber).value;
    var firstNameRegex = /^[A-Za-z]{2,}$/.test(firstName);
    var lastNameRegex = /^[A-Za-z\-]{2,}$/.test(lastName);
    var hanRegex = /ZHA\d{6}/.test(han);
    var emailRegex = /^[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]+$/.test(email);
    var telephoneNumberRegex = /0\d{10}$| /.test(telephoneNumber);


    var messeges = {
        firstNameValidationError: "First name can't contain numbers or other non-allowed alphabetic characters.And must contain more than one character.",
        firstNameValidationErrorMinimumLength: "first name must contain more than one character.",
        lastNameValidationError: "Last name can't contain numbers or other non-allowed alphabetic characters.Only hyphen(e.g Whittaker-Jones).And must contain more than one character.",
        hanValidationError: "Invalid number it should be in the form of (e.g ZHA346783)",
        emailValidationError: "Invalid Email",
        telephoneNumberValidationError: "Invalid Telephone number.must be 11 digits starting with 0"
    }
    if (!firstNameRegex) {
        document.getElementById("firstNameValidationError").innerHTML = messeges.firstNameValidationError;
        allowsubmit = false;
    } else document.getElementById("firstNameValidationError").innerHTML = '';
    if (!lastNameRegex) {
        document.getElementById("lastNameValidationError").innerHTML = messeges.lastNameValidationError;
        allowsubmit = false;
    } else document.getElementById("lastNameValidationError").innerHTML = '';
    if (!hanRegex) {
        document.getElementById("hanValidationError").innerHTML = messeges.hanValidationError;
        allowsubmit = false;
    } else document.getElementById("hanValidationError").innerHTML = '';
    if (!emailRegex) {
        document.getElementById("emailValidationError").innerHTML = messeges.emailValidationError;
        allowsubmit = false;
    } else document.getElementById("emailValidationError").innerHTML = '';
    if (!telephoneNumberRegex) {
        document.getElementById("telephoneNumberValidationError").innerHTML = messeges.telephoneNumberValidationError;
        allowsubmit = false;
    } else document.getElementById("telephoneNumberValidationError").innerHTML = '';

    return allowsubmit;

}

function checkMandatoryFields() {
    var allowsubmit = true;
    var errorCollection = [];

    if (document.getElementById("firstName").value === "" || document.getElementById("firstName").value === "Enter your first name") {
        errorCollection.push("firstName");
        allowsubmit = false;
    } else clearError("firstName");

    if (document.getElementById("lastName").value === "" || document.getElementById("lastName").value === "Enter your last name") {
        errorCollection.push("lastName");
        allowsubmit = false;
    } else clearError("lastName");
    if (document.getElementById("title").value === "select a title") {
        errorCollection.push("title");
        allowsubmit = false;
    } else clearError("title");
    if (document.getElementById("han").value === "" || document.getElementById("han").value === "e.g. ZHA346783") {
        errorCollection.push("han");
        allowsubmit = false;
    } else clearError("han");

    if (document.getElementById("email").value === "" || document.getElementById("email").value === "Enter your email") {
        errorCollection.push("email");
        allowsubmit = false;

    } else clearError("email");
    if (!allowsubmit) {
        for (var i = 0; i < errorCollection.length; i++) {
            showError(errorCollection[i]);
        }

    }

    return (allowsubmit);
}

function textHint(txtElem, defaultText) {
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

function setHintForAllFields() {
    textHint(document.getElementById("firstName"), "Enter your first name");
    textHint(document.getElementById("lastName"), "Enter your last name");
    textHint(document.getElementById("han"), "e.g. ZHA346783");
    textHint(document.getElementById("email"), "Enter your email");
    textHint(document.getElementById("telephoneNumber"), "Enter your telephone number(optional)");
}

function setFocus() {
    document.getElementById("firstName").focus();
}

function getElementsValue(element) {
    var element;
    return document.getElementById(element).value;
}

function showError(errorId) {
    var er = errorId + "Error";
    document.getElementById(er).style.display = "inline";
}

function clearError(errorId) {
    var er = errorId + "Error";
    document.getElementById(er).style.display = "none";
}

function switchToolTip() {
    document.getElementById('qmark').onmouseover = function() {
        var toolTip = document.getElementById('ttip');
        toolTip.style.display = 'block';
    }
    document.getElementById('qmark').onmouseout = function() {
        var toolTip = document.getElementById('ttip');
        toolTip.style.display = 'none';
    }
}
window.onload = init;
