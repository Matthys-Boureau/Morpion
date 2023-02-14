var tab = [null,null,null,null,null,null,null,null,null];
var color = "cyan";
var player = 1;
var scorePlayer = 0;


function fillTab(num, color){
  tab[num] = player;
  console.log(tab);
}


function check(square){
  square.style.backgroundColor = color;
  fillTab(square.classList, color);

  if(tab[0] === tab[1] && tab[1] === tab[2] && tab[0] != null)
  {
    alert("Player " + tab[0] + " win");
  }

  if(tab[0] === tab[3] && tab[3] === tab[6] && tab[0] != null)
  {
    alert("Player " + tab[0] + " win");
  }

  if(tab[0] === tab[4] && tab[4] === tab[8] && tab[0] != null)
  {
    alert("Player " + tab[0] + " win");
  }

  if(tab[1] === tab[4] && tab[4] === tab[7] && tab[1] != null)
  {
    alert("Player " + tab[1] + " win");
  }

  if(tab[3] === tab[4] && tab[4] === tab[5] && tab[3] != null)
  {
    alert("Player " + tab[3] + " win");
  }

  if(tab[6] === tab[7] && tab[7] === tab[8] && tab[6] != null)
  {
    alert("Player " + tab[6] + " win");
  }

  if(tab[2] === tab[5] && tab[5] === tab[8] && tab[2] != null)
  {
    alert("Player " + tab[2] + " win");
  }

  if(tab[2] === tab[4] && tab[4] === tab[6] && tab[2] != null)
  {
    alert("Player " + tab[2] + " win");
  }

  if(color == "cyan")
  {
    color = "orange";
  }
  else if(color == "orange")
  {
    color = "cyan";
  }

  if(player == 1)
  {
    player = 2;
  }
  else if(player == 2)
  {
    player = 1;
  }

  scorePlayer = 0;
}



