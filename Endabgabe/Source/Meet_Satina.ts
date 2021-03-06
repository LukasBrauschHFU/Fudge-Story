namespace Template {
  export async function Meet_Satina(): ƒS.SceneReturn {
    let text = {
      Protagonist: {
        T0000: "To my surprise, it went pretty well. I got the job starting today!",
        T0001: "See you later."
      },
      Narrator: {
        T0000: "You grab your cleaning utensils and start cleaning the bathrooms."
      },
      Mystery: {
        T0000: "Gratulations, you got the job. You can start today!",
        T0001: "By all that is unholy, I summon you, Chomosuke, to return to me on earth. Rise from hell and show yourself."
      },
      Mothrin: {
        T0000: "And, MC, how did it go?",
        T0001: "That is great ! I have to go to class now, but I´m sure I will catch you later."
      }
    };
    await ƒS.Location.show(locations.Black);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Mystery, text.Mystery.T0000);
    await ƒS.Location.show(locations.HFU_Inner);
    ƒS.Sound.fade(sound.mothrin, 0.2, 2, true);
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
    await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(105, 150));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0000);
    if (dataForSave.timeTraveled.timeTraveled == true) {
      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
      await ƒS.Speech.tell(characters.Protagonist, "Wait, I remember this. Your next line is 'That is great ! I have to go to class now, but I´m sure I will catch you later'.");
      await ƒS.Character.hide(characters.Mothrin);
      await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.happy, ƒS.positionPercent(105, 150));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0001);
      await ƒS.Speech.tell(characters.Mothrin, "Wait, how did you know that ?");
      await ƒS.Character.hide(characters.Mothrin);
      await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(105, 150));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Protagonist, "I´m really not sure.");
      await ƒS.Speech.tell(characters.Mothrin, "Alriiiiiiiiiiight. Well, anyways, I have to go now or I will be late.");
    }
    else {
      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
      await ƒS.Character.hide(characters.Mothrin);
      await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.happy, ƒS.positionPercent(105, 150));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0001);
    }

    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
    await ƒS.Character.hideAll();
    ƒS.Speech.clear();
    await ƒS.update(1);
    ƒS.Sound.fade(sound.mothrin, 0, 0.1, false);
    await ƒS.Location.show(locations.Black);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0000);
    await ƒS.Location.show(locations.HFU_Bathroom);
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
    await ƒS.update(1);
    ƒS.Sound.fade(sound.satina, 0.2, 2, true);
    await ƒS.Speech.tell(characters.Mystery, text.Mystery.T0001);


    let bathroomDecision = {
      goInside: "Ask if anyone is there",
      ignore: "Ignore the chanting"
    };

    let bathroomDecisionElement = await ƒS.Menu.getInput(bathroomDecision, "class");
    switch (bathroomDecisionElement) {
      case bathroomDecision.goInside:
        await ƒS.Speech.tell(characters.Protagonist, "Is anyone in there? I need to clean!");
        await ƒS.Speech.tell(characters.Mystery, "No.");
        await ƒS.Speech.tell(characters.Protagonist, "What do you mean, 'No' ?");
        await ƒS.Speech.tell(characters.Mystery, "I said, that there is noone here. Just continue working.");
        await ƒS.Speech.tell(characters.Protagonist, "Are you stupid ?");
        await ƒS.Character.show(characters.Satina, characters.Satina.pose.angry, ƒS.positionPercent(108, 150));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Satina, "Who are you calling stupid, working-class boy?");
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.angry, ƒS.positionPercent(29, 150));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Protagonist, "Working class boy? The hell do you think you are?");
        await ƒS.Speech.tell(characters.Satina, "My name is Satina Kobayashi. I'm 21 years old. My house is in the northeast section of FōdoHoho, where all the villas are, and I am not married. I go to university as a student of the");
        await ƒS.Speech.tell(characters.Satina, "Kame Yu university, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter");
        await ƒS.Speech.tell(characters.Satina, "what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby");
        await ƒS.Speech.tell(characters.Satina, ", I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very");
        await ƒS.Speech.tell(characters.Satina, "quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know");
        await ƒS.Speech.tell(characters.Satina, "that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.");
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Protagonist, " Alright then. But what where you chanting in there?");
        await ƒS.Speech.tell(characters.Satina, "I tried to summon a familiar of mine, but because you interrupted me he will remain in hell for now.");
        await ƒS.Speech.tell(characters.Protagonist, "Oh, I´m sorry. Can you try it again ?");
        await ƒS.Character.hide(characters.Satina);
        await ƒS.Character.show(characters.Satina, characters.Satina.pose.normal, ƒS.positionPercent(108, 150));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Satina, "I suppose so. Maybe you can even help me to make up for the interruption. I will try again after class behind the university.");
        await ƒS.Speech.tell(characters.Protagonist, "Sure, why not.");
        await ƒS.update(1);
        await ƒS.Character.hideAll();
        ƒS.Speech.clear();
        await ƒS.update(1);
        ƒS.Sound.fade(sound.satina, 0, 1, false);
        dataForSave.state.a += 12;
        break;

      case bathroomDecision.ignore:
        await ƒS.Speech.tell(characters.Narrator, "As you continue cleaning, the chanting gets louder, then it suddenly stops. You feel something is wrong, as if time is moving backwards.");
        dataForSave.timeTraveled.timeTraveled = true;
        ƒS.Sound.fade(sound.satina, 0, 1, false);
        return "Meet_Satina";
        break;
    }
  }
}