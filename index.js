

const randomDice1 = Math.floor(Math.random() * 6)+1;

const randomDice2 = Math.floor(Math.random() * 6)+1;

document.body.querySelector("img.img1").setAttribute("src", "images/dice"+randomDice1+".png");

document.body.querySelector("img.img2").setAttribute("src", "images/dice"+randomDice2+".png");

function winner(){
  if(randomDice1>randomDice2){
    document.body.querySelector("h1").textContent= "Player 1 wins";
  }
  else if(randomDice1==randomDice2){
    document.body.querySelector("h1").textContent= "Tied..";
  }
  else{
    document.body.querySelector("h1").textContent = "Player 2 Wins!!";
  }
}

winner();
