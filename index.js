var time = 60;
var hit;
var score = 0;
document.getElementById("score").textContent = "Score: " + score;
document.getElementById("hit").textContent = "Hit: " + hit;
document.getElementById("hit").style.display = "none";
// decrease timer ***********************************************************
function timer() {
  time--;
  return time;
}
// *****************************************************************************
document.getElementById("timer").textContent = "Timer:" + 60;
function startTimer() {
  const myInterval = setInterval(() => {
    if (time > 0)
      document.getElementById("timer").textContent = "Timer:" + timer();
    else {
      stopGame();
    }
  }, 1000);
}
function stopGame() {
  document.querySelector(".bubbles").style.flexDirection = "column";
  document.querySelector(
    ".bubbles"
  ).innerHTML = `<h2>Game Over</h2><br/><h3>Score: ${score}</h3><br><h5>Refresh the page to start again</h5>`;
}
// hit ****************************************************************************
function getHit() {
  hit = Math.floor(Math.random() * 10);
  document.getElementById("hit").textContent = "Target: " + hit;
}
getHit();
// *********************************************************************************
function createBubbles() {
  var random = Math.floor(Math.random() * 10);
  var bubble = ` 
    <h4 style="color: white;" class='bubble'>${random}</h4>
`;
  document.querySelector(".bubbles").innerHTML += bubble;
}

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("hit").style.display = "block";
  document.getElementById("btn").style.display = "none";
  document.querySelector(".bubbles").style.display = "flex";
  document.querySelector(".bottom").style.flexDirection = "row";
  document.querySelector(".instructions").style.display = "none";
  for (var i = 0; i < 120; i++) createBubbles();
  startTimer();
});

function startAgain() {
  document.getElementById("btn").style.display = "none";
  document.querySelector(".bubbles").style.display = "flex";
  for (var i = 0; i < 120; i++) createBubbles();
  startTimer();
}
document.querySelector(".bubbles").addEventListener("click", (e) => {
  console.log(e.target.textContent);
  if (Number(e.target.textContent) === hit) {
    score += 10;
    document.querySelector(".bubbles").innerHTML = "";
    for (var i = 0; i < 120; i++) createBubbles();
    getHit();
    document.getElementById("score").textContent = "Score: " + score;
  }
});
