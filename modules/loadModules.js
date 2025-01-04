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