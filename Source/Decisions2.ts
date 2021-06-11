namespace Template {

    export async function Decisions2(): ƒS.SceneReturn {
        //console.log("Decision");
    
        let text = {
            Protagonist: {
                T0000: "Wo fangen wir an ?",
                T0001: "<p>TickerTest</p>"
            },
            Ryu: {
                T0000: "Ich wäre für die Mensa",
                T0001: "<p>TickerTest</p>"
            }
          
        };
       
        await ƒS.Location.show(locations.Dorm);
        await ƒS.update(1);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(140, 290)); 
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
        await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positionPercent(30, 150)); 
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0000);
        await ƒS.update(1);
      //Play Audio
       
    }
    }