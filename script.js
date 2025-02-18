//Variables and constants
const navElements = ["Home", "Furniture", "Clothes", "Electronic"]
let nav = document.getElementById("navigation")
const main = document.getElementById("main")
const sectionProducts = document.getElementById("productos")

//Temporal objects
const products = {
    furniture:
    {
        1: { name: "Sofa", price: 500 },
        2: { name: "Armchair", price: 400 },
        3: { name: "Table", price: 300 },
        4: { name: "Bed", price: 600 },
        5: { name: "Cabinet", price: 700 },
        6: { name: "Chair", price: 200 },
    },
    clothes:
    {
        1: { name: "Shirt", price: 100 },
        2: { name: "Pants", price: 200 },
        3: { name: "Shoes", price: 300 },
        4: { name: "Hat", price: 400 },
        5: { name: "Jacket", price: 500 },
        6: { name: "Socks", price: 600 },
    },
    electronic:
    {
        1: { name: "Laptop", price: 1000 },
        2: { name: "Smartphone", price: 800 },
        3: { name: "Tablet", price: 600 },
        4: { name: "Camera", price: 700 },
        5: { name: "Speaker", price: 900 },
        6: { name: "Headphones", price: 500 },
    }
}
let actualTable
const switchTable = (table) => {
    sectionProducts.innerHTML = ""
    actualTable = table.toLowerCase();
    main.innerHTML = `<div id="title"><h1>${table}</h1></div>`
    for (let key in products[actualTable]) {
        sectionProducts.innerHTML += `<div id="product"><h2>${products[actualTable][key].name}</h2><p>${products[actualTable][key].price}</p></div>`
    }
}
for (let i = 0; i < navElements.length; i++) {
    nav.innerHTML += `<a href="#" id="navItem" onclick="switchTable('${navElements[i]}')">${navElements[i]}</a>`
}

