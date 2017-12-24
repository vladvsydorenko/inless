import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ILConnection } from './ILConnection';
import { ILNode } from './ILNode';

export class LApplication {
    public nodes$: BehaviorSubject<ILNode[]> = new BehaviorSubject<ILNode[]>([]);
    public connections$: BehaviorSubject<ILConnection[]> = new BehaviorSubject<ILConnection[]>([]);
    private nodes: ILNode[] = [];
    private connections: ILConnection[] = [];

    /**
     * Add a node
     * @param {ILNode} node Adding node
     * @returns {boolean}
     */
    public addNode(node: ILNode): boolean {
        if (!this.canAddNode(node)) return false;
        this.nodes.push(node);
        this.nodes$.next(this.nodes);
        return true;
    }

    /**
     * Remove a node by id
     * @param id Node Id
     * @throws `Can't remove not existed node "${id}"`
     */
    public removeNodeById(id: string) {
        const foundNode = this.findNodeById(id);
        if (!foundNode) throw new Error(`Can't remove not existed node "${id}"`);
        const index = this.nodes.indexOf(foundNode);
        this.nodes.splice(index, 1);
        this.nodes$.next(this.nodes);
    }

    /**
     * Find a node by Id
     * @param {string} id Node Id
     * @returns {ILNode | undefined} Node if any found
     */
    public findNodeById(id: string): ILNode | undefined {
        return this.nodes.find(node => node.id === id);
    }

    /**
     * Check if a node could be added
     * @param {ILNode} node
     * @returns {boolean}
     */
    public canAddNode(node: ILNode): boolean {
        return true;
    }

    /**
     * Add a connection to the set of connections
     * @param connection 
     * @returns {boolean} Returns true if added, false if can't be added
     */
    public addConnection(connection: ILConnection): boolean {
        if (!this.canAddConnection(connection)) return false;
        this.connections.push(connection);
        this.connections$.next(this.connections);
        return true;
    }

    /**
     * Remove a connection by id
     * @param id Connection Id
     * @throws `Can't remove not existed connection "${id}"`
     */
    public removeConnectionById(id: string) {
        const foundConnection = this.findConnectionById(id);
        if (!foundConnection) throw new Error(`Can't remove not existed connection "${id}"`);
        const index = this.connections.indexOf(foundConnection);
        this.connections.splice(index, 1);
        this.connections$.next(this.connections);
    }

    /**
     * Find a connection by Id
     * @param {string} id Connection Id
     * @returns {ILConnection | undefined} Connection if any found
     */
    public findConnectionById(id: string): ILConnection | undefined {
        return this.connections.find(node => node.id === id);
    }

    /**
     * Check if connection could be added
     * @param {ILConnection} connection
     * @returns {boolean}
     */
    public canAddConnection(connection: ILConnection): boolean {
        // todo: implement checking
        return true;
    }
}
