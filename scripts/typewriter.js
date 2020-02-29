function unwriteChars(element, word, i) {
  document.getElementById('blinker').className = '';
  if (i >= 0) {
    element.textContent = word.substring(0, i);
    setTimeout(function () {
      i--;
      unwriteChars(element, word, i);
    }, 50);
  } else {
    setTimeout(function () {
      document.getElementById('blinker').className = 'blinker';
    }, 200);
  }
}

function write(element, word, i = 0, erase, eraseDelay) {
  document.getElementById('blinker').className = '';
  if (i < word.length) {
    element.textContent += word.charAt(i);
    setTimeout(function () {
      i++;
      write(element, word, i);
    }, 90);
  } else {
    setTimeout(function () {
      document.getElementById('blinker').className = 'blinker';
    }, 200);
    if (erase) {
      setTimeout(function () {
        unwriteChars(element, word, word.length);
      }, eraseDelay);
    }
  }
}

function addText(parent, text) {
  const div = document.createElement('div');
  div.innerHTML = text;
  parent.appendChild(div);
}

function addLine(parent, divID) {
  const div = document.createElement('div');
  div.innerHTML = `felix@femaury.dev <span class="blue">~</span> <span class="orange">❯</span> <span id="${divID}"></span><span id="blinker" class="blinker">|</span>`;
  parent.appendChild(div);
}

onload = function () {
  const terminal = this.document.getElementById('terminal-text');
  const elem1 = document.getElementById('cat-readme');
  this.setTimeout(function() {
    write(elem1, "cat README.txt");
  }, 1000);
  this.setTimeout(function() {
    document.getElementById('blinker').remove();
    addText(terminal, `
      Hey there!<br />
      <br />
      This website is still under construction...<br />
      but if you want to get in touch with me, you can send me a mail!<br />
      <a target="_blank" href="mailto:business@femaury.dev">business@femaury.dev</a><br />
      Cheers!<br />
      <br />
    `);
    addLine(terminal);
  }, 2500);
};