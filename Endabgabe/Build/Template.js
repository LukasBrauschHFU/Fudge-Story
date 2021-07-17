"use strict";
var Template;
(function (Template) {
    async function Best_Friend_Ending() {
        let text = {
            Protagonist: {
                T0000: "Hello there",
                T0001: "Yes. Sometimes I have a feeling that things never work out for me",
                T0002: "I hope you are right. I´m just happy I have a good friend in you"
            },
            Mothrin: {
                T0000: "Hard day ?",
                T0001: "Aw, don´t say that. I´m sure things will be better in the future",
                T0002: "I´m glad too. Thanks for being my best friend"
            }
        };
        await Template.ƒS.Location.show(Template.locations.Park);
        await Template.ƒS.Character.show(Template.characters.Mothrin, Template.characters.Mothrin.pose.normal, Template.ƒS.positionPercent(105, 150));
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Good evening, " + Template.dataForSave.Protagonist.name);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0002);
    }
    Template.Best_Friend_Ending = Best_Friend_Ending;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Debug() {
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
        await Template.ƒS.Location.show(Template.locations.Park);
        //    await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(102, 150));
        //  await ƒS.Character.show(characters.Satina, characters.Satina.pose.normal, ƒS.positionPercent(108, 150));
        //    await ƒS.Character.show(characters.Shubaru, characters.Shubaru.pose.normal, ƒS.positionPercent(115, 150));
        await Template.ƒS.Character.show(Template.characters.Scales, Template.characters.Scales.pose.normal, Template.ƒS.positionPercent(102, 150));
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
        //   await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.angel, ƒS.positionPercent(46, 150));
        await Template.ƒS.update(1);
        //      await ƒS.Speech.tell(characters.Mothrin, "Test?");
        //       await ƒS.Speech.tell(characters.Satina, "Test?");
        //       await ƒS.Speech.tell(characters.Shubaru, "Test?");
        //       await ƒS.Speech.tell(characters.Scales, "Test?");
        //       await ƒS.Speech.tell(characters.Protagonist, "Test?");
        //       await ƒS.Speech.tell(characters.Narrator, "Test?");
        return "Meet_Scales";
    }
    Template.Debug = Debug;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Ending_Evil() {
        let text = {
            Protagonist: {
                T0000: "Oh, that´s unexpected. Thank you. ",
                T0001: "Tastes kinda strange. Anyways, have you seen Shubaru today ?",
                T0002: "I don´t see Shubaru anywhere",
                T0003: "Oh no, you don´t want to tell me that...",
                T0004: "Stop this, Scales!"
            },
            Scales: {
                T0000: "Is it tasty ?",
                T0001: "Oh, I´m sure Shubaru is here",
                T0002: "Just look closer"
            },
            Narrator: {
                T0000: "The next day",
                T0001: "In the morning, you hear in an announcement that Satina apparently disapeared at night. You decide to look for her later",
                T0002: "You run to the toilet to puke. When you return, Scales is gone. Because of a bad feeling you have you run home",
                T0003: "While you continue working, you suddenly get a bad feeling and run home",
                T0004: "You hear voices comming from your room",
                T0005: "You throw the moth dust you still have in your pocket at Scales, who lets go of Mothrin. Mothrin runs into your arms, you lock the room and call the police. Scales gets arrested"
            }
        };
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(1);
        //   await ƒS.Character.show(characters.Mothrin, characters.Mothrin.pose.normal, ƒS.positionPercent(105, 150));
        //   await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.normal, ƒS.positionPercent(64, 85));
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0000);
        if (Template.dataForSave.SatinaAffection.score > Template.dataForSave.ScalesAffection.score) {
            await Template.ƒS.Location.show(Template.locations.HFU_Inner);
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0001);
        }
        if (Template.dataForSave.ShubaruAffection.score > Template.dataForSave.ScalesAffection.score) {
            //Background change to mensa
            await Template.ƒS.Location.show(Template.locations.HFU_Inner);
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.Scales, "Hello " + Template.dataForSave.Protagonist.name + ", I brought you some  fried duck from the chinese restaurant");
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
            await Template.ƒS.Speech.tell(Template.characters.Scales, text.Scales.T0000);
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
            await Template.ƒS.Speech.tell(Template.characters.Scales, text.Scales.T0001);
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
            await Template.ƒS.Speech.tell(Template.characters.Scales, text.Scales.T0002);
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0003);
            await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0002);
        }
        else if (Template.dataForSave.MothrinAffection.score > Template.dataForSave.ScalesAffection.score) {
            await Template.ƒS.Location.show(Template.locations.HFU_Inner);
            await Template.ƒS.update(1);
            await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0003);
        }
        await Template.ƒS.Location.show(Template.locations.Bedroom_Light);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0004);
        await Template.ƒS.Character.show(Template.characters.Mothrin, Template.characters.Mothrin.pose.normal, Template.ƒS.positionPercent(105, 150));
        await Template.ƒS.Character.show(Template.characters.Scales, Template.characters.Scales.pose.normal, Template.ƒS.positionPercent(80, 150));
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Help, " + Template.dataForSave.Protagonist.name + ", I saw her breaking into your room and followed her. Now she is trying to kill me!");
        await Template.ƒS.Speech.tell(Template.characters.Scales, "Shut up bitch, you deserve it for stealing my " + Template.dataForSave.Protagonist.name + "!");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0004);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0005);
    }
    Template.Ending_Evil = Ending_Evil;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Ending_Space() {
        let animation = {
            start: {
                translation: Template.ƒS.positionPercent(90, 160)
                // rotation: 1,
                //  scaling: new ƒS.Position(1, 1)
                //  color: ƒS.Color.CSS("blue", 0)
            },
            end: {
                translation: Template.ƒS.positionPercent(90, 230)
                //  rotation: 1,
                //  scaling: new ƒS.Position(1, 1)
                //  color: ƒS.Color.CSS("red", 0)
            },
            duration: 33,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
        let animation2 = {
            start: {
                translation: Template.ƒS.positionPercent(53, 65)
                // rotation: 1,
                //  scaling: new ƒS.Position(1, 1)
                //  color: ƒS.Color.CSS("blue", 0)
            },
            end: {
                translation: Template.ƒS.positionPercent(53, 38)
                //  rotation: 1,
                //  scaling: new ƒS.Position(1, 1)
                //  color: ƒS.Color.CSS("red", 0)
            },
            duration: 33,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
        Template.ƒS.Sound.fade(Template.sound.space, 0.5, 0.1, true);
        await Template.ƒS.Character.show(Template.characters.PlanetBig, Template.characters.PlanetBig.pose.normal, Template.ƒS.positionPercent(90, 160));
        await Template.ƒS.Character.show(Template.characters.PlanetSmall, Template.characters.PlanetSmall.pose.normal, Template.ƒS.positionPercent(64, 85));
        await Template.ƒS.Character.show(Template.characters.BreadSun, Template.characters.BreadSun.pose.normal, Template.ƒS.positionPercent(53, 45));
        Template.ƒS.Character.animate(Template.characters.PlanetBig, Template.characters.PlanetBig.pose.normal, animation);
        await Template.ƒS.Character.animate(Template.characters.BreadSun, Template.characters.BreadSun.pose.normal, animation2);
        await Template.ƒS.Speech.tell(Template.characters.Shubaru, "Thanks for sharing this moment with me, MC");
    }
    Template.Ending_Space = Ending_Space;
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
        // await ƒS.update(1); 
        // await ƒS.Speech.tell(characters.Narrator, "At the end of this VN you decided to go to the park with a girl named Satina.");
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.HFU_Park);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Satina, Template.characters.Satina.pose.normal, Template.ƒS.positionPercent(105, 130));
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
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
    async function Learning_with_Mothrin() {
        let text = {
            Protagonist: {
                T0000: "I found it quiet interesting. If I somehow lose Interest in my job, I might study the same subject ",
                T0001: "No problem"
            },
            Narrator: {
                T0000: "90 minutes later."
            },
            Mothrin: {
                T0000: "So, what do you think?",
                T0001: "´m glad it didn´t bore you. I don´t want you to get into trouble, so I will let you do your work for now. Thank you for comming with me."
            }
        };
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(1);
        // await ƒS.Character.show(characters.Shubaru, characters.Shubaru.pose.normal, ƒS.positionPercent(105, 150));
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0000);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.HFU_Outside_L);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
        await Template.ƒS.Character.show(Template.characters.Mothrin, Template.characters.Mothrin.pose.normal, Template.ƒS.positionPercent(105, 150));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
        await Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.clear();
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(1);
    }
    Template.Learning_with_Mothrin = Learning_with_Mothrin;
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
        space: "Audio/Space.mp3",
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
        HFU_Bathroom: {
            name: "HFU_Bathroom",
            background: "Images/Backgrounds/Uni_Bathroom.png"
        },
        HFU_Outside_L: {
            name: "HFU_Outside_L",
            background: "Images/Backgrounds/Uni_Outside_L.png"
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
            name: "Default",
            //Position
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Protag.png",
                angel: "Images/Characters/Protag_Angel.png",
                happy: "Images/Characters/Protag_Happy.png",
                sad: "Images/Characters/Protag_Sad.png",
                angry: "Images/Characters/Protag_Angry.png"
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
        PlanetBig: {
            name: "PlanetBig",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Spoofs/PlanetBig.png"
            }
        },
        PlanetSmall: {
            name: "PlanetSmall",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Spoofs/PlanetSmall.png"
            }
        },
        BreadSun: {
            name: "BreadSun",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Spoofs/CubeFudge.png"
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
                happy: "Images/Characters/Moth_Happy.png",
                sad: "Images/Characters/Moth_Sad.png",
                angry: "Images/Characters/Moth_Angry.png"
            }
        },
        Satina: {
            name: "Satina",
            //Position
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Demon.png",
                happy: "Images/Characters/Demon_Happy.png",
                sad: "Images/Characters/Demon_Sad.png",
                angry: "Images/Characters/Demon_Angry.png"
            }
        },
        Shubaru: {
            name: "Shubaru",
            //Position
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Shubaru.png",
                happy: "Images/Characters/Shubaru_Happy.png",
                sad: "Images/Characters/Shubaru_Sad.png",
                angry: "Images/Characters/Shubaru_Angry.png"
            }
        },
        Scales: {
            name: "Scales",
            //Position
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: "Images/Characters/Scales.png",
                happy: "Images/Characters/Scales_Happy.png",
                sad: "Images/Characters/Scales_Sad.png",
                angry: "Images/Characters/Scales_Angry.png"
            }
        },
        Mother: {
            name: "Mother",
            //Position
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                //Standartpose
                normal: ""
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
        usedDonut: {
            used: false
        },
        usedBread: {
            used: false
        },
        usedChilli: {
            used: false
        },
        usedFlashlight: {
            used: false
        },
        MothrinAffection: {
            score: 0
        },
        SatinaAffection: {
            score: 0
        },
        ShubaruAffection: {
            score: 0
        },
        ScalesAffection: {
            score: 0
        },
        Interacted_with_Scales: {
            boolean: false
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
            case Template.ƒ.KEYBOARD_CODE.I:
                Template.ƒS.Inventory.open();
                break;
        }
    }
    //Items
    Template.items = {
        Donut: {
            name: "Hole-y Donut",
            description: "A suspicious looking donut",
            image: "Images/Items/Donut.png",
            //Add function
            handler: changeform
            //zum nicht entfernen:
            //static: true
        },
        Mothdust: {
            name: "Mothdust",
            description: "A jar filled with mothdust",
            image: "Images/Items/MothDust.png",
            //Add function
            //handler: changeform
            //zum nicht entfernen:
            static: true
        },
        EvilDonut: {
            name: "Unhole-y Donut",
            description: "An evil, but tasty looking donut",
            image: "Images/Items/EvilDonut.png",
            //Add function
            handler: useDonut
            //zum nicht entfernen:
            //static: true
        },
        Bread: {
            name: "Bread",
            description: "Plain bread",
            image: "Images/Items/Bread.png",
            //Add function
            handler: useBread
            //zum nicht entfernen:
            //static: true
        },
        Chilli: {
            name: "Chilli",
            description: "Delicious looking Chilli con Carne",
            image: "Images/Items/Chilli.png",
            //Add function
            handler: useChilli
            //zum nicht entfernen:
            //static: true
        },
        Flashlight: {
            name: "Flashlight",
            description: "A flashlight",
            image: "Images/Items/Flashlight.png",
            //Add function
            handler: useFlashlight
            //zum nicht entfernen: 
            //static: true
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
            Template.ƒS.Sound.setMasterVolume(volume);
        }
    }
    Template.incrementSound = incrementSound;
    function decrementSound() {
        if (volume > 0) {
            volume -= 0.1;
            Template.ƒS.Sound.setMasterVolume(volume);
        }
    }
    Template.decrementSound = decrementSound;
    function changeform() {
        Template.dataForSave.Transformation.istransformed = true;
    }
    function useDonut() {
        Template.dataForSave.usedDonut.used = true;
    }
    function useBread() {
        Template.dataForSave.usedBread.used = true;
    }
    function useChilli() {
        Template.dataForSave.usedChilli.used = true;
    }
    function useFlashlight() {
        Template.dataForSave.usedFlashlight.used = true;
    }
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
            { scene: Template.Debug, name: "Debug" },
            // { scene: Introduction, name: "Introduction"},
            // { scene: Start_Bedroom, name: "Start_Bedroom"},
            // { scene: Meet_Satina, name: "Meet_Satina"},
            { scene: Template.Meet_Shubaru, name: "Meet_Shubaru", id: "Meet_Shubaru" },
            { scene: Template.Meet_Scales, name: "Meet_Scales", id: "Meet_Scales" }
            // { scene: Mensa, name: "Mensa"}    
            // { scene: Ending_World, name: "Ending_World"}, 
            // { scene: Park_Shubaru, name: "Park_Shubaru"},  
            // { scene: Ending_Space, name: "Ending_Space"}   
        ];
        //Meter hier hin 
        //setData for saved objects, Alternative: 
        //Nochmal nachschauen auf Github
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave.state = Template.ƒS.Progress.setData(Template.dataForSave.state, uiElement);
        uiElement.setAttribute("value", "50");
        //  console.log(uiElement);
        //start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Meet_Satina() {
        let text = {
            Protagonist: {
                T0000: "To my surprise, it went pretty well. I got the job starting today!",
                T0001: "See you later"
            },
            Narrator: {
                T0000: "You grab your cleaning utensils and start cleaning the bathrooms"
            },
            Mystery: {
                T0000: "Gratulations, you got the job. You can start today!",
                T0001: "By all that is unholy, I summon you, Chomosuke, to return to me on earth. Rise from hell and show yourself"
            },
            Mothrin: {
                T0000: "And, MC, how did it go?",
                T0001: "That is great ! I have to go to class now, but I´m sure I will catch you later."
            }
        };
        var timetraveled = 0;
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(1);
        // await ƒS.Character.show(characters.Shubaru, characters.Shubaru.pose.normal, ƒS.positionPercent(105, 150));
        await Template.ƒS.Speech.tell(Template.characters.Mystery, text.Mystery.T0000);
        await Template.ƒS.Location.show(Template.locations.HFU_Inner);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Mothrin, Template.characters.Mothrin.pose.normal, Template.ƒS.positionPercent(105, 150));
        await Template.ƒS.Speech.tell(Template.characters.Shubaru, text.Mothrin.T0000);
        if (timetraveled == 1) {
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Wait, I remember this. Your next line is 'That is great ! I have to go to class now, but I´m sure I will catch you later'.");
            await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0001);
            await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Wait, how did you know that ?");
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, "I´m really not sure");
            await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Alriiiiiiiiiiight. Well, anyways, I have to go now or I will be late");
        }
        else {
            await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
            await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0001);
        }
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
        await Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.clear();
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0000);
        await Template.ƒS.Location.show(Template.locations.HFU_Bathroom);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Mystery, text.Mystery.T0001);
        let bathroomDecision = {
            goInside: "Sure, that sounds like it could get interesting",
            ignore: "No, thank you"
        };
        let bathroomDecisionElement = await Template.ƒS.Menu.getInput(bathroomDecision, "class");
        switch (bathroomDecisionElement) {
            case bathroomDecision.goInside:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Is anyone in there? I need to clean!");
                await Template.ƒS.Speech.tell(Template.characters.Mystery, "No");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "What do you mean, 'No' ?");
                await Template.ƒS.Speech.tell(Template.characters.Mystery, "I said, that there is noone here. Just continue working");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Are you stupid ?");
                await Template.ƒS.Character.show(Template.characters.Satina, Template.characters.Satina.pose.normal, Template.ƒS.positionPercent(105, 150));
                await Template.ƒS.Speech.tell(Template.characters.Satina, "Who are you calling stupid, working-class boy?");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Working class boy? The hell do you think you are?");
                await Template.ƒS.Speech.tell(Template.characters.Satina, "My name is Satina Kobayashi. I'm 21 years old. My house is in the northeast section of FōdoHoho, where all the villas are, and I am not married. I go to university as a student of the Kame Yu university, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, " Alright then. But what where you chanting in there?");
                await Template.ƒS.Speech.tell(Template.characters.Satina, "I tried to summon a familiar of mine, but because you interrupted me he will remain in hell for now");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Oh, I´m sorry. Can you try it again ?");
                await Template.ƒS.Speech.tell(Template.characters.Satina, "I suppose so. Maybe you can even help me to make up for the interruption. I will try again after class behind the university");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Sure, why not");
                await Template.ƒS.update(1);
                await Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                break;
            case bathroomDecision.ignore:
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "As you continue cleaning, the chanting gets louder, then it suddenly stops. You feel something is wrong, as if time is moving backwards");
                timetraveled = 1;
                return "Meet_Satania";
                break;
        }
    }
    Template.Meet_Satina = Meet_Satina;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Meet_Scales() {
        let text = {
            Protagonist: {
                T0000: "*Thinking*: Oh no, not again",
                T0001: "I know you are there, come out",
                T0002: "I could ask you the same thing",
                T0003: "Ah, and what are you doi..",
                T0004: "Scare who ?"
            },
            Narrator: {
                T0000: "90 minutes later.",
                T0001: "You get the feeling that something is not normal with this girl"
            },
            Scales: {
                T0000: "Who might you be ?",
                T0001: "My name is Scales",
                T0002: "Pshhh, you´ll scare them",
                T0003: "They are watching"
            }
        };
        await Template.ƒS.Location.show(Template.locations.HFU_Room);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
        //noises here
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
        await Template.ƒS.Character.show(Template.characters.Scales, Template.characters.Scales.pose.normal, Template.ƒS.positionPercent(105, 150));
        await Template.ƒS.Speech.tell(Template.characters.Scales, text.Scales.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Scales, text.Scales.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0003);
        await Template.ƒS.Speech.tell(Template.characters.Scales, text.Scales.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0004);
        await Template.ƒS.Speech.tell(Template.characters.Scales, text.Scales.T0003);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0001);
        let importantDecision = {
            escape: "Go backwards and slowly walk out of the room",
            stay: "Continue talking to scales"
        };
        let importantDecisionElement = await Template.ƒS.Menu.getInput(importantDecision, "class");
        switch (importantDecisionElement) {
            case importantDecision.escape:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "*Thinking*: Nope, I´m out of here");
                await Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.clear();
                await Template.ƒS.Location.show(Template.locations.Black);
                await Template.ƒS.update(1);
                //return
                break;
            case importantDecision.stay:
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "You are really confusing me");
                await Template.ƒS.Speech.tell(Template.characters.Scales, "Hehehe, they like that");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Good for them. But I have to ask again: Why are you here ?");
                await Template.ƒS.Speech.tell(Template.characters.Scales, "I just like the heat. Also, this room is noise isolated so noone can hear what happens in here");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "You do know how creepy you sound ?");
                await Template.ƒS.Speech.tell(Template.characters.Scales, "I kinda like your humor");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "That was not a joke tho.");
                await Template.ƒS.Speech.tell(Template.characters.Scales, "*giggles*");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "... Anyways, I need to fix this boiler now. Would you like to help me ?");
                await Template.ƒS.Speech.tell(Template.characters.Scales, "I suppose, as long as you don´t mind me talking about random stuff while we work");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Strange request, but ok.");
                await Template.ƒS.Speech.tell(Template.characters.Scales, "So, there are these girls that I really hate, they......");
                await Template.ƒS.Location.show(Template.locations.Black);
                //working noises here
                await Template.ƒS.Character.hideAll();
                await Template.ƒS.update(5);
                await Template.ƒS.Location.show(Template.locations.HFU_Room);
                await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
                await Template.ƒS.Character.show(Template.characters.Scales, Template.characters.Scales.pose.normal, Template.ƒS.positionPercent(105, 150));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Pew, that was lots of work. Thank you for helping me");
                await Template.ƒS.Speech.tell(Template.characters.Scales, "It was a pleasure. I´m glad I had someone to talk to");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "No problem. I must go now though");
                await Template.ƒS.Speech.tell(Template.characters.Scales, "Have a nice day.");
                //evtl nur +1
                Template.dataForSave.ScalesAffection.score = Template.dataForSave.ScalesAffection.score + 2;
                Template.dataForSave.Interacted_with_Scales.boolean = true;
                //return
                break;
        }
    }
    Template.Meet_Scales = Meet_Scales;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Meet_Shubaru() {
        let animation = {
            start: {
                translation: Template.ƒS.positionPercent(200, 150)
                // rotation: 1,
                //  scaling: new ƒS.Position(1, 1)
                //  color: ƒS.Color.CSS("blue", 0)
            },
            end: {
                translation: Template.ƒS.positionPercent(55, 150)
                //  rotation: 1,
                //  scaling: new ƒS.Position(1, 1)
                //  color: ƒS.Color.CSS("red", 0)
            },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
        let text = {
            Protagonist: {
                T0000: "No problem. But it seems you have droped something",
                T0001: "You eat dry bread ?",
                T0002: "Sounds interesting",
                T0003: "Until then. See ya",
                T0004: "Hi there, Mothrin"
            },
            Shubaru: {
                T0000: "Oh no, I´m terribly sorry",
                T0001: "Ahhhh, my bread",
                T0002: "Yes, i sure do love it. Anyways, I haven´t seen you around this place until now. Are you new here ?",
                T0003: "I´m Shubaru. I´m studying astrology here",
                T0004: "Oh trust me dude, it is. Anyway, I gotta bounce. Maybe we´ll meet again soon"
            },
            Mothrin: {
                T0000: "Good morning",
                T0001: "So, you know, I was thinking if, uhm, you could come with me to class today instead of working ? It will only take 90 minutes and I´m sure noone would be angry at you"
            }
        };
        await Template.ƒS.Location.show(Template.locations.HFU_Inner);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
        await Template.ƒS.update(1);
        //animation of shubaru running into you here
        await Template.ƒS.Character.animate(Template.characters.Shubaru, Template.characters.Shubaru.pose.normal, animation);
        await Template.ƒS.Speech.tell(Template.characters.Shubaru, text.Shubaru.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Shubaru, text.Shubaru.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Shubaru, text.Shubaru.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Yes, I got work as a janitor here just yesterday. My name is " + Template.dataForSave.Protagonist.name);
        await Template.ƒS.Speech.tell(Template.characters.Shubaru, text.Shubaru.T0003);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Shubaru, text.Shubaru.T0004);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0003);
        Template.ƒS.Character.hide(Template.characters.Shubaru);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Mothrin, Template.characters.Mothrin.pose.normal, Template.ƒS.positionPercent(105, 150));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0004);
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0001);
        let workDecision = {
            continueWorking: "I´m sorry, but, this job is really important to me and I can´t risk loosing it.",
            goWithMothrin: "Sure, why not. I don´t have much to do right now anyways."
        };
        let workDecisionElement = await Template.ƒS.Menu.getInput(workDecision, "class");
        switch (workDecisionElement) {
            case workDecision.continueWorking:
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Oh, I understand. Well, maybe next time ?");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Yes, I´m sure I can get a day off sometimes in the future and we can do that then. Have fun at class!");
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Thank you.");
                await Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                //return
                break;
            case workDecision.goWithMothrin:
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Great. Follow me.");
                Template.dataForSave.MothrinAffection.score = Template.dataForSave.MothrinAffection.score + 1;
                await Template.ƒS.Location.show(Template.locations.Black);
                //return
                break;
        }
        // 
    }
    Template.Meet_Shubaru = Meet_Shubaru;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Mensa() {
        let text = {
            Narrator: {
                T0000: "You can buy one of these items:",
                T0001: "As you enter the Mensa, you see the people you previously met in this university. Who do you want to sit next to ?"
            },
            Protagonist: {
                T0000: "Why are you looking so down ?",
                T0001: "Oh, that sucks",
                T0002: "With pleasure"
            },
            Mothrin: {
                T0000: "I forgot my food at home",
                T0001: "For me ? Thank you very much",
                T0002: "So, uhm MC. I was wondering if you, you know, would go to the park with me later ?",
                T0003: "Really ? Great. I´ll pick you up once your shift is over"
            },
            Shubaru: {
                T0000: "I forgot my food at home",
                T0001: "For me ? Thank you very much",
                T0002: "So, my dude, I was wondering, would like to chill in the park with me later ?",
                T0003: "Really? Great. I´ll pick you up once your shift is over"
            },
            Satina: {
                T0000: "I forgot my food at home",
                T0001: "For me ? Thank you very much",
                T0002: "So, MC, I was wondering, would you like to join me in the park with me later ?",
                T0003: "Really? Sweat, my little apprentice. I´ll pick you up once your shift is over"
            },
            Scales: {
                T0000: "I forgot my food at home",
                T0001: "For me ? Thank you very much",
                T0002: "So, my dude, I was wondering, would like to chill in the park with me later ?",
                T0003: "Really? Neat. I´ll pick you up once your shift is over",
                T0004: "Why does he hate me ? It has to be the others! They are trying to steal him from me! They are telling him I am insane! I will show them. I will show them all!"
            }
        };
        await Template.ƒS.Location.show(Template.locations.HFU_River);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0000);
        let foodDecision = {
            getBread: "Buy bread",
            getChilli: "Buy chilli con carne",
            getFlashlight: "Buy flashlight",
            getDonut: "Buy unhole-y donut"
        };
        let foodDecisionElement = await Template.ƒS.Menu.getInput(foodDecision, "class");
        switch (foodDecisionElement) {
            case foodDecision.getBread:
                Template.ƒS.Inventory.add(Template.items.Bread);
                break;
            case foodDecision.getChilli:
                Template.ƒS.Inventory.add(Template.items.Chilli);
                break;
            case foodDecision.getFlashlight:
                Template.ƒS.Inventory.add(Template.items.Flashlight);
                break;
            case foodDecision.getDonut:
                Template.ƒS.Inventory.add(Template.items.EvilDonut);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0001);
        let characterDecision;
        //Changes if Scales was met
        if (Template.dataForSave.Interacted_with_Scales.boolean == true) {
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
        let characterDecisionElement = await Template.ƒS.Menu.getInput(characterDecision, "class");
        switch (characterDecisionElement) {
            case characterDecision.Mothrin:
                await Template.ƒS.Character.show(Template.characters.Mothrin, Template.characters.Mothrin.pose.normal, Template.ƒS.positionPercent(105, 150));
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Good Afternoon, " + Template.dataForSave.Protagonist.name);
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0000);
                if (Template.dataForSave.usedFlashlight.used == true) {
                    await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0001);
                    Template.dataForSave.MothrinAffection.score = Template.dataForSave.MothrinAffection.score + 1;
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
                }
                if (Template.dataForSave.MothrinAffection.score >= 2) {
                    await Template.ƒS.Speech.tell(Template.characters.Mothrin, "So, umh, " + Template.dataForSave.Protagonist.name + " I was wondering if you, you know, would go to the park with me later ?");
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, "I would love to.");
                    await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0003);
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
                    return;
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "You continue talking for a while. Afterwards, you go back to work and wait for Mothrin outside of University.");
                    return;
                }
                break;
            case characterDecision.Shubaru:
                await Template.ƒS.Character.show(Template.characters.Shubaru, Template.characters.Shubaru.pose.normal, Template.ƒS.positionPercent(105, 150));
                await Template.ƒS.Speech.tell(Template.characters.Shubaru, "Good Afternoon, " + Template.dataForSave.Protagonist.name);
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
                await Template.ƒS.Speech.tell(Template.characters.Shubaru, text.Shubaru.T0000);
                if (Template.dataForSave.usedBread.used == true) {
                    await Template.ƒS.Speech.tell(Template.characters.Shubaru, text.Shubaru.T0001);
                    Template.dataForSave.ShubaruAffection.score = Template.dataForSave.ShubaruAffection.score + 2;
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
                }
                if (Template.dataForSave.ShubaruAffection.score >= 2) {
                    await Template.ƒS.Speech.tell(Template.characters.Shubaru, text.Shubaru.T0002);
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, "I would love to.");
                    await Template.ƒS.Speech.tell(Template.characters.Shubaru, text.Shubaru.T0003);
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
                    return;
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "You continue talking for a while. Afterwards, you go and wait for Mothrin outside of University");
                    return;
                }
                break;
            case characterDecision.Satina:
                await Template.ƒS.Character.show(Template.characters.Satina, Template.characters.Satina.pose.normal, Template.ƒS.positionPercent(105, 150));
                await Template.ƒS.Speech.tell(Template.characters.Satina, "Good Afternoon, " + Template.dataForSave.Protagonist.name);
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
                await Template.ƒS.Speech.tell(Template.characters.Satina, text.Satina.T0000);
                if (Template.dataForSave.usedDonut.used == true) {
                    await Template.ƒS.Speech.tell(Template.characters.Satina, text.Satina.T0001);
                    Template.dataForSave.SatinaAffection.score = Template.dataForSave.SatinaAffection.score + 2;
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
                }
                if (Template.dataForSave.SatinaAffection.score >= 2) {
                    await Template.ƒS.Speech.tell(Template.characters.Satina, "So, " + Template.dataForSave.Protagonist.name + " I was wondering if you, you know, would go to the park with me later ?");
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, "I would love to.");
                    await Template.ƒS.Speech.tell(Template.characters.Satina, text.Satina.T0003);
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
                    return;
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "You continue talking for a while. Afterwards, you go and wait for Mothrin outside of University");
                    return;
                }
                break;
            case characterDecision.Scales:
                await Template.ƒS.Character.show(Template.characters.Scales, Template.characters.Scales.pose.normal, Template.ƒS.positionPercent(105, 150));
                await Template.ƒS.Speech.tell(Template.characters.Scales, "Good Afternoon, " + Template.dataForSave.Protagonist.name);
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
                await Template.ƒS.Speech.tell(Template.characters.Scales, text.Scales.T0000);
                if (Template.dataForSave.usedChilli.used == true) {
                    await Template.ƒS.Speech.tell(Template.characters.Scales, text.Scales.T0001);
                    Template.dataForSave.ScalesAffection.score = Template.dataForSave.ScalesAffection.score + 2;
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
                }
                if (Template.dataForSave.ScalesAffection.score >= 2) {
                    await Template.ƒS.Speech.tell(Template.characters.Scales, text.Scales.T0002);
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, "I would love to.");
                    await Template.ƒS.Speech.tell(Template.characters.Scales, text.Scales.T0003);
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
                    return;
                }
                else {
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "You continue talking for a while. Afterwards, you go and wait for Mothrin outside of University");
                    await Template.ƒS.Location.show(Template.locations.Black);
                    Template.ƒS.Character.hideAll();
                    Template.ƒS.Speech.clear();
                    await Template.ƒS.update(1);
                    if (Template.dataForSave.MothrinAffection > Template.dataForSave.ScalesAffection || Template.dataForSave.ShubaruAffection > Template.dataForSave.ScalesAffection || Template.dataForSave.SatinaAffection > Template.dataForSave.ScalesAffection) {
                        //Show Mensa
                        await Template.ƒS.Location.show(Template.locations.HFU_Outside_I);
                        await Template.ƒS.Character.show(Template.characters.Scales, Template.characters.Scales.pose.normal, Template.ƒS.positionPercent(105, 150));
                        await Template.ƒS.Speech.tell(Template.characters.Scales, text.Scales.T0004);
                        return;
                    }
                    return;
                }
                break;
        }
    }
    Template.Mensa = Mensa;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Mothrin_Talk() {
        let text = {
            Protagonist: {
                T0000: "It was alright, sometimes a bit boring but mostly ok"
            },
            Mothrin: {
                T0000: "Hello, MC. How was your first day working here ?",
                T0001: "Sound great. Since I´m also finished for today, would you like to go and grab something to eat ?"
            }
        };
        await Template.ƒS.Location.show(Template.locations.HFU_River);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Mothrin, Template.characters.Mothrin.pose.normal, Template.ƒS.positionPercent(105, 150));
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Shubaru, text.Mothrin.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Shubaru, text.Mothrin.T0001);
        let foodDecision = {
            getFood: "I would love to",
            helpSatina: "Sorry, I can´t. I already promised someone to help her in a bit"
        };
        let foodDecisionElement = await Template.ƒS.Menu.getInput(foodDecision, "class");
        switch (foodDecisionElement) {
            case foodDecision.getFood:
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Great! Lets go and get a Kebab to go. We can eat it in the park, they have nice lights there");
                Template.dataForSave.MothrinAffection.score = Template.dataForSave.MothrinAffection.score + 1;
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Sound like a great idea.");
                await Template.ƒS.update(1);
                await Template.ƒS.Character.hideAll();
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "After university, you met with Mothrin in the park. You had lots of fun");
                await Template.ƒS.update(1);
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                break;
            case foodDecision.helpSatina:
                await Template.ƒS.Speech.tell(Template.characters.Mothrin, "Oh, uhm, alright. Guess I´ll see you tomorrow then");
                Template.dataForSave.MothrinAffection.score = Template.dataForSave.MothrinAffection.score - 1;
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Until tomorrow. Have a nice meal");
                await Template.ƒS.update(1);
                await Template.ƒS.Character.hideAll();
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "After that, you met with Satina and found out that she likes to eat sweat things");
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                break;
        }
    }
    Template.Mothrin_Talk = Mothrin_Talk;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Park_Mothrin() {
        let text = {
            Protagonist: {
                T0000: "Uhm, Mothrin, I..",
                T0001: "Oh, that was a bit sudden. But who am I to talk ? I feel the same way",
                T0002: "Yes. Because of you I have a job and friends. But most importrant: I have you "
            },
            Mothrin: {
                T0000: "Since that day I went into your room, I´ve developed feelings for you",
                T0001: "Really, you do ?"
            }
        };
        await Template.ƒS.Location.show(Template.locations.Park);
        await Template.ƒS.Character.show(Template.characters.Mothrin, Template.characters.Mothrin.pose.normal, Template.ƒS.positionPercent(105, 150));
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, Template.dataForSave.Protagonist.name + ", there is something I need to tell you");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Mothrin, text.Mothrin.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0002);
    }
    Template.Park_Mothrin = Park_Mothrin;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Park_Scales() {
        let text = {
            Protagonist: {
                T0000: "What do you mean ?",
                T0001: "I´m glad that we met, don´t worry about a thing"
            },
            Scales: {
                T0000: "I thought I would never make any friends here. I thought I would end up completely alone until the day I die. That thought haunted me all day and night, I almost went insane"
            }
        };
        await Template.ƒS.Location.show(Template.locations.Park);
        await Template.ƒS.Character.show(Template.characters.Scales, Template.characters.Scales.pose.normal, Template.ƒS.positionPercent(105, 150));
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
        await Template.ƒS.Speech.tell(Template.characters.Scales, "Thanks " + Template.dataForSave.Protagonist.name + ", I really needed this");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Scales, text.Scales.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0001);
    }
    Template.Park_Scales = Park_Scales;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Park_Shubaru() {
        let text = {
            Protagonist: {
                T0000: "Uhm, Shubaru, I.."
            },
            Shubaru: {
                T0000: "I´ve won 2 tickets for a space-trip. Would you like to join me ?"
            }
        };
        await Template.ƒS.Location.show(Template.locations.Park);
        await Template.ƒS.Character.show(Template.characters.Shubaru, Template.characters.Shubaru.pose.normal, Template.ƒS.positionPercent(105, 150));
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
        await Template.ƒS.Speech.tell(Template.characters.Shubaru, Template.dataForSave.Protagonist.name + " ,there is something I need to tell you");
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Shubaru, text.Shubaru.T0000);
        let spaceDecision = {
            goToSpace: "Sure, that sounds like it could get interesting",
            stayOnEarth: "No, thank you"
        };
        let spaceDecisionElement = await Template.ƒS.Menu.getInput(spaceDecision, "class");
        switch (spaceDecisionElement) {
            case spaceDecision.goToSpace:
                await Template.ƒS.Speech.tell(Template.characters.Shubaru, "I hoped you would say that.  The trip actually is tomorrow, so be sure to get enough sleep tonight");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "That could be dfifficult. I´m really exited");
                await Template.ƒS.Speech.tell(Template.characters.Shubaru, "You could sleep on my couch tonight, that way we could go there together first thing in the morning");
                await Template.ƒS.Speech.tell(Template.characters.Protagonist, "That sounds like a great idea");
                await Template.ƒS.update(1);
                await Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                return "Ending_Space";
                break;
            case spaceDecision.stayOnEarth:
                await Template.ƒS.Speech.tell(Template.characters.Shubaru, "Oh, I understand. Thank you for your time anyways, bro");
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "You continue walking through the park. After some time, you and Shubaru say good night and continue with your everyday life");
                break;
        }
    }
    Template.Park_Shubaru = Park_Shubaru;
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
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.normal, Template.ƒS.positionPercent(29, 150));
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