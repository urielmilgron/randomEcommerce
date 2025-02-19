//Variables and constants
const navElements = ["Home", "Furniture", "Clothes", "Electronic"]
let nav = document.getElementById("navigation")
const title = document.getElementById("title")
const sectionProducts = document.getElementById("sectionProducts")

//Temporal objects
const products = {
    furniture:
    {
        1: { name: "Sofa", price: 500, image: "https://glocal.mx/wp-content/uploads/2018/09/Benchmark_Muse_Sofa_Oak_WhiteOIled_Fabric_STYLED_12359C.jpg" },
        2: { name: "Armchair", price: 400, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_GuZpwPRdboZXU8Q6piOt4TCKXlFBNulmew&s" },
        3: { name: "Table", price: 300, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtn4c8pj3bMlSqUTGUsxAlWwOVhU2rBJMcA&s" },
        4: { name: "Bed", price: 600, image: "https://assets.wfcdn.com/im/65594651/resize-h800-w800%5Ecompr-r85/2759/275944225/Chandlor+Panel+Bed.jpg" },
        5: { name: "Cabinet", price: 700, image: "https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202443/0180/astoria-storage-cabinet-32-1-c.jpg" },
        6: { name: "Chair", price: 200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenmPdFnWRTWTIpU819is9GYR_oL5aJxrXMg&s" },
    },
    clothes:
    {
        1: { name: "Shirt", price: 100, image: "https://chesterbernard.com/cdn/shop/files/eternally-elegant-black-formal-shirt_1024x1024.jpg?v=1735744028" },
        2: { name: "Pants", price: 200, image :"https://www.ministryofsupply.com/cdn/shop/files/mos-flats-men-s-velocity-dress-pant-new-black-1.jpg?v=1725020419" },
        3: { name: "Shoes", price: 300, image: "https://m.media-amazon.com/images/I/61UFeR+s7AL.jpg" },
        4: { name: "Hat", price: 400, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQvp0dZBpwJSRF1X9BCsRbvO7NTjUi9CTfw&s" },
        5: { name: "Jacket", price: 500, image: "https://www.ido.it/images/variante/1250x1250/giacca-elegante-ragazzo-navy-retro-02-2744a74300-3885.jpg" },
        6: { name: "Socks", price: 600, image:"https://sozzimilano.b-cdn.net/1322-large_default/elegant-duck-pattern-long-socks-for-men-in-cool-cotton.jpg" },
    },
    electronic:
    {
        1: { name: "Laptop", price: 1000, image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5352c6133700843.63d0ab3a44a99.png" },
        2: { name: "Smartphone", price: 800, image:"https://elegant-cases.com/cdn/shop/products/Luxe-Black_RoseGold.jpg?v=1657617821" },
        3: { name: "Tablet", price: 600, image:"https://www.creativefabrica.com/wp-content/uploads/2023/02/24/IPad-Mockup-Elegant-White-And-Gold-62344914-1.png" },
        4: { name: "Camera", price: 700, image:"https://images2.alphacoders.com/138/1385304.png" },
        5: { name: "Speaker", price: 900, image:"https://thegadgetflow.com/wp-content/uploads/2020/03/Bang-Olufsen-Beosound-Balance-Elegant-Speaker-01.jpg" },
        6: { name: "Headphones", price: 500, image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1685713842-beoplay-hx-6479f3a719048.jpg?crop=1xw:1xh;center,top&resize=980:*" },
    }
}
let actualTable

const switchTable = (table) => {
    
    actualTable = table.toLowerCase();
    title.innerHTML = `${table}`
    sectionProducts.innerHTML = ""
    for (let key in products[actualTable]) {
        sectionProducts.innerHTML += `<article id="product"><h2>${products[actualTable][key].name}</h2><img src="${products[actualTable][key].image}"><p>${products[actualTable][key].price}</p></article>`

    }
    console.log(sectionProducts)
}
for (let i = 0; i < navElements.length; i++) {
    nav.innerHTML += `<a href="#" id="navItem" onclick="switchTable('${navElements[i]}')">${navElements[i]}</a>`
}

