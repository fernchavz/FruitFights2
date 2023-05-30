  var userFruit;
var opponentFruit;
function getTextUser() {
  let userFruit = userInput.value;
  return userFruit;
}
function getTextOpponent() {
  let opponentFruit = opponentInput.value;
  return opponentFruit;
}
function fight(userFruit, opponentFruit) {
  var userFruitImage;
  var opponentFruitImage;
  if (userFruit != "" && opponentFruit != "") {
    if (userFruit == "apple") {
      var userFruitImage =
        "https://appleforthat.stemilt.com/wp-content/uploads/2016/05/Jonagold-200px.png";
      console.log("ran ua");
    }
    if (userFruit == "banana") {
      var userFruitImage =
        "https://th-thumbnailer.cdn-si-edu.com/xK6NAJHiv_51fzn5sDiQt0eD5Is=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg";
      console.log("ran ub");
    }
    if (userFruit == "orange") {
      var userFruitImage =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgNAKI9yS0woODeI5HnfmBnwXB_PD7QRomD3tzgMrTw&usqp=CAU&ec=48665698";
      console.log("ran uo");
    }
    if (opponentFruit == "apple") {
      var opponentFruitImage =
        "https://appleforthat.stemilt.com/wp-content/uploads/2016/05/Jonagold-200px.png";
      console.log("ran oa");
    }
    if (opponentFruit == "banana") {
      var opponentFruitImage =
        "https://th-thumbnailer.cdn-si-edu.com/xK6NAJHiv_51fzn5sDiQt0eD5Is=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg";
      console.log("ran ob");
    }
    if (opponentFruit == "orange") {
      var opponentFruitImage =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgNAKI9yS0woODeI5HnfmBnwXB_PD7QRomD3tzgMrTw&usqp=CAU&ec=48665698";
      console.log("ran oo");
    }
    document.getElementById("uFruit").src = userFruitImage;
    document.getElementById("contestants").innerHTML = "VS";
    document.getElementById("oFruit").src = opponentFruitImage;
    if (userFruit == "apple" && opponentFruit == "apple") {
      var result = "A Tie";
    }
    if (userFruit == "apple" && opponentFruit == "banana") {
      var result = "You Lost";
    }
    if (userFruit == "apple" && opponentFruit == "orange") {
      var result = "You Win";
    }
    if (userFruit == "banana" && opponentFruit == "banana") {
      var result = "A Tie";
    }
    if (userFruit == "banana" && opponentFruit == "orange") {
      var result = "You Lose";
    }
    if (userFruit == "banana" && opponentFruit == "apple") {
      var result = "You Win";
    }
    if (userFruit == "orange" && opponentFruit == "orange") {
      var result = "A Tie";
    }
    if (userFruit == "orange" && opponentFruit == "banana") {
      var result = "You Win";
    }
    if (userFruit == "orange" && opponentFruit == "apple") {
      var result = "You Lost";
    }
    document.getElementById("results").innerHTML =
      "The Result of this Match is: " + result;
  document.getElementById("opponentInput").style.color="black";
  document.getElementById("userInput").style.color="black"}
}
function setOpponentInputWhite() {
  document.getElementById("opponentInput").style.color = "white";
}
function setUserInputWhite() {
  document.getElementById("userInput").style.color = "white";
  
}
