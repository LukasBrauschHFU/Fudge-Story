namespace Template {
  export async function Start_Bedroom(): ƒS.SceneReturn {
   // console.log("FudgeStory Template Scene starting");

    
    let text = {
      Narrator: {
        T0000: "You sleep in your room. Suddenly, you wake up because you hear a noise from under your bed"
      },
      Prof: {
        T0000: "Hello there! Welcome to the world of Monster People! My name is Pine! People call me the Monster Prof!",
        T0001: "This world is inhabited by many different kind of Monster People. I myself study the differences between the Monster people and humans.",
        T0002: "The only thing we know until now about monster people is that they one day appeared and since life alongside humans",
        T0003: "But enough with the exposition. Tell me about yourself. What is your name ?"
      },
      Protagonist: {
        T0000: "Mom, there is a monster under my bed",
        T0001: "But I´m sure I heared something"
      },
      Mothrin: {
        T0000: "Protag, please, turn on the lights"
      },
      Mother: {
        T0000: dataForSave.Protagonist.name + "Kevin, you are 20 years old, stop worrying about your imagination and find a job already",
        T0001: "No, Kevin, you didn´t. Go back to sleep now"
      }
    };
    

    let animation: ƒS.AnimationDefinition = {
      start: {
          translation: ƒS.positionPercent(105, 230)
         // rotation: 1,
        //  scaling: new ƒS.Position(1, 1)
        //  color: ƒS.Color.CSS("blue", 0)
  
      },
      end: {
        translation: ƒS.positionPercent(105, 150)
        //  rotation: 1,
        //  scaling: new ƒS.Position(1, 1)
        //  color: ƒS.Color.CSS("red", 0)
      },
      duration: 10,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
  };
    await ƒS.Speech.tell(characters.Prof, text.Prof.T0000), 
    await ƒS.Location.show(locations.HFU);
    //Show Professor here
    await ƒS.update(2); 
    await ƒS.Speech.tell(characters.Prof, text.Prof.T0001), 
    // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await ƒS.Speech.tell(characters.Prof, text.Prof.T0002), 
    await ƒS.Speech.tell(characters.Prof, text.Prof.T0003), 
    dataForSave.Protagonist.name = await ƒS.Speech.getInput();
    await ƒS.Speech.tell(characters.Prof, "I see. So your name is " + dataForSave.Protagonist.name);
    //console.log(dataForSave.Protagonist.name);
    await ƒS.Speech.tell(characters.Prof, "So, " + dataForSave.Protagonist.name + ", your own adventure is about to start. A world of Monsters awaits. Lets Go");
    await ƒS.Location.show(locations.Black);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0000), 
    
    await ƒS.Location.show(locations.Bedroom_Dark);
    //Noises Here
    await ƒS.update(1); 
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000),
    await ƒS.Speech.tell(characters.Mother, dataForSave.Protagonist.name + ", you are 20 years old, stop worrying about your imagination and find a job already");
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001),
    await ƒS.Speech.tell(characters.Mother, "No, "  + dataForSave.Protagonist.name + ", you didn´t. Go back to sleep now");
    ƒS.Speech.clear();
    //Show Characters
    await ƒS.Character.animate(characters.Mothrin, characters.Mothrin.pose.shadow, animation);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Mystery, text.Mothrin.T0000),
    await ƒS.update(1);
    //Decision
    let lightDecision = {
      turnOnLight: "Turn on the lights",
      notTurnOnLight: "Do not turn on the lights"
    };
    
    let lightDecisionElement = await ƒS.Menu.getInput(lightDecision, "class");
    switch (lightDecisionElement) {
      case lightDecision.turnOnLight:
        //Insert sound of Lightswitch
          ƒS.Sound.play(sound.click, 1);
          await ƒS.Location.show(locations.Bedroom_Light);
          await ƒS.Character.hide(characters.Mothrin);
          await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(105, 150));
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Mothrin, "Thank you very much");
          dataForSave.MothrinAffection.score = dataForSave.MothrinAffection.score + 2;
          await ƒS.update(1);
          break;

      case lightDecision.notTurnOnLight:
       
       await ƒS.Speech.tell(characters.Mothrin, "Fine, I´ll do it myself");
        //Insert sound of Lightswitch
       ƒS.Sound.play(sound.click, 1);
       await ƒS.Location.show(locations.Bedroom_Light);
       await ƒS.Character.hide(characters.Mothrin);
       await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(105, 150));
       await ƒS.update(1);
       break;  
      } 

    //Set Progress
    dataForSave.state.a += 1;
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(30, 150));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000),
   // await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0001),
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001),
  //  await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0002),
    await ƒS.update(1);
    //Animation of Moth flying out of window at the end
    await ƒS.Character.hideAll();


    ƒS.Speech.clear();
    //await ƒS.Character.hide(characters.Ryu);
    await ƒS.update(1);
   // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    



  }
}