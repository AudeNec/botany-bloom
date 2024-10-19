const monstera = document.querySelector("#monstera img");
const numberPlantsContainer = document.querySelector("h1");
const plantPerSecondContainer = document.querySelector("header p");
const items = document.querySelectorAll("aside#tools article");
const itemNumber = document.querySelectorAll("section#aside article p.number-item")


let numberPlants = 0;
let plantPerSecond = 0;
let booster = 1;
let grains = 10;
let naturalFertilizer = 100;
let bees = 500;
let chimicalFertilizer = 1000;
let gardeners = 10000;
let seedling = 100000;
let greenhouse = 500000;

function uploadNumberPlants() {
    if (numberPlants < 2) {
        numberPlantsContainer.innerText = `${numberPlants} plante`
    } else numberPlantsContainer.innerText = `${numberPlants} plantes`;
}

function uploadPlantPerSecond() {
    if (plantPerSecond <2) {
        plantPerSecondContainer.innerText = `${plantPerSecond} nouvelle plante par seconde`
    } else plantPerSecondContainer.innerText = `${plantPerSecond} nouvelles plantes par seconde`;
}

monstera.addEventListener("click", () => {
    numberPlants += booster;
    uploadNumberPlants()
})

items.forEach(item => {
    item.addEventListener("click", () => {
        const numberItem = item.querySelector(".number-item");
        numberItem.innerText = parseInt(numberItem.innerText) + 1
    })
});