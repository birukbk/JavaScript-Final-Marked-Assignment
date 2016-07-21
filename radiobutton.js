function init(){
  checkForm();
}

function checkForm() {           
 document.getElementById("Assessment").onsubmit=function(){
    var allowsubmit = false;
    if (document.getElementById("submit").value==="Calculate"){ 
      var inputElement = document.getElementsByTagName("input");
      riskLevel = determineRiskLevel(getTotalScore(inputElement));

    }
    displayMessage(riskLevel);
    console.log(determineRiskLevel(risk));
    console.log(getTotalScore(inputElement));
    console.log(getMainRiskFactors(inputElement));
    console.log(createMainRiskFactorMessage());
    return false;
 };

     
} 
function getMainRiskFactors(inputElement){
  var index = 0;
  var riskFactors = [];
  for(index in inputElement) {
    if(inputElement[index].checked){
      //check if the value is grether or equal to 10    
      selectedValue = Number(inputElement[index].attributes.value.value);
      if (selectedValue>=10) {
        riskFactors.push(inputElement[index].attributes.name.value);
      } 
    }
  }
  return riskFactors;
}

function getTotalScore(inputElement){
  var index = 0;
  var totalScore = 0;
  for(index in inputElement) {
    if(inputElement[index].checked){
      selectedValue = Number(inputElement[index].attributes.value.value);
      totalScore += selectedValue;  
    }
  }
  return totalScore;
}

function determineRiskLevel(totalScore){
  if (totalScore<=15) 
    risk= "lowRisk";
  if (totalScore>15 && totalScore<=25) 
    risk= "mediumRisk";
  if (totalScore>25) 
    risk= "highRisk";
  return risk;
}
function clearMessege(){
  var x = document.getElementById("messegeBoard");
  while(x.hasChildNodes()){
  x.removeChild(x.firstChild);
}
}
function createHeadingMessage(){
  var heading = document.createElement("h3");
  var headingText = document.createTextNode("Your Result");
  heading.appendChild(headingText);
  document.getElementById("messegeBoard").appendChild(heading);
}



function createMainRiskFactorMessage(){
  var mainRiskFactorMessage;
  var inputElement = document.getElementsByTagName("input");
  var  mainRiskFactor=getMainRiskFactors(inputElement);
  if (mainRiskFactor.length ===1) {
    return mainRiskFactorMessage = "your main risk factor is your   " + mainRiskFactor  + ".";
  }
  else{
    var lastMainRIskFactor=mainRiskFactor.pop();
    mainRiskFactorMessage = "your main risk factors are your  " + mainRiskFactor + " and "+ lastMainRIskFactor +"." ;
    return mainRiskFactorMessage;
}
}
function displayMessage(riskLevel){
  clearMessege();
  var messeges={lowRisk:"Your results show that you currently have a low risk of developing diabetes. However, it is important that youmaintain a healthy lifestyle in terms of diet and exercise.",
  mediumRisk:"Your results show that you currently have a medium risk of developing diabetes. For more information on your risk factors, and what to do about them, please visit our diabetes advice website at ",
  highRisk: "Your results show that you currently have a HIGH risk of developing diabetes."+ createMainRiskFactorMessage(),
  extraInfo: " and a member of the Health Autorithy Diabetes team will be in contact with you."}

    
    var messege = document.createElement("p");
    var contactFormLink = document.createElement("a");
    var extraInfoText = document.createElement("p");
    if (riskLevel==="lowRisk") {messegeText = document.createTextNode(messeges.lowRisk);}
    if (riskLevel==="mediumRisk") {
      messegeText = document.createTextNode(messeges.mediumRisk);
      contactFormLink.href = "http://www.zha.org.zd.";
      contactFormLink.innerHTML = "http://www.zha.org.zd.";
    }
    if (riskLevel==="highRisk") {
      messegeText = document.createTextNode(messeges.highRisk);
      extraInfoText = document.createTextNode(messeges.extraInfo);
      contactFormLink.href = "ContactForm.html";
      contactFormLink.innerHTML = "Contact form";
    }
    
    messege.appendChild(messegeText);
    messege.appendChild(contactFormLink);
    messege.appendChild(extraInfoText);

    createHeadingMessage();
    document.getElementById("messegeBoard").appendChild(messege);
    document.getElementById("messegeBoard").style.display="inline";
}
window.onload=init;