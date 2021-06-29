namespace Template {

export async function Decisions(): ƒS.SceneReturn {
    console.log("Decision");

    let text = {
        Protagonist: {
            T0000: "Scheint so, als wären wir Dorm-Partner",
            T0001: "<p>TickerTest</p>"
        },
        Ryu: {
            T0000: " Irgend eine Idee, was wir als nächstes machen sollen ?",
            T0001: "<p>TickerTest</p>"
        }
      
    };
    //Signaldelay(Verzögerung festlegen)
    //let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
    //Textgeschwindigkeit
    ƒS.Speech.setTickerDelays(30, 2);

    //Start Music
    ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);

    await ƒS.Location.show(locations.Dorm);
    await ƒS.update(1);
    await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positionPercent(140, 290)); 
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(30, 150)); 
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0000);
    //Delay hier:
  //  await signalDelay2();
    //Textgeschwindigkeit ignorieren:
    ƒS.Speech.set(characters.Ryu, text.Ryu.T0000);
    await ƒS.update(1);
  //Play Audio
    ƒS.Sound.play(sound.click, 1);
    let firstDialogueElementAnswers = {
      iSayEssen: "Essen",
      iSayErforschen: "Gelände erforschen",
      iSayNichts: "Nichts"  
    };


    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "class");
    //CSS Klasse setzen:
 //   ƒS.Text.addClass("");
    //Css Klasse ersetzen:
 //   ƒS.Text.setClass("");
    //Text im Bild:
 //   await ƒS.Text.print(" Text den ich anzeigen lassen möchte.");
 //   ƒS.Text.close();

    //Inventar öffnet automatisch:
 //   ƒS.Inventory.open();
    
    switch (firstDialogueElement) {
        case firstDialogueElementAnswers.iSayEssen:
            ƒS.Sound.play(sound.click, 1);
            //continue writing on this path here 
            await ƒS.Speech.tell(characters.Protagonist, "Ich hab ziemlichen Hunger, wie wäre es, wenn wir uns was bei WcDonalds holen ?");
            await ƒS.Speech.tell(characters.Ryu, "Klingt gut");
            dataForSave.Score.score = dataForSave.Score.score + 2;
            ƒS.Character.hideAll();
            //Leere die Textbox
            ƒS.Speech.clear();
            await ƒS.update(1);
            return "De2";
            break;

        case firstDialogueElementAnswers.iSayErforschen:
         //continue writing on this path here 
         await ƒS.Speech.tell(characters.Protagonist, "Lass uns erstmal etwas die Gegend erkunden");
         await ƒS.Speech.tell(characters.Ryu, "Klingt gut");
         dataForSave.Score.score = dataForSave.Score.score + 3;
         //Leere die Textbox
         ƒS.Speech.clear();
         ƒS.Character.hideAll();
         await ƒS.update(1);
         return "De3";
         break;   

         case firstDialogueElementAnswers.iSayNichts:
         //continue writing on this path here 
         await ƒS.Speech.tell(characters.Protagonist, "Ich bin müde, lass nur hier chillen");
         await ƒS.Speech.tell(characters.Ryu, "Klingt gut, ich bin nach dem Tag heute auch erledigt");
         //Mit Nutzerinteraktion/Custom Shape:
         await ƒS.Speech.tell(characters.Ryu, "Klingt gut, ich bin nach dem Tag heute auch erledigt", true, "cssklasse");
         ƒS.Character.hideAll();
         //Set Score
         dataForSave.Score.score = dataForSave.Score.score + 4;
         //Alternativ: dataForSave.Score.score +3
         //Leere die Textbox
         ƒS.Speech.clear();
         await ƒS.update(1);
         //Springe zu Scene "3"
         return "De4";
         break;   
         
         
    }
    //Hier eine beispielhafte Namenseingabe:
    dataForSave.Protagonist.name = await ƒS.Speech.getInput();
    console.log(dataForSave.Protagonist.name);
    await ƒS.Speech.tell(characters.Ryu, "Interessant, du meinst also " + dataForSave.Protagonist.name + " und du hast " + dataForSave.Score.score + " Punkte");
  
  //SKala bearbeiten
    dataForSave.state.a += 53;

    //Nutzen: nameDerFunktion(100) oder so

   // await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0000);
  //Stop Musik

  //  ƒS.Sound.fade(sound.backgroundTheme, 0, 1);



}
}







