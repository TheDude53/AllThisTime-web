"use strict";
window.handleInput = async (input)=>{
  if (playData.tooLate) {
    loadSegment(2);
    return;
  } else if (/^(n(orth)?|s(outh)?|e(ast)?|w(est)?)$/i.test(input)) {
    print("There are people at conveyor belts as far as the eye can see.");
  } else if (/^(take|steal)( the)? widget?$/i.test(input)) {
    print("You can't take the WIDGET.");
  } else if (/^(look|examine)( at)?( the)? widget?$/i.test(input)) {
    print("You see nothing special about the WIDGET. It is a widget.");
  } else if (/^quit|leave|exit$/i.test(input)) {
    print("You can't quit now! You haven't processed enough widgets yet!");
  } else if (/^process( a| the)? widget$/i.test(input)) {
    print("You process the WIDGET. You earn 8 CREDITS! Another WIDGET appears.");
    playData.credits += 8;
  } else if (/^boring$/i.test(input)) {
    print("I know, right?");
  } else if (/^process all( the)? widgets$/i.test(input)) {
    print("You mindlessly process widgets. Your thoughts begin to wander.\n\n");
    await sleep(2000);
    print("You think about what entertainment you will watch when you return to your pod's domicile.\n\n");
    await sleep(3000);
    print("You notice a SWITCH on the wall that's labeled \"Destroy.\" Next to it are three empty SLOTS that look like they hold CIRCUIT BOARDS.\n\n");
    await sleep(4000);
    print("OMG, you stopped processing WIDGETS and your ROBOT SUPERVISOR is right behind you!");
    playData.tooLate = true;
  } else if (/^count credits$/i.test(input)) {
    print("You have " + playData.credits + " credits.");
  } else {
    print("I don't understand \"" + input + ".\"");
  };
  print("\n\n");
  listen();
};

playData.credits = 0;

print("A WIDGET emerges from a hole in the left column. It moves along the conveyor belt and stops in front of you.\n\n");
listen();

if (playData.music) {
  const audio = new Audio("https://www.jonathancoulton.com/wp-content/uploads/encodes/Solid_State/mp3/02_All_This_Time_mp3_122527b.mp3");
  audio.autoplay = true;
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "All This Time",
    artist: "Jonathan Coulton",
    album: "Solid State",
    artwork: [{src: "https://www.jonathancoulton.com/wp-content/uploads/2017/02/Coulton_Cover.jpg", sizes: "2097x2097", type: "image/jpeg"}]
  });
};