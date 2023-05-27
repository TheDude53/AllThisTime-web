"use strict";

(async ()=>{
  
  await sleep(5000);
  print("\n\n");
  
  let moon = [
    "                                     ",
    "                                     ",
    "            _d^^^^^^^^^b_            ",
    "         .d''  .  .-.   ''b.         ",
    "       .p'       (   )     'q.       ",
    "      .d'   ()    ,_,       'b.      ",
    "     .d'   .           O  .  'b.     ",
    "     ::        o              ::     ",
    "     ::  ()         .      .  ::     ",
    "     ::     .--.              ::     ",
    "     'P.   |    |       O    .q'     ",
    "      'P.  '.__.'    ()     .q'      ",
    "       'b.                .d'        ",
    "         'q..   o      ..p'          ",
    "            ^q........p^             ",
    "                ''''                 ",
    "                                     ",
    "                                     "
  ];
  
  // Add stars randomly to moon
  moon = moon.map((line)=>{
    // Regex to find space before and after moon
    return line.replace(/(^ +)|( +$)/gm, (spaces)=>{
      // Regex that just matches every character for individual processing
      return spaces.replace(/./g, ()=>{
        // Pick a star or leave it blank (more likely)
        return [" ", " ", "+", " ", ".", " ", "*", " ", " "][Math.floor(Math.random() * 8)];
      });
    });
  });
  
  // Print moon in a cool scrolling fashion
  for (const line of moon) {
    await sleep(125);
    print(line + "\n");
  };
  
  await sleep(10000);
  print("\n");
  loadSegment("-menu");
  
})();
