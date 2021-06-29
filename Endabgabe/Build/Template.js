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
        //Neue Methode in GitHub (Standart Animationen in die MAin)
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
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0.2, 0.1, true);
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
    async function Ending_World() {
        // console.log("FudgeStory Template Scene starting");
        let text = {
            Narrator: {
                T0000: "You sleep in your room. Suddenly, you wake up because you hear a noise from under your bed"
            },
            Prof: {
                T0000: "Hello there! Welcome to the world of Monster People! My name is Pine! People call me the Monster Prof!",
                T0001: "This world is inhabited by many different kind of Monster People. I myself study the differences between the Monster people and humans.",
                T0002: "The only thing we know until now about monster people is that they one day appeared and since life alongside humans",
                T0003: "But enough with the exposition. Tell me about yourself. What is your name ?"
            },
            Protagonist: {
                T0000: "Mom, there is a monster under my bed",
                T0001: "But I´m sure I heared something"
            },
            Mothrin: {
                T0000: "Protag, please, turn on the lights"
            },
            Mother: {
                T0000: Template.dataForSave.Protagonist.name + "Kevin, you are 20 years old, stop worrying about your imagination and find a job already",
                T0001: "No, Kevin, you didn´t. Go back to sleep now"
            }
        };
        let animation = {
            start: {
                translation: Template.ƒS.positionPercent(105, 230)
                // rotation: 1,
                //  scaling: new ƒS.Position(1, 1)
                //  color: ƒS.Color.CSS("blue", 0)
            },
            end: {
                translation: Template.ƒS.positionPercent(105, 150)
                //  rotation: 1,
                //  scaling: new ƒS.Position(1, 1)
                //  color: ƒS.Color.CSS("red", 0)
            },
            duration: 10,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
        // await ƒS.Speech.tell(characters.Prof, text.Prof.T0000), 
        //Ending Animation here
        await Template.ƒS.Location.show(Template.locations.HFU);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.HFU_Inner);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.HFU_Back);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.HFU_Room);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.HFU_Outside_I);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.HFU_Park);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.HFU_River);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.Park);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.Bedroom_Light);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.HFU);
        await Template.ƒS.update(0.8);
        await Template.ƒS.Location.show(Template.locations.HFU_Inner);
        await Template.ƒS.update(0.8);
        await Template.ƒS.Location.show(Template.locations.HFU_Back);
        await Template.ƒS.update(0.8);
        await Template.ƒS.Location.show(Template.locations.HFU_Room);
        await Template.ƒS.update(0.8);
        await Template.ƒS.Location.show(Template.locations.HFU_Outside_I);
        await Template.ƒS.update(0.8);
        await Template.ƒS.Location.show(Template.locations.HFU_Park);
        await Template.ƒS.update(0.8);
        await Template.ƒS.Location.show(Template.locations.HFU_River);
        await Template.ƒS.update(0.8);
        await Template.ƒS.Location.show(Template.locations.Park);
        await Template.ƒS.update(0.8);
        await Template.ƒS.Location.show(Template.locations.Bedroom_Light);
        await Template.ƒS.update(0.8);
        await Template.ƒS.Location.show(Template.locations.HFU);
        await Template.ƒS.update(0.6);
        await Template.ƒS.Location.show(Template.locations.HFU_Inner);
        await Template.ƒS.update(0.6);
        await Template.ƒS.Location.show(Template.locations.HFU_Back);
        await Template.ƒS.update(0.6);
        await Template.ƒS.Location.show(Template.locations.HFU_Room);
        await Template.ƒS.update(0.6);
        await Template.ƒS.Location.show(Template.locations.HFU_Outside_I);
        await Template.ƒS.update(0.6);
        await Template.ƒS.Location.show(Template.locations.HFU_Park);
        await Template.ƒS.update(0.6);
        await Template.ƒS.Location.show(Template.locations.HFU_River);
        await Template.ƒS.update(0.6);
        await Template.ƒS.Location.show(Template.locations.Park);
        await Template.ƒS.update(0.6);
        await Template.ƒS.Location.show(Template.locations.Bedroom_Light);
        await Template.ƒS.update(0.6);
        await Template.ƒS.Location.show(Template.locations.HFU);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.HFU_Inner);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.HFU_Back);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.HFU_Room);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.HFU_Outside_I);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.HFU_Park);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.HFU_River);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Park);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Bedroom_Light);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.HFU);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.HFU_Inner);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.HFU_Back);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.HFU_Room);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.HFU_Outside_I);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.HFU_Park);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.HFU_River);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Park);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Bedroom_Light);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.characters.Prof, text.Prof.T0001),
            // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
            await Template.ƒS.Speech.tell(Template.characters.Prof, text.Prof.T0002),
            await Template.ƒS.Speech.tell(Template.characters.Prof, text.Prof.T0003),
            Template.dataForSave.Protagonist.name = await Template.ƒS.Speech.getInput();
        await Template.ƒS.Speech.tell(Template.characters.Prof, "I see. So your name is " + Template.dataForSave.Protagonist.name);
        //console.log(dataForSave.Protagonist.name);
        await Template.ƒS.Speech.tell(Template.characters.Prof, "So, " + Template.dataForSave.Protagonist.name + ", your own adventure is about to start. A world of Monsters awaits. Lets Go");
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0000),
            await Template.ƒS.Location.show(Template.locations.Bedroom_Dark);
        //Noises Here
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000),
            await Template.ƒS.Speech.tell(Template.characters.Mother, text.Mother.T0000),
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001),
            await Template.ƒS.Speech.tell(Template.characters.Mother, text.Mother.T0001),
            Template.ƒS.Speech.clear();
        //Show Characters
        await Template.ƒS.Character.animate(Template.characters.Mothrin, Template.characters.Mothrin.pose.shadow, animation);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Mystery, text.Mothrin.T0000),
            await Template.ƒS.update(1);
        //Decision
        let lightDecision = {
            turnOnLight: "Turn on the lights",
            notTurnOnLight: "Do not turn on the lights"
        };
        let lightDecisionElement = await Template.ƒS.Menu.getInput(lightDecision, "class");
        switch (lightDecisionElement) {
            case lightDecision.turnOnLight:
                //Insert sound of Lightswitch
                Template.ƒS.Sound.play(Template.sound.click, 1);
                await Template.ƒS.Location.show(Template.locations.Bedroom_Light);
                await Template.ƒS.Character.hide(Template.characters.Mothrin);
                await Template.ƒS.Character.show(Template.characters.Mothrin, Template.characters.Mothrin.pose.normal, Template.ƒS.positionPercent(105, 150));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Thank you very much");
                Template.dataForSave.MothrinAffection.score = Template.dataForSave.MothrinAffection.score + 2;
                await Template.ƒS.update(1);
                break;
            case lightDecision.notTurnOnLight:
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Fine, I´ll do it myself");
                //Insert sound of Lightswitch
                Template.ƒS.Sound.play(Template.sound.click, 1);
                await Template.ƒS.Location.show(Template.locations.Bedroom_Light);
                await Template.ƒS.Character.hide(Template.characters.Mothrin);
                await Template.ƒS.Character.show(Template.characters.Mothrin, Template.characters.Mothrin.pose.normal, Template.ƒS.positionPercent(105, 150));
                await Template.ƒS.update(1);
                break;
        }
        //Set Progress
        Template.dataForSave.state.a += 1;
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(30, 150));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000),
            // await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0001),
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001),
            //  await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0002),
            await Template.ƒS.update(1);
        //Animation of Moth flying out of window at the end
        await Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.clear();
        //await ƒS.Character.hide(characters.Ryu);
        await Template.ƒS.update(1);
        // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    }
    Template.Ending_World = Ending_World;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Introduction() {
        // console.log("FudgeStory Template Scene starting");
        let text = {
            Prof: {
                T0000: "Hello there! Welcome to the world of Monster People! My name is Pine! People call me the Monster Prof!",
                T0001: "This world is inhabited by many different kind of Monster People. I myself study the differences between the Monster people and humans.",
                T0002: "The only thing we know until now about monster people is that they one day appeared and since life alongside humans",
                T0003: "But enough with the exposition. Tell me about yourself. What is your name ?"
            }
        };
        await Template.ƒS.Speech.tell(Template.characters.Prof, text.Prof.T0000),
            await Template.ƒS.Location.show(Template.locations.HFU);
        //Show Professor here
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.Prof, text.Prof.T0001),
            // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
            await Template.ƒS.Speech.tell(Template.characters.Prof, text.Prof.T0002),
            await Template.ƒS.Speech.tell(Template.characters.Prof, text.Prof.T0003),
            Template.dataForSave.Protagonist.name = await Template.ƒS.Speech.getInput();
        await Template.ƒS.Speech.tell(Template.characters.Prof, "I see. So your name is " + Template.dataForSave.Protagonist.name);
        //console.log(dataForSave.Protagonist.name);
        await Template.ƒS.Speech.tell(Template.characters.Prof, "So, " + Template.dataForSave.Protagonist.name + ", your own adventure is about to start. A world of Monsters awaits. Lets Go");
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(2);
    }
    Template.Introduction = Introduction;
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
        backgroundTheme: "",
        //Sound
        click: ""
    };
    Template.locations = {
        HFU: {
            name: "HFU",
            background: "Images/Backgrounds/Uni_Outside.png"
        },
        HFU_Inner: {
            name: "HFU_Inner",
            background: "Images/Backgrounds/Uni_Inner.png"
        },
        HFU_Back: {
            name: "HFU_Back",
            background: "Images/Backgrounds/Uni_Back.png"
        },
        HFU_Room: {
            name: "HFU_Room",
            background: "Images/Backgrounds/Boiler_Room.png"
        },
        HFU_Outside_I: {
            name: "HFU_Outside_I",
            background: "Images/Backgrounds/Uni_Outside_I.png"
        },
        HFU_Park: {
            name: "HFU_Park",
            background: "Images/Backgrounds/Uni_Park.png"
        },
        HFU_River: {
            name: "HFU_River",
            background: "Images/Backgrounds/Uni_Back_River.png"
        },
        Park: {
            name: "Park",
            background: "Images/Backgrounds/Park.png"
        },
        Black: {
            name: "Black",
            background: "Images/Backgrounds/Black.png"
        },
        Bedroom_Light: {
            name: "Bedroom_Light",
            background: "Images/Backgrounds/Bedroom_Light.png"
        },
        Bedroom_Dark: {
            name: "Bedroom_Dark",
            background: "Images/Backgrounds/Bedroom_Dark.png"
        }
    };
    //define Characters
    Template.characters = {
        Narrator: {
            name: ""
        },
        Mystery: {
            name: "???"
        },
        Protagonist: {
            name: "Baka",
            //Position
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Protag.png",
                smile: "",
                sad: ""
            }
        },
        Prof: {
            name: "Professor Pine"
        },
        Mothrin: {
            name: "Mothrin",
            //Position
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Moth_Girl.png",
                shadow: "Images/Characters/Moth_Shadow.png",
                smile: "",
                sad: ""
            }
        },
        Mother: {
            name: "Mother",
            //Position
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "",
                shadow: "",
                smile: "",
                sad: ""
            }
        }
    };
    //Add data to savedata (todo: replace protagonist from above(in anderen Dateien auch))
    Template.dataForSave = {
        Protagonist: {
            name: ""
        },
        Score: {
            score: 0
        },
        MothrinAffection: {
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
            image: "Images/Items/slavskiball.png"
        },
        Pokeball2: {
            name: "Slavski_Pokeball_Alternate",
            description: "An alternate Item",
            image: "Images/Items/slavskiball_alt.png"
        }
    };
    //Menü (Buttons)
    let inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        turnUpVolume: "+",
        turnDownVolume: "-",
        credits: "Credits",
        about: "About"
    };
    //Music volume:
    let volume = 1.0;
    function incrementSound() {
        if (volume <= 100) {
            volume += 0.1;
            Template.ƒS.Sound.setVolume(Template.sound.backgroundTheme, volume);
        }
    }
    Template.incrementSound = incrementSound;
    function decrementSound() {
        if (volume > 0) {
            volume -= 0.1;
            Template.ƒS.Sound.setVolume(Template.sound.backgroundTheme, volume);
        }
    }
    Template.decrementSound = decrementSound;
    // Menu - create Menu with buttons
    let gameMenu;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        if (_option == inGameMenu.save) {
            await Template.ƒS.Progress.save();
        }
        else if (_option == inGameMenu.load) {
            await Template.ƒS.Progress.load();
        }
        else if (_option == inGameMenu.turnUpVolume) {
            incrementSound();
        }
        else if (_option == inGameMenu.turnDownVolume) {
            decrementSound();
        }
        if (_option == inGameMenu.close) {
            gameMenu.close();
        }
    }
    //Scene
    window.addEventListener("load", start);
    function start(_event) {
        //Menu
        gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        //define the sequenceof scenes, each scene as an object with a reference
        let scenes = [
            //{ scene: Animation, name: "Animation"},
            { scene: Template.Introduction, name: "Introduction" },
            { scene: Template.Start_Bedroom, name: "Start_Bedroom" },
            { scene: Template.Ending_World, name: "Ending_World" }
            // { scene: Decisions, name: "Decisions"},
            // { scene: Decisions1, name: "Decisions1", id: "De2"},
            // { scene: Decisions2, name: "Decisions2", id: "De3"},
            // { scene: Decisions3, name: "Decisions3", id: "De4"}
        ];
        //Meter hier hin 
        //setData for saved objects, Alternative:
        //Nochmal nachschauen auf Github
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave.state = Template.ƒS.Progress.setData(Template.dataForSave.state, uiElement);
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
var Template;
(function (Template) {
    async function Start_Bedroom() {
        // console.log("FudgeStory Template Scene starting");
        let text = {
            Narrator: {
                T0000: "You sleep in your room. Suddenly, you wake up because you hear a noise from under your bed"
            },
            Prof: {
                T0000: "Hello there! Welcome to the world of Monster People! My name is Pine! People call me the Monster Prof!",
                T0001: "This world is inhabited by many different kind of Monster People. I myself study the differences between the Monster people and humans.",
                T0002: "The only thing we know until now about monster people is that they one day appeared and since life alongside humans",
                T0003: "But enough with the exposition. Tell me about yourself. What is your name ?"
            },
            Protagonist: {
                T0000: "Mom, there is a monster under my bed",
                T0001: "But I´m sure I heared something"
            },
            Mothrin: {
                T0000: "Protag, please, turn on the lights"
            },
            Mother: {
                T0000: Template.dataForSave.Protagonist.name + "Kevin, you are 20 years old, stop worrying about your imagination and find a job already",
                T0001: "No, Kevin, you didn´t. Go back to sleep now"
            }
        };
        let animation = {
            start: {
                translation: Template.ƒS.positionPercent(105, 230)
                // rotation: 1,
                //  scaling: new ƒS.Position(1, 1)
                //  color: ƒS.Color.CSS("blue", 0)
            },
            end: {
                translation: Template.ƒS.positionPercent(105, 150)
                //  rotation: 1,
                //  scaling: new ƒS.Position(1, 1)
                //  color: ƒS.Color.CSS("red", 0)
            },
            duration: 10,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
        //Set Protag name
        Template.characters.Protagonist.name = Template.dataForSave.Protagonist.name;
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0000),
            await Template.ƒS.Location.show(Template.locations.Bedroom_Dark);
        //Noises Here
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000),
            await Template.ƒS.Speech.tell(Template.characters.Mother, Template.dataForSave.Protagonist.name + ", you are 20 years old, stop worrying about your imagination and find a job already");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001),
            await Template.ƒS.Speech.tell(Template.characters.Mother, "No, " + Template.dataForSave.Protagonist.name + ", you didn´t. Go back to sleep now");
        Template.ƒS.Speech.clear();
        //Show Characters
        await Template.ƒS.Character.animate(Template.characters.Mothrin, Template.characters.Mothrin.pose.shadow, animation);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Mystery, text.Mothrin.T0000),
            await Template.ƒS.update(1);
        //Decision
        let lightDecision = {
            turnOnLight: "Turn on the lights",
            notTurnOnLight: "Do not turn on the lights"
        };
        let lightDecisionElement = await Template.ƒS.Menu.getInput(lightDecision, "class");
        switch (lightDecisionElement) {
            case lightDecision.turnOnLight:
                //Insert sound of Lightswitch
                Template.ƒS.Sound.play(Template.sound.click, 1);
                await Template.ƒS.Location.show(Template.locations.Bedroom_Light);
                await Template.ƒS.Character.hide(Template.characters.Mothrin);
                await Template.ƒS.Character.show(Template.characters.Mothrin, Template.characters.Mothrin.pose.normal, Template.ƒS.positionPercent(105, 150));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Thank you very much");
                Template.dataForSave.MothrinAffection.score = Template.dataForSave.MothrinAffection.score + 2;
                await Template.ƒS.update(1);
                break;
            case lightDecision.notTurnOnLight:
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Fine, I´ll do it myself");
                //Insert sound of Lightswitch
                Template.ƒS.Sound.play(Template.sound.click, 1);
                await Template.ƒS.Location.show(Template.locations.Bedroom_Light);
                await Template.ƒS.Character.hide(Template.characters.Mothrin);
                await Template.ƒS.Character.show(Template.characters.Mothrin, Template.characters.Mothrin.pose.normal, Template.ƒS.positionPercent(105, 150));
                await Template.ƒS.update(1);
                break;
        }
        //Set Progress
        Template.dataForSave.state.a += 1;
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(30, 150));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000),
            // await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0001),
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001),
            //  await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0002),
            await Template.ƒS.update(1);
        //Animation of Moth flying out of window at the end
        await Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.clear();
        //await ƒS.Character.hide(characters.Ryu);
        await Template.ƒS.update(1);
        // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    }
    Template.Start_Bedroom = Start_Bedroom;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map