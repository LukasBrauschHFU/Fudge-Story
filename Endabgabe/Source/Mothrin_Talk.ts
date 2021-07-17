namespace Template {
    export async function Mothrin_Talk(): ƒS.SceneReturn {
        let text = {
        Protagonist: {
          T0000: "It was alright, sometimes a bit boring but mostly ok"
        },
        Mothrin: {
          T0000: "Hello, MC. How was your first day working here ?",
          T0001: "Sound great. Since I´m also finished for today, would you like to go and grab something to eat ?"
        }
      };
        await ƒS.Location.show(locations.HFU_River);
        await ƒS.update(1);
        await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(105, 150));
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Shubaru, text.Mothrin.T0000);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
        await ƒS.Speech.tell(characters.Shubaru, text.Mothrin.T0001);


        let foodDecision = {
          getFood: "I would love to",
          helpSatina: "Sorry, I can´t. I already promised someone to help her in a bit"
        };
        
        let foodDecisionElement = await ƒS.Menu.getInput(foodDecision, "class");
        switch (foodDecisionElement) {
          case foodDecision.getFood:
              await ƒS.Speech.tell(characters.Mothrin, "Great! Lets go and get a Kebab to go. We can eat it in the park, they have nice lights there");
              dataForSave.MothrinAffection.score = dataForSave.MothrinAffection.score + 1;
              await ƒS.Speech.tell(characters.Protagonist, "Sound like a great idea.");
              await ƒS.update(1);
              await ƒS.Character.hideAll();
              await ƒS.update(1);
              await ƒS.Speech.tell(characters.Narrator, "After university, you met with Mothrin in the park. You had lots of fun");
              await ƒS.update(1);
              ƒS.Speech.clear();
              await ƒS.update(1);
              break;
    
          case foodDecision.helpSatina:
            await ƒS.Speech.tell(characters.Mothrin, "Oh, uhm, alright. Guess I´ll see you tomorrow then");
            dataForSave.MothrinAffection.score = dataForSave.MothrinAffection.score - 1;
            await ƒS.Speech.tell(characters.Protagonist, "Until tomorrow. Have a nice meal");
            await ƒS.update(1);
            await ƒS.Character.hideAll();
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.Narrator, "After that, you met with Satina and found out that she likes to eat sweat things");
            ƒS.Speech.clear();
            await ƒS.update(1);
            break;  
          } 
    }
  }