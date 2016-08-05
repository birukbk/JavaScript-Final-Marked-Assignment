function init() {
    checkForm();
}

function checkForm() {
    document.getElementById("Assessment").onsubmit = function() {
        var allowsubmit = false;
        if (document.getElementById("submit").value === "Calculate") {
            var inputElement = document.getElementsByTagName("input");
            riskLevel = determineRiskLevel(getTotalScore(inputElement));
        }
        displayMessage(riskLevel);
        return false;
    };
}

/**
 * [getMainRiskFactors determining if user chosen fields are riskfactros and prepare message for the main risk factors]
 * @param inputElement [input elements that are checked and values that are >= 10 ]
 * @return {[array of main risk factors]}   
 */
function getMainRiskFactors(inputElement) {
    var index = 0;
    var riskFactors = [];
    for (index in inputElement) {
        if (inputElement[index].checked) {
            //check if the value is >= 10 
            selectedValue = Number(inputElement[index].attributes.value.value);
            if (selectedValue >= 10) {
                riskFactors.push(inputElement[index].attributes.name.value);
            }
        }
    }
    return riskFactors;
}

/**
 * [calculating the total score of the user risk from the chosen elements]
 * @param  {[checked input elements]} [user checked attribute values]
 * @return [sum of the values of the checked elements]
 */
function getTotalScore(inputElement) {
    var index = 0;
    var totalScore = 0;
    for (index in inputElement) {
        if (inputElement[index].checked) {
            selectedValue = Number(inputElement[index].attributes.value.value);
            totalScore += selectedValue;
        }
    }
    return totalScore;
}
/**
 * [this determines the risk level of the user form the total score]
 * @param  {[number]} totalScore [the calculated total score of the user]
 * @return [returns one of three categories as a risk level]
 */
function determineRiskLevel(totalScore) {
    if (totalScore <= 15) {
        risk = "lowRisk";
    }
    if (totalScore > 15 && totalScore <= 25) {
        risk = "mediumRisk";
    }
    if (totalScore > 25) {
        risk = "highRisk";
    }
    return risk;
}
/**
 * [creates the heading messages for the message board]
 */
function createHeadingMessage() {
    var heading = document.createElement("h3");
    var headingText = document.createTextNode("Your Result");
    heading.appendChild(headingText);
    document.getElementById("messegeBoard").appendChild(heading);
}
/**
 * [concatenating the message for the message board to display, the users risk factors]
 * @return [returns the message fully constructed plus the users main risk factor/s to display on the message board]
 */
function createMainRiskFactorMessage() {
    var mainRiskFactorMessage;
    var inputElement = document.getElementsByTagName("input");
    var mainRiskFactor = getMainRiskFactors(inputElement);
    if (mainRiskFactor.length === 1) {
        return mainRiskFactorMessage = "your main risk factor is your   " + mainRiskFactor + ".";
    } else {
        var lastMainRIskFactor = mainRiskFactor.pop();
        mainRiskFactorMessage = "your main risk factors are your  " + mainRiskFactor + " and " + lastMainRIskFactor + ".";
        return mainRiskFactorMessage;
    }
}
/**
 * [displays the fully constructed message to the message board for the user]
 * @param  riskLevel [one of the the three risk levels to construct the appropriate message for the message board]
 */
function displayMessage(riskLevel) {
    clearMessege();
    var messeges = {
        lowRisk: "Your results show that you currently have a low risk of developing diabetes. However, it is important that you maintain a healthy lifestyle in terms of diet and exercise.",
        mediumRisk: "Your results show that you currently have a medium risk of developing diabetes. For more information on your risk factors, and what to do about them, please visit our diabetes advice website at ",
        highRisk: "Your results show that you currently have a HIGH risk of developing diabetes." + createMainRiskFactorMessage() + "We advise that you contact the Health Authority to discuss your risk factors as soon as you can.Please fill in our ",
        extraInfo: " and a member of the Health Authority Diabetes team will be in contact with you."
    }

    var messege = document.createElement("p");
    var contactFormLink = document.createElement("a");
    var extraInfoText = document.createElement("p");
    if (riskLevel === "lowRisk") {
        messegeText = document.createTextNode(messeges.lowRisk);
        matchMessageBoardColorTo("lowRisk");
    }
    if (riskLevel === "mediumRisk") {
        messegeText = document.createTextNode(messeges.mediumRisk);
        contactFormLink.href = "http://www.zha.org.zd.";
        contactFormLink.innerHTML = "http://www.zha.org.zd.";
        matchMessageBoardColorTo("mediumRisk");
    }
    if (riskLevel === "highRisk") {
        messegeText = document.createTextNode(messeges.highRisk);
        extraInfoText = document.createTextNode(messeges.extraInfo);
        contactFormLink.href = "contactform.html";
        contactFormLink.innerHTML = "Contact form";
        matchMessageBoardColorTo("highRisk");

    }

    messege.appendChild(messegeText);
    messege.appendChild(contactFormLink);
    messege.appendChild(extraInfoText);

    createHeadingMessage();
    document.getElementById("messegeBoard").appendChild(messege);
    document.getElementById("messegeBoard").style.display = "inline";

}
/**
 * [changes the message board color according to the users risk level]
 * @param riskLevel [one of the three risk levels]
 */
function matchMessageBoardColorTo(riskLevel) {
    if (riskLevel === "lowRisk") {
        document.getElementById("messegeBoard").style.backgroundColor = '#FFF09F';
    }
    if (riskLevel === "mediumRisk") {
        document.getElementById("messegeBoard").style.backgroundColor = '#FFB24A';
    }
    if (riskLevel === "highRisk") {
        document.getElementById("messegeBoard").style.backgroundColor = '#FF3C1D';
    }

}

function clearMessege() {
    var x = document.getElementById("messegeBoard");
    while (x.hasChildNodes()) {
        x.removeChild(x.firstChild);
    }
}
window.onload = init;
