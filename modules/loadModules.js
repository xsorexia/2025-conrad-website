var navbar = "/modules/navbar.html";
var footer = "/modules/footer.html";
var contact = "/modules/contact.html";

$("#navbar").load(navbar);
$("#footer").load(footer);
$("#contact").load(contact);

function showContact() {
    document.getElementById("contact").style.top = "30px";

}

function closeContact() {
    document.getElementById("contact").style.top = "-200px";
}

function toggleMission(element) {
    if (element.style.transform == "rotate(45deg)") {
        element.style.transform = "rotate(0)";
        element.parentElement.parentElement.style.maxHeight = "25px";
    } else {
        element.style.transform = "rotate(45deg)";
        element.parentElement.parentElement.style.maxHeight = "300px";

    }

}


function pricingSelectType(option, element) {
    var el = document.getElementById("s2-subtitle-content");
    document.getElementById("sc-o").style.visibility = "hidden"

    if (option == 1) {
        el.innerHTML = "LOW EARTH ORBIT";
    } else if (option == 2) {
        el.innerHTML = "OTHER ORBITS";
        document.getElementById("sc-o").style.visibility = "visible"

        document.getElementById("content").style.transform = "translateX(-100vw)"
        return;

    } else {
        el.innerHTML = "DEORBIT";
        
    }
    document.getElementById("content").style.transform = "translateX(-200vw)"

}

function pricingSelectOrbit(option, element) {
    document.getElementById("content").style.transform = "translateX(-200vw)"
}

function pricingChangeType() {
    document.getElementById("content").style.transform = "translateX(0)"
}


function pricingSelectMass(option, element) {
    document.getElementById("content").style.transform = "translateX(-300vw)"
    var el = document.getElementById("s3-subtitle-content");

    if (option == 1) {
        el.innerHTML = "1-3kg"
    } else if (option == 2) {
        el.innerHTML = "3-5kg"
    } else if (option == 3) {
        el.innerHTML = "5-7kg"
    } else {
        el.innerHTML = "7kg or above"
    }

}

function pricingChangeMass() {
    document.getElementById("content").style.transform = "translateX(-200vw)"

}

function pricingSelectLaunch(option, element) {
    document.getElementById("content").style.transform = "translateX(-400vw)"

}

function pricingStartOver() {
    document.getElementById("content").style.transform = "translateX(0)"

}