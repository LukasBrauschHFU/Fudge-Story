declare namespace Template {
    function Best_Friend_Ending(): ƒS.SceneReturn;
}
declare namespace Template {
    function Debug(): ƒS.SceneReturn;
}
declare namespace Template {
    function Ending_Evil(): ƒS.SceneReturn;
}
declare namespace Template {
    function Ending_Space(): ƒS.SceneReturn;
}
declare namespace Template {
    function Ending_World(): ƒS.SceneReturn;
}
declare namespace Template {
    function Introduction(): ƒS.SceneReturn;
}
declare namespace Template {
    function Learning_with_Mothrin(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    export let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    export let sound: {
        air: string;
        dio: string;
        space: string;
        filler: string;
        click: string;
    };
    export let locations: {
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
        HFU_Bathroom: {
            name: string;
            background: string;
        };
        HFU_Outside_L: {
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
    export let characters: {
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
                angel: string;
                happy: string;
                sad: string;
                angry: string;
            };
        };
        Prof: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        PlanetBig: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        PlanetSmall: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        BreadSun: {
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
                happy: string;
                sad: string;
                angry: string;
            };
        };
        Satina: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                sad: string;
                angry: string;
            };
        };
        Shubaru: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                sad: string;
                angry: string;
            };
        };
        Scales: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                sad: string;
                angry: string;
            };
        };
        Mother: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
    export let dataForSave: {
        Protagonist: {
            name: string;
        };
        Score: {
            score: number;
        };
        Transformation: {
            istransformed: boolean;
        };
        usedDonut: {
            used: boolean;
        };
        usedBread: {
            used: boolean;
        };
        usedChilli: {
            used: boolean;
        };
        usedFlashlight: {
            used: boolean;
        };
        MothrinAffection: {
            score: number;
        };
        SatinaAffection: {
            score: number;
        };
        ShubaruAffection: {
            score: number;
        };
        ScalesAffection: {
            score: number;
        };
        Interacted_with_Scales: {
            boolean: boolean;
        };
        state: {
            a: number;
        };
    };
    export let items: {
        Donut: {
            name: string;
            description: string;
            image: string;
            handler: typeof changeform;
        };
        Mothdust: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        EvilDonut: {
            name: string;
            description: string;
            image: string;
            handler: typeof useDonut;
        };
        Bread: {
            name: string;
            description: string;
            image: string;
            handler: typeof useBread;
        };
        Chilli: {
            name: string;
            description: string;
            image: string;
            handler: typeof useChilli;
        };
        Flashlight: {
            name: string;
            description: string;
            image: string;
            handler: typeof useFlashlight;
        };
    };
    export function incrementSound(): void;
    export function decrementSound(): void;
    function changeform(): void;
    function useDonut(): void;
    function useBread(): void;
    function useChilli(): void;
    function useFlashlight(): void;
    export {};
}
declare namespace Template {
    function Meet_Satina(): ƒS.SceneReturn;
}
declare namespace Template {
    function Meet_Scales(): ƒS.SceneReturn;
}
declare namespace Template {
    function Meet_Shubaru(): ƒS.SceneReturn;
}
declare namespace Template {
    function Mensa(): ƒS.SceneReturn;
}
declare namespace Template {
    function Mothrin_Talk(): ƒS.SceneReturn;
}
declare namespace Template {
    function Park_Mothrin(): ƒS.SceneReturn;
}
declare namespace Template {
    function Park_Scales(): ƒS.SceneReturn;
}
declare namespace Template {
    function Park_Shubaru(): ƒS.SceneReturn;
}
declare namespace Template {
    function Start_Bedroom(): ƒS.SceneReturn;
}
