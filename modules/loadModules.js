var navbar = "/modules/navbar.html";
var footer = "/modules/footer.html";
var contact = "/modules/contact.html";

$("#navbar").load(navbar);
$("#footer").load(footer);
$("#contact").load(contact);

var priceList = [
    ["N / A", "Low Earth Orbit", "Other Orbits", "Deorbit"],
    ["N / A", "Geostationary Transfer Orbit", "Lunar Transfer Orbit", "Mars Transfer Orbit", "Cislunar Transfer Orbit"],
    ["N / A", "1-3kg", "3-5kg", "5-7kg", "7kg or above"],
    ["N / A", "Standard Launch", "Priority Launch"]
]

var costList = [
    [30, 40, 50, 60], // LEO
    [90, 100, 120, 140], // GTO
    [140, 170, 190, 210], // LTO
    [150, 180, 200, 220], // MTO
    [120, 130, 150, 170], // CTO
    [10, 10, 20, 20] // DEORBIT
]
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
    sessionStorage.setItem("service", option)
    sessionStorage.setItem("orbit", "0")

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
    sessionStorage.setItem("orbit", option)

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

    sessionStorage.setItem("mass", option)


}

function pricingChangeMass() {
    document.getElementById("content").style.transform = "translateX(-200vw)"

}

function pricingSelectLaunch(option, element) {
    document.getElementById("content").style.transform = "translateX(-400vw)"
    sessionStorage.setItem("launch", option)

    document.getElementById("s4-service").innerHTML = priceList[0][parseInt(sessionStorage.getItem("service"))]
    document.getElementById("s4-orbit").innerHTML = priceList[1][parseInt(sessionStorage.getItem("orbit"))]
    document.getElementById("s4-mass").innerHTML = priceList[2][parseInt(sessionStorage.getItem("mass"))]
    document.getElementById("s4-launch").innerHTML = priceList[3][parseInt(sessionStorage.getItem("launch"))]

    var cost = 0;
    if (sessionStorage.getItem("launch") == 2) {
        cost += 30;
    }

    if (sessionStorage.getItem("service") == 3) {
        cost += costList[5][parseInt(sessionStorage.getItem("mass"))-1]
    } else if (sessionStorage.getItem("service") == 1) {
        cost += costList[0][parseInt(sessionStorage.getItem("mass"))-1]
    } else {
        cost += costList[parseInt(sessionStorage.getItem("orbit"))][parseInt(sessionStorage.getItem("mass"))-1]
    }

    document.getElementById("s4-cost").innerHTML = `$${cost},000`;
}

function pricingStartOver() {
    document.getElementById("content").style.transform = "translateX(0)"

}