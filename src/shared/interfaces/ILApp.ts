import { ILTool } from './ILTool';
import { ILNode } from './ILNode';
import { Observable } from 'rxjs';

/**
 * Application
 */
export interface ILApp {
    // all available tools
    tools: ILTool[];
    // currenly active tool
    activeTool: ILTool;
    // application context
    // it is useful to enable or disable specific tools in some context
    activeContext: string;
    // current active top-level html element
    activeElement: HTMLElement;

    bus: {
        selectedSocket$: Observable<any>;
        deselectedSocket$: Observable<any>;
        selectedNode$: Observable<ILNode>;
        deselectedNode$: Observable<ILNode>;
     };
}
