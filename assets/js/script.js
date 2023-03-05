var questionsText = document.getElementById('questions');
function download() {
    document.getElementById('house').style.display = 'block';
    questionsText.textContent = "Hey! Welcome to our little house)) The Fox hid somewhere in it. Can you find her? ... P.S. Don't go through the blue door!";
}
document.addEventListener("DOMContentLoaded", download); 

/*----------Create Array for buttons*/

var buttonRed = document.getElementById('redanswer');
var buttonYellow = document.getElementById('yellowanswer');
var buttonGreen = document.getElementById('greenanswer');
    
var buttonArray = [];

    buttonArray.push(buttonRed);
    buttonArray.push(buttonYellow);
    buttonArray.push(buttonGreen);           
        
/*------------Create Array for images*/    
var imagesArray = [];
    imagesArray.push(document.getElementById('house'));
    imagesArray.push(document.getElementById('corridor'));
    imagesArray.push(document.getElementById('kitchen'));
    imagesArray.push(document.getElementById('sitingroom'));
    imagesArray.push(document.getElementById('bedroom'));
    imagesArray.push(document.getElementById('diningroom'));
    imagesArray.push(document.getElementById('space'));
    imagesArray.push(document.getElementById('fox'));
                 
/**
* Removes the previous image after user pressed the button
*/
function clearScreen() {
    for (let Images of imagesArray) {           
        Images.style.display = 'none';
    }
}   

let blueDoor = document.getElementById("blueanswer");

//function sound () {
    
//} 
/**
* When user push on the blue door, he always will see image with Spase
* and page must be reload 
*/
function onBlueDoor() {
    clearScreen();
    document.getElementById('space').style.display = 'block';
    var Message1 = 'You teleported to space! There are no Foxes here, cya ! .'; 
    questionsText.textContent = Message1;
    
    //Add sound after pushed blue button
    if(document.getElementById('questions').textContent.includes('teleported'))
    {
        let audio = new Audio();
        audio.src = ("assets/sound/wrong-place.mp3");
        audio.play();
        
    }
    document.getElementById ('blueanswer').style.display = 'none';
    document.getElementById ('redanswer').style.display = 'none';
    document.getElementById ('yellowanswer').style.display = 'none';
    document.getElementById ('greenanswer').style.display = 'none';
    document.getElementById('finish').style.display = "block";//Display button "Play Again"

} 
blueDoor.addEventListener("click", onBlueDoor); 

/*------------Create Array for functions*/
let functionsArray = [
    
/**
 * Removes previous image,
 * makes image "corridor.jpg" visible When user push on the random button,
 * displey text under the image
 */
function inCorridor() {
    clearScreen();
    document.getElementById('corridor').style.display = 'block';
    let Message2 = `Foxes seem to be good at avoiding hard work - especially when there's someone else to do it for them. 
    Instead of bothering to dig their own den, they sometimes steal a badger's burrow (called a sett) by scaring the owner away 
    and making his house smell so bad he doesn't want it back.`;  
    questionsText.textContent = Message2;
},

/**
 * Removes previous image,
 * makes image "kitchen.jpg" visible When user push on the random button,
 * displey text under the image
 */
function inKitchen() {
    clearScreen();
    document.getElementById('kitchen').style.display = 'block';
    let Message3 = `Foxes are omnivores. This means that they eat meat and vegetation. 
    A fox's diet can consist of small animals, such as lizards, voles, rats, mice, rabbits and hares. They round out their diet with birds, fruits and bugs.`;
    questionsText.textContent = Message3;
},

/**
 * Removes previous image,
 * makes image "bedroom.jpg" visible When user push on the random button,
 * displey text under the image
 */
function inBedroom() {
    clearScreen();
    document.getElementById('bedroom').style.display = 'block';
    let Message4 = `Foxes typically live in the forest and make their den by digging holes and making burrows for themselves.
     These will allow the fox to attain a cool area to sleep in. 
     Foxes also use their dens to store food to save for later and keep their pups safe from other animals.`;  
    questionsText.textContent = Message4;
},

/**
 * Removes previous image,
 * makes image "diningroom.jpg" visible When user push on the random button,
 * displey text under the image
 */
function inDiningroom() {
    clearScreen();
    document.getElementById('diningroom').style.display = 'block';
    let Message5 = ` Foxes seem to be very playful. They can often be seen playing with a fallen apple as though it were a ball, or chasing their own tails. 
    This fooling around sometimes serves a second purpose: if a curious rabbit comes closer to watch, it will find itself gobbled up by the hungry fox.`;  
    questionsText.textContent = Message5;
},

/**
 * Removes previous image,
 * makes image "sitingroom.jpg" visible When user push on the random button,
 * displey text under the image
 */
function inSitingroom() {
    clearScreen();
    document.getElementById('sitingroom').style.display = 'block';
    let Message6 = `Scientists believe that foxes may have had relationships with humans before dogs did. 
    There are 16,500 year old remains of a man and his pet fox in Jordan, 
    which is 4000 years older than any dog and human remains we have found that have been buried together.`;  
    questionsText.textContent = Message6;
},

/**
 * Removes previous image,
 * makes image "fox.jpg" visible When user push on the random button,
 * display text under the image,
 * display button "Play Again"
 */
function inFox() {
    clearScreen();
    document.getElementById('fox').style.display = 'block';           
    questionsText.innerHTML = `'Congratulation! You have found the Fox!  
    Foxes are beautiful animals, with their delicate faces and bushy tails, but don't just love them for their good looks. 
    The fox species are intriguing animals, known for their intelligence, playfulness, and lithe athleticism.  
    And you can help to save them! Push <a href="https://www.saveafox.org" target="_blanc">here</a> and learn how!`;        
    document.getElementById('finish').style.display = "block";//Display button "Play Again"
    //Add sound after user finded fox
    let audio = new Audio();
    audio.src = ("assets/sound/success.mp3");
    audio.play();
    /**
     * Block all buttons ecsept "Play Again"
     */
    document.getElementById ('blueanswer').disabled = true;
    document.getElementById ('redanswer').disabled = true;
    document.getElementById ('yellowanswer').disabled = true;
    document.getElementById ('greenanswer').disabled = true;
}]; 

/**
 * Calls a random function from the "functionsArray" list, 
 * when the button was click
 */   
for (var button of buttonArray) {
    button.addEventListener('click', function() {       
        let img = functionsArray[Math.floor(Math.random() * functionsArray.length)];
        img();
        functionsArray.splice(functionsArray[img], 1);
        console.log(functionsArray);
    });
}          
    
let finishButton = document.getElementById('finish');

/**
 * Reload the current URL after user pushed 'Play again' button
 * to start game from the begining
 */
finishButton.addEventListener('click', function () {
    document.location.reload();
    });