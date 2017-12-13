export enum ELNodeSocketRole { 
    INPUT,
    OUTPUT,
    META,
 }

export interface ILNodeSocket {
    role: ELNodeSocketRole;
    name: string;
    type: string;
}

export interface ILNode {
    id: string;
    name: string;
    description: string;
    meta: ILNodeSocket[];
    input: ILNodeSocket[];
    output: ILNodeSocket[];
}
