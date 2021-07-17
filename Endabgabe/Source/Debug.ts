namespace Template {
    export async function Debug(): ƒS.SceneReturn {
        let text = {
            Narrator: {
              T0000: "You sleep in your room. Suddenly, you wake up because you hear a noise from under your bed."
            },
            Prof: {
              T0000: "Hello there! Welcome to the world of Monster People! My name is Pine! People call me the Monster Prof!",
              T0001: "This world is inhabited by many different kind of Monster People. I myself study the differences between the Monster people and humans.",
              T0002: "The only thing we know until now about monster people is that they one day appeared and since life alongside humans.",
              T0003: "But enough with the exposition. Tell me about yourself. What is your name ?"
            },
            Protagonist: {
              T0000: "Mom, there is a monster under my bed",
              T0001: "But I´m sure I heard something"
            },
            Mothrin: {
              T0000: "Protag, please, turn on the lights",
              T0001: "Hello. You left your window open earlier and somehow I fell asleep under your bed."
            },
            Mother: {
              T0000: dataForSave.Protagonist.name + "Kevin, you are 20 years old, stop worrying about your imagination and find a job already.",
              T0001: "No, Kevin, you didn´t. Go back to sleep now"
            }
          };

        await ƒS.Location.show(locations.Park);
    //    await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(102, 150));
      //  await ƒS.Character.show(characters.Satina, characters.Satina.pose.normal, ƒS.positionPercent(108, 150));
    //    await ƒS.Character.show(characters.Shubaru, characters.Shubaru.pose.normal, ƒS.positionPercent(115, 150));
        await ƒS.Character.show(characters.Scales, characters.Scales.pose.normal, ƒS.positionPercent(102, 150));
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
     //   await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.angel, ƒS.positionPercent(46, 150));
        await ƒS.update(1);
  //      await ƒS.Speech.tell(characters.Mothrin, "Test?");
 //       await ƒS.Speech.tell(characters.Satina, "Test?");
 //       await ƒS.Speech.tell(characters.Shubaru, "Test?");
 //       await ƒS.Speech.tell(characters.Scales, "Test?");
 //       await ƒS.Speech.tell(characters.Protagonist, "Test?");
 //       await ƒS.Speech.tell(characters.Narrator, "Test?");
        return "Meet_Scales";
    }
  }