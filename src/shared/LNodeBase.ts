import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ILLine } from './interfaces/ILLine';
import 'rxjs/add/operator/map';

export enum ESocketRole { INPUT, OUTPUT };

/**
 * Socket is a connection point for a node
 */
export interface ILSocket {
    // unique in one socket group (like input, output etc)
    name: string;
    // socket type
    type: string;
}

/**
 * The main application building block
 */
export class LNodeBase {
    // Node uniquie identificatior
    public id: string;
    // set of node inputs
    public input: ILSocket[];
    // Set of node outputs
    public output: ILSocket[];
    // container is using to notify another guys
    public container$: BehaviorSubject<LNodeBase>;

    constructor(id: string, input: ILSocket[] = [], output: ILSocket[] = []) {
        this.id = id;
        this.input = input;
        this.output = output;
        this.container$ = new BehaviorSubject<LNodeBase>(this);
    }

    /**
     * Check that some node could be connected by a speficic line
     * In default way it will be redirected to canConnectToInput or canConnectToOutput
     * @param {ILLine} line 
     * @param {Observable<LNodeBase>} anotherNode$
     * @returns {Observable<boolean>}
     */
    public canConnect(line: ILLine, anotherNode$: Observable<LNodeBase>): Observable<boolean> {
        return line.inputNodeId === this.id ?
            this.canConnectToInput(line, anotherNode$) :
            this.canConnectToOutput(line, anotherNode$);
    }

    /**
     * Check that some node could be connected by a speficic line to this node's input
     * @param {ILLine} line 
     * @param {Observable<LNodeBase>} outputNode$
     * @returns {Observable<boolean>}
     */
    public canConnectToInput(line: ILLine, outputNode$: Observable<LNodeBase>): Observable<boolean> {
        const self = this;
        return outputNode$.map(outputNode => {
            const inputSocket = self.findSocket(line.inputSocketName, ESocketRole.INPUT);
            const outputSocket = outputNode.findSocket(line.outputSocketName, ESocketRole.OUTPUT);
            return inputSocket && outputSocket && (inputSocket.type === outputSocket.type);
        });
    }

    /**
     * Check that some node could be connected by a speficic line to this node's output
     * @param {ILLine} line 
     * @param {Observable<LNodeBase>} inputNode$
     * @returns {Observable<boolean>}
     */
    public canConnectToOutput(line: ILLine, inputNode$: Observable<LNodeBase>): Observable<boolean> {
        const self = this;
        return inputNode$.map(inputNode => {
            const inputSocket = inputNode.findSocket(line.inputSocketName, ESocketRole.INPUT);
            const outputSocket = self.findSocket(line.outputSocketName, ESocketRole.OUTPUT);
            return inputSocket && outputSocket && (inputSocket.type === outputSocket.type);
        });
    }

    /**
     * Find a socket by name and role
     * @param {string} name Socket name
     * @param {ESocketRole} role Socket role
     * @returns {ILSocket | undefined} Socket object if found
     */
    public findSocket(name: string, role: ESocketRole = ESocketRole.INPUT): ILSocket | undefined {
        const sockets = role === ESocketRole.INPUT ? this.input : this.output;
        return sockets.find(v => v.name === name);
    }

    /**
     * Update container with the node
     */
    protected update() {
        this.container$.next(this);
    }
}
