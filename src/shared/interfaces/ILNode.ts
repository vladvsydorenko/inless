import { Observable } from 'rxjs/Observable';
import { ILApp } from './ILApp';

/**
 * Socket is a connection point for a node
 */
export interface ILNodeSocket {
    // unique in one socket group (like input, output etc)
    name: string;
    // node id socket is placed in
    nodeId: string;
    // socket role
    role: string;
    // socket type
    type: string;
}

/**
 * The main building block
 */
export interface ILNode {
    // unique id
    id: string;
    // unique name in a list of available nodes
    name: string;
    // input sockets
    input: ILNodeSocket[];
    // output sockets
    output: ILNodeSocket[];
}
