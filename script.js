let card_ota = document.querySelector(".card_ota")

fetch("https://fakestoreapi.com/products?limit=10")
.then(tushunarsiz_n => tushunarsiz_n.json())
.then(tushunarli_n => tushunarli_n.map(foydalanuvchu =>{
    let card =document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
    <center> <img src="${foydalanuvchu.image}" alt="">
    <p>${foydalanuvchu.title}</p>
    <p>${foydalanuvchu.description}</p>
    <p>${foydalanuvchu.price}</p>
    <button class:btn style="background-color: green;
            color: white; padding:10px;
            border-radius:10px;">Sotib olish</button>

    
    </center>
    `
card_ota.appendChild(card)

}))

let btn = document.querySelector(".btn")
btn.addEventListener("click", function(){
    alert("Savatga qoshildi")
})