"use strict";
var Template;
(function (Template) {
    async function Text() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Text = Text;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Animation() {
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
        let animation = {
            start: {
                translation: Template.ƒS.positions.bottomleft
                // rotation: 1,
                //  scaling: new ƒS.Position(1, 1)
                //  color: ƒS.Color.CSS("blue", 0)
            },
            end: {
                translation: Template.ƒS.positions.bottomright
                //  rotation: 1,
                //  scaling: new ƒS.Position(1, 1)
                //  color: ƒS.Color.CSS("red", 0)
            },
            duration: 5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
        await Template.ƒS.Location.show(Template.locations.Dorm);
        //Character Translation > Animation findet mit diesem Aufruf statt
        await Template.ƒS.Character.animate(Template.characters.Ryu, Template.characters.Ryu.pose.normal, animation);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
    }
    Template.Animation = Animation;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Decisions() {
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
        Template.ƒS.Speech.setTickerDelays(30, 2);
        //Start Music
        //ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.Dorm);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positionPercent(140, 290));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(30, 150));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0000);
        //Delay hier:
        //  await signalDelay2();
        //Textgeschwindigkeit ignorieren:
        Template.ƒS.Speech.set(Template.characters.Ryu, text.Ryu.T0000);
        await Template.ƒS.update(1);
        //Play Audio
        Template.ƒS.Sound.play(Template.sound.click, 1);
        let firstDialogueElementAnswers = {
            iSayEssen: "Essen",
            iSayErforschen: "Gelände erforschen",
            iSayNichts: "Nichts"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "class");
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
                Template.ƒS.Sound.play(Template.sound.click, 1);
                //continue writing on this path here 
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Ich hab ziemlichen Hunger, wie wäre es, wenn wir uns was bei WcDonalds holen ?");
                await Template.ƒS.Speech.tell(Template.characters.Ryu, "Klingt gut");
                Template.dataForSave.Score.score = Template.dataForSave.Score.score + 2;
                Template.ƒS.Character.hideAll();
                //Leere die Textbox
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                return "De2";
                break;
            case firstDialogueElementAnswers.iSayErforschen:
                //continue writing on this path here 
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Lass uns erstmal etwas die Gegend erkunden");
                await Template.ƒS.Speech.tell(Template.characters.Ryu, "Klingt gut");
                Template.dataForSave.Score.score = Template.dataForSave.Score.score + 3;
                //Leere die Textbox
                Template.ƒS.Speech.clear();
                Template.ƒS.Character.hideAll();
                await Template.ƒS.update(1);
                return "De3";
                break;
            case firstDialogueElementAnswers.iSayNichts:
                //continue writing on this path here 
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Ich bin müde, lass nur hier chillen");
                await Template.ƒS.Speech.tell(Template.characters.Ryu, "Klingt gut, ich bin nach dem Tag heute auch erledigt");
                //Mit Nutzerinteraktion/Custom Shape:
                await Template.ƒS.Speech.tell(Template.characters.Ryu, "Klingt gut, ich bin nach dem Tag heute auch erledigt", true, "cssklasse");
                Template.ƒS.Character.hideAll();
                //Set Score
                Template.dataForSave.Score.score = Template.dataForSave.Score.score + 4;
                //Alternativ: dataForSave.Score.score +3
                //Leere die Textbox
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                //Springe zu Scene "3"
                return "De4";
                break;
        }
        //Hier eine beispielhafte Namenseingabe:
        Template.dataForSave.Protagonist.name = await Template.ƒS.Speech.getInput();
        console.log(Template.dataForSave.Protagonist.name);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, "Interessant, du meinst also " + Template.dataForSave.Protagonist.name + " und du hast " + Template.dataForSave.Score.score + " Punkte");
        //SKala bearbeiten
        Template.dataForSave.state.a += 53;
        //Nutzen: nameDerFunktion(100) oder so
        // await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0000);
        //Stop Musik
        //  ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
    }
    Template.Decisions = Decisions;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Decisions1() {
        //console.log("Decision");
        let text = {
            Protagonist: {
                T0000: "Dann machen wir uns wohl am besten mal auf",
                T0001: "<p>TickerTest</p>"
            },
            Ryu: {
                T0000: "Da bin ich gerne dabei",
                T0001: "<p>TickerTest</p>"
            }
        };
        await Template.ƒS.Location.show(Template.locations.Dorm);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(140, 290));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positionPercent(30, 150));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0000);
        await Template.ƒS.update(1);
        //Play Audio
    }
    Template.Decisions1 = Decisions1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Decisions2() {
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
        await Template.ƒS.Location.show(Template.locations.Dorm);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(140, 290));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positionPercent(30, 150));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0000);
        await Template.ƒS.update(1);
        //Play Audio
    }
    Template.Decisions2 = Decisions2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Decisions3() {
        //console.log("Decision");
        let text = {
            Protagonist: {
                T0000: "Gute Nacht",
                T0001: "<p>TickerTest</p>"
            },
            Ryu: {
                T0000: "Gute Nacht",
                T0001: "<p>TickerTest</p>"
            }
        };
        await Template.ƒS.Location.show(Template.locations.Dorm);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(140, 290));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positionPercent(30, 150));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0000);
        await Template.ƒS.update(1);
        //Play Audio
    }
    Template.Decisions3 = Decisions3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    //  console.log("FudgeStory template starting");
    //define transitions
    Template.transition = {
        clock: {
            duration: 3,
            alpha: "",
            //härtegrad
            edge: 1
        }
    };
    //define sound
    Template.sound = {
        //Musik
        backgroundTheme: "Audio/Dorm.mp3",
        //Sound
        click: ""
    };
    Template.locations = {
        city: {
            name: "Schoolcity",
            background: "Images/Backgrounds/smol.png"
        },
        Dorm: {
            name: "Dorm",
            background: "Images/Backgrounds/Background2.jpg"
        }
    };
    //define Characters
    Template.characters = {
        Narrator: {
            name: ""
        },
        Protagonist: {
            name: "Protag",
            //Position
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Protag.png",
                smile: "",
                sad: ""
            }
        },
        Ryu: {
            name: "Ryu",
            //Position
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Jojo.png",
                smile: "",
                sad: ""
            }
        }
    };
    //Add data to savedata (todo: replace protagonist from above(in anderen Dateien auch))
    Template.dataForSave = {
        Protagonist: {
            name: "Protag"
        },
        Score: {
            score: 0
        },
        //Skala hier
        state: {
            a: 1
        }
    };
    //Speicherfunktion
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F4:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
        }
    }
    //Items
    Template.items = {
        Pokeball: {
            name: "Slavski_Pokeball",
            description: "A Pokeball created to catch slav type Pokemon",
            image: "Images/Items/Slavskiball.png"
        },
        Pokeball2: {
            name: "Slavski_Pokeball_Alternate",
            description: "An alternate Item",
            image: "Images/Items/Slavskiball_alt.png"
        }
    };
    //Scene
    window.addEventListener("load", start);
    function start(_event) {
        //define the sequenceof scenes, each scene as an object with a reference
        let scenes = [
            //{ scene: Animation, name: "Animation"},
            { scene: Template.Scene, name: "Scene" },
            { scene: Template.Decisions, name: "Decisions" },
            { scene: Template.Decisions1, name: "Decisions1", id: "De2" },
            { scene: Template.Decisions2, name: "Decisions2", id: "De3" },
            { scene: Template.Decisions3, name: "Decisions3", id: "De4" }
        ];
        //Meter hier hin
        //setData for saved objects, Alternative:
        //Nochmal nachschauen auf Github
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave.state = Template.ƒS.Progress.setDataInterface(Template.dataForSave.state, uiElement);
        uiElement.setAttribute("value", "50");
        console.log(uiElement);
        //setData for saved objects:
        //temp disabled
        //ƒS.Progress.setData(dataForSave);
        //start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
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
        let pokeball = Template.items.Pokeball;
        Template.ƒS.Inventory.add(pokeball);
        Template.ƒS.Inventory.add(Template.items.Pokeball2);
        await Template.ƒS.Inventory.open();
        await Template.ƒS.Location.show(Template.locations.city);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0000),
            //dataForSave.state.a++;
            //Show Characters
            await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positionPercent(140, 290));
        //cons
        await Template.ƒS.update(1);
        //Möglichkeit1 
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0000),
            //Möglichkeit 2
            // await ƒS.Speech.tell(characters.Ryu, "Wilkommen Fremder"); //Bei Auswahlmöglichkeiten gut)
            //Set Progress
            Template.dataForSave.state.a += 10;
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(30, 150));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000),
            await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0001),
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001),
            await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0002),
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002),
            await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0003),
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0003),
            await Template.ƒS.update(1);
        await Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.clear();
        //await ƒS.Character.hide(characters.Ryu);
        await Template.ƒS.update(1);
        // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map