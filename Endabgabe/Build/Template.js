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
            Protagonist: {
                T0000: "Is something wrong ?",
                T0001: "Sure, but I don´t know why that..",
                T0002: "Satina, what happened to me ?",
                T0003: "You mean to tell me that my dad was an angel ?",
                T0004: "Don´t say that. I´m sure we can find a way"
            },
            Satina: {
                T0000: "Could you eat this donut ? ",
                T0001: "Just do it, please",
                T0002: "Oh no, it is as I feared",
                T0003: "The donut transformed you into your true self. Seems like there is something your mother didn´t tell you",
                T0004: "Seems like it, yes. And that is terrible. Demons and angels can never be together",
                T0005: "No, you don´t understand. I don´t mean this in an 'our parents will not understand' way. I mean that more in a literal way. If an angel and a demon get close to each other, the world will end"
            }
        };
        let animation = {
            start: {
                translation: Template.ƒS.positionPercent(45, 140)
                // rotation: 1,
                //  scaling: new ƒS.Position(1, 1)
                //  color: ƒS.Color.CSS("blue", 0)
            },
            end: {
                translation: Template.ƒS.positionPercent(80, 140)
                //  rotation: 1,
                //  scaling: new ƒS.Position(1, 1)
                //  color: ƒS.Color.CSS("red", 0)
            },
            duration: 5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
        //TEst Inventory
        //console.log(test);
        //var list = document.getElementsByTagName("UL")[0];
        //var usedItem = list.getElementsByTagName("LI")[0].innerHTML;
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "At the end of this VN you decided to go to the park with a girl named Satina.");
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.HFU_Park);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Satina, Template.characters.Satina.pose.normal, Template.ƒS.positionPercent(105, 130));
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(30, 140));
        //Hier falls Donut verwendet wurde
        await Template.ƒS.update(1);
        Template.ƒS.Speech.clear();
        //  ƒS.Speech.tell(characters.Narrator, "You decide to meet with Satina in the park");
        await Template.ƒS.Speech.tell(Template.characters.Satina, Template.dataForSave.Protagonist.name + ", there is something I need to know.");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Satina, text.Satina.T0000);
        let donut = Template.items.Donut;
        Template.ƒS.Inventory.add(donut);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Satina, text.Satina.T0001);
        await Template.ƒS.update(2);
        await Template.ƒS.Inventory.open();
        //Temp solution:
        if (document.getElementById("Hole-y_Donut") == null) {
            Template.dataForSave.Transformation.istransformed = true;
        }
        //Hier transform-Strang
        if (Template.dataForSave.Transformation.istransformed == true) {
            await Template.ƒS.Character.hide(Template.characters.Protagonist);
            await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.angel, Template.ƒS.positionPercent(45, 140));
            await Template.ƒS.update(2);
            await Template.ƒS.Speech.tell(Template.characters.Satina, text.Satina.T0002);
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
            await Template.ƒS.Speech.tell(Template.characters.Satina, text.Satina.T0003);
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0003);
            await Template.ƒS.Speech.tell(Template.characters.Satina, text.Satina.T0004);
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0004);
            await Template.ƒS.Speech.tell(Template.characters.Satina, text.Satina.T0005);
            //Show Characters
            // await ƒS.Speech.tell(characters.Mystery, text.Mothrin.T0000),
            await Template.ƒS.update(1);
            //Decision
            let endDecision = {
                turnOnLight: "Get closer to Satina",
                notTurnOnLight: "Stay where you are"
            };
            let endDecisionElement = await Template.ƒS.Menu.getInput(endDecision, "class");
            switch (endDecisionElement) {
                case endDecision.turnOnLight:
                    Template.ƒS.Speech.tell(Template.characters.Protagonist, "I don´t care for the world. The only thing that matters for me is that we can be together.");
                    await Template.ƒS.update(1);
                    //Animation here of mc getting closer to satina
                    await Template.ƒS.Character.animate(Template.characters.Protagonist, Template.characters.Protagonist.pose.angel, animation);
                    Template.ƒS.Sound.fade(Template.sound.air, 0.2, 0.1, true);
                    await Template.ƒS.update(3);
                    //Ending Animation here
                    await Template.ƒS.Location.show(Template.locations.HFU);
                    await Template.ƒS.update(2);
                    await Template.ƒS.Location.show(Template.locations.HFU_Inner);
                    await Template.ƒS.update(2);
                    //No await here
                    Template.ƒS.Speech.tell(Template.characters.Satina, "So this is how you decided?");
                    await Template.ƒS.Location.show(Template.locations.HFU_Back);
                    await Template.ƒS.update(2);
                    await Template.ƒS.Location.show(Template.locations.HFU_Room);
                    await Template.ƒS.update(2);
                    await Template.ƒS.Location.show(Template.locations.HFU_Outside_I);
                    await Template.ƒS.update(2);
                    await Template.ƒS.Location.show(Template.locations.HFU_Park);
                    await Template.ƒS.update(2);
                    Template.ƒS.Speech.tell(Template.characters.Satina, "You and me, together in eternity even if it means sacrificing everything?");
                    await Template.ƒS.Location.show(Template.locations.HFU_River);
                    await Template.ƒS.update(2);
                    await Template.ƒS.Location.show(Template.locations.Park);
                    await Template.ƒS.update(2);
                    await Template.ƒS.Location.show(Template.locations.Bedroom_Light);
                    await Template.ƒS.update(2);
                    await Template.ƒS.Location.show(Template.locations.HFU);
                    await Template.ƒS.update(1);
                    await Template.ƒS.Location.show(Template.locations.HFU_Inner);
                    await Template.ƒS.update(1);
                    await Template.ƒS.Location.show(Template.locations.HFU_Back);
                    await Template.ƒS.update(1);
                    await Template.ƒS.Location.show(Template.locations.HFU_Room);
                    await Template.ƒS.update(1);
                    Template.ƒS.Speech.tell(Template.characters.Satina, "You really love me, don´t you?");
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
                    Template.ƒS.Speech.tell(Template.characters.Satina, "But what can I say?");
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
                    await Template.ƒS.Location.show(Template.locations.Black);
                    await Template.ƒS.update(0.8);
                    await Template.ƒS.Location.show(Template.locations.HFU);
                    await Template.ƒS.update(0.8);
                    await Template.ƒS.Location.show(Template.locations.Black);
                    await Template.ƒS.update(0.8);
                    await Template.ƒS.Location.show(Template.locations.HFU_Inner);
                    await Template.ƒS.update(0.8);
                    Template.ƒS.Speech.tell(Template.characters.Satina, "I feel the same way.");
                    await Template.ƒS.Location.show(Template.locations.Black);
                    await Template.ƒS.update(0.8);
                    await Template.ƒS.Location.show(Template.locations.HFU_Back);
                    await Template.ƒS.update(0.8);
                    await Template.ƒS.Location.show(Template.locations.Black);
                    await Template.ƒS.update(0.8);
                    await Template.ƒS.Location.show(Template.locations.HFU_Room);
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
                    await Template.ƒS.Speech.tell(Template.characters.Satina, "Thank you, for everything.");
                    await Template.ƒS.Character.hideAll();
                    await Template.ƒS.update(2);
                    await Template.ƒS.Speech.tell(Template.characters.Satina, "Goodbye, " + Template.dataForSave.Protagonist.name);
                    break;
                case endDecision.notTurnOnLight:
                    Template.ƒS.Speech.tell(Template.characters.Satina, "I´m glad you made the right choice.");
                    Template.ƒS.Speech.tell(Template.characters.Protagonist, "I´m still not completely sure what´s going on.");
                    Template.ƒS.Speech.tell(Template.characters.Satina, "Get some sleep over it. See you tomorrow.");
                    break;
            }
        }
        else {
            await Template.ƒS.Speech.tell(Template.characters.Satina, "So, you don´t trust me after all.");
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, "No, that is not it. I just, well... don´t see a reason to do it.");
            await Template.ƒS.Speech.tell(Template.characters.Satina, "That just sounds like a lame excuse. Goodbye, " + Template.dataForSave.Protagonist.name);
        }
        //Set Progress
        Template.dataForSave.state.a = 100;
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
                T0000: "Hello there! Welcome to the world of monster people! My name is Pine! People call me the monster prof!",
                T0001: "This world is inhabited by many different kind of monster people. I myself study the differences between monster people and humans.",
                T0002: "The only thing we know until now about monster people is that they one day appeared and ever since then live alongside the human.",
                T0003: "But enough with the exposition. Tell me about yourself. What is your name ?"
            }
        };
        await Template.ƒS.Speech.tell(Template.characters.Prof, text.Prof.T0000),
            await Template.ƒS.Location.show(Template.locations.HFU);
        await Template.ƒS.Character.show(Template.characters.Prof, Template.characters.Prof.pose.normal, Template.ƒS.positionPercent(65, 155));
        //Show Professor here
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.Prof, text.Prof.T0001),
            // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
            await Template.ƒS.Speech.tell(Template.characters.Prof, text.Prof.T0002),
            await Template.ƒS.Speech.tell(Template.characters.Prof, text.Prof.T0003),
            Template.dataForSave.Protagonist.name = await Template.ƒS.Speech.getInput();
        await Template.ƒS.Speech.tell(Template.characters.Prof, "I see. So your name is " + Template.dataForSave.Protagonist.name);
        //console.log(dataForSave.Protagonist.name);
        await Template.ƒS.Speech.tell(Template.characters.Prof, "So, " + Template.dataForSave.Protagonist.name + ", your own adventure is about to start. A world of monsters awaits. Let´s Go.");
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.Character.hide(Template.characters.Prof);
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
        air: "Audio/Air.mp3",
        dio: "Audio/diooderso1.1.wav",
        filler: "Audio/filler.mp3",
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
                sad: "",
                angel: "Images/Characters/Protag_Angel.png"
            }
        },
        Prof: {
            name: "Professor Pine",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Prof.png"
            }
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
        Satina: {
            name: "Satina",
            //Position
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Demon1.2.png",
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
        Transformation: {
            istransformed: false
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
        },
        Donut: {
            name: "Hole-y Donut",
            description: "A suspicious looking donut",
            image: "Images/Items/Donut.png"
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
            Template.ƒS.Sound.setVolume(Template.sound.air, volume);
        }
    }
    Template.incrementSound = incrementSound;
    function decrementSound() {
        if (volume > 0) {
            volume -= 0.1;
            Template.ƒS.Sound.setVolume(Template.sound.air, volume);
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
                T0000: "You sleep in your room. Suddenly, you wake up because you hear a noise from under your bed."
            },
            Prof: {
                T0000: "Hello there! Welcome to the world of Monster People! My name is Pine! People call me the Monster Prof!",
                T0001: "This world is inhabited by many different kind of Monster People. I myself study the differences between the Monster people and humans.",
                T0002: "The only thing we know until now about monster people is that they one day appeared and since life alongside humans.",
                T0003: "But enough with the exposition. Tell me about yourself. What is your name ?"
            },
            Protagonist: {
                T0000: "Mom, there is a monster under my bed",
                T0001: "But I´m sure I heard something"
            },
            Mothrin: {
                T0000: "Protag, please, turn on the lights",
                T0001: "Hello. You left your window open earlier and somehow I fell asleep under your bed."
            },
            Mother: {
                T0000: Template.dataForSave.Protagonist.name + "Kevin, you are 20 years old, stop worrying about your imagination and find a job already.",
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
        Template.ƒS.Sound.fade(Template.sound.dio, 0.2, 0.1, true);
        //Noises Here
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000),
            await Template.ƒS.Speech.tell(Template.characters.Mother, Template.dataForSave.Protagonist.name + ", you are 20 years old, stop worrying about your imagination and find a job already.");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001),
            await Template.ƒS.Speech.tell(Template.characters.Mother, "No, " + Template.dataForSave.Protagonist.name + ", you didn´t. Go back to sleep now.");
        Template.ƒS.Speech.clear();
        //Show Characters
        await Template.ƒS.Character.animate(Template.characters.Mothrin, Template.characters.Mothrin.pose.shadow, animation);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Mystery, Template.dataForSave.Protagonist.name + ", please, turn on the lights"),
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
                Template.ƒS.Sound.fade(Template.sound.dio, 0, 0.1, false);
                Template.ƒS.Sound.fade(Template.sound.filler, 0.2, 2, true);
                await Template.ƒS.Location.show(Template.locations.Bedroom_Light);
                await Template.ƒS.Character.hide(Template.characters.Mothrin);
                await Template.ƒS.Character.show(Template.characters.Mothrin, Template.characters.Mothrin.pose.normal, Template.ƒS.positionPercent(105, 150));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Thank you very much.");
                Template.dataForSave.MothrinAffection.score = Template.dataForSave.MothrinAffection.score + 2;
                await Template.ƒS.update(1);
                break;
            case lightDecision.notTurnOnLight:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "...");
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Fine, I´ll do it myself.");
                //Insert sound of Lightswitch
                Template.ƒS.Sound.play(Template.sound.click, 1);
                Template.ƒS.Sound.fade(Template.sound.dio, 0, 0.1, false);
                Template.ƒS.Sound.fade(Template.sound.filler, 0.2, 2, true);
                await Template.ƒS.Location.show(Template.locations.Bedroom_Light);
                await Template.ƒS.Character.hide(Template.characters.Mothrin);
                await Template.ƒS.Character.show(Template.characters.Mothrin, Template.characters.Mothrin.pose.normal, Template.ƒS.positionPercent(105, 150));
                await Template.ƒS.update(1);
                break;
        }
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(30, 140));
        //Set Progress
        Template.dataForSave.state.a += 1;
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0001),
            // await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0001),
            //  await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0002),
            await Template.ƒS.update(1);
        //Decision
        let lightDecision2 = {
            askFriendly: "Don´t I know you from somewhere ?",
            askRude: "So you broke into my room ? I should call the police on you for privacy intrusion."
        };
        let lightDecisionElement2 = await Template.ƒS.Menu.getInput(lightDecision2, "class");
        switch (lightDecisionElement2) {
            case lightDecision2.askRude:
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "I swear, I didn´t want to do anything evil. I just saw the lights in your room and wanted to get close to them.");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "What kind of obsession is this ?"),
                    await Template.ƒS.Speech.tell(Template.characters.Mothrin, "For us moths, that is totally a normal behavior. We live for the light.");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "If you say so....Oh well."),
                    await Template.ƒS.update(1);
                break;
            case lightDecision2.askFriendly:
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Well, I´m studying at the local university. I once saw you getting kicked off the campus for getting too drunk at a party.");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Ah, yeah, I kinda remember seeing you there. Weren´t you that girl who drank a whole bottle of *brand censored* vodka at the campus party and tried to fight a fly girl because she stole one of your pizza slices ?"),
                    await Template.ƒS.Speech.tell(Template.characters.Mothrin, "That might have been me, yes.");
                await Template.ƒS.update(1);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Mother, "Is someone up there with you? I hear voices.");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, "No mom - I´m just watching videos.");
        await Template.ƒS.Speech.tell(Template.characters.Mother, "You should look for a job instead.");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Yeah Yeah, tomorrow I will.");
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Oh, you are looking for a job ? Our university is looking for a janitor since last spring. Wouldn´t that be a great opportunity ?");
        let lightDecision3 = {
            party: "I guess that would be quite nice. (Might get invited to more parties that way)",
            nowork: "I don´t really want to work. I want to become a popular streamer instead."
        };
        let lightDecisionElement3 = await Template.ƒS.Menu.getInput(lightDecision3, "class");
        switch (lightDecisionElement3) {
            case lightDecision3.party:
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Great. I can show you around campus tomorrow if you want.");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Sounds great. Thank you.");
                Template.dataForSave.MothrinAffection.score = Template.dataForSave.MothrinAffection.score + 1;
                await Template.ƒS.update(1);
                break;
            case lightDecision3.nowork:
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Come on, it will be great, I promise it"),
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Why should I believe you ? You just broke into my house and now I should suddenly trust you ?");
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Well, I mean, eh, if you don´t want to I guess you don´t have too. I was just thinking you might like working at a place with many parties and university students. Also, you could get out of 'this'.");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Hmm, you might be right. I´ll think about it. I mean, well, I can at least go to the university with you tomorrow and have a look.");
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Great, I see you tomorrow then.");
                await Template.ƒS.update(1);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Goodbye.");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, "See ya.");
        //Animation of Moth flying out of window at the end
        await Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.sound.filler, 0, 0.1, false);
        Template.ƒS.Speech.clear();
        //await ƒS.Character.hide(characters.Ryu);
        await Template.ƒS.update(2);
        // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    }
    Template.Start_Bedroom = Start_Bedroom;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map