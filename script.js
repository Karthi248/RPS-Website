let score = JSON.parse(localStorage.getItem("score")) || {wins:0,losses:0,ties:0};
updateScore();

function playGame(player){
  let arr=["rock","paper","scissors"];
  let computer=arr[Math.floor(Math.random()*3)];
  let result="";

  if(player===computer){result="🤝 Tie"; score.ties++;}
  else if(
    (player==="rock"&&computer==="scissors")||
    (player==="paper"&&computer==="rock")||
    (player==="scissors"&&computer==="paper")
  ){result="🎉 You Win"; score.wins++;}
  else{result="😢 You Lose"; score.losses++;}

  localStorage.setItem("score",JSON.stringify(score));
  document.getElementById("result").innerHTML=result;
  document.getElementById("moves").innerHTML=`You: ${player} | Computer: ${computer}`;
  updateScore();
}

function updateScore(){
  wins.innerHTML=score.wins;
  losses.innerHTML=score.losses;
  ties.innerHTML=score.ties;
}

function resetScore(){
  score={wins:0,losses:0,ties:0};
  localStorage.removeItem("score");
  updateScore();
  result.innerHTML="Choose Your Move!";
  moves.innerHTML="";
}
