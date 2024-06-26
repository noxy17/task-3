let y = Math.floor(Math.random() * 10 + 1);
let guess = 1;
document.getElementById("submitguess").onclick = function () { 
    let x = document.getElementById("guessField").value;
    if (x == y) {
        console.log("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS ");
    }
    else if (x > y) {
        guess++;
        console.log("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else {
        guess++;
        console.log("OOPS SORRY!! TRY A GREATER NUMBER")
    }
}