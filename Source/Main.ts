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
      backgroundTheme: "Audio/Dorm.mp3",

      //Sound
      click: ""  
    };

  export let locations = {
    city: {
      name: "Schoolcity", 
      background: "Images/Backgrounds/smol.png"
    },
    Dorm: {
      name: "Dorm", 
      background: "Images/Backgrounds/Background2.jpg"
    }
  };  

  //define Characters
  export let characters = {
   Narrator: {
     name: ""
   },
   Protagonist: {
     name: "Protag",
     //Position
    origin: ƒS.ORIGIN.BOTTOMRIGHT,
    pose: {
      //Standartpose
      normal: "Images/Characters/Protag.png",
      smile: "",
      sad: ""
    }
   },
 
   Ryu: {
    name: "Ryu",
    //Position
    origin: ƒS.ORIGIN.BOTTOMRIGHT,
    pose: {
      //Standartpose
      normal: "Images/Characters/Jojo.png",
      smile: "",
      sad: ""
    }
   }
  };


  //Add data to savedata (todo: replace protagonist from above(in anderen Dateien auch))
  export let dataForSave = {
    Protagonist: {
      name: "Protag"
    },
    Score: {
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
    image: "Images/Items/Slavskiball.png"
  },
  Pokeball2: {
    name: "Slavski_Pokeball_Alternate",
    description: "An alternate Item", 
    image: "Images/Items/Slavskiball_alt.png"
  }
};

//Scene
  window.addEventListener("load", start);
  function start(_event: Event): void {
  //define the sequenceof scenes, each scene as an object with a reference
let scenes: ƒS.Scenes = [
  //{ scene: Animation, name: "Animation"},
  { scene: Scene, name: "Scene"},
  { scene: Decisions, name: "Decisions"},
  { scene: Decisions1, name: "Decisions1", id: "De2"},
  { scene: Decisions2, name: "Decisions2", id: "De3"},
  { scene: Decisions3, name: "Decisions3", id: "De4"}
  ];

  //Meter hier hin
 //setData for saved objects, Alternative:
 //Nochmal nachschauen auf Github
let uiElement: HTMLElement = document.querySelector("[type=interface]");
dataForSave.state = ƒS.Progress.setDataInterface(dataForSave.state, uiElement);
  //setData for saved objects:
  //temp disabled
//ƒS.Progress.setData(dataForSave);
  //start the sequence
ƒS.Progress.go(scenes);
}


}