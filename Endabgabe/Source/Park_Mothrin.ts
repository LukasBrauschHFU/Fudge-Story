namespace Template {
    export async function Park_Mothrin(): ƒS.SceneReturn {
        let text = {
        Protagonist: {
          T0000: "Uhm, Mothrin, I..",
          T0001: "Oh, that was a bit sudden. But who am I to talk ? I feel the same way",
          T0002: "Yes. Because of you I have a job and friends. But most importrant: I have you "
        },
        Mothrin: {
          T0000: "Since that day I went into your room, I´ve developed feelings for you",
          T0001: "Really, you do ?"
        }
      };
        await ƒS.Location.show(locations.Park);
        await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(105, 150));
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
        await ƒS.Speech.tell(characters.Mothrin, dataForSave.Protagonist.name + ", there is something I need to tell you");
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
        await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0000);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
        await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0001);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);

    }
  }