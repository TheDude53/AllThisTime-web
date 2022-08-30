"use strict";
window.handleInput = async (input)=>{
  if (/^(n(orth)?|s(outh)?|e(ast)?|w(est)?)$/i.test(input)) {
    print("There are people at conveyor belts as far as the eye can see.");
  } else {
    print("I don't understand \"" + input + ".\"");
    playData.cluelessness++;
  };
  print(playData.cluelessness >= 3 ? "\n\n(There is a conveyor belt though. It is stopped.)\n\n" : "\n\n");
  listen();
};

(async ()=>{
  
  playData.cluelessness = 0;
    
  print("You are in a factory.\n\n");
  await sleep(3000);
  print("It's an enormous room. If there are walls, they're too far away for you to make out. You assume there is a ceiling somewhere above you, but when you look up, you see only an impenetrable darkness.\n\n");
  await sleep(6000);
  print("In front of you is a short CONVEYOR BELT that stretches between two columns. There are other people standing at similar conveyor belts all around you, in all directions, as far as the eye can see.\n\n");
  await sleep(6000);
  print("In your hand is a PICTURE OF THE MOON.\n\n");
  listen();
  
})();