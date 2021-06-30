namespace Template {
    export async function Introduction(): ƒS.SceneReturn {
     // console.log("FudgeStory Template Scene starting");
  
      
      let text = {
        Prof: {
          T0000: "Hello there! Welcome to the world of monster people! My name is Pine! People call me the monster prof!",
          T0001: "This world is inhabited by many different kind of monster people. I myself study the differences between the monster people and humans.",
          T0002: "The only thing we know until now about monster people is that they one day appeared and since life alongside humans",
          T0003: "But enough with the exposition. Tell me about yourself. What is your name ?"
        } 
      };
      
      await ƒS.Speech.tell(characters.Prof, text.Prof.T0000), 
      await ƒS.Location.show(locations.HFU);
      await ƒS.Character.show(characters.Prof, characters.Prof.pose.normal, ƒS.positionPercent(65, 155));
      //Show Professor here
      await ƒS.update(2); 
      await ƒS.Speech.tell(characters.Prof, text.Prof.T0001), 
      // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
      await ƒS.Speech.tell(characters.Prof, text.Prof.T0002), 
      await ƒS.Speech.tell(characters.Prof, text.Prof.T0003), 
      dataForSave.Protagonist.name = await ƒS.Speech.getInput();
      await ƒS.Speech.tell(characters.Prof, "I see. So your name is " + dataForSave.Protagonist.name);
      //console.log(dataForSave.Protagonist.name);
      await ƒS.Speech.tell(characters.Prof, "So, " + dataForSave.Protagonist.name + ", your own adventure is about to start. A world of monsters awaits. Lets Go");
      await ƒS.Location.show(locations.Black);
      await ƒS.update(2);
    }
  }