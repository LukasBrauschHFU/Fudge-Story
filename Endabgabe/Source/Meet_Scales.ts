namespace Template {
    export async function Meet_Scales(): ƒS.SceneReturn {
        let text = {
        Protagonist: {
          T0000: "*Thinking*: Oh no, not again",
          T0001: "I know you are there, come out",
          T0002: "I could ask you the same thing",
          T0003: "Ah, and what are you doi..",
          T0004: "Scare who ?"

        },
        Narrator: {
          T0000: "90 minutes later.",
          T0001: "You get the feeling that something is not normal with this girl"
        },
        Scales: {
          T0000: "Who might you be ?",
          T0001: "My name is Scales",
          T0002: "Pshhh, you´ll scare them",
          T0003: "They are watching"

        }
      };
        await ƒS.Location.show(locations.HFU_Room);
        await ƒS.update(1);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
         //noises here
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
        await ƒS.Character.show(characters.Scales, characters.Scales.pose.normal, ƒS.positionPercent(105, 150));
        await ƒS.Speech.tell(characters.Scales, text.Scales.T0000);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
        await ƒS.Speech.tell(characters.Scales, text.Scales.T0001);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0003);
        await ƒS.Speech.tell(characters.Scales, text.Scales.T0002);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0004);
        await ƒS.Speech.tell(characters.Scales, text.Scales.T0003);
        await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0001);

        let importantDecision = {
            escape: "Go backwards and slowly walk out of the room",
            stay: "Continue talking to scales"
          };
          
        let importantDecisionElement = await ƒS.Menu.getInput(importantDecision, "class");
        switch (importantDecisionElement) {
            case importantDecision.escape:
                await ƒS.Speech.tell(characters.Protagonist, "*Thinking*: Nope, I´m out of here");
                await ƒS.Character.hideAll();
                ƒS.Speech.clear();
                await ƒS.Location.show(locations.Black);
                await ƒS.update(1);
                //return
                break;
      
            case importantDecision.stay:
                await ƒS.Speech.tell(characters.Protagonist, "You are really confusing me");
                await ƒS.Speech.tell(characters.Scales, "Hehehe, they like that");
                await ƒS.Speech.tell(characters.Protagonist, "Good for them. But I have to ask again: Why are you here ?");
                await ƒS.Speech.tell(characters.Scales, "I just like the heat. Also, this room is noise isolated so noone can hear what happens in here");
                await ƒS.Speech.tell(characters.Protagonist, "You do know how creepy you sound ?");
                await ƒS.Speech.tell(characters.Scales, "I kinda like your humor");
                await ƒS.Speech.tell(characters.Protagonist, "That was not a joke tho.");
                await ƒS.Speech.tell(characters.Scales, "*giggles*");
                await ƒS.Speech.tell(characters.Protagonist, "... Anyways, I need to fix this boiler now. Would you like to help me ?");
                await ƒS.Speech.tell(characters.Scales, "I suppose, as long as you don´t mind me talking about random stuff while we work");
                await ƒS.Speech.tell(characters.Protagonist, "Strange request, but ok.");
                await ƒS.Speech.tell(characters.Scales, "So, there are these girls that I really hate, they......");
                await ƒS.Location.show(locations.Black);
                //working noises here
                await ƒS.Character.hideAll();
                await ƒS.update(5);
                await ƒS.Location.show(locations.HFU_Room);
                await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
                await ƒS.Character.show(characters.Scales, characters.Scales.pose.normal, ƒS.positionPercent(105, 150));
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.Protagonist, "Pew, that was lots of work. Thank you for helping me");
                await ƒS.Speech.tell(characters.Scales, "It was a pleasure. I´m glad I had someone to talk to");
                await ƒS.Speech.tell(characters.Protagonist, "No problem. I must go now though");
                await ƒS.Speech.tell(characters.Scales, "Have a nice day.");
                //evtl nur +1
                dataForSave.ScalesAffection.score = dataForSave.ScalesAffection.score + 2;
                dataForSave.Interacted_with_Scales.boolean = true;
              //return
                break;  
            } 
       
    }
  }