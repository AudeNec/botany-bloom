const monstera = document.querySelector("#monstera img");
const numberPlantsContainer = document.querySelector("h2");
const plantPerSecondContainer = document.querySelector("header p");
const items = document.querySelectorAll("aside#tools article");
const itemNumber = document.querySelectorAll(
	"section#aside article p.number-item",
);

let numberPlants = 0;
let plantPerSecond = 0;
const booster = 1;
const itemsParameters = [
	{ addedPlant: 1, price: 10 },
	{ addedPlant: 10, price: 100 },
	{ addedPlant: 50, price: 500 },
	{ addedPlant: 100, price: 1000 },
	{ addedPlant: 500, price: 10000 },
	{ addedPlant: 1000, price: 100000 },
	{ addedPlant: 5000, price: 500000 },
];

function uploadNumberPlants() {
	if (numberPlants < 2) {
		numberPlantsContainer.innerText = `${numberPlants} plante`;
	} else numberPlantsContainer.innerText = `${numberPlants} plantes`;
}

function uploadPlantPerSecond() {
	if (plantPerSecond < 2) {
		plantPerSecondContainer.innerText = `${plantPerSecond} nouvelle plante par seconde`;
	} else
		plantPerSecondContainer.innerText = `${plantPerSecond} nouvelles plantes par seconde`;
}

function autoclick() {
	numberPlants += plantPerSecond;
	uploadNumberPlants();
}
setInterval(autoclick, 1000);

monstera.addEventListener("click", () => {
	numberPlants += booster;
	uploadNumberPlants();
});

for (const i in items) {
	const item = items[i];
	if (item instanceof HTMLElement) {
		item.addEventListener("click", () => {
			if (numberPlants >= itemsParameters[i].price) {
				const numberItem = item.querySelector(".number-item");
				numberItem.innerText = Number.parseInt(numberItem.innerText) + 1;
				plantPerSecond += itemsParameters[i].addedPlant;
				uploadPlantPerSecond();
				numberPlants -= itemsParameters[i].price;
				uploadNumberPlants();
			}
		});
	}
}
