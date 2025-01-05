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
    document.getElementById("content").style.transform = "translateX(-100vw)"
    var el = document.getElementById("s2-subtitle-content");
    if (option == 1) {
        el.innerHTML = "LOW EARTH ORBIT";
    } else if (option == 2) {
        el.innerHTML = "OTHER ORBITS";
    } else {
        el.innerHTML = "DEORBIT";
    }
}

function pricingChangeType() {
    document.getElementById("content").style.transform = "translateX(0)"
}