namespace Template {
    export async function Meet_Shubaru(): ƒS.SceneReturn {
        let animation: ƒS.AnimationDefinition = {
            start: {
                translation: ƒS.positionPercent(200, 150)
               // rotation: 1,
              //  scaling: new ƒS.Position(1, 1)
              //  color: ƒS.Color.CSS("blue", 0)
        
            },
            end: {
              translation: ƒS.positionPercent(55, 150) 
              //  rotation: 1,
              //  scaling: new ƒS.Position(1, 1)
              //  color: ƒS.Color.CSS("red", 0)
            },
            duration: 3,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE 
        };
        let text = {
            Protagonist: {
              T0000: "No problem. But it seems you have droped something",
              T0001: "You eat dry bread ?",
              T0002: "Sounds interesting",
              T0003: "Until then. See ya",
              T0004: "Hi there, Mothrin"

            },
            Shubaru: {
              T0000: "Oh no, I´m terribly sorry",
              T0001: "Ahhhh, my bread",
              T0002: "Yes, i sure do love it. Anyways, I haven´t seen you around this place until now. Are you new here ?",
              T0003: "I´m Shubaru. I´m studying astrology here",
              T0004: "Oh trust me dude, it is. Anyway, I gotta bounce. Maybe we´ll meet again soon"
            },
            Mothrin: {
                T0000: "Good morning",
                T0001: "So, you know, I was thinking if, uhm, you could come with me to class today instead of working ? It will only take 90 minutes and I´m sure noone would be angry at you"
            }
          };

        await ƒS.Location.show(locations.HFU_Inner);
        await ƒS.update(1);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
        await ƒS.update(1);
        //animation of shubaru running into you here
        await ƒS.Character.animate(characters.Shubaru, characters.Shubaru.pose.normal, animation); 
        await ƒS.Speech.tell(characters.Shubaru, text.Shubaru.T0000);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
        await ƒS.Speech.tell(characters.Shubaru, text.Shubaru.T0001);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
        await ƒS.Speech.tell(characters.Shubaru, text.Shubaru.T0002);
        await ƒS.Speech.tell(characters.Protagonist, "Yes, I got work as a janitor here just yesterday. My name is " + dataForSave.Protagonist.name  );
        await ƒS.Speech.tell(characters.Shubaru, text.Shubaru.T0003);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
        await ƒS.Speech.tell(characters.Shubaru, text.Shubaru.T0004);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0003);
        ƒS.Character.hide(characters.Shubaru);
        await ƒS.update(1);
        await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(105, 150));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0000);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0004);
        await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0001);
        let workDecision = {
            continueWorking: "I´m sorry, but, this job is really important to me and I can´t risk loosing it.",
            goWithMothrin: "Sure, why not. I don´t have much to do right now anyways."
          };
          
        let workDecisionElement = await ƒS.Menu.getInput(workDecision, "class");
        switch (workDecisionElement) {
            case workDecision.continueWorking:
                await ƒS.Speech.tell(characters.Mothrin, "Oh, I understand. Well, maybe next time ?");
                await ƒS.Speech.tell(characters.Protagonist, "Yes, I´m sure I can get a day off sometimes in the future and we can do that then. Have fun at class!");
                await ƒS.Speech.tell(characters.Mothrin, "Thank you.");
                await ƒS.Character.hideAll();
                ƒS.Speech.clear();
                await ƒS.update(1);
                //return
                break;
      
            case workDecision.goWithMothrin:
              await ƒS.Speech.tell(characters.Mothrin, "Great. Follow me.");
              dataForSave.MothrinAffection.score = dataForSave.MothrinAffection.score + 1;
              await ƒS.Location.show(locations.Black);
              //return
              break;  
            } 
       // 
    } 
  }