 namespace Template {
    export async function  Animation(): ƒS.SceneReturn {
        
   
    let text = {
        Protagonist: {
            T0000: "AnimationTest",
            T0001: "<p>TickerTest</p>"
        },
        Ryu: {
            T0000: " Irgend eine Idee, was wir als nächstes machen sollen ?",
            T0001: "<p>TickerTest</p>"
        }
    };
    //Animation
    let animation: ƒS.AnimationDefinition = {
    start: {
        translation: ƒS.positions.bottomleft 
       // rotation: 1,
      //  scaling: new ƒS.Position(1, 1)
      //  color: ƒS.Color.CSS("blue", 0)

    },
    end: {
        translation: ƒS.positions.bottomright
      //  rotation: 1,
      //  scaling: new ƒS.Position(1, 1)
      //  color: ƒS.Color.CSS("red", 0)
    },
    duration: 5,
    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
};
    
    await ƒS.Location.show(locations.Dorm);

    //Character Translation > Animation findet mit diesem Aufruf statt
    await ƒS.Character.animate(characters.Ryu, characters.Ryu.pose.normal, animation);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);

}
}