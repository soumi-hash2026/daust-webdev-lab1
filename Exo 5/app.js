const meals = [
  { day: "Monday",    dish: "Thieboudienne",        vegetarian: false },
  { day: "Tuesday",   dish: "Ndambé",               vegetarian: true },
  { day: "Wednesday", dish: "Yassa poulet",         vegetarian: false },
  { day: "Thursday",  dish: "Couscous aux légumes", vegetarian: true },
  { day: "Friday",    dish: "Mafé",                 vegetarian: false },
];

const menu  = document.querySelector("#menu");
const count = document.querySelector("#count");

// TODO 1 — Create and return ONE <li> for a meal:
//   - its text is "Monday: Thieboudienne"   (createElement + textContent)
//   - if the meal is vegetarian, add the class "veg"
function createMealItem(meal) {
const li = document.createElement("li");
li.textContent=`${meal.day}: ${meal.dish}`;
if(meal.vegetarian){
li.classList.add("veg")
}
    return li;
}

// TODO 2 — Loop over meals (for...of) and append each item to the #menu list.
const li = document.querySelector("#menu");
for(const meal of meals){
    menu.append(createMealItem(meal));
}
// TODO 3 — Write in #count: "5 meals · 2 vegetarian"
// Hint: meals.length, and filter(...).length for the vegetarian ones.
count.textContent = `${meals.length} meals · ${meals.filter(meal => meal.vegetarian).length} vegetarian`;

// BONUS 4 — Show the day in bold: inside the li, create a <strong> for the day,
// and append the strong and then the text ": dish" to the li.

const strong = document.createElement("strong");
strong.textContent=meal.day;
li.append(strong);
li.append(`: ${meal.dish}`);