// challenge 1: Your Age in Days
function ageInDays(){
    var birthYear = prompt("What year were you born... Good friend?");
    var yourAgeInDays = (2020-birthYear) * 365;
    var h1 = document.createElement('h1');
    var ageAnswer = document.createTextNode("You are "+ yourAgeInDays + " days old.");
    h1.setAttribute('id', 'yourAgeInDays');
    h1.appendChild(ageAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('yourAgeInDays').remove();
}
// End of challenge one


//Challenge 2: Cat Generator
function generateCat(){
    var image = document.createElement('img');
    image.setAttribute('id', 'cat-image');
    image.src = "blackjack_assets/images/cat.jpg";
    var div = document.getElementById('flex-cat-gen');
    div.appendChild(image);
}

function removeCat(){
    document.getElementById('cat-image').remove();
}
// End of challenge two


// ==== Challenge 3: Rock, Paper, Scissors
// This function is called the game starts
// it contains all other function being called
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);
    
    results = decideWinner(humanChoice, botChoice); //[0,1] human | bot
    console.log(results);
    
    message = finalMessage(results); // {"message": "You won", "color": "green"}
    console.log(message);

    rpsFrontEnd(humanChoice, botChoice, message);
}


// This function helps the bot to pick randomly
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

// This function returns an array and its index
function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

// This function shows what is required to win
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }
    
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

// This function decide who wins and returns a message
function finalMessage([yourScore, computerScore]) {
    let humanName = "gcurry";
    let botName = "bot";
    if (yourScore === 0){
        return {'message': humanName + ' lost!😢..' + botName + ' won!🤖', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied!🤔', 'color': 'yellow'};
    } else {
        return {'message': humanName + ' won!🤩..' + botName + ' lost!👾', 'color': 'blue'};
    }
}

// This function is what output the human and bot choices with message to the screen
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    // A Database that contains those images using an object or dictionary
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    
    // removing all image
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // creating a Div to contain humanChoice, message, and botChoice
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    //creating what will be inside those Div's
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height= 150px width=150px style='box-shadow: 8px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height= 150px width=150px style='box-shadow: 8px 10px 50px rgba(243, 38, 44, 1);'>"
    
    // Appending those divs to the flex-box-rps-div
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
// End of challenge 3


// Challenge 4: change color buttons
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonReset();
    } else if (buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for (let i = 0; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}
// End of colors and random