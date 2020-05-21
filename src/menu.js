function createMenu(content) {
    document.body.style.backgroundSize = "1519.2px 1000.25px";

    const box = document.createElement("box");
    box.classList.add("box");
    box.style.paddingBottom = "30px";
    content.appendChild(box);

    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("title");
    menuTitle.textContent = "Menu";
    box.appendChild(menuTitle);

    const menuItems = document.createElement("div");
    box.appendChild(menuItems);

    const breakfastTitle = document.createElement("h2");
    menuItems.appendChild(breakfastTitle);
    breakfastTitle.classList.add("subtitle");
    breakfastTitle.textContent = "Breakfast";

    const breakfast = document.createElement("div");
    menuItems.appendChild(breakfast);
    breakfast.classList.add("menuTab");
    addMenuItem(breakfast, "Pancake", "assets/Pancakes.jpeg", 5, "loresp ipsum");
    addMenuItem(breakfast, "Fruit Salad", "assets/fruits.jpeg", 10, "lorep ipsum");

    const lunchTitle = document.createElement("h2");
    menuItems.appendChild(lunchTitle);
    lunchTitle.classList.add("subtitle");
    lunchTitle.textContent = "Mains";

    const lunch = document.createElement("div");
    menuItems.appendChild(lunch);
    lunch.classList.add("menuTab");
    addMenuItem(lunch, "Burger", "assets/burgers.jpeg", 7.99, "A nice nice Burger");
    addMenuItem(lunch, "Burrito", "assets/burrito.jpeg", 6.99, "A good tasting Burrito");

    const dinnerTitle = document.createElement("h2");
    menuItems.appendChild(dinnerTitle);
    dinnerTitle.classList.add("subtitle");
    dinnerTitle.textContent = "Dessert";

    const dinner = document.createElement("div");
    menuItems.appendChild(dinner);
    dinner.classList.add("menuTab");
    addMenuItem(dinner, "Ice Cream", "assets/icecream.jpg", 3.99, "Cooling refreshing ice cream");
    addMenuItem(dinner, "Cake", "assets/cake.jpeg", 4.99, "Chocolate Cake!!!");

    document.querySelectorAll("h2").forEach((titles) => titles.style.fontSize = "30px");
}

function addMenuItem(foodType, foodName, imgSrc, price, text) { 
    const food = document.createElement("div");
    food.setAttribute("style", "border: 10px solid black; background-color: rgba(0, 0, 0, 0.55);");
    foodType.appendChild(food);
    const foodPic = document.createElement("IMG");
    food.appendChild(foodPic);
    foodPic.setAttribute("src", imgSrc);
    foodPic.width = "300";
    foodPic.height = "300";
    const foodTitle = document.createElement("h3");
    food.appendChild(foodTitle);
    foodTitle.classList.add("foodTitle");
    foodTitle.style.fontSize = "25px";
    foodTitle.style.fontWeight = "bold";
    foodTitle.textContent = foodName;
    const foodPrice = document.createElement("h3");
    food.appendChild(foodPrice);
    foodPrice.textContent = "$" + price;
    foodPrice.classList.add("foodTitle");
    const foodText = document.createElement("p");
    food.appendChild(foodText);
    foodText.textContent = text;
    foodText.classList.add("foodText");
}

export default createMenu;