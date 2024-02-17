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
        // update score
        // get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        removeBackgroundColor(userpress);
        contineuGame();
    }else{
        console.log('you lose');
    }
     
}

document.addEventListener('keyup', userkeypressAlphabet )
