namespace Template {
  
  
    export async function Ending_World(): ƒS.SceneReturn {
     // console.log("FudgeStory Template Scene starting");
    
      
      let text = {
        Protagonist: {
          T0000: "What do you want to know ?",
          T0001: "Sure, but I don´t know why that..",
          T0002: "Satina, what happened to me ?",
          T0003: "You mean to tell me that my dad was an angel ?",
          T0004: "Don´t say that. I´m sure we can find a way"
        },
        Satina: {
          T0000: "Could you eat this donut ? ",
          T0001: "Just do it, please",
          T0002: "Oh no, it is as I feared",
          T0003: "The donut transformed you into your true self. Seems like there is something your mother didn´t tell you",
          T0004: "Seems like it, yes. And that is very bad. Demons and angels can never be together",
          T0005: "No, you don´t understand. I don´t mean this in some 'our parents will not understand' way. I mean that more in a literall way. If an angel and a demon get close to each other, the world will end"
          
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
      
      
      
      //console.log(test);
      //var list = document.getElementsByTagName("UL")[0];
      //var usedItem = list.getElementsByTagName("LI")[0].innerHTML;
      await ƒS.Location.show(locations.Black);
      await ƒS.update(1); 
      await ƒS.Speech.tell(characters.Narrator, "At the end of this VN you chose to go to the park with a girl named Satina");
      await ƒS.update(1); 
      await ƒS.Location.show(locations.HFU_Park);
      await ƒS.update(1); 
      await ƒS.Character.show(characters.Satina, characters.Satina.pose.normal, ƒS.positionPercent(105, 130));
      await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(30, 140));
      //Hier falls Donut verwendet wurde
      await ƒS.update(1); 
      ƒS.Speech.clear();
    //  ƒS.Speech.tell(characters.Narrator, "You decide to meet with Satina in the park");
      await ƒS.Speech.tell(characters.Satina, dataForSave.Protagonist.name + ", there is something I need to know");
      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
      await ƒS.Speech.tell(characters.Satina, text.Satina.T0000);
      let donut: ƒS.ItemDefinition = items.Donut;
      ƒS.Inventory.add(donut);
      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
      await ƒS.Speech.tell(characters.Satina, text.Satina.T0001);
      await ƒS.update(2); 
      await ƒS.Inventory.open();
        //Temp solution:
      if (document.getElementById("Hole-y_Donut")  == null ) {
          dataForSave.Transformation.istransformed = true;
        }
  
        //Hier transform-Strang
      if (dataForSave.Transformation.istransformed == true ) {
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.angel, ƒS.positionPercent(30, 140));
        
        await ƒS.Speech.tell(characters.Satina, text.Satina.T0002);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
        await ƒS.Speech.tell(characters.Satina, text.Satina.T0003);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0003);
        await ƒS.Speech.tell(characters.Satina, text.Satina.T0004); 
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0004);
        await ƒS.Speech.tell(characters.Satina, text.Satina.T0005); 

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
            ƒS.Speech.tell(characters.Protagonist, "I don´t care for the world. The only thing that matters for me is that we can be together");
            await ƒS.update(1); 
            //Animation here of mc getting closer to satina
            await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.angel, animation);
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
         
            ƒS.Speech.tell(characters.Satina, "I´m glad you made the right choice");
            ƒS.Speech.tell(characters.Protagonist, "I´m still not completely sure what´s going on");
            ƒS.Speech.tell(characters.Satina, "Get some sleep over it. See you tomorrow");
            break;  
        } }

        else {
          await ƒS.Speech.tell(characters.Satina, "So, you don´t trust me after all");
          await ƒS.Speech.tell(characters.Protagonist, "No, that is not it. I just, well, don´t see a reason to eat this donut");
          await ƒS.Speech.tell(characters.Satina, "That just sounds like a lame excuse. Goodbye, " + dataForSave.Protagonist.name);
        }
  
      //Set Progress
      dataForSave.state.a = 100;
     
      //Animation of Moth flying out of window at the end
      await ƒS.Character.hideAll();
  
  
      ƒS.Speech.clear();
      //await ƒS.Character.hide(characters.Ryu);
      await ƒS.update(1);
     // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
      
  
  
  
    }
  }