namespace Template {
    export async function Ending(): ƒS.SceneReturn {
        ƒS.Sound.fade(sound.ending, 0.2, 2, true);
        let pages: string =
            "<strong>Credits:</strong><br></br> \
            <br></br> <strong>Lukas Brausch (me):</strong><br></br> \
            <br>- Serenade of Darkness (Dark Theme)</br>\
            <br>- All sprites</br>\
            <br>- All backgrounds</br>\
            <br>- Story</br>\
            <br></br> <strong>Classical Music :</strong><br></br> \
            <br>- La Crimosa - Mozart: https://imslp.org/wiki/Requiem_in_D_minor%2C_K.626_(Mozart%2C_Wolfgang_Amadeus)</br> \
            <br>- Air - Bach: https://imslp.org/wiki/Orchestral_Suite_No.3_in_D_major,_BWV_1068_(Bach,_Johann_Sebastian)</br>\
            <br>- Also Sprach Zarathustra - Strauss: https://imslp.org/wiki/Also_sprach_Zarathustra%2C_Op.30_(Strauss%2C_Richard)</br>\
            <br></br> <strong>Sound Effects :</strong><br></br> \
            <br>- Creaking: https://freesound.org/people/Lightnessko/sounds/390323/</br> \
            <br>- Walking on metal: https://freesound.org/people/NachtmahrTV/sounds/556715/</br> \
            <br>- Metal clank: https://freesound.org/people/vibe_crc/sounds/59317/</br> \
            <br></br> <strong>Kevin MacLeod Music :</strong><br></br> \
            <br>- Not as it seems: https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100762</br> \
            <br>- Blue Ska: https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1600011</br> \
            <br>- Lightless Dawn: https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100655</br> \
            <br></br> <strong>Souichi Sakagami Music :</strong><br></br> \
            <br>- Afford: https://www.tandess.com/en/music/free-material/material.html </br> \
            <br>- Delusion: https://www.tandess.com/en/music/free-material/material.html</br> \
            <br>- Daybreak: https://www.tandess.com/en/music/free-material/material.html</br>\
            <br>- cuddle_love_short1: https://www.tandess.com/en/music/free-material/material.html</br> \
            ";
        await ƒS.Location.show(locations.Black);
        await ƒS.update(1);
        ƒS.Speech.hide();
        ƒS.Text.addClass("credits");
        ƒS.Text.print(pages + "The end");
        //    ƒS.Sound.fade(sound.ending, 0, 1, false);
    }
}