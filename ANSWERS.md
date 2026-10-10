# Lab 1 — Think Questions

## Exercise 1 — Strings

**Question:** After `const e = " A@B.org "; cleanEmail(e);`, what is the value of `e`? Why?

**Answer:** The value of `e` is still `" A@B.org "`. Strings are immutable in JavaScript, so `trim()` and `toLowerCase()` return a new string instead of changing the original string.

## Exercise 2 — Conditionals and Loops

**Question:** What goes wrong if you test `grade >= 10` first in the `letter()` function? Try it with `letter(17)`.

**Answer:** If `grade >= 10` is tested first, `letter(17)` returns `"D"` instead of `"A"`. Since 17 is also greater than 10, the function matches the first condition and never checks the higher grades.

## Exercise 3 — Arrays of Objects

**Question:** Why does `withPrice` need the spread syntax? What would happen if you changed `product.price` directly?

**Answer:** The spread syntax creates a new object by copying the original product's properties and replacing its price. If I changed `product.price` directly, the original product would also be modified.

## Exercise 4 — Selecting and Changing Elements

**Question:** If you use `"title"` without `#` in `querySelector`, which element is found, and why?

**Answer:** `querySelector("title")` selects the HTML `<title>` element in the document's head, not the `<h1>` element. The `#` symbol is used to select an element by its ID, so `querySelector("#title")` selects the heading with `id="title"`.

## Exercise 5 — Creating Elements From Data

**Question:** What happens when you add a sixth meal to the `meals` array without changing the HTML? Why is building the page from data useful?

**Answer:** The page displays the sixth meal and updates the meal count, provided the JavaScript loops through the array and calculates the count dynamically. Building the page from data makes it easier to add, remove, or update meals without manually changing the HTML.

## Exercise 6 — Click, Input, Focus, and Blur

**Question:** What happens if you write `plus.addEventListener("click", addOne());` with parentheses, and why?

**Answer:** The `addOne()` function is called immediately when the JavaScript runs, rather than when the button is clicked. The event listener receives the function's return value instead of the function itself. I should write `plus.addEventListener("click", addOne)` to run it on a click.

## Exercise 7 — A Form

**Question:** What happens if you comment out `event.preventDefault()` and submit a name? Why?

**Answer:** The browser performs the form's default submission and reloads the page. The newly added guest may disappear because the list exists only in the page's current JavaScript state and is not saved anywhere.
