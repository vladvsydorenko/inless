import { ILConnection } from './ILConnection';

export interface ILNodeSocket {
    name: string;
    type: string;
};

export interface ILNode {
    id: string;
    name: string;
    input: ILNodeSocket[];
    output: ILNodeSocket[];
}
