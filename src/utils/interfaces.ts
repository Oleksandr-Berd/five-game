export interface IStyles {
    img:string | null;
    img2?:string;
}

export interface INav {
    content:string,
    path:string,
}

export interface IButton {
    handler:()=>void,
    content: string,
}

export interface ILogo {
    location: "home" | "board"
}

