"use strict";
window.handleInput = async (input)=>{
  if (!playData.tastyPill && /^(eat|take)(( a)?|( the)?)( red)? pill$/i.test(input)) {
    print("You eat the RED PILL. Now you're energized! Let's process some WIDGETS!");
    playData.tastyPill = true;
  } else if (!playData.tastyPill) {
    print("Your ROBOT SUPERVISOR's happy smile is turning into visible frustration. \"Come on buddy! It's time to take a RED PILL!\"");
  } else if (/^(n(orth)?|s(outh)?|e(ast)?|w(est)?)$/i.test(input)) {
    print("There are people at conveyor belts as far as the eye can see.");
  } else if (/^process( a| the)? widget$/i.test(input)) {
    print("You process the WIDGET. You earn 8 CREDITS! Another WIDGET appears.");
    playData.credits += 8;
  } else if (/^process all( the)? widgets$/i.test(input)) {
    loadSegment(3);
    return;
  } else if (/^count credits$/i.test(input)) {
    print("You have " + playData.credits + " credits.");
  } else {
    print("I don't understand \"" + input + ".\"");
  };
  print("\n\n");
  listen();
};

playData.tastyPill = false;

print("Too late! Your ROBOT SUPERVISOR grips your shoulder. \"Hey there buddy!,\" he says. \"Seems like you got a little distracted! Maybe time to take a RED PILL!\"\n\n");
listen();