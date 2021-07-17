namespace Template {
    export async function Learning_with_Mothrin(): ƒS.SceneReturn {
        let text = {
        Protagonist: {
          T0000: "I found it quiet interesting. If I somehow lose Interest in my job, I might study the same subject ",
          T0001: "No problem"
        },
        Narrator: {
          T0000: "90 minutes later."
        },
        Mothrin: {
          T0000: "So, what do you think?",
          T0001: "´m glad it didn´t bore you. I don´t want you to get into trouble, so I will let you do your work for now. Thank you for comming with me."
        }
      };
        await ƒS.Location.show(locations.Black);
        await ƒS.update(1);
       // await ƒS.Character.show(characters.Shubaru, characters.Shubaru.pose.normal, ƒS.positionPercent(105, 150));
        await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0000);
        await ƒS.update(1);
        await ƒS.Location.show(locations.HFU_Outside_L);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
        await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(105, 150));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0000);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
        await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0001);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
        await ƒS.Character.hideAll();
        ƒS.Speech.clear();
        await ƒS.Location.show(locations.Black);
        await ƒS.update(1);
       
    }
  }