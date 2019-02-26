let computerChoices = ["apple", "peaches", "oranges"];

let answerIndex = Math.floor((Math.random() * computerChoices.length));
console.log(answerIndex);

let word = computerChoices[answerIndex];

let wordArray = word.split("");

var userProgress = [];
for(let i = 0; i < wordArray.length; i++){
    userProgress.push("_");
}
render();

function render(){
    document.getElementById("userprogress").textContent = userProgress.join(" ");
}

//document.getElementById("userprogress").textContent = userProgress.join(" ");

console.log(wordArray);

console.log(computerChoices[answerIndex]);

document.onkeyup = function(event){
    let userInput = event.key.toLowerCase();
    console.log(userInput);

    for(let j = 0; j < wordArray.length; j++){
        if(userInput === wordArray[j]){
            userProgress[j] = wordArray[j];
        }
    }
    console.log(userProgress);
    render();
}
