var amount_in_wallet = 3000;
document.getElementById("amount_in_wallet").innerHTML = amount_in_wallet;

var poke_sale_1 = true;
var poke_sale_2 = true;
var poke_sale_3 = true; 
var poke_sale_4 = true;
var poke_sale_5 = true;
var poke_sale_6 = true;

const starter_button1 = document.getElementById("starter_grass");
const starter_button2 = document.getElementById("starter_fire");
const starter_button3 = document.getElementById("starter_water");
starter_grass.addEventListener("click", ()=>{
        if(starter_grass.value === "Chose"){
                starter_grass.value = "Chosen";
                starter_fire.value = "Chose";
                starter_water.value = "Chose";
        }
})
starter_fire.addEventListener("click", ()=>{
        if(starter_fire.value === "Chose"){
                starter_grass.value = "Chose";
                starter_fire.value = "Chosen";
                starter_water.value = "Chose";
        }
})
starter_water.addEventListener("click", ()=>{
        if(starter_water.value === "Chose"){
                starter_grass.value = "Chose";
                starter_fire.value = "Chose";
                starter_water.value = "Chosen";
        }
        
})






// function changeImage()
// {
// var img = document.getElementById("img-section1");
// img.src="media/pikachu.png";
// return false;
// }

function changeImage1()
{
var img = document.getElementById("img-grass");
img.src="media/bulbasuar-img.png";
var img2 = document.getElementById("img-fire");
img2.src="media/poke-ball-img.png";
var img3 = document.getElementById("img-water");
img3.src="media/poke-ball-img.png";
return false;
}

// var img2 = document.getImgById("img-fire");
// var img3 = document.getImgById("img-water");
// img2.src="media/poke-ball-img.png";
// img3.src="media/poke-ball-img.png";

function changeImage2()
{
var img = document.getElementById("img-fire");
img.src="media/char-img.png";
var img2 = document.getElementById("img-grass");
img2.src="media/poke-ball-img.png";
var img3 = document.getElementById("img-water");
img3.src="media/poke-ball-img.png";
return false;
}

function changeImage3()
{
var img = document.getElementById("img-water");
img.src="media/squr-img.png";
var img2 = document.getElementById("img-fire");
img2.src="media/poke-ball-img.png";
var img3 = document.getElementById("img-grass");
img3.src="media/poke-ball-img.png";
return false;
}

function changeImage4()
{
        var img = document.getElementById("section4-img-1");
        var img2 = document.createElement("img2");
        img2.src = "media/poke-sale1.png";
        if(amount_in_wallet >= 300 && poke_sale_1){
                poke_sale_1 = false;
                amount_in_wallet = amount_in_wallet - 300;
                
                img.src="media/poke-sale1.png";
                document.getElementById("amount_in_wallet").innerHTML = amount_in_wallet;
        }

return false;
}

function changeImage5()
{
        var img = document.getElementById("section4-img-2");
        // var img2 = document.createElement("img2");
        // img2.src = "media/poke-sale2.png";
        if(amount_in_wallet >= 300 && poke_sale_2){
                poke_sale_2 = false;
                amount_in_wallet = amount_in_wallet - 300;
                
                img.src="media/poke-sale2.png";
                document.getElementById("amount_in_wallet").innerHTML = amount_in_wallet;
        }


return false;
}

function changeImage6()
{
        var img = document.getElementById("section4-img-3");
        var img2 = document.createElement("img3");
        img2.src = "media/poke-sale2.png";
        if(amount_in_wallet >= 300 && poke_sale_3){
                poke_sale_3 = false;
                amount_in_wallet = amount_in_wallet - 300;
                
                img.src="media/poke-sale3.png";
                document.getElementById("amount_in_wallet").innerHTML = amount_in_wallet;
        }

return false;
}

function changeImage7()
{
        var img = document.getElementById("section4-img-4");
        var img2 = document.createElement("img4");
        img2.src = "media/poke-sale4.png";
        if(amount_in_wallet >= 999 && poke_sale_4){
                poke_sale_4 = false;
                amount_in_wallet = amount_in_wallet - 999;
                
                img.src="media/poke-sale4.png";
                document.getElementById("amount_in_wallet").innerHTML = amount_in_wallet;
        }

return false;
}

function changeImage8()
{
        var img = document.getElementById("section4-img-5");
        var img2 = document.createElement("img5");
        img2.src = "media/poke-sale5.png";
        if(amount_in_wallet >= 999 && poke_sale_5){
                poke_sale_5 = false;
                amount_in_wallet = amount_in_wallet - 999;
                
                img.src="media/poke-sale5.png";
                document.getElementById("amount_in_wallet").innerHTML = amount_in_wallet;
        }

return false;
}

function changeImage9()
{
var img = document.getElementById("section4-img-6");
        var img2 = document.createElement("img6");
        img2.src = "media/poke-sale6.png";
        if(amount_in_wallet >= 999 && poke_sale_6){
                poke_sale_6 = false;
                amount_in_wallet = amount_in_wallet - 999;
                
                img.src="media/poke-sale6.png";
                document.getElementById("amount_in_wallet").innerHTML = amount_in_wallet;
        }
return false;
}


// Pokemon Game Start

var r = document.querySelector(":root");

function myFunction_set(){
        r.style.setProperty("--page2", -1)
        r.style.setProperty("--page1", -1);
        r.style.setProperty("--page3", 1);
}

function myFunction_exit(){
        r.style.setProperty("--page2", -1)
        r.style.setProperty("--page1", 1);
        r.style.setProperty("--page3", -1);
}

function myFunction_game(){
        r.style.setProperty("--page2", 1)
        r.style.setProperty("--page1", -1);
        r.style.setProperty("--page3", -1);
}

// Pokemon Game End


// for random generator later

// var choice = Math.floor(Math.random() * 5);

// if(choice == 1){
//         img.src="media/bulbasuar-img.png";
// }
// else if( choice == 2){
//         img.src="media/char-img.png";
// }
// else if(choice == 3){
//         img.src="media/pikachu.png";
// }
// else if(choice == 4){
//         img.src="media/poke-sale1.png";
// }
// else if(choice == 0){
//         img.src="media/poke-sale4.png";
// }
