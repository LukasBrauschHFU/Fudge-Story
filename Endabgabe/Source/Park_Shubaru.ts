namespace Template {
  export async function Park_Shubaru(): ƒS.SceneReturn {
    let text = {
      Protagonist: {
        T0000: "Uhm, Shubaru, I.."
      },
      Shubaru: {
        T0000: "I´ve won 2 tickets for a space-trip. Would you like to join me ?"
      }
    };
    await ƒS.Location.show(locations.Park);
    ƒS.Sound.fade(sound.parkEnding, 0.2, 2, true);
    await ƒS.Character.show(characters.Shubaru, characters.Shubaru.pose.normal, ƒS.positionPercent(115, 150));
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Shubaru, dataForSave.Protagonist.name + " ,there is something I need to tell you.");
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
    await ƒS.Character.hide(characters.Shubaru);
    await ƒS.Character.show(characters.Shubaru, characters.Shubaru.pose.happy, ƒS.positionPercent(115, 150));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Shubaru, text.Shubaru.T0000);


    let spaceDecision = {
      goToSpace: "Sure, that sounds like it could get interesting.",
      stayOnEarth: "No, thank you."
    };

    let spaceDecisionElement = await ƒS.Menu.getInput(spaceDecision, "class");
    switch (spaceDecisionElement) {
      case spaceDecision.goToSpace:
        await ƒS.Speech.tell(characters.Shubaru, "I hoped you would say that.  The trip actually is tomorrow, so be sure to get enough sleep tonight.");
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(29, 150));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Protagonist, "That could be difficult. I´m really exited.");
        await ƒS.Speech.tell(characters.Shubaru, "You could sleep on my couch tonight, that way we could go there together first thing in the morning.");
        await ƒS.Speech.tell(characters.Protagonist, "That sounds like a great idea.");
        await ƒS.Character.hideAll();
        ƒS.Speech.clear();
        await ƒS.update(2);
        ƒS.Sound.fade(sound.parkEnding, 0, 1, false);
        return "Ending_Space";

      case spaceDecision.stayOnEarth:
        await ƒS.Character.hide(characters.Shubaru);
        await ƒS.Character.show(characters.Shubaru, characters.Shubaru.pose.normal, ƒS.positionPercent(115, 150));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Shubaru, "Oh, I understand. Thank you for your time anyways, bro.");
        await ƒS.Character.hideAll();
        ƒS.Speech.clear();
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "You continue walking through the park. After some time, you and Shubaru say good night and continue with your everyday life.");
        dataForSave.state.a = 100;
        ƒS.Sound.fade(sound.parkEnding, 0, 1, false);
        return "Ending";
    }
  }
}