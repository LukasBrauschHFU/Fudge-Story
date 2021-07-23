namespace Template {


  export async function Ending_World(): ƒS.SceneReturn {


    let text = {
      Protagonist: {
        T0000: "Is something wrong ?",
        T0001: "Sure, but I don´t know why that..",
        T0002: "Satina, what happened to me ?",
        T0003: "You mean to tell me that my dad was an angel ?",
        T0004: "Don´t say that. I´m sure we can find a way."
      },
      Satina: {
        T0000: "Could you eat this donut ? ",
        T0001: "Just do it, please.",
        T0002: "Oh no, it is as I feared.",
        T0003: "The donut transformed you into your true self. Seems like there is something your mother didn´t tell you.",
        T0004: "Seems like it, yes. And that is terrible. Demons and angels can never be together.",
        T0005: "No, you don´t understand. I don´t mean this in an 'our parents will not understand' way. I mean that more in a literal way. If an angel and a demon get close to each other, the world will end."

      }
    };


    let animation: ƒS.AnimationDefinition = {
      start: {
        translation: ƒS.positionPercent(46, 150)
      },
      end: {
        translation: ƒS.positionPercent(80, 150)
      },
      duration: 5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };

    await ƒS.Location.show(locations.Black);
    await ƒS.update(1);
    await ƒS.Location.show(locations.Park);
    await ƒS.update(1);
    await ƒS.Character.show(characters.Satina, characters.Satina.pose.normal, ƒS.positionPercent(108, 150));
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
    //Hier falls Donut verwendet wurde
    await ƒS.update(1);
    ƒS.Speech.clear();
    await ƒS.Speech.tell(characters.Satina, dataForSave.Protagonist.name + ", there is something I need to know.");
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
    await ƒS.Speech.tell(characters.Satina, text.Satina.T0000);
    let donut: ƒS.ItemDefinition = items.Donut;
    ƒS.Inventory.add(donut);
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
    await ƒS.Speech.tell(characters.Satina, text.Satina.T0001);
    await ƒS.update(2);
    await ƒS.Inventory.open();
    if (document.getElementById("Hole-y_Donut") == null) {
      dataForSave.Transformation.istransformed = true;
    }

    //Hier transform-Strang
    if (dataForSave.Transformation.istransformed == true) {
      await ƒS.Character.hide(characters.Protagonist);
      await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.angel, ƒS.positionPercent(46, 150));
      await ƒS.update(2);
      await ƒS.Speech.tell(characters.Satina, text.Satina.T0002);
      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
      await ƒS.Speech.tell(characters.Satina, text.Satina.T0003);
      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0003);
      await ƒS.Speech.tell(characters.Satina, text.Satina.T0004);
      await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0004);
      await ƒS.Speech.tell(characters.Satina, text.Satina.T0005);

      //Show Characters
      await ƒS.update(1);
      //Decision
      let endDecision = {
        turnOnLight: "Get closer to Satina",
        notTurnOnLight: "Stay where you are"
      };

      let endDecisionElement = await ƒS.Menu.getInput(endDecision, "class");
      switch (endDecisionElement) {
        case endDecision.turnOnLight:
          ƒS.Speech.tell(characters.Protagonist, "I don´t care for the world. The only thing that matters for me is that we can be together.");
          await ƒS.update(1);
          //Animation here of mc getting closer to satina
          await ƒS.Character.animate(characters.Protagonist, characters.Protagonist.pose.angel, animation);
          ƒS.Sound.fade(sound.air, 0.2, 0.1, true);
          await ƒS.update(3);
          //Ending Animation here
          await ƒS.Location.show(locations.HFU);
          await ƒS.update(2);
          await ƒS.Location.show(locations.HFU_Inner);
          await ƒS.update(2);
          //No await here
          ƒS.Speech.tell(characters.Satina, "So this is how you decided?");
          await ƒS.Location.show(locations.HFU_Back);
          await ƒS.update(2);
          await ƒS.Location.show(locations.HFU_Room);
          await ƒS.update(2);
          await ƒS.Location.show(locations.HFU_Outside_I);
          await ƒS.update(2);
          await ƒS.Location.show(locations.HFU_Park);
          await ƒS.update(2);
          ƒS.Speech.tell(characters.Satina, "You and me, together in eternity even if it means sacrificing everything?");
          await ƒS.Location.show(locations.HFU_River);
          await ƒS.update(2);
          await ƒS.Location.show(locations.Park);
          await ƒS.update(2);
          await ƒS.Location.show(locations.Bedroom_Light);
          await ƒS.update(2);
          await ƒS.Location.show(locations.HFU);
          await ƒS.update(1);
          await ƒS.Location.show(locations.HFU_Inner);
          await ƒS.update(1);
          await ƒS.Location.show(locations.HFU_Back);
          await ƒS.update(1);
          await ƒS.Location.show(locations.HFU_Room);
          await ƒS.update(1);
          ƒS.Speech.tell(characters.Satina, "You really love me, don´t you?");
          await ƒS.Location.show(locations.HFU_Outside_I);
          await ƒS.update(1);
          await ƒS.Location.show(locations.HFU_Park);
          await ƒS.update(1);
          await ƒS.Location.show(locations.HFU_River);
          await ƒS.update(1);
          await ƒS.Location.show(locations.Park);
          await ƒS.update(1);
          await ƒS.Location.show(locations.Bedroom_Light);
          await ƒS.update(1);
          await ƒS.Location.show(locations.HFU);
          await ƒS.update(0.8);
          await ƒS.Location.show(locations.HFU_Inner);
          await ƒS.update(0.8);
          await ƒS.Location.show(locations.HFU_Back);
          await ƒS.update(0.8);
          ƒS.Speech.tell(characters.Satina, "But what can I say?");
          await ƒS.Location.show(locations.HFU_Room);
          await ƒS.update(0.8);
          await ƒS.Location.show(locations.HFU_Outside_I);
          await ƒS.update(0.8);
          await ƒS.Location.show(locations.HFU_Park);
          await ƒS.update(0.8);
          await ƒS.Location.show(locations.HFU_River);
          await ƒS.update(0.8);
          await ƒS.Location.show(locations.Park);
          await ƒS.update(0.8);
          await ƒS.Location.show(locations.Bedroom_Light);
          await ƒS.update(0.8);
          await ƒS.Location.show(locations.Black);
          await ƒS.update(0.8);
          await ƒS.Location.show(locations.HFU);
          await ƒS.update(0.8);
          await ƒS.Location.show(locations.Black);
          await ƒS.update(0.8);
          await ƒS.Location.show(locations.HFU_Inner);
          await ƒS.update(0.8);
          ƒS.Speech.tell(characters.Satina, "I feel the same way.");
          await ƒS.Location.show(locations.Black);
          await ƒS.update(0.8);
          await ƒS.Location.show(locations.HFU_Back);
          await ƒS.update(0.8);
          await ƒS.Location.show(locations.Black);
          await ƒS.update(0.8);
          await ƒS.Location.show(locations.HFU_Room);
          await ƒS.update(0.4);
          await ƒS.Location.show(locations.Black);
          await ƒS.update(0.4);
          await ƒS.Location.show(locations.HFU_Outside_I);
          await ƒS.update(0.4);
          await ƒS.Location.show(locations.Black);
          await ƒS.update(0.4);
          await ƒS.Location.show(locations.HFU_Park);
          await ƒS.update(0.4);
          await ƒS.Location.show(locations.Black);
          await ƒS.update(0.4);
          await ƒS.Location.show(locations.HFU_River);
          await ƒS.update(0.4);
          await ƒS.Location.show(locations.Black);
          await ƒS.update(0.4);
          await ƒS.Location.show(locations.Park);
          await ƒS.update(0.4);
          await ƒS.Location.show(locations.Black);
          await ƒS.update(0.4);
          await ƒS.Location.show(locations.Bedroom_Light);
          await ƒS.update(0.4);
          await ƒS.Location.show(locations.Black);
          await ƒS.update(0.4);

          await ƒS.Speech.tell(characters.Satina, "Thank you, for everything.");
          await ƒS.Character.hideAll();
          await ƒS.update(2);
          await ƒS.Speech.tell(characters.Satina, "Goodbye, " + dataForSave.Protagonist.name);
          dataForSave.state.a = 100;
          await ƒS.Character.hideAll();
          ƒS.Speech.clear();
          await ƒS.update(1);
          return "Ending";

        case endDecision.notTurnOnLight:
          await ƒS.Character.hide(characters.Satina);
          await ƒS.Character.show(characters.Satina, characters.Satina.pose.happy, ƒS.positionPercent(108, 150));
          ƒS.Sound.fade(sound.parkEnding, 0.2, 2, true);
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Satina, "I´m glad you made the right choice.");
          await ƒS.Speech.tell(characters.Protagonist, "I´m still not completely sure what´s going on.");
          await ƒS.Speech.tell(characters.Satina, "Get some sleep over it. See you tomorrow.");
          ƒS.Sound.fade(sound.parkEnding, 0, 1, false);
          dataForSave.state.a = 100;
          await ƒS.Character.hideAll();
          ƒS.Speech.clear();
          await ƒS.update(1);
          return "Ending";
      }
    }

    else {
      await ƒS.Character.hide(characters.Satina);
      await ƒS.Character.show(characters.Satina, characters.Satina.pose.sad, ƒS.positionPercent(108, 150));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Satina, "So, you don´t trust me after all.");
      await ƒS.Speech.tell(characters.Protagonist, "No, that is not it. I just, well... don´t see a reason to do it.");
      await ƒS.Speech.tell(characters.Satina, "That just sounds like a lame excuse. Goodbye, " + dataForSave.Protagonist.name);
      ƒS.Sound.fade(sound.parkEnding, 0, 1, false);
      dataForSave.state.a = 100;
      await ƒS.Character.hideAll();
      ƒS.Speech.clear();
      await ƒS.update(1);
      return "Ending";
    }

    //Set Progress
    dataForSave.state.a = 100;

    await ƒS.Character.hideAll();
    ƒS.Speech.clear();
    await ƒS.update(1);
    return "Ending";
  }
}