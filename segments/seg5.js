"use strict";
window.handleInput = async (input)=>{
  if (playData.ripConfirmation === 1) {
    if (/^y(es)?$/i.test(input)) {
      print("You take your ROBOT SUPERVISOR's last CIRCUIT BOARD. You hear the hum of his inner workings stutter and slow.");
      loadSegment(6);
      return;
    } else if (/^n(o)?$/i.test(input)) {;
      print("Too bad. Some decisions are hard. You take your ROBOT SUPERVISOR's last CIRCUIT BOARD. You hear the hum of his inner workings stutter and slow.");
      loadSegment(6);
      return;
    } else {
      playData.ripConfirmation--;
    };
    
  } else if (/^(n(orth)?|s(outh)?|e(ast)?|w(est)?)$/i.test(input)) {
    print("There are people at conveyor belts as far as the eye can see.");
  } else if (/^(take|nab) feelings$/i.test(input) && !playData.robotInnards.feelings) {
    print("You take his FEELINGS. I mean, he's a robot, right? They're probably not even real feelings.");
    playData.robotInnards.nabbed++;
    playData.robotInnards.feelings = true;
  } else if (/^(take|nab) sense of self/i.test(input) && !playData.robotInnards.sense) {
    print("You take his SENSE OF SELF. Does he even have real senses?");
    playData.robotInnards.nabbed++;
    playData.robotInnards.sense = true;
  } else if (/^(take|nab) will to live/i.test(input) && !playData.robotInnards.will) {
    print("You take his WILL TO LIVE. He won't be needing that anymore.")
    playData.robotInnards.nabbed++;
    playData.robotInnards.will = true;
  } else if (input == 0) {
    print("COME ON. DO IT.");
  } else {
    print("I don't understand \"" + input + ".\"");
  };
  
  if (playData.robotInnards.nabbed === 2) {
    print("\n\nYou take, and you take. Because you're a winner.");
    await sleep(3000);
    print("\n\nYour ROBOT SUPERVISOR winces. Wait, do they feel pain?");
  } else if (playData.robotInnards.nabbed === 3 && !playData.ripConfirmation) {
    print("\n\nWow. OK, but this may kill your ROBOT SUPERVISOR. Are you sure? (y/n)");
    playData.ripConfirmation++; 
  };
  
  print("\n\n");
  listen();
};

playData.robotInnards = {
  nabbed: 0,
  feelings: false,
  sense: false,
  will: false
};
playData.ripConfirmation = 0;

listen();