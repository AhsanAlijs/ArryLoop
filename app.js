const fruitStore = document.getElementById("fruitesList");
const p = document.querySelector("p");

const fruitesArry = ["Apple", "Banana ", "Blackberry", "Blueberry", "Cherry", "Grapefruit", "Guava", "Kiwi", "Lemon", "Lime", "Mango", "Orange", "Papaya", "Peach", "Pear", "Pineapple", "Plum", "Raspberry", "Strawberry ", "Watermelon"];
// console.log(fruitesArry.length)

const reviewArry = [
    "I like to eat a crisp apple for a snack.", "I always put a banana in my morning smoothie.", "I always get stained fingers when I pick blackberries.", "I like to add blueberries to my oatmeal in the morning.", "I like to snack on cherries while watching a movie.", " Grapefruit is a great source of vitamin C.", "I love the tropical taste of guava juice.", "Kiwi adds a nice tang to fruit salad.", "I use lemon juice to add some zing to my cooking.", "I enjoy a refreshing lime margarita on a hot day.", "My favorite fruit salad has mango, papaya, and pineapple in it.", "The orange tree in my backyard produces delicious fruit every year.", "Papaya is a great source of digestive enzymes.", "A ripe peach is one of the best summer treats.", "Poached pears make a delicious and elegant dessert.", "Ilove the taste of fresh pineapple on pizza.", "The plum sauce is a great addition to stir - fry dishes.", "Raspberry jam is my favorite kind of spread for toast.", " I can’t resist a bowl of freshly picked strawberries.", "Nothing beats a juicy slice of watermelon on a hot day"];

    // console.log(reviewArry.length);

for(let i = 0; i<fruitesArry.length;i++){
    // console.log(fruitesArry[i]);
    fruitStore.innerHTML+=`<button onclick="show(${i})">${fruitesArry[i]}</button><br>`
}
function show(i){
    // console.log(`${fruitesArry[i]} ${reviewArry[i]}`)

    p.innerHTML+=`<li>${fruitesArry[i]} ${reviewArry[i]}</li><br>`



}




































