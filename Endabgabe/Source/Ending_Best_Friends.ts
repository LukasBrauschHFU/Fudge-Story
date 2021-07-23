namespace Template {
  export async function Ending_Best_Friends(): ƒS.SceneReturn {
    let text = {
      Protagonist: {
        T0000: "Hello there",
        T0001: "Yes. Sometimes I have a feeling that things never work out for me",
        T0002: "I hope you are right. I´m just happy I have a good friend in you"
      },
      Mothrin: {
        T0000: "Hard day ?",
        T0001: "Aw, don´t say that. I´m sure things will be better in the future",
        T0002: "I´m glad too. Thanks for being my best friend"
      }
    };
    await ƒS.Location.show(locations.Park);
    await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(105, 150));
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
    ƒS.Sound.fade(sound.mothrin, 0.2, 2, true);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Mothrin, "Good evening, " + dataForSave.Protagonist.name);
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
    await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0000);
    await ƒS.Character.hide(characters.Protagonist);
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.sad, ƒS.positionPercent(29, 150));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
    await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0001);
    await ƒS.Character.hide(characters.Protagonist);
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(29, 150));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
    await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0002);
    ƒS.Sound.fade(sound.mothrin, 0, 1, false);
    dataForSave.state.a = 100;
    await ƒS.Character.hideAll();
    ƒS.Speech.clear();
    await ƒS.update(1);
    return "Ending";
  }
}