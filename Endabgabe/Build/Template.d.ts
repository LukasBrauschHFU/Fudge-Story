declare namespace Template {
    function Text(): ƒS.SceneReturn;
}
declare namespace Template {
    function Animation(): ƒS.SceneReturn;
}
declare namespace Template {
    function Decisions(): ƒS.SceneReturn;
}
declare namespace Template {
    function Decisions1(): ƒS.SceneReturn;
}
declare namespace Template {
    function Decisions2(): ƒS.SceneReturn;
}
declare namespace Template {
    function Decisions3(): ƒS.SceneReturn;
}
declare namespace Template {
    function Ending_World(): ƒS.SceneReturn;
}
declare namespace Template {
    function Introduction(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        air: string;
        dio: string;
        filler: string;
        click: string;
    };
    let locations: {
        HFU: {
            name: string;
            background: string;
        };
        HFU_Inner: {
            name: string;
            background: string;
        };
        HFU_Back: {
            name: string;
            background: string;
        };
        HFU_Room: {
            name: string;
            background: string;
        };
        HFU_Outside_I: {
            name: string;
            background: string;
        };
        HFU_Park: {
            name: string;
            background: string;
        };
        HFU_River: {
            name: string;
            background: string;
        };
        Park: {
            name: string;
            background: string;
        };
        Black: {
            name: string;
            background: string;
        };
        Bedroom_Light: {
            name: string;
            background: string;
        };
        Bedroom_Dark: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Mystery: {
            name: string;
        };
        Protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                sad: string;
                angel: string;
            };
        };
        Prof: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Mothrin: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                shadow: string;
                smile: string;
                sad: string;
            };
        };
        Satina: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                sad: string;
            };
        };
        Mother: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                shadow: string;
                smile: string;
                sad: string;
            };
        };
    };
    let dataForSave: {
        Protagonist: {
            name: string;
        };
        Score: {
            score: number;
        };
        Transformation: {
            istransformed: boolean;
        };
        MothrinAffection: {
            score: number;
        };
        state: {
            a: number;
        };
    };
    let items: {
        Pokeball: {
            name: string;
            description: string;
            image: string;
        };
        Pokeball2: {
            name: string;
            description: string;
            image: string;
        };
        Donut: {
            name: string;
            description: string;
            image: string;
        };
    };
    function incrementSound(): void;
    function decrementSound(): void;
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function Start_Bedroom(): ƒS.SceneReturn;
}
