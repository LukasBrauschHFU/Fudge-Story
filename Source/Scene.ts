namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    
    let text = {
      Narrator: {
        T0000: "Es ist dein erster Tag an der Honnojo Akademie. Du betrittst das Klassenzimmer und entscheidest dich, am Fenster zu sitzen",
        T0001: ""
      },
      Protagonist: {
        T0000: "Ja. Hi, ich bin Keichi",
        T0001: "Und, was verschlägt dich an diesen Ort ?",
        T0002: "Meine Familie besteht seit Generationen aus Magiern, und ich soll diese Tradition vortführen",
        T0003: "Sehr gerne"
      },
      Ryu: {
        T0000: "Auch dein erster Tag heute ?",
        T0001: "Ich bin Ryu",
        T0002: "Nachdem mein Heimatdorf von den Truppen der neo-imperialistischen Partei zerstört wurde, habe ich geschworen, das ich mich rächen würde. Allerdings benötige ich dazu die Kenntnisse der Magie, und diese will ich mir hier aneignen. Was ist bei dir ?",
        T0003: "Ah, ich verstehe. Wie wäre es, wenn wir uns nach der Vorlesung erstmal in unsere Dorms gehen und dann weiter reden ? Ich glaube, es geht gleich los"
      }
    };

    //Inventar
    let pokeball: ƒS.ItemDefinition = items.Pokeball;
    ƒS.Inventory.add(pokeball);
    ƒS.Inventory.add(items.Pokeball2);
    await ƒS.Inventory.open();
    
    await ƒS.Location.show(locations.city);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0000),  
    //dataForSave.state.a++;
    //Show Characters
    await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positionPercent(140, 290)); 
    //cons
    await ƒS.update(1);
    //Möglichkeit1 
    await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0000),
    //Möglichkeit 2
   // await ƒS.Speech.tell(characters.Ryu, "Wilkommen Fremder"); //Bei Auswahlmöglichkeiten gut)
    //Set Progress
    dataForSave.state.a += 10;
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(30, 150));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000),
    await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0001),
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001),
    await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0002),
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002), 
    await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0003),
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0003),
    await ƒS.update(1);
    await ƒS.Character.hideAll();


    ƒS.Speech.clear();
    //await ƒS.Character.hide(characters.Ryu);
    await ƒS.update(1);
   // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    



  }
}