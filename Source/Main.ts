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

      //Sound
      click: ""  
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
     name: "Baka",
     //Position
    origin: ƒS.ORIGIN.BOTTOMRIGHT,
    pose: {
      //Standartpose
      normal: "Images/Characters/Protag.png",
      smile: "",
      sad: ""
    }
   },
   Prof: {
    name: "Professor Pine"
  },
 
   Mothrin: {
    name: "Mothrin",
    //Position
    origin: ƒS.ORIGIN.BOTTOMRIGHT,
    pose: {
      //Standartpose
      normal: "Images/Characters/Moth_Girl.png",
      shadow: "Images/Characters/Moth_Shadow.png",
      smile: "",
      sad: ""
    }
   },
   Satina: {
    name: "Satina",
    //Position
    origin: ƒS.ORIGIN.BOTTOMRIGHT,
    pose: {
      //Standartpose
      normal: "Images/Characters/Demon1.2.png",
      smile: "",
      sad: ""
    }
   },
   Mother: {
    name: "Mother",
    //Position
    origin: ƒS.ORIGIN.BOTTOMRIGHT,
    pose: {
      //Standartpose
      normal: "",
      shadow: "",
      smile: "",
      sad: ""
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
      MothrinAffection: {
        score: 0
      },
      //Skala hier
      state: {
        a: 1
      }
  
    };

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
  }
}

//Items
  export let items = {
  Pokeball: {
    name: "Slavski_Pokeball",
    description: "A Pokeball created to catch slav type Pokemon", 
    image: "Images/Items/slavskiball.png"
  },
  Pokeball2: {
    name: "Slavski_Pokeball_Alternate",
    description: "An alternate Item", 
    image: "Images/Items/slavskiball_alt.png"
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
  ƒS.Sound.setVolume(sound.air, volume);
}
  }
  
  export function decrementSound(): void {
    if (volume > 0) {
    volume -= 0.1;
    ƒS.Sound.setVolume(sound.air, volume);
  }
}
  

// Menu - create Menu with buttons
  let gameMenu: ƒS.Menu;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    if (_option == inGameMenu.save) {
      await ƒS.Progress.save();
    }
    else if (_option == inGameMenu.load ) {
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

  }
  
//Scene
  window.addEventListener("load", start);
  function start(_event: Event): void {
    //Menu
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
  //define the sequenceof scenes, each scene as an object with a reference
    let scenes: ƒS.Scenes = [
  //{ scene: Animation, name: "Animation"},
 // { scene: Introduction, name: "Introduction"},
 // { scene: Start_Bedroom, name: "Start_Bedroom"},
  { scene: Ending_World, name: "Ending_World"}
 // { scene: Decisions, name: "Decisions"},
 // { scene: Decisions1, name: "Decisions1", id: "De2"},
 // { scene: Decisions2, name: "Decisions2", id: "De3"},
 // { scene: Decisions3, name: "Decisions3", id: "De4"}
  ];

  //Meter hier hin 
 //setData for saved objects, Alternative:
 //Nochmal nachschauen auf Github
    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave.state = ƒS.Progress.setData(dataForSave.state, uiElement);
    uiElement.setAttribute("value", "50");
    console.log(uiElement);
  //setData for saved objects:
  //temp disabled
//ƒS.Progress.setData(dataForSave);
  //start the sequence
    ƒS.Progress.go(scenes);
}


}