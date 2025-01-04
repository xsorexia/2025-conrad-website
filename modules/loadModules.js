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