function contineuGame(){
    // create a random alphabets
    const randomAlphabets = gerRandomAlphabets();
    console.log(randomAlphabets);
    // set that alphabets in screen
    const currentAlphabet = document.getElementById('current-alphabet');
     currentAlphabet.innerText = randomAlphabets.toLocaleUpperCase();

    //  set background color in keybord
    setBackgroundColor(randomAlphabets)
}


function play(){
    // hide all without playground
    getHide('home-screen');
    getHide('final-score')
    getshow('play-ground');
    // reset all and life
    updateCurrrentScore('current-life', 5)
    updateCurrrentScore('current-score', 0)
  


    contineuGame();
}
function gameOver(){
    getHide('play-ground');
    getshow('final-score');
    // update score
    // set the sore
    const currentScore = document.getElementById('current-score');
    const presentScore = currentScore.innerText;
    const totalScoreText = document.getElementById('total-score');
      totalScoreText.innerText = `Total Score : ${presentScore}`;
    
    // remove privious bg color
    // const newText = setTextelementById('current-alphabet');
    // console.log(newText);
    const newText = document.getElementById('current-alphabet');
    const presentText = newText.innerText;
    console.log(presentText);
    removeBackgroundColor(newText)
    

} 









