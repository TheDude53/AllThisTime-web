"use strict";
window.handleInput = async (input)=>{
  if (/^(n(orth)?|s(outh)?|e(ast)?|w(est)?)$/i.test(input)) {
    print("There are people at conveyor belts as far as the eye can see.");
  } else if (/^(eat|take)(( a)?|( the)?)( blue)? pill$/i.test(input)) {
    document.body.setAttribute("blue", true);
    print("W H O A\n.\n");
    await sleep(1000);
    print("..\n");
    await sleep(1000);
    print("...\n");
    await sleep(1000);
    print("WTF seriously dude. You feel GREAT, just, like, super fuzzy but chill? And you're all, sort of, ITCHY, but in your TEETH?\n\n");
    await sleep(3000);
    print("Your ROBOT SUPERVISOR makes that \"hang loose\" gesture and leans back. \"Hey buddy, check this out.\"\n\n");
    await sleep(4000);
    print("A panel on his chest slides open. There are three CIRCUIT BOARDS that look like they might fit in some SLOTS next to a DESTROY SWITCH.\n\n");
    await sleep(4000);
    print("They are labeled FEELINGS, SENSE OF SELF, and WILL TO LIVE.\n\n");
    await sleep(3000);
    print("It's a good thing you're high on BLUE PILL, because removing these CIRCUIT BOARDS from your ROBOT SUPERVISOR's chest will probably kill him.\n\n");
    await sleep(3000);
    print("The effects of the BLUE PILL are wearing off.\n\n");
    await sleep(1000);
    print("...\n");
    await sleep(1000);
    print("..\n");
    await sleep(1000);
    print(".\n");
    document.body.removeAttribute("blue");
    await sleep(1000);
    print("Uh oh.\n\n");
    loadSegment(5);
    return;
  } else {
    print("I don't understand \"" + input + ".\"");
  };
  
  print("\n\n");
  listen();
};

(async ()=>{
    
  print("Your ROBOT SUPERVISOR sees the PICTURE OF THE MOON and immediately begins to cry. He sings a little tune.\n\n");
  await sleep(2360);
  print("All we'll have is\n");
  await sleep(1890);
  print("All this time\n");
  await sleep(3090);
  print("All we'll have is\n");
  await sleep(2190);
  print("All this time\n");
  await sleep(4030);
  print("All this time\n\n");
  await sleep(1200);
  print("Your ROBOT SUPERVISOR blows his nose. Looking up at a security camera, he says loudly, \"Now get back to those widgets!\" He smiles with a faraway look in his eyes and whispers to you, \"I've never seen the moon.\"\n\n");
  await sleep(5000);
  print("He hands you a BLUE PILL and winks.\n\n");
  listen();
  
})();