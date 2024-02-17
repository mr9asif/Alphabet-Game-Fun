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
    getHide('home-screen');
    getshow('play-ground');
    contineuGame();
}
