namespace Template {
    export async function Park_Scales(): ƒS.SceneReturn {
        let text = {
        Protagonist: {
          T0000: "What do you mean ?",
          T0001: "I´m glad that we met, don´t worry about a thing"
        },
        Scales: {
          T0000: "I thought I would never make any friends here. I thought I would end up completely alone until the day I die. That thought haunted me all day and night, I almost went insane"
        }
      };
        await ƒS.Location.show(locations.Park);
        await ƒS.Character.show(characters.Scales, characters.Scales.pose.normal, ƒS.positionPercent(105, 150));
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
        await ƒS.Speech.tell(characters.Scales, "Thanks " + dataForSave.Protagonist.name + ", I really needed this");
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
        await ƒS.Speech.tell(characters.Scales, text.Scales.T0000);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
    }
  }