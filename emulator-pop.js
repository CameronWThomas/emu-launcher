
var availableConsoles = [
    {
        gconsole: "Nintendo 64",
        image: "img/n64.png",
    },
    {
        gconsole: "Gamecube",
        image: "img/gc.png"
    }
];

var emulationArea = document.getElementById("emulator-select");
console.log(emulationArea);


let listItem = document.querySelector('#gconsole');
console.log('list item');
console.log(listItem);

// Create an array of elements
let elems = [];

for(let gconsole of availableConsoles){
    let div = listItem.content.cloneNode(true).querySelector('div');
    let img = div.querySelector("img");
    img.src = gconsole.image;
    img.alt=gconsole.gconsole;
    let text = div.querySelector("span");
    text.textContent = gconsole.gconsole;
    elems.push(div);
}

emulationArea.append(...elems);