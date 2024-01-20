export interface IStyles {
    img:string | null;
    img2?:string;
    coord?:{x:number, y:number, player:IPlayer},

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

export interface IBoard {
    handler: (evt: any) => void;
    coord: any;
  idx?:{xIdx:number, yIdx:number};
}

export interface IMode {
mode: string,
}

export type IPlayer =
    "player1" | "player2" | "cpu"


    export interface IActive {
        activePlayer:IPlayer;
    }