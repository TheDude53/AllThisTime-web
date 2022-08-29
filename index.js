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

function loadSegment(segmentNumber) {
  const script = document.createElement("script");
  script.src = "./segments/seg" + segmentNumber + ".js";
  document.body.appendChild(script);
};