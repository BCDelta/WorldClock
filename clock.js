function startTime() {
    const today = new Date();
    let session = "AM";

    let hours = today.getHours();

    if(hours > 12) {
        session = "PM";
    }

    hours = standardTime(hours);

    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    
    document.getElementById('clock').innerHTML =  hours + ":" + minutes + ":" + seconds
                                    + " " + session;

    setTimeout(startTime, 1000);
    changeBackground(hours, session);
    
}

//Check whether it is AM or PM
function checkTime(i) {
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}

//Convert from military time to 12hr clock
function standardTime(hours) {
    const standardTime = 12;
    if( hours > standardTime) {
        hours -= standardTime;
    }
    return hours;
}

//Change from light/dark mode based on time
function changeBackground(hours, session) {
    var newAttribute = document.createAttribute("id");
    
    if(session === "PM") {
        if(hours >= 7 && hours < 12) {
        newAttribute.value = "transition-night";
        document.getElementsByTagName("BODY")[0].setAttributeNode(newAttribute);
        }
        else {
            newAttribute.value = "transition-day";
            document.getElementsByTagName("BODY")[0].setAttributeNode(newAttribute);   
        }
    }

    if(session === "AM") {
        if(hours >= 7 && hours < 12) {
            newAttribute.value = "transition-day";
            document.getElementsByTagName("BODY")[0].setAttributeNode(newAttribute);
        }
        else {
            newAttribute.value = "transition-night";
            document.getElementsByTagName("BODY")[0].setAttributeNode(newAttribute);  
        }
    }
    
}

function timeZoneNA() {
    var today = new Date();
    var collection = ['America/Los_Angeles', 'America/Chicago', 'America/New_York'];
    var index = 0;
    var convertedDate, convertedTime;
    for(index; index < collection.length; index++) {

        convertedDate = today.toLocaleString('en-US', {timeZone: collection[index]});
        convertedTime = convertedDate.split(",");
        document.getElementsByClassName("city")[index].innerHTML = convertedTime[1].trimStart();
    }
    //To update the time to be live
    setTimeout(timeZoneNA, 1000);
}

function timeZoneSA() {
    var today = new Date();
    var collection = ['America/Lima', 'America/Puerto_Rico', 'America/Argentina/Buenos_Aires'];
    var index = 0;
    var convertedDate, convertedTime;
    for(index; index < collection.length; index++) {

        convertedDate = today.toLocaleString('en-US', {timeZone: collection[index]});
        convertedTime = convertedDate.split(",");
        document.getElementsByClassName("city")[index].innerHTML = convertedTime[1].trimStart();
    }
    //To update the time to be live
    setTimeout(timeZoneSA, 1000);
}

function timeZoneAfrica() {
    var today = new Date();
    var collection = ['Africa/Kinshasa', 'Africa/Cairo', 'Africa/Johannesburg'];
    var index = 0;
    var convertedDate, convertedTime;
    for(index; index < collection.length; index++) {

        convertedDate = today.toLocaleString('en-US', {timeZone: collection[index]});
        convertedTime = convertedDate.split(",");
        document.getElementsByClassName("city")[index].innerHTML = convertedTime[1].trimStart();
    }
    //To update the time to be live
    setTimeout(timeZoneAfrica, 1000);
}
function timeZoneEurope() {
    var today = new Date();
    var collection = ['Europe/London', 'Europe/Paris', 'Europe/Moscow'];
    var index = 0;
    var convertedDate, convertedTime;
    for(index; index < collection.length; index++) {

        convertedDate = today.toLocaleString('en-US', {timeZone: collection[index]});
        convertedTime = convertedDate.split(",");
        document.getElementsByClassName("city")[index].innerHTML = convertedTime[1].trimStart();
    }
    //To update the time to be live
    setTimeout(timeZoneEurope, 1000);
}

function timeZoneAsia() {
    var today = new Date();
    var collection = ['Asia/Jakarta', 'Asia/Shanghai', 'Asia/Tokyo'];
    var index = 0;
    var convertedDate, convertedTime;
    for(index; index < collection.length; index++) {

        convertedDate = today.toLocaleString('en-US', {timeZone: collection[index]});
        convertedTime = convertedDate.split(",");
        document.getElementsByClassName("city")[index].innerHTML = convertedTime[1].trimStart();
    }
    //To update the time to be live
    setTimeout(timeZoneAsia, 1000);
}

function timeZoneAustralia() {
    var today = new Date();
    var collection = ['Australia/Perth', 'Australia/Sydney', 'Australia/Melbourne'];
    var index = 0;
    var convertedDate, convertedTime;
    for(index; index < collection.length; index++) {

        convertedDate = today.toLocaleString('en-US', {timeZone: collection[index]});
        convertedTime = convertedDate.split(",");
        document.getElementsByClassName("city")[index].innerHTML = convertedTime[1].trimStart();
    }
    //To update the time to be live
    setTimeout(timeZoneAustralia, 1000);
}
