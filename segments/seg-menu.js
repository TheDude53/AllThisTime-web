"use strict";
window.handleInput = (input)=>{
  if (input === "play") {
    print("\n");
    loadSegment(0);
    return;
  } else if (input === "music") {
    playData.music = !playData.music;
    print("Music " + (playData.music ? "on" : "off") + ".\n\n");
  };
  listen();
};

(async ()=>{
  
  print("*".repeat(60) + "\n" + "*".repeat(60) + "\n\n\n");
  print("  __   _  _    _____  _    _        _____  _\n");
  print(" (  ) ( )( )  (_   _)( )  (_)      (_   _)(_)\n");
  print(" /o \\ | || |    | |  | |_  _  __     | |   _  __  __  ___\n");
  print("( __ )( )( )    ( )  ( _ )( )(_      ( )  ( )( _\\/_ )( o_)\n");
  print("/_\\/_\\/_\\/_\\    /_\\  /_\\||/_\\/__)    /_\\  /_\\/_\\  /_\\ \\(\n");
  print("\n\n" + "*".repeat(60) + "\n" + "*".repeat(60) + "\n\n\n");
  print("All This Time\n");
  print("A Text Adventure Game\n");
  print("Copyright (c) 2017 Jonathan Coulton Inc., All rights reserved.\n");
  print("Copyright (c) 2022 DudeBot Multimedia Studios and contributors. All rights reserved.\n");
  print("Revision 79 / Serial number 58784\n\n\n");
  await sleep(6000);
  
  print("-- Main Menu --\n");
  print("Type \"play\" to start the game.\n");
  print("To toggle music on/off, type \"music\".\n\n");
  listen();
  
})();