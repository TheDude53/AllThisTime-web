"use strict";
window.handleInput = async (input)=>{
  if (/^(n(orth)?|s(outh)?|e(ast)?|w(est)?)$/i.test(input)) {
    print("There are people at conveyor belts as far as the eye can see.");
  } else if (/^process( a| the)? widget$/i.test(input)) {
    print("You process the WIDGET. You earn 8 CREDITS! Another WIDGET appears.");
    playData.credits += 8;
  } else if (/^count credits$/i.test(input)) {
    print("You have " + playData.credits + " credits! You're going to watch the HECK out of an entertainment when you return to your pod's domicile tonight!");
  } else if (/^look$/i.test(input)) {
    print("You look idly at stuff. There it is. Bunch of stuff.");
    playData.itsMoaningTime = true;
  } else if (/^look( at)?( the)?( robot)? supervisor$/i.test(input)) {
    print("Your ROBOT SUPERVISOR looks miserable. He stares bleakly into the middle distance.");
  } else if (/^(help|examine)( the)?( robot)? supervisor$/i.test(input)) {
    print("You can't do that right now.");
  } else if (/^show( the)?( robot)? supervisor( the)? picture( of the moon)?$/i.test(input)) {
    loadSegment(4);
    return;
  } else {
    print("I don't understand \"" + input + ".\"");
  };
  
  if (playData.itsMoaningTime) {
    print("\n\nYour ROBOT SUPERVISOR sighs again, but this time it comes out as a little moan.");
  };
  print("\n\n");
  listen();
};

playData.itsMoaningTime = false;

print("You mindlessly process WIDGETS. Your ROBOT SUPERVISOR sighs. \"Good job buddy. You're really earning some credits I guess.\"\n\n");
listen();