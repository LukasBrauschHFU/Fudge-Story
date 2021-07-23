namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  //  console.log("FudgeStory template starting");

  //define transitions
  export let transition = {
    clock: {
      duration: 3,
      alpha: "",
      //härtegrad
      edge: 1
    }
  };

  //define sound
  export let sound = {
    //Musik
    air: "Audio/Air.mp3",

    darkTheme: "Audio/SerenadeOfDarkness.mp3",

    space: "Audio/Space.mp3",

    mothrin: "Audio/Afford.mp3",

    satina: "Audio/Not_As_It Seems.mp3",

    shubaru: "Audio/Blue_Ska.mp3",

    scales: "Audio/Lightless_Dawn.mp3",

    intro: "Audio/Delusion.mp3",

    ending: "Audio/Daybreak.mp3",

    crimosa: "Audio/Crimosa.mp3",

    parkEnding: "Audio/cuddle_love_short1.mp3",

    //Sound
    click: "",

    creak: "Audio/Effects/creak.wav",

    walking: "Audio/Effects/walking.wav",

    clank: "Audio/Effects/clank.wav"
  };



  export let locations = {
    HFU: {
      name: "HFU",
      background: "Images/Backgrounds/Uni_Outside.png"
    },
    HFU_Inner: {
      name: "HFU_Inner",
      background: "Images/Backgrounds/Uni_Inner.png"
    },
    HFU_Back: {
      name: "HFU_Back",
      background: "Images/Backgrounds/Uni_Back.png"
    },
    HFU_Room: {
      name: "HFU_Room",
      background: "Images/Backgrounds/Boiler_Room.png"
    },
    HFU_Outside_I: {
      name: "HFU_Outside_I",
      background: "Images/Backgrounds/Uni_Outside_I.png"
    },
    HFU_Park: {
      name: "HFU_Park",
      background: "Images/Backgrounds/Uni_Park.png"
    },
    HFU_River: {
      name: "HFU_River",
      background: "Images/Backgrounds/Uni_Back_River.png"
    },
    HFU_Bathroom: {
      name: "HFU_Bathroom",
      background: "Images/Backgrounds/HFU_Bathroom.png"
    },
    HFU_Outside_L: {
      name: "HFU_Outside_L",
      background: "Images/Backgrounds/HFU_Outside_L.png"
    },
    Park: {
      name: "Park",
      background: "Images/Backgrounds/Park.png"
    },
    Black: {
      name: "Black",
      background: "Images/Backgrounds/Black.png"
    },
    Bedroom_Light: {
      name: "Bedroom_Light",
      background: "Images/Backgrounds/Bedroom_Light.png"
    },
    Bedroom_Dark: {
      name: "Bedroom_Dark",
      background: "Images/Backgrounds/Bedroom_Dark.png"
    }
  };

  //define Characters
  export let characters = {
    Narrator: {
      name: ""
    },

    Mystery: {
      name: "???"
    },
    Protagonist: {
      name: "Default",
      //Position
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        //Standartpose
        normal: "Images/Characters/Protag.png",
        angel: "Images/Characters/Protag_Angel.png",
        happy: "Images/Characters/Protag_Happy.png",
        sad: "Images/Characters/Protag_Sad.png",
        angry: "Images/Characters/Protag_Angry.png"
      }
    },
    Prof: {
      name: "Professor Pine",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        //Standartpose
        normal: "Images/Characters/Prof.png"
      }
    },
    PlanetBig: {
      name: "PlanetBig",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        //Standartpose
        normal: "Images/Spoofs/PlanetBig.png"
      }
    },
    PlanetSmall: {
      name: "PlanetSmall",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        //Standartpose
        normal: "Images/Spoofs/PlanetSmall.png"
      }
    },
    BreadSun: {
      name: "BreadSun",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        //Standartpose
        normal: "Images/Spoofs/CubeFudge.png"
      }
    },

    Mothrin: {
      name: "Mothrin",
      //Position
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        //Standartpose
        normal: "Images/Characters/Moth_Girl.png",
        shadow: "Images/Characters/Moth_Shadow.png",
        happy: "Images/Characters/Moth_Happy.png",
        sad: "Images/Characters/Moth_Sad.png",
        angry: "Images/Characters/Moth_Angry.png",
        special: "Images/Characters/Moth_Girl_Special.png"
      }
    },
    Satina: {
      name: "Satina",
      //Position
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        //Standartpose
        normal: "Images/Characters/Demon.png",
        happy: "Images/Characters/Demon_Happy.png",
        sad: "Images/Characters/Demon_Sad.png",
        angry: "Images/Characters/Demon_Angry.png"
      }
    },
    Shubaru: {
      name: "Shubaru",
      //Position
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        //Standartpose
        normal: "Images/Characters/Shubaru.png",
        happy: "Images/Characters/Shubaru_Happy.png",
        sad: "Images/Characters/Shubaru_Sad.png",
        angry: "Images/Characters/Shubaru_Angry.png"
      }
    },
    Scales: {
      name: "Scales",
      //Position
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        //Standartpose
        normal: "Images/Characters/Scales.png",
        happy: "Images/Characters/Scales_Happy.png",
        sad: "Images/Characters/Scales_Sad.png",
        angry: "Images/Characters/Scales_Angry.png"
      }
    },
    Mother: {
      name: "Mother",
      //Position
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        //Standartpose
        normal: ""
      }
    }
  };


  //Add data to savedata (todo: replace protagonist from above(in anderen Dateien auch))
  export let dataForSave = {
    Protagonist: {
      name: ""
    },
    Score: {
      score: 0
    },
    Transformation: {
      istransformed: false
    },
    usedDonut: {
      used: false
    },
    usedBread: {
      used: false
    },
    usedChilli: {
      used: false
    },
    timeTraveled: {
      timeTraveled: false
    },
    usedFlashlight: {
      used: false
    },
    MothrinAffection: {
      score: 0
    },
    SatinaAffection: {
      score: 0
    },
    ShubaruAffection: {
      score: 0
    },
    ScalesAffection: {
      score: 0
    },
    Interacted_with_Scales: {
      boolean: false
    },
    //Skala hier
    state: {
      a: 0
    }

  };



  //Items
  export let items = {
    Donut: {
      name: "Hole-y Donut",
      description: "A suspicious looking donut",
      image: "Images/Items/Donut.png",
      //Add function
      handler: changeform
      //zum nicht entfernen:
      //static: true
    },
    Mothdust: {
      name: "Mothdust",
      description: "A jar filled with mothdust",
      image: "Images/Items/MothDust.png",
      //Add function
      handler: cantBeUsedNow,
      //zum nicht entfernen:
      static: true
    },
    EvilDonut: {
      name: "Unhole-y Donut",
      description: "An evil, but tasty looking donut",
      image: "Images/Items/EvilDonut.png",
      //Add function
      handler: useDonut
      //zum nicht entfernen:
      //static: true
    },
    Bread: {
      name: "Bread",
      description: "Plain bread",
      image: "Images/Items/Bread.png",
      //Add function
      handler: useBread
      //zum nicht entfernen:
      //static: true
    },
    Chilli: {
      name: "Chilli",
      description: "Delicious looking Chilli con Carne",
      image: "Images/Items/Chilli.png",
      //Add function
      handler: useChilli
      //zum nicht entfernen:
      //static: true
    },
    Flashlight: {
      name: "Flashlight",
      description: "A flashlight",
      image: "Images/Items/Flashlight.png",
      //Add function
      handler: useFlashlight
      //zum nicht entfernen: 
      //static: true
    }
  };

  //Menü (Buttons)
  let inGameMenu = {
    save: "Save",
    load: "Load",
    close: "Close",
    turnUpVolume: "+",
    turnDownVolume: "-",
    credits: "Credits",
    about: "About"
  };
  //Music volume:
  let volume: number = 1.0;

  export function incrementSound(): void {
    if (volume <= 100) {
      volume += 0.1;
      ƒS.Sound.setMasterVolume(volume);
    }
  }

  export function decrementSound(): void {
    if (volume > 0) {
      volume -= 0.1;
      ƒS.Sound.setMasterVolume(volume);
    }
  }

  function changeform(): void {
    dataForSave.Transformation.istransformed = true;
  }
  function useDonut(): void {
    dataForSave.usedDonut.used = true;
  }
  function useBread(): void {
    dataForSave.usedBread.used = true;
  }
  function useChilli(): void {
    dataForSave.usedChilli.used = true;
  }
  function cantBeUsedNow(): void {
    ƒS.Speech.tell(characters.Narrator, "This Item can´t be used right now");
  }
  function useFlashlight(): void {
    dataForSave.usedFlashlight.used = true;
  }
  // Menu - create Menu with buttons
  let gameMenu: ƒS.Menu;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    if (_option == inGameMenu.save) {
      await ƒS.Progress.save();
    }
    else if (_option == inGameMenu.load) {
      await ƒS.Progress.load();
    }
    else if (_option == inGameMenu.turnUpVolume) {
      incrementSound();
    }
    else if (_option == inGameMenu.turnDownVolume) {
      decrementSound();
    }

    if (_option == inGameMenu.close) {
      gameMenu.close();
    }
    if (_option == inGameMenu.credits) {
      let pages: string[] = [
        "<strong>Credits:</strong><br></br> <strong>Lukas Brausch (me):</strong> <br>- All sprites</br> <br>- All backgrounds</br> <br>- Story</br> <br>- Serenade of Darkness (Dark Theme)</br> \
      <br>Seite 1</br>", "<strong>Classical Music</strong> <br>- La Crimosa - Mozart: https://imslp.org/wiki/Requiem_in_D_minor%2C_K.626_(Mozart%2C_Wolfgang_Amadeus)</br> <br>- Air - Bach: https://imslp.org/wiki/Orchestral_Suite_No.3_in_D_major,_BWV_1068_(Bach,_Johann_Sebastian)</br> <br>- Also Sprach Zarathustra - Strauss: https://imslp.org/wiki/Also_sprach_Zarathustra%2C_Op.30_(Strauss%2C_Richard)</br> \
      <br>Seite 2</br>", "<strong>Sound Effects</strong> <br>- Creaking: https://freesound.org/people/Lightnessko/sounds/390323/</br> <br>- Walking on metal: https://freesound.org/people/NachtmahrTV/sounds/556715/</br> <br>- Metal clank: https://freesound.org/people/vibe_crc/sounds/59317/</br> \
      <br>Seite 3</br>", "<strong>Kevin MacLeod</strong> <br>- Not as it seems: https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100762</br> <br>- Blue Ska: https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1600011</br> <br>- Lightless Dawn: https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100655</br> \
      <br>Seite 4</br>", "<strong>Souichi Sakagami</strong> <br>- Afford: https://www.tandess.com/en/music/free-material/material.html </br> <br>- Delusion: https://www.tandess.com/en/music/free-material/material.html</br> <br>- Daybreak: https://www.tandess.com/en/music/free-material/material.html</br> <br>- cuddle_love_short1: https://www.tandess.com/en/music/free-material/material.html</br> \
      <br>Seite 5</br>"];
      ƒS.Text.setClass("text");
      let current: number = 0;
      let flip = { back: "Back", next: "Next", done: "Close" };
      let choice: string;
      ƒS.Text.addClass("flip");
      do {
        ƒS.Text.print(pages[current]);
        choice = await ƒS.Menu.getInput(flip, "flip");
        switch (choice) {
          case flip.back: current = Math.max(0, current - 1); break;
          case flip.next: current = Math.min(pages.length - 1, current + 1); break;
        }
      } while (choice != flip.done);
      ƒS.Text.close();
    }


  }

  //Speicherfunktion
  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F4:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;

      case ƒ.KEYBOARD_CODE.I:
        ƒS.Inventory.open();
        break;

      case ƒ.KEYBOARD_CODE.M:
        gameMenu.open();
        break;
    }
  }

  //Scene
  window.addEventListener("load", start);
  function start(_event: Event): void {
    //Menu
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
    //define the sequenceof scenes, each scene as an object with a reference
    let scenes: ƒS.Scenes = [
      //Main Story
      { scene: Introduction, name: "Introduction" },
      { scene: Start_Bedroom, name: "Start_Bedroom" },
      { scene: Meet_Satina, name: "Meet_Satina", id: "Meet_Satina" },
      { scene: Mothrin_Talk, name: "Mothrin_Talk" },
      { scene: Meet_Shubaru, name: "Meet_Shubaru" },
      { scene: Meet_Scales, name: "Meet_Scales", id: "Meet_Scales" },
      { scene: Learning_with_Mothrin, name: "Learning_with_Mothrin", id: "Learning_with_Mothrin" },
      { scene: Mensa, name: "Mensa", id: "Mensa" },
      //The Endings
      { scene: Park_Shubaru, name: "Park_Shubaru", id: "Park_Shubaru" },
      { scene: Park_Mothrin, name: "Park_Mothrin", id: "Park_Mothrin" },
      { scene: Park_Scales, name: "Park_Scales", id: "Park_Scales" },
      { scene: Ending_World, name: "Ending_World", id: "Ending_World" },
      { scene: Ending_Space, name: "Ending_Space", id: "Ending_Space" },
      { scene: Ending_Evil, name: "Ending_Evil", id: "Ending_Evil" },
      { scene: Ending_Best_Friends, name: "Ending_Best_Friends", id: "Ending_Best_Friends" },
      { scene: Ending, name: "Ending", id: "Ending" }

    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave.state = ƒS.Progress.setData(dataForSave.state, uiElement);
    uiElement.setAttribute("value", "50");

    //start the sequence
    ƒS.Progress.go(scenes);
  }


}