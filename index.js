// random broj izmedju 1 i 6
var randomNumber1 = Math.floor(Math.random() * 6)+ 1;
//ubacivanje slika i vezanje za random broj
var diceImg1 = "images/dice" + randomNumber1 + ".png";
//DOM vezivanje slika
document.querySelectorAll("img")[0].setAttribute("src", diceImg1);

// random broj izmedju 1 i 6 za igraca 2
var randomNumber2 = Math.floor(Math.random() * 6)+ 1;
//ubacivanje slika i vezanje za random broj igrac 2
var diceImg2 = "images/dice" + randomNumber2 + ".png";
//DOM vezivanje slika i generisinje za igraca 2
document.querySelectorAll("img")[1].setAttribute("src", diceImg2);

// generisanje pobjednika

   
// igrac 1 pobjednik
if ( randomNumber1 > randomNumber2){
    //dodavanje texta za pobjednika igraca 1
    document.querySelector("h1").textContent = " Player 1 Wins"
    //igrac 2 pobjednik
} else if (randomNumber1 < randomNumber2){
    //dodavanje texta za pobjednika igraca 2
    document.querySelector("h1").textContent = " Player 2 Wins"

    //generisanje za nerjeseno
} else{
    
        document.querySelector("h1").textContent = " Draw"
}
//reload button 
const reloadButton = document.querySelector('#btn');
function reload(){
    reload = location.reload();

}
reloadButton.addEventListener("click", reload, false);


