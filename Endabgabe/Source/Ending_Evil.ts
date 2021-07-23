namespace Template {
  export async function Ending_Evil(): ƒS.SceneReturn {
    let text = {
      Protagonist: {
        T0000: "Oh, that´s unexpected. Thank you.",
        T0001: "Tastes kinda strange. Anyways, have you seen Shubaru today ?",
        T0002: "I don´t see Shubaru anywhere.",
        T0003: "Oh no, you don´t want to tell me that...",
        T0004: "Stop this, Scales!"
      },
      Scales: {
        T0000: "Is it tasty ?",
        T0001: "Oh, I´m sure Shubaru is here.",
        T0002: "Just look closer."
      },
      Narrator: {
        T0000: "The next day",
        T0001: "In the morning, you hear in an announcement that Satina apparently disapeared at night. You decide to look for her later.",
        T0002: "You run to the toilet to puke. When you return, Scales is gone. Because of a bad feeling you have you run home.",
        T0003: "While you continue working, you suddenly get a bad feeling and run home.",
        T0004: "You hear voices comming from your room.",
        T0005: "You throw the moth dust you still have in your pocket at Scales, who lets go of Mothrin. Mothrin runs into your arms, you lock the room and call the police. Scales gets arrested."
      }
    };
    await ƒS.Location.show(locations.Black);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0000);
    if (dataForSave.SatinaAffection.score > dataForSave.ScalesAffection.score) {
      await ƒS.Location.show(locations.HFU_Inner);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0001);
      await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0003);
    }
    if (dataForSave.ShubaruAffection.score > dataForSave.ScalesAffection.score) {
      //Background change to mensa
      await ƒS.Location.show(locations.HFU_Outside_I);
      await ƒS.Character.show(characters.Scales, characters.Scales.pose.normal, ƒS.positionPercent(102, 150));
      await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
      await ƒS.update(1);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Scales, "Hello " + dataForSave.Protagonist.name + ", I brought you some  fried duck from the chinese restaurant.");
      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
      await ƒS.Speech.tell(characters.Scales, text.Scales.T0000);
      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
      await ƒS.Speech.tell(characters.Scales, text.Scales.T0001);
      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
      await ƒS.Speech.tell(characters.Scales, text.Scales.T0002);
      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0003);
      ƒS.Sound.fade(sound.crimosa, 0.2, 0.1, true);
      await ƒS.Character.hide(characters.Protagonist);
      await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.sad, ƒS.positionPercent(29, 150));
      await ƒS.update(20);
      await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0002);
      ƒS.Character.hideAll();
      await ƒS.update(1);
    }
    else if (dataForSave.MothrinAffection.score > dataForSave.ScalesAffection.score) {
      await ƒS.Location.show(locations.HFU_Inner);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0003);
    }
    await ƒS.Location.show(locations.Bedroom_Light);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0004);
    await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.sad, ƒS.positionPercent(105, 150));
    await ƒS.Character.show(characters.Scales, characters.Scales.pose.angry, ƒS.positionPercent(80, 150));
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.angry, ƒS.positionPercent(29, 150));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Mothrin, "Help, " + dataForSave.Protagonist.name + ", I saw her breaking into your room and followed her. Now she is trying to kill me!");
    await ƒS.Speech.tell(characters.Scales, "Shut up, you deserve it for stealing my " + dataForSave.Protagonist.name + "!");
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0004);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0005);
    ƒS.Sound.fade(sound.crimosa, 0, 0.1, false);
    dataForSave.state.a = 100;
    await ƒS.Character.hideAll();
    ƒS.Speech.clear();
    await ƒS.update(1);
    return "Ending";
  }
}