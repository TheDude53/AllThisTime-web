"use strict";
window.handleInput = async (input)=>{
  if (/^(n(orth)?|s(outh)?|e(ast)?|w(est)?)$/i.test(input)) {
    print("There are people at conveyor belts as far as the eye can see.");
  } else if (/^put (circuit boards|feelings|sense of self|will to live) into slot(s)?( next to( destroy)? switch)?$/i.test(input)) {
    print("You can't put CIRCUIT BOARDS there.");
  } else if (/^get feelings$/i.test(input)) {
    print("You already have FEELINGS.");
  } else if (/^circuit board(s)?/i.test(input)) {
    print("What do you want to do with the CIRCUIT BOARDS?");
  } else if (/^what( the (hell|fuck))?$/i.test(input)) {
    print("What?");
  } else if (/please/gi.test(input)) {
    await sleep(2000);
    print("OK.");
    await sleep(750);
    print("\n\nYou put the CIRCUIT BOARDS into their SLOTS and push the DESTROY SWITCH.");
    await sleep(1000);
    print("\n\nA low rumble shakes the floor. You hear the shriek of tearing metal. Chunks of concrete and glass fall from high above, blanketing people, conveyor belts, widgets.");
    await sleep(4000);
    print("\n\nA hiss of depressurization, and you feel the kiss of cold air from outside.");
    await sleep(1000);
    print("\n\nYour ROBOT SUPERVISOR lies flat on his back, each breath rattling in his broken chest.");
    await sleep(2000);
    print("\n\nAs the dust clears, you see the ceiling is gone. The moon is high and full in the night sky.");
    await sleep(2000);
    print("\n\nThere is still a fading light in your ROBOT SUPERVISOR's eyes, which are now wide, and full of wonder and gratitude.");
    loadSegment("-moon");
    return;
  } else {
    print("I don't understand \"" + input + ".\"");
  };
  
  playData.whereDoTheseBoardsGo++;
  if (playData.whereDoTheseBoardsGo === 2) {
    await sleep(500);
    print("\n\nYour ROBOT SUPERVISOR coughs. His eyes are vacant, glassy.");
  } else if (playData.whereDoTheseBoardsGo === 6) {
    print("\n\nOK buddy, you sound really frustrated. Slow it down.");
  } else if (playData.whereDoTheseBoardsGo === 8) {
    await sleep(1250);
    print("\n\nYour ROBOT SUPERVISOR's legs fail. He crumples to the floor and looks up with sad resignation. \"That's OK buddy, you tried,\" he says.");
  };
  
  print("\n\n");
  listen();
};

playData.whereDoTheseBoardsGo = 0;

(async ()=>{
    
  await sleep(3000);
  print("\n\nHe won't last long now.\n\n");
  listen();
  
})();