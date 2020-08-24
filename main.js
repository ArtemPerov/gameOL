let but = document.querySelector(".but");
let numberGame = document.querySelector(".number");
but.addEventListener("click", butFunck);
let timer = document.querySelector('.timer');
but.addEventListener('click' ,timerGame);

function butFunck() {
    let clientHeight = parseInt(document.documentElement.clientHeight);
    let clientWidth = parseInt(document.documentElement.clientWidth);
      let left = Math.random() * clientWidth;
      let top = Math.random() * clientHeight;
  but.style.display = "none";
  let boll = document.createElement("div");
  boll.classList.add("boll");
  boll.style.left = left + "px";
  boll.style.top = top + "px";
  document.querySelector(".box").appendChild(boll);
  boll.addEventListener("click", bollFunck);
  numberGame.style.display = 'flex';
  document.querySelector('.box').style.display ='block';
 document.querySelector('.number-box').style.display = 'flex';
 let audio = document.createElement('audio');

}
 // таймер
function timerGame(){
  timer.style.display = 'block';
  timer.innerHTML = parseInt(timer.innerHTML) +1;
  if(timer.innerHTML < 10){
    window.setTimeout(timerGame, 1000);
  }else{
    document.querySelector('.result-box').style.display = 'flex';
    document.querySelector('.result-box__window').innerHTML = numberGame.innerHTML;
    timer.style.display = 'none';  
    numberGame.style.display = 'none';
    // timer.style.opasity = '1';  
    document.querySelector(".box").firstElementChild.remove();
}
}


function bollFunck() {
  let parsNamber = parseInt(numberGame.innerHTML);
  numberGame.innerHTML = parsNamber + 1;
  let clientHeight = parseInt(document.documentElement.clientHeight);
  let clientWidth = parseInt(document.documentElement.clientWidth);
    let left = Math.random() * clientWidth;
    let top = Math.random() * clientHeight ;
  document.querySelector(".box").firstElementChild.remove();
  let boll = document.createElement("div");
  boll.classList.add("boll");
  boll.style.left = left + "px";
  boll.style.top = top + "px";
  document.querySelector(".box").appendChild(boll);
  boll.removeEventListener("click", bollFunck);
  boll.addEventListener("click", butFunckNew);
  

}

function butFunckNew() {
    let parsNamber = parseInt(numberGame.innerHTML);
    numberGame.innerHTML = parsNamber + 1;
let clientHeight = parseInt(document.documentElement.clientHeight);
let clientWidth = parseInt(document.documentElement.clientWidth);
  let left = Math.random() * clientWidth;
  let top = Math.random() * clientHeight ;
  let boll = document.createElement("div");
  boll.classList.add("boll");
  boll.style.left = left + "px";
  boll.style.top = top + "px";
  document.querySelector(".box").appendChild(boll);
  document.querySelector(".box").firstElementChild.remove();
  document.querySelector(".boll").addEventListener("click", bollFunck);

}



