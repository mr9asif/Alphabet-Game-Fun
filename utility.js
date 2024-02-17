function getHide(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function getshow(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// create random alphabet
function gerRandomAlphabets(){
    // create a alphabets Array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // create a random alphabets
    const randomNumber = Math.round(Math.random()*25);
    const randomAlphabets = alphabets[randomNumber];
    return randomAlphabets 
}
// set background key
function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    element.classList.add('text-white')
    
}
// remove background color
function removeBackgroundColor(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// get the text value----------
 function getTextValueElement(elementId){
    const element = document.getElementById(elementId);
    const currentValue = parseInt(element.innerText);
    return currentValue
 }

//  update the socore function----
 function updateCurrrentScore(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
 }

// get user key and mathch 
function userkeypressAlphabet(event){
   
    const userpress = event.key;
    
    console.log('userpress' ,userpress);
    const screenAlphabet = document.getElementById('current-alphabet');
    const scAlphabet = screenAlphabet.innerText;
     const presentAlphabet = scAlphabet.toLowerCase();
     console.log('present alpha ', presentAlphabet);

    //  set match or not
    if(userpress === presentAlphabet){
        // -----usning function-----
        const currentValue = getTextValueElement('current-score');
        const newScore = currentValue + 1;
        updateCurrrentScore('current-score', newScore);


        // --using simple-----
        // update score
        // get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // increase the current score by 1
        // const newScore = currentScore + 1;
        // show the new score
        // currentScoreElement.innerText = newScore;

        removeBackgroundColor(userpress);
        contineuGame();
    }else{
        console.log('you lose');
        // ----using function----
           const currentLife = getTextValueElement('current-life');
            const newLife = currentLife - 1;
            updateCurrrentScore('current-life', newLife)

            if(newLife === 0){
                console.log('game over');
                gameOver();
            }else{
                console.log('play again');
            }

        // ---using simple-----
        // get the current life
        // const currenlifeElement = document.getElementById('current-life');
        // const currentlifeText = currenlifeElement.innerText;
        // const currentLife = parseInt(currentlifeText);
        // reduce the current life
        // const newlife = currentLife - 1;
        // show the new life
        // currenlifeElement.innerText = newlife;

    }
     
}

document.addEventListener('keyup', userkeypressAlphabet )
