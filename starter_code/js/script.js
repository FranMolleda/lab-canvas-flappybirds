window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    document.querySelector('button').setAttribute("class","hide")
    Game.init()
  }


  };
