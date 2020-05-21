function createHome(content) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    box.style.padding = "60px";

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Welcome to A Restaurant";
    box.appendChild(title);
    content.appendChild(box);

    const aboutUs = document.createElement("h2");
    aboutUs.textContent = "About Us";
    aboutUs.classList.add("subtitle");
    box.appendChild(aboutUs);

    const aboutUsText = document.createElement("p");
    aboutUsText.style.textAlign = "center";
    aboutUsText.style.color = "white";
    aboutUsText.style.fontFamily = "cursive";
    aboutUsText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum neque at tincidunt ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus imperdiet gravida enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lacus nulla, eu rutrum ante egestas sed. Nunc tincidunt eros sit amet ipsum blandit, eu fringilla neque auctor. Aenean sapien sapien, posuere eget dolor non, pretium viverra turpis. Curabitur ultricies bibendum velit, vel convallis sem fermentum vel. Donec nibh metus, interdum non consequat non, auctor a libero. Nullam condimentum fringilla consequat. Aenean nec auctor sapien. Duis mollis quam felis, ac lobortis lorem molestie id. Suspendisse potenti. Aliquam varius ipsum nec gravida mollis. Nunc eu auctor enim. ";
    box.appendChild(aboutUsText);

    const hours = document.createElement("h2");
    hours.classList.add("subtitle");
    hours.textContent = "Business Hours:";

    const subBox = document.createElement("div");
    subBox.setAttribute("style", "display: flex; justify-content: space-around;");
    const subSubBox = document.createElement("div");
    subBox.appendChild(subSubBox);
    subSubBox.appendChild(hours);
    const hoursList = document.createElement("ul");
    hoursList.id = "hoursList";
    subSubBox.appendChild(hoursList)
    const monday = document.createElement("li");
    monday.textContent = "Monday: 8:00AM - 10:00PM";
    const tuesday = document.createElement("li");
    tuesday.textContent = "Tuesday: 8:00AM - 10:00PM";
    const wednesday = document.createElement("li");
    wednesday.textContent = "Wednesday: 8:00AM - 10:00PM";
    const thursday = document.createElement("li");
    thursday.textContent = "Thursday: 8:00AM - 10:00PM";
    const friday = document.createElement("li");
    friday.textContent = "Friday: 8:00AM - 10:00PM";
    const saturday = document.createElement("li");
    saturday.textContent = "Saturday: 8:00AM - 10:00PM";
    const sunday = document.createElement("li");
    sunday.textContent = "Sunday: 8:00AM - 10:00PM";
    hoursList.appendChild(monday);
    hoursList.appendChild(tuesday);
    hoursList.appendChild(wednesday);
    hoursList.appendChild(thursday);
    hoursList.appendChild(friday);
    hoursList.appendChild(saturday);
    hoursList.appendChild(sunday);

    const map = document.createElement("iframe");
    subBox.appendChild(map);
    box.appendChild(subBox);
    map.setAttribute("style", "margin-top: 40px; width: 400px; height: 300px;")
    map.setAttribute("src", "https:\/\/www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20823.747588133454!2d-123.20394516576219!3d49.276995072771896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486728d6fbc105d%3A0x6de6f0c9aa88282d!2sSpanish%20Banks%20Beach!5e0!3m2!1sen!2sca!4v1588889217108!5m2!1sen!2sca");
}


export default createHome;