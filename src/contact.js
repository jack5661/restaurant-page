function createContent(content) {
    const box = document.createElement("div");
    content.appendChild(box);
    box.classList.add("box");
    box.style.paddingBottom = "120px";

    const title = document.createElement("h1");
    title.textContent = "Contact Us";
    title.classList.add("title");
    box.appendChild(title);

    const subBox = document.createElement("div");
    box.appendChild(subBox);
    subBox.style.display = "flex";
    subBox.style.justifyContent = "space-around";

    const commentBox = document.createElement("div");
    commentBox.setAttribute("style", "display: flex; flex-direction: column; width: 400px; height: 400px;");
    subBox.appendChild(commentBox);
    const name = document.createElement("input");
    name.setAttribute("type", "text");
    name.setAttribute("placeholder", "Name");
    commentBox.appendChild(name);
    const email = document.createElement("input");
    email.setAttribute("type", "email");
    email.placeholder = "Email";
    commentBox.appendChild(email);
    const comment = document.createElement("textarea");
    commentBox.appendChild(comment);
    comment.setAttribute("style", "height: 300px; max-width: 354.8px; margin: 20px; background-color: rgba(0, 0, 0, 0.9); color: white; font-family: arial;");
    comment.placeholder = "Feedback/Questions/Concerns/Queries";
    comment.style.paddingBottom = "50%";
    commentBox.querySelectorAll("input").forEach((input) => {
        input.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        input.style.color = "white";
        input.style.margin = "20px";
    });
    name.style.marginTop = "27px";
    const infoBox = document.createElement("div");
    //infoBox.setAttribute("style", "display: flex; flex-direction: column;");
    subBox.appendChild(infoBox);
    addToInfoBox(infoBox, "Address", "XXXX Main St, Vancouver, XXX - XXX");
    addToInfoBox(infoBox, "Phone Number", "(XXX) - XXX - XXXX");
    addToInfoBox(infoBox, "Email", "info@restaurant.ca");

    const submit = document.createElement("button");
    submit.setAttribute("type", "button");
    submit.textContent = "Submit";
    submit.style.textAlign = "center";
    submit.style.width = "360.4px";
    submit.style.marginLeft = "20px";
    submit.style.borderRadius = "10px";
    submit.style.padding = "10px";
    commentBox.appendChild(submit);
}

function addToInfoBox(box, title, info) {
    const titleEle = document.createElement("h2");
    titleEle.classList.add("subtitle");
    box.appendChild(titleEle);
    titleEle.textContent = title;

    const infoEle = document.createElement("h3");
    infoEle.textContent = info;
    infoEle.style.color = "white";
    infoEle.style.textAlign = "center";
    box.appendChild(infoEle);
}

export default createContent;