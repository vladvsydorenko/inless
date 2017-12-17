import { ILApp } from './ILApp';

/**
 * Application tool like connector, erase etc
 */
export interface ILTool {
    // unique tool id
    id: string;
    // contexts that tool is applicapable in
    contexts: string[];
    // user friendly title
    title: string;
    // user friendly description
    description: string;

    // on tool select
    activate: (app: ILApp) => void;
    // on tool deselect
    deactivate: (app: ILApp) => void;
}
