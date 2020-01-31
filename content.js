// console.log("Checker");
// chrome.runtime.onMessage.addListener(gotMessage);
// function gotMessage(message, sender, sendResponse){
//     console.log(message.txt);
//     var buttonc = document.getElementById("buttonId");
//     //console.log("button" + buttonc.innerHTML);
//     buttonc.click();
// }


    var checkStatus = {
                    "clockActive":false,
                    "in":false,    
                    "breake":false,
                    "breakeb":false,
                    "luncho": false,
                    "lunchb": false,
                    "leave": false,
                }
    var buttons = {
        "clock": "buttonId",
        "break": "break",
        "backFromBreak" : "back-from-break",
        "lunchOut":"lunch",
        "backFromLunch":"back-from-lunch",
        "leave":"leave",
    }
    var timerid = setInterval(myTimer ,20000);

function clickCheckButton(button){
    button.click();
    console.log( "Clock button clicked" + button.id );
    this.checkStatus.clockActive = true;
    var date = new Date();
    console.log("Clock active: " + date);
}

function clickButton(button){

}

function myTimer() {
    var buttonc = document.getElementById(this.buttons.clock);
    if (buttonc != null){
        clickCheckButton(buttonc);
    }
    else
    {
        console.log("Waiting for Clock button");
    }

    var currentdate = new Date();
    if (currentdate.getHours() == 13 && currentdate.getMinutes() == 21 
    && this.checkStatus.breake== false && this.checkStatus.clockActive){
            var buttonb = document.getElementsByClassName(this.buttons.break);   
            // buttonb[0].click();
            this.checkStatus.breake = true;
            console.log(buttonb[0].className); 
            console.log("Break: " + currentdate);
    }

    if (currentdate.getHours() == 13 && currentdate.getMinutes() == 25 
        && this.checkStatus.breakeb== false && this.checkStatus.clockActive){
        var buttonbb = document.getElementsByClassName(this.buttons.backFromBreak);
        //buttonbb[0].click();
        this.checkStatus.breakeb = true;
        console.log(buttonbb[0].className); 
        console.log("Back from Break: " + currentdate);
    }

    if(currentdate.getHours() == 11 && currentdate.getMinutes() == 59 
        && this.checkStatus.luncho==false&& this.checkStatus.clockActive){
            var buttonlo = document.getElementsByClassName(this.buttons.lunchOut);
            //buttonlo[0].click();//testing
            this.checkStatus.luncho=true;
            console.log(buttonlo[0].className);
            console.log("Lunch Out: " + currentdate);
    }
        
    if(currentdate.getHours() == 12 && currentdate.getMinutes() == 57 
    && this.checkStatus.lunchb==false&& this.checkStatus.clockActive){
        var buttonlb = document.getElementsByClassName(this.buttons.backFromLunch); //TODO:checarrr
        //buttonlb[0].click();
        this.checkStatus.lunchb=true;
        console.log(buttonlb[0].className);
        console.log("Back From Lunch: " +currentdate );
    }

    if(currentdate.getHours() == 16 && currentdate.getMinutes() == 1 
    && this.checkStatus.leave ==false && this.checkStatus.clockActive){
        var buttonle = document.getElementsByClassName(this.buttons.leave);
        buttonle[0].click();
        this.checkStatus.leave = true;
        console.log(buttonle[0].className);
        console.log("Leave: " + currentdate);
    }

    if(currentdate.getHours() == 16 && currentdate.getMinutes() <= 10 
        && this.checkStatus.leave ==true&& this.checkStatus.clockActive){
        this.checkStatus.in = false;
        this.checkStatus.breake = false;
        this.checkStatus.breakeb = false;
        this.checkStatus.luncho = false;
        this.checkStatus.lunchb = false;
        this.checkStatus.leave = false;
        console.log("Check ST Reset: " + currentdate);
        //clearInterval(timerid);
    }
}
