import createHome from "./home.js"
import createMenu from "./menu.js"
import createContact from "./contact.js"

const body = document.body;

body.style.background = "url(\"assets/restaurant.jpg\")";

const content = document.querySelector("#content");

const nav_bar = document.createElement("ul");
nav_bar.setAttribute("id", "nav_bar");
const home_tab = document.createElement("li");
home_tab.textContent = "Home";
home_tab.setAttribute("class", "tabs");
home_tab.onclick = startPage;
const menu_tab = document.createElement("li");
menu_tab.textContent = "Menu";
menu_tab.setAttribute("class", "tabs");
menu_tab.onclick = () => {
    clearContent();
    window.scrollTo(0, 0);
    createMenu(content);
}
const contact_tab = document.createElement("li");
contact_tab.textContent = "Contact Us";
contact_tab.setAttribute("class", "tabs");
contact_tab.onclick = () => {
    clearContent();
    window.scrollTo(0, 0);
    createContact(content);
}
nav_bar.appendChild(contact_tab);
nav_bar.appendChild(menu_tab);
nav_bar.appendChild(home_tab);
document.body.insertBefore (nav_bar, document.body.childNodes[0]);

startPage();

function startPage() {
    window.scrollTo(0, 0);
    clearContent();
    createHome(content);
}

function clearContent() {
    body.style.backgroundSize = "cover";
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}