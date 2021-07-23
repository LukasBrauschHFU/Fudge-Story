namespace Template {
  export async function Mensa(): ƒS.SceneReturn {
    let text = {
      Narrator: {
        T0000: "For lunch, you decide to go eat at the cantine. You can choose to buy one of the following:",
        T0001: "As you enter the Mensa, you see the people you previously met in this university. Who do you want to sit next to ?"
      },
      Protagonist: {
        T0000: "Why are you looking so down ?",
        T0001: "Oh, that sucks.",
        T0002: "With pleasure."
      },
      Mothrin: {
        T0000: "I forgot my food at home.",
        T0001: "For me ? Thank you very much.",
        T0002: "So, uhm MC. I was wondering if you, you know, would go to the park with me later ?",
        T0003: "Really ? Great. I´ll pick you up once your shift is over."
      },
      Shubaru: {
        T0000: "I forgot my food at home.",
        T0001: "For me ? Thank you very much.",
        T0002: "So, my dude, I was wondering, would like to chill in the park with me later ?",
        T0003: "Really? Great. I´ll pick you up once your shift is over."
      },
      Satina: {
        T0000: "I forgot my food at home.",
        T0001: "For me ? Thank you very much.",
        T0002: "So, MC, I was wondering, would you like to join me in the park with me later ?",
        T0003: "Really? Sweat, my little apprentice. I´ll pick you up once your shift is over."
      },
      Scales: {
        T0000: "I forgot my food at home.",
        T0001: "For me ? Thank you very much.",
        T0002: "So, my dude, I was wondering, would like to chill in the park with me later ?",
        T0003: "Really? Neat. I´ll pick you up once your shift is over.",
        T0004: "Why does he hate me ? It has to be the others! They are trying to steal him from me! They are telling him I am insane! I will show them. I will show them all!"
      }
    };
    await ƒS.Location.show(locations.HFU_Outside_I);
    await ƒS.update(1);
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(29, 150));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0000);


    let foodDecision = {
      getBread: "Buy bread",
      getChilli: "Buy chilli con carne",
      getFlashlight: "Buy flashlight",
      getDonut: "Buy unhole-y donut"
    };

    let foodDecisionElement = await ƒS.Menu.getInput(foodDecision, "class");
    switch (foodDecisionElement) {
      case foodDecision.getBread:
        ƒS.Inventory.add(items.Bread);
        break;
      case foodDecision.getChilli:
        ƒS.Inventory.add(items.Chilli);
        break;
      case foodDecision.getFlashlight:
        ƒS.Inventory.add(items.Flashlight);
        break;
      case foodDecision.getDonut:
        ƒS.Inventory.add(items.EvilDonut);
        break;
    }
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0001);
    let characterDecision: any;
    //Changes if Scales was met
    if (dataForSave.Interacted_with_Scales.boolean == true) {
      characterDecision = {
        Mothrin: "Mothrin",
        Shubaru: "Shubaru",
        Satina: "Satina",
        Scales: "Scales"
      };
    }
    else {
      characterDecision = {
        Mothrin: "Mothrin",
        Shubaru: "Shubaru",
        Satina: "Satina"
      };
    }

    let characterDecisionElement = await ƒS.Menu.getInput(characterDecision, "class");
    switch (characterDecisionElement) {
      case characterDecision.Mothrin:
        await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(105, 150));
        ƒS.Sound.fade(sound.mothrin, 0.2, 2, true);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Mothrin, "Good Afternoon, " + dataForSave.Protagonist.name);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
        await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0000);
        await ƒS.Inventory.open();
        if (dataForSave.usedFlashlight.used == true) {
          await ƒS.Character.hide(characters.Mothrin);
          await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.happy, ƒS.positionPercent(105, 150));
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0001);
          dataForSave.MothrinAffection.score = dataForSave.MothrinAffection.score + 1;
        }
        else {
          await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
        }
        if (dataForSave.MothrinAffection.score >= 2) {
          await ƒS.Speech.tell(characters.Mothrin, "So, umh, " + dataForSave.Protagonist.name + " I was wondering if you, you know, would go to the park with me later ?");
          await ƒS.Character.hide(characters.Protagonist);
          await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(29, 150));
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Protagonist, "I would love to.");
          await ƒS.Speech.tell(characters.Mothrin, text.Mothrin.T0003);
          await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
          await ƒS.Character.hideAll();
          ƒS.Speech.clear();
          await ƒS.update(1);
          console.log(dataForSave.MothrinAffection);
          console.log(dataForSave.ScalesAffection);
          if (dataForSave.Interacted_with_Scales.boolean == true && (dataForSave.MothrinAffection >= dataForSave.ScalesAffection || dataForSave.ShubaruAffection >= dataForSave.ScalesAffection || dataForSave.SatinaAffection >= dataForSave.ScalesAffection)) {
            ƒS.Sound.fade(sound.mothrin, 0, 1, false);
            ƒS.Sound.fade(sound.scales, 0.2, 2, true);
            await ƒS.Location.show(locations.Black);
            await ƒS.update(1);
            //Show Mensa
            await ƒS.Location.show(locations.HFU_Outside_I);
            await ƒS.Character.show(characters.Scales, characters.Scales.pose.normal, ƒS.positionPercent(102, 150));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.Scales, text.Scales.T0004);
            await ƒS.Character.hideAll();
            ƒS.Speech.clear();
            await ƒS.update(1);
            dataForSave.state.a += 12;
            ƒS.Sound.fade(sound.scales, 0, 1, false);
            return "Ending_Evil";
          }
          await ƒS.Character.hideAll();
          ƒS.Speech.clear();
          await ƒS.update(1);
          dataForSave.state.a += 12;
          ƒS.Sound.fade(sound.mothrin, 0, 1, false);
          return "Park_Mothrin";
        }
        else {
          await ƒS.Speech.tell(characters.Narrator, "You continue talking for a while. Afterwards, you go back to work and wait for Mothrin outside of University.");
          await ƒS.Character.hideAll();
          ƒS.Speech.clear();
          await ƒS.update(1);
          dataForSave.state.a += 12;
          ƒS.Sound.fade(sound.mothrin, 0, 1, false);
          return "Ending_Best_Friends";
        }
        break;
      case characterDecision.Shubaru:
        await ƒS.Character.show(characters.Shubaru, characters.Shubaru.pose.normal, ƒS.positionPercent(115, 150));
        ƒS.Sound.fade(sound.shubaru, 0.2, 2, true);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Shubaru, "Good Afternoon, " + dataForSave.Protagonist.name);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
        await ƒS.Speech.tell(characters.Shubaru, text.Shubaru.T0000);
        await ƒS.Inventory.open();
        if (dataForSave.usedBread.used == true) {
          await ƒS.Character.hide(characters.Shubaru);
          await ƒS.Character.show(characters.Shubaru, characters.Shubaru.pose.happy, ƒS.positionPercent(115, 150));
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Shubaru, text.Shubaru.T0001);
          dataForSave.ShubaruAffection.score = dataForSave.ShubaruAffection.score + 2;
        }
        else {
          await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
        }
        if (dataForSave.ShubaruAffection.score >= 2) {
          await ƒS.Speech.tell(characters.Shubaru, text.Shubaru.T0002);
          await ƒS.Character.hide(characters.Protagonist);
          await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(29, 150));
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Protagonist, "I would love to.");
          await ƒS.Speech.tell(characters.Shubaru, text.Shubaru.T0003);
          await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
          await ƒS.Character.hideAll();
          ƒS.Speech.clear();
          await ƒS.update(1);
          if (dataForSave.Interacted_with_Scales.boolean == true && (dataForSave.MothrinAffection >= dataForSave.ScalesAffection || dataForSave.ShubaruAffection >= dataForSave.ScalesAffection || dataForSave.SatinaAffection >= dataForSave.ScalesAffection)) {
            ƒS.Sound.fade(sound.shubaru, 0, 1, false);
            ƒS.Sound.fade(sound.scales, 0.2, 2, true);
            await ƒS.Location.show(locations.Black);
            await ƒS.update(1);
            //Show Mensa
            await ƒS.Location.show(locations.HFU_Outside_I);
            await ƒS.Character.show(characters.Scales, characters.Scales.pose.normal, ƒS.positionPercent(102, 150));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.Scales, text.Scales.T0004);
            await ƒS.Character.hideAll();
            ƒS.Speech.clear();
            await ƒS.update(1);
            dataForSave.state.a += 12;
            ƒS.Sound.fade(sound.scales, 0, 1, false);
            return "Ending_Evil";
          }
          await ƒS.Character.hideAll();
          ƒS.Speech.clear();
          await ƒS.update(1);
          dataForSave.state.a += 12;
          ƒS.Sound.fade(sound.shubaru, 0, 1, false);
          return "Park_Shubaru";
        }
        else {
          await ƒS.Speech.tell(characters.Narrator, "You continue talking for a while. Afterwards, you go and wait for Mothrin outside of University.");
          await ƒS.Character.hideAll();
          ƒS.Speech.clear();
          await ƒS.update(1);
          dataForSave.state.a += 12;
          ƒS.Sound.fade(sound.shubaru, 0, 1, false);
          return "Ending_Best_Friends";
        }
      case characterDecision.Satina:
        await ƒS.Character.show(characters.Satina, characters.Satina.pose.normal, ƒS.positionPercent(108, 150));
        ƒS.Sound.fade(sound.satina, 0.2, 2, true);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Satina, "Good Afternoon, " + dataForSave.Protagonist.name);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
        await ƒS.Speech.tell(characters.Satina, text.Satina.T0000);
        await ƒS.Inventory.open();
        if (dataForSave.usedDonut.used == true) {
          await ƒS.Character.hide(characters.Satina);
          await ƒS.Character.show(characters.Satina, characters.Satina.pose.happy, ƒS.positionPercent(108, 150));
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Satina, text.Satina.T0001);
          dataForSave.SatinaAffection.score = dataForSave.SatinaAffection.score + 2;
        }
        else {
          await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
        }
        if (dataForSave.SatinaAffection.score >= 2) {
          await ƒS.Speech.tell(characters.Satina, "So, " + dataForSave.Protagonist.name + " I was wondering if you, you know, would go to the park with me later ?");
          await ƒS.Character.hide(characters.Protagonist);
          await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(29, 150));
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Protagonist, "I would love to.");
          await ƒS.Speech.tell(characters.Satina, text.Satina.T0003);
          await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
          await ƒS.Character.hideAll();
          ƒS.Speech.clear();
          await ƒS.update(1);
          if (dataForSave.Interacted_with_Scales.boolean == true && (dataForSave.MothrinAffection >= dataForSave.ScalesAffection || dataForSave.ShubaruAffection >= dataForSave.ScalesAffection || dataForSave.SatinaAffection >= dataForSave.ScalesAffection)) {
            ƒS.Sound.fade(sound.satina, 0, 1, false);
            ƒS.Sound.fade(sound.scales, 0.2, 2, true);
            await ƒS.Location.show(locations.Black);
            await ƒS.update(1);
            //Show Mensa
            await ƒS.Location.show(locations.HFU_Outside_I);
            await ƒS.Character.show(characters.Scales, characters.Scales.pose.normal, ƒS.positionPercent(102, 150));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.Scales, text.Scales.T0004);
            await ƒS.Character.hideAll();
            ƒS.Speech.clear();
            await ƒS.update(1);
            dataForSave.state.a += 12;
            ƒS.Sound.fade(sound.scales, 0, 1, false);
            return "Ending_Evil";
          }
          await ƒS.Character.hideAll();
          ƒS.Speech.clear();
          await ƒS.update(1);
          dataForSave.state.a += 12;
          ƒS.Sound.fade(sound.satina, 0, 1, false);
          return "Ending_World";
        }
        else {
          await ƒS.Speech.tell(characters.Narrator, "You continue talking for a while. Afterwards, you go and wait for Mothrin outside of University.");
          await ƒS.Character.hideAll();
          ƒS.Speech.clear();
          await ƒS.update(1);
          dataForSave.state.a += 12;
          ƒS.Sound.fade(sound.satina, 0, 1, false);
          return "Ending_Best_Friends";
        }
      case characterDecision.Scales:
        await ƒS.Character.show(characters.Scales, characters.Scales.pose.normal, ƒS.positionPercent(102, 150));
        ƒS.Sound.fade(sound.scales, 0.2, 2, true);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Scales, "Good Afternoon, " + dataForSave.Protagonist.name);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
        await ƒS.Speech.tell(characters.Scales, text.Scales.T0000);
        await ƒS.Inventory.open();
        if (dataForSave.usedChilli.used == true) {
          await ƒS.Character.hide(characters.Scales);
          await ƒS.Character.show(characters.Scales, characters.Scales.pose.happy, ƒS.positionPercent(102, 150));
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Scales, text.Scales.T0001);
          dataForSave.ScalesAffection.score = dataForSave.ScalesAffection.score + 2;
        }
        else {
          await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
        }
        if (dataForSave.ScalesAffection.score >= 2) {
          await ƒS.Speech.tell(characters.Scales, text.Scales.T0002);
          await ƒS.Character.hide(characters.Protagonist);
          await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, ƒS.positionPercent(29, 150));
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Protagonist, "I would love to.");
          await ƒS.Speech.tell(characters.Scales, text.Scales.T0003);
          await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
          await ƒS.Character.hideAll();
          ƒS.Speech.clear();
          await ƒS.update(1);
          dataForSave.state.a += 12;
          ƒS.Sound.fade(sound.scales, 0, 1, false);
          return "Park_Scales";
        }
        else {
          await ƒS.Speech.tell(characters.Narrator, "You continue talking for a while. Afterwards, you go and wait for Mothrin outside of University.");
          await ƒS.Location.show(locations.Black);
          ƒS.Character.hideAll();
          ƒS.Speech.clear();
          await ƒS.update(1);
          dataForSave.state.a += 12;
          ƒS.Sound.fade(sound.scales, 0, 1, false);
          return "Ending_Best_Friends";
        }
    }
  }
}