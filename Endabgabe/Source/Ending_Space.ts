namespace Template {
    export async function Ending_Space(): ƒS.SceneReturn {
        let animation: ƒS.AnimationDefinition = {
            start: {
                translation: ƒS.positionPercent(90, 160)
               // rotation: 1,
              //  scaling: new ƒS.Position(1, 1)
              //  color: ƒS.Color.CSS("blue", 0)
        
            },
            end: {
              translation: ƒS.positionPercent(90, 230)
              //  rotation: 1,
              //  scaling: new ƒS.Position(1, 1)
              //  color: ƒS.Color.CSS("red", 0)
            },
            duration: 33,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
        let animation2: ƒS.AnimationDefinition = {
          start: {
              translation: ƒS.positionPercent(53, 65)
             // rotation: 1,
            //  scaling: new ƒS.Position(1, 1)
            //  color: ƒS.Color.CSS("blue", 0)
      
          },
          end: {
            translation: ƒS.positionPercent(53, 38)
            //  rotation: 1,
            //  scaling: new ƒS.Position(1, 1)
            //  color: ƒS.Color.CSS("red", 0)
          },
          duration: 33,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
      };

        ƒS.Sound.fade(sound.space, 0.5, 0.1, true);
        await ƒS.Character.show(characters.PlanetBig, characters.PlanetBig.pose.normal, ƒS.positionPercent(90, 160));
        await ƒS.Character.show(characters.PlanetSmall, characters.PlanetSmall.pose.normal, ƒS.positionPercent(64, 85));
        await ƒS.Character.show(characters.BreadSun, characters.BreadSun.pose.normal, ƒS.positionPercent(53, 45));
        ƒS.Character.animate(characters.PlanetBig, characters.PlanetBig.pose.normal, animation); 
        await ƒS.Character.animate(characters.BreadSun, characters.BreadSun.pose.normal, animation2); 
        await ƒS.Speech.tell(characters.Shubaru, "Thanks for sharing this moment with me, MC");
    } 
  }