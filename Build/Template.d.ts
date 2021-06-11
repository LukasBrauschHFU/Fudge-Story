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
        backgroundTheme: string;
        click: string;
    };
    let locations: {
        city: {
            name: string;
            background: string;
        };
        Dorm: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                sad: string;
            };
        };
        Ryu: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
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
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
