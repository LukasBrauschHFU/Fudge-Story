namespace Template {
  
  
    export async function Ending_World(): ƒS.SceneReturn {
     // console.log("FudgeStory Template Scene starting");
    
      
      let text = {
        Protagonist: {
          T0000: "Seems like this is the end, huh",
          T0001: "But I´m sure I heared something"
        },
        Satina: {
          T0000: "The final decision is still up to you"
        }
      };
      
  
      let animation: ƒS.AnimationDefinition = {
        start: {
            translation: ƒS.positionPercent(30, 140)
           // rotation: 1,
          //  scaling: new ƒS.Position(1, 1)
          //  color: ƒS.Color.CSS("blue", 0)
    
        },
        end: {
          translation: ƒS.positionPercent(70, 140)
          //  rotation: 1,
          //  scaling: new ƒS.Position(1, 1)
          //  color: ƒS.Color.CSS("red", 0)
        },
        duration: 5,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
      
    //TEst Inventory
      
      let pokeball: ƒS.ItemDefinition = items.Pokeball;
      ƒS.Inventory.add(pokeball);
      
      //console.log(test);
      await ƒS.Inventory.open();
      //var list = document.getElementsByTagName("UL")[0];
      //var usedItem = list.getElementsByTagName("LI")[0].innerHTML;

      //Temp solution:
      if (document.getElementById("Slavski_Pokeball")  == null ) {
        dataForSave.Transformation.istransformed = true;
      }

      //Hier transform-Strang
      if (dataForSave.Transformation.istransformed == true ){

      }
      
      await ƒS.Character.show(characters.Satina, characters.Satina.pose.normal, ƒS.positionPercent(105, 130));
      await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(30, 140));
      //Hier falls Donut verwendet wurde
      await ƒS.update(1); 
      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000),
      ƒS.Speech.clear();
      //Show Characters
     // await ƒS.Speech.tell(characters.Mystery, text.Mothrin.T0000),
      await ƒS.update(1);
      //Decision
      let endDecision = {
        turnOnLight: "Get closer to Satina",
        notTurnOnLight: "Stay where you are"
      };
      
      let endDecisionElement = await ƒS.Menu.getInput(endDecision, "class");
      switch (endDecisionElement) {
        case endDecision.turnOnLight:
            ƒS.Speech.tell(characters.Satina, "I made my choice");
            await ƒS.update(1); 
            //Animation here of mc getting closer to satina
            await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.normal, animation);
            ƒS.Sound.fade(sound.air, 0.2, 0.1, true);
            await ƒS.update(3); 
            //Ending Animation here
            await ƒS.Location.show(locations.HFU);
            await ƒS.update(2); 
            await ƒS.Location.show(locations.HFU_Inner);
            await ƒS.update(2); 
            //No await here
            ƒS.Speech.tell(characters.Satina, "So this is how you decided ?");
            await ƒS.Location.show(locations.HFU_Back);
            await ƒS.update(2); 
            await ƒS.Location.show(locations.HFU_Room);
            await ƒS.update(2); 
            await ƒS.Location.show(locations.HFU_Outside_I);
            await ƒS.update(2); 
            await ƒS.Location.show(locations.HFU_Park);
            await ƒS.update(2); 
            ƒS.Speech.tell(characters.Satina, "You and me, together in eternity even if it means sacrificing everything ?");
            await ƒS.Location.show(locations.HFU_River);
            await ƒS.update(2); 
            await ƒS.Location.show(locations.Park);
            await ƒS.update(2); 
            await ƒS.Location.show(locations.Bedroom_Light);
            await ƒS.update(2); 
            await ƒS.Location.show(locations.HFU);
            await ƒS.update(1); 
            await ƒS.Location.show(locations.HFU_Inner);
            await ƒS.update(1); 
            await ƒS.Location.show(locations.HFU_Back);
            await ƒS.update(1); 
            await ƒS.Location.show(locations.HFU_Room);
            await ƒS.update(1); 
            ƒS.Speech.tell(characters.Satina, "You really seem to love me, do you ?");
            await ƒS.Location.show(locations.HFU_Outside_I);
            await ƒS.update(1); 
            await ƒS.Location.show(locations.HFU_Park);
            await ƒS.update(1); 
            await ƒS.Location.show(locations.HFU_River);
            await ƒS.update(1); 
            await ƒS.Location.show(locations.Park);
            await ƒS.update(1); 
            await ƒS.Location.show(locations.Bedroom_Light);
            await ƒS.update(1);
            await ƒS.Location.show(locations.HFU);
            await ƒS.update(0.8); 
            await ƒS.Location.show(locations.HFU_Inner);
            await ƒS.update(0.8); 
            await ƒS.Location.show(locations.HFU_Back);
            await ƒS.update(0.8); 
            ƒS.Speech.tell(characters.Satina, "But what can I say ?");
            await ƒS.Location.show(locations.HFU_Room);
            await ƒS.update(0.8); 
            await ƒS.Location.show(locations.HFU_Outside_I);
            await ƒS.update(0.8); 
            await ƒS.Location.show(locations.HFU_Park);
            await ƒS.update(0.8); 
            await ƒS.Location.show(locations.HFU_River);
            await ƒS.update(0.8); 
            await ƒS.Location.show(locations.Park);
            await ƒS.update(0.8); 
            await ƒS.Location.show(locations.Bedroom_Light);
            await ƒS.update(0.8);  
            await ƒS.Location.show(locations.Black);
            await ƒS.update(0.8);  
            await ƒS.Location.show(locations.HFU);
            await ƒS.update(0.8); 
            await ƒS.Location.show(locations.Black);
            await ƒS.update(0.8); 
            await ƒS.Location.show(locations.HFU_Inner);
            await ƒS.update(0.8);  
            ƒS.Speech.tell(characters.Satina, "I feel the same way");
            await ƒS.Location.show(locations.Black);
            await ƒS.update(0.8); 
            await ƒS.Location.show(locations.HFU_Back);
            await ƒS.update(0.8); 
            await ƒS.Location.show(locations.Black);
            await ƒS.update(0.8); 
            await ƒS.Location.show(locations.HFU_Room);
            await ƒS.update(0.4); 
            await ƒS.Location.show(locations.Black);
            await ƒS.update(0.4);
            await ƒS.Location.show(locations.HFU_Outside_I);
            await ƒS.update(0.4); 
            await ƒS.Location.show(locations.Black);
            await ƒS.update(0.4);
            await ƒS.Location.show(locations.HFU_Park);
            await ƒS.update(0.4); 
            await ƒS.Location.show(locations.Black);
            await ƒS.update(0.4);
            await ƒS.Location.show(locations.HFU_River);
            await ƒS.update(0.4); 
            await ƒS.Location.show(locations.Black);
            await ƒS.update(0.4);
            await ƒS.Location.show(locations.Park);
            await ƒS.update(0.4); 
            await ƒS.Location.show(locations.Black);
            await ƒS.update(0.4);
            await ƒS.Location.show(locations.Bedroom_Light);
            await ƒS.update(0.4);
            await ƒS.Location.show(locations.Black);
            await ƒS.update(0.4);
      
            await ƒS.Speech.tell(characters.Satina, "Thank you, for everything");
            await ƒS.Character.hideAll();
            await ƒS.update(2);
            await ƒS.Speech.tell(characters.Satina, "Goodbye, " + dataForSave.Protagonist.name ); 
            break;
  
        case endDecision.notTurnOnLight:
         
            ƒS.Speech.tell(characters.Satina, "I totally understand why you would be scared");

            break;  
        } 
  
      //Set Progress
      dataForSave.state.a += 100;
     
      //Animation of Moth flying out of window at the end
      await ƒS.Character.hideAll();
  
  
      ƒS.Speech.clear();
      //await ƒS.Character.hide(characters.Ryu);
      await ƒS.update(1);
     // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
      
  
  
  
    }
  }