
const ti1 = document.getElementById("clickplz");
ti1.addEventListener('click',change);
const ti2 = document.getElementById("change2");
function change(){
    ti1.innerHTML = "I am angary don't click me";
    ti1.removeEventListener('click',change);
    ti2.innerHTML = "** click again to toggle it **";
    ti1.addEventListener('click',changeso);
}
function changeso(){
    ti1.innerHTML = "Hi there this page call click 'me' please";
    ti1.removeEventListener('click',changeso);
    ti2.innerHTML = "there this text can't click";
    ti1.addEventListener('click',change);
}

function x1(){
    const x1 = document.getElementById("x1");
    x1.style.backgroundColor = "black";
    x1.style.color = "white";
    alert('Thank for click me');
    x1.onclick = function(){
        return false;
    }
}

function x2(){
    const x2 = document.getElementById("x2");
    x2.style.backgroundColor = "black";
    x2.style.color = "white";
    alert('Why you click me again :(');
    x2.onclick = function(){
        return false;
    }
}

function x3(){
    const x3 = document.getElementById("x3");
    x3.style.backgroundColor = "black";
    x3.style.color = "white";
    alert("Stop Clicking at me I am don't like it");
    x3.onclick = function(){
        return false;
    }
}

function x4(){
    const x4 = document.getElementById("x4");
    x4.style.backgroundColor = "black";
    x4.style.color = "white";
    alert('GO DIE USER xD :)))');
    x4.onclick = function(){
        return false;
    }
}
