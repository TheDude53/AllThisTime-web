"use strict";
window.handleInput = async (input)=>{
  if (/^(n(orth)?|s(outh)?|e(ast)?|w(est)?)$/i.test(input)) {
    print("There are people at conveyor belts as far as the eye can see.");
  } else if (/^take( the)? picture( of the moon)?$/i.test(input)) {
    print("You can't take the PICTURE OF THE MOON because you already have it.");
  } else if (/^look( at)?( the)? picture( of the moon)?$/i.test(input)) {
    print("You look at the PICTURE OF THE MOON. It is a picture of the moon.");
  } else if (/^examine( the)? picture( of the moon)?$/i.test(input)) {
    print("You see nothing special about the PICTURE OF THE MOON. It is a picture of the moon.");
  } else if (/^(rip|eat)( the)? picture( of the moon)?$/i.test(input)) {
    print("You can't do that right now.");
  } else if (/^(start|run) conveyor( belt)?$/i.test(input)) {
    print(".\n\n");
    await sleep(1000);
    print("..\n\n");
    await sleep(1000);
    print("...\n\n");
    await sleep(1000);
    loadSegment(1);
    return;
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