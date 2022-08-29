"use strict";

function print(html) {
  document.body.className = "blur";
  document.body.innerHTML += html.replace(/\n/g, "<br>");
  setTimeout(()=>{
    // The delay gives a nice retro flicker
    document.body.className = "";
  }, 50);
  // Scroll to bottom
  window.scroll(window.scrollX, document.body.scrollHeight);
};

function listen() {
  document.body.innerHTML += "><input id=\"command\">";
  const input = document.getElementById("command");
  
  input.onkeypress = (key)=>{
    if (key.key === "Enter") {
      // Turn input into text
      const value = input.value;
      input.outerHTML = value + "<br>";
      // Run input handler
      window.handleInput(value);
    };
  };
  
  // Focus on input
  input.focus();
};

const sleep = (ms)=>{
  return new Promise((done)=>{
    return setTimeout(done, ms);
  });
};

function loadSegment(segmentNumber) {
  const script = document.createElement("script");
  script.src = "./segments/seg" + segmentNumber + ".js";
  document.body.appendChild(script);
};

const playData = {
  music: true
};

loadSegment("-menu");