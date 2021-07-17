 namespace Template {
  export async function Start_Bedroom(): ƒS.SceneReturn {
   // console.log("FudgeStory Template Scene starting");

    
    let text = {
      Narrator: {
        T0000: "You sleep in your room. Suddenly, you wake up because you hear a noise from under your bed."
      },
      Prof: {
        T0000: "Hello there! Welcome to the world of Monster People! My name is Pine! People call me the Monster Prof!",
        T0001: "This world is inhabited by many different kind of Monster People. I myself study the differences between the Monster people and humans.",
        T0002: "The only thing we know until now about monster people is that they one day appeared and since life alongside humans.",
        T0003: "But enough with the exposition. Tell me about yourself. What is your name ?"
      },
      Protagonist: {
        T0000: "Mom, there is a monster under my bed",
        T0001: "But I´m sure I heard something"
      },
      Mothrin: {
        T0000: "Protag, please, turn on the lights",
        T0001: "Hello. You left your window open earlier and somehow I fell asleep under your bed."
      },
      Mother: {
        T0000: dataForSave.Protagonist.name + "Kevin, you are 20 years old, stop worrying about your imagination and find a job already.",
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
  //Set Protag name
    characters.Protagonist.name = dataForSave.Protagonist.name;
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0000), 
    
    await ƒS.Location.show(locations.Bedroom_Dark);
    ƒS.Sound.fade(sound.dio, 0.2, 0.1, true);
    //Noises Here
    await ƒS.update(1); 
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000), 
    await ƒS.Speech.tell(characters.Mother, dataForSave.Protagonist.name + ", you are 20 years old, stop worrying about your imagination and find a job already.");
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001),
    await ƒS.Speech.tell(characters.Mother, "No, "  + dataForSave.Protagonist.name + ", you didn´t. Go back to sleep now.");
    ƒS.Speech.clear();
    //Show Characters
    await ƒS.Character.animate(characters.Mothrin, characters.Mothrin.pose.shadow, animation);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Mystery, dataForSave.Protagonist.name + ", please, turn on the lights"),
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
          ƒS.Sound.fade(sound.dio, 0, 0.1, false);
          ƒS.Sound.fade(sound.filler, 0.2, 2, true);
          await ƒS.Location.show(locations.Bedroom_Light);
          await ƒS.Character.hide(characters.Mothrin);
          await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(105, 150));
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Mothrin, "Thank you very much.");
          dataForSave.MothrinAffection.score = dataForSave.MothrinAffection.score + 2;
          await ƒS.update(1);
          break;

      case lightDecision.notTurnOnLight:
       await ƒS.Speech.tell(characters.Protagonist, "...");
       await ƒS.Speech.tell(characters.Mothrin, "Fine, I´ll do it myself.");
        //Insert sound of Lightswitch
       ƒS.Sound.play(sound.click, 1);
       ƒS.Sound.fade(sound.dio, 0, 0.1, false);
       ƒS.Sound.fade(sound.filler, 0.2, 2, true);
       await ƒS.Location.show(locations.Bedroom_Light);
       await ƒS.Character.hide(characters.Mothrin);
       await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(105, 150));
       await ƒS.update(1);
       break;  
      } 

    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
    //Set Progress
    dataForSave.state.a += 1;
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0001),
   // await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0001),
  //  await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0002),
    await ƒS.update(1);
     //Decision
    let lightDecision2 = {
      askFriendly: "Don´t I know you from somewhere ?",
      askRude: "So you broke into my room ? I should call the police on you for privacy intrusion."
    };
    
    let lightDecisionElement2 = await ƒS.Menu.getInput(lightDecision2, "class");
    switch (lightDecisionElement2) {
      case lightDecision2.askRude:
          await ƒS.Speech.tell(characters.Mothrin, "I swear, I didn´t want to do anything evil. I just saw the lights in your room and wanted to get close to them.");
          await ƒS.Speech.tell(characters.Protagonist, "What kind of obsession is this ?"),
          await ƒS.Speech.tell(characters.Mothrin, "For us moths, that is totally a normal behavior. We live for the light.");
          await ƒS.Speech.tell(characters.Protagonist, "If you say so....Oh well."),
          await ƒS.update(1);
          break;

      case lightDecision2.askFriendly:
       await ƒS.Speech.tell(characters.Mothrin, "Well, I´m studying at the local university. I once saw you getting kicked off the campus for getting too drunk at a party.");
       await ƒS.Speech.tell(characters.Protagonist, "Ah, yeah, I kinda remember seeing you there. Weren´t you that girl who drank a whole bottle of *brand censored* vodka at the campus party and tried to fight a fly girl because she stole one of your pizza slices ?"),
       await ƒS.Speech.tell(characters.Mothrin, "That might have been me, yes.");
       await ƒS.update(1);
       break;  
      } 
    


    await ƒS.Speech.tell(characters.Mother, "Is someone up there with you? I hear voices.");
    await ƒS.Speech.tell(characters.Protagonist, "No mom - I´m just watching videos.");
    await ƒS.Speech.tell(characters.Mother, "You should look for a job instead.");
    await ƒS.Speech.tell(characters.Protagonist, "Yeah Yeah, tomorrow I will.");
    await ƒS.Speech.tell(characters.Mothrin, "Oh, you are looking for a job ? Our university is looking for a janitor since last spring. Wouldn´t that be a great opportunity ?");


    let lightDecision3 = {
      party: "I guess that would be quite nice. (Might get invited to more parties that way)",
      nowork: "I don´t really want to work. I want to become a popular streamer instead."
    };
    
    let lightDecisionElement3 = await ƒS.Menu.getInput(lightDecision3, "class");
    switch (lightDecisionElement3) {
      case lightDecision3.party:
          await ƒS.Speech.tell(characters.Mothrin, "Great. I can show you around campus tomorrow if you want.");
          await ƒS.Speech.tell(characters.Protagonist, "Sounds great. Thank you.");
          dataForSave.MothrinAffection.score = dataForSave.MothrinAffection.score + 1;
          await ƒS.update(1);
          break;

      case lightDecision3.nowork:
       await ƒS.Speech.tell(characters.Mothrin, "Come on, it will be great, I promise it"),
       await ƒS.Speech.tell(characters.Protagonist, "Why should I believe you ? You just broke into my house and now I should suddenly trust you ?");
       await ƒS.Speech.tell(characters.Mothrin, "Well, I mean, eh, if you don´t want to I guess you don´t have too. I was just thinking you might like working at a place with many parties and university students. Also, you could get out of 'this'.");
       await ƒS.Speech.tell(characters.Protagonist, "Hmm, you might be right. I´ll think about it. I mean, well, I can at least go to the university with you tomorrow and have a look.");
       await ƒS.Speech.tell(characters.Mothrin, "Great, I see you tomorrow then.");
       await ƒS.update(1);
       break;  
      } 


    await ƒS.Speech.tell(characters.Mothrin, "Goodbye.");
    await ƒS.Speech.tell(characters.Protagonist, "See ya.");
    //Animation of Moth flying out of window at the end
    await ƒS.Character.hideAll();

    ƒS.Sound.fade(sound.filler, 0, 0.1, false);
    ƒS.Speech.clear();
    //await ƒS.Character.hide(characters.Ryu);
    await ƒS.update(2);
   // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    



  }
}