

function activate(){
    const time2 = document.getElementById('time');
    const ti1 = document.getElementById('title1');
    const ti2 = document.getElementById('title2');
    const color = document.getElementById('r&b');
    const textnight = document.getElementById('chageModeText');
    const word = document.getElementById('word');
    const modechange = document.getElementById('changemode');
    time2.style.backgroundColor = "black";
    ti1.style.color = "white";
    ti2.style.color = "white";
    ti1.innerHTML = "GOOD NIGHT";
    ti2.innerHTML = "THIS IS NIGHT TIME";
    color.style.color = "white";
    word.style.color = "blue";
    textnight.style.color = "white";
    textnight.innerHTML = "Click the button below to activate the Day mode";
    modechange.innerHTML = "Activate the light mode";
    modechange.onclick = function() {unactivate()};

}

function unactivate(){
    const times = document.getElementById('time');
    const ti1 = document.getElementById('title1');
    const ti2 = document.getElementById('title2');
    const color = document.getElementById('r&b');
    const textnight = document.getElementById('chageModeText');
    const word = document.getElementById('word');
    const modechange = document.getElementById('changemode');
    times.style.backgroundColor = "white";
    ti1.style.color = "black";
    ti2.style.color = "black";
    ti1.innerHTML = "GOOD Morning";
    ti2.innerHTML = "THIS IS DAY TIME";
    color.style.color = "black";
    word.style.color = "red";
    textnight.style.color = "black";
    textnight.innerHTML = "Click the button below to activate the Night mode";
    modechange.innerHTML = "Activate the Night mode";
    modechange.onclick = function() {activate()};
}