var adjList = ["style", "efficiency", "innovation", "passion"]
var adjective = document.getElementById('adj');
var index = -1;
var i = 0;
var adj = adjList[0];

function writeWord() {
  index++;
  if (index === adjList.length) { index = 0 }
  adjective.textContent = '';
  adj = adjList[index];
  writeChars();
}

function unwriteChars() {
  document.getElementById('blinker').className = '';
  if (i > -1) {
    adjective.textContent = adj.substring(0, i);
    i--;
    setTimeout(unwriteChars, 50);
  } else {
    writeWord();
  }
}

function writeChars() {
  document.getElementById('blinker').className = '';
  if (i < adj.length) {
    adjective.textContent += adj.charAt(i);
    i++;
    setTimeout(writeChars, 75);
  } else {
    setTimeout(function() {
      document.getElementById('blinker').className = 'blinker';
    }, 200);
    setTimeout(unwriteChars, 2000);
  }
}

onload=function() {
  writeWord()
};