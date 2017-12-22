import { ILNode, ILNodeSocket } from '../ILNode';
import { ILConnection } from '../ILConnection';

export namespace nodeUtil {
    export enum ELNodeSocketRole { input, output };

    export const socketsHaveSameTypes = (connection: ILConnection, inputNode: ILNode, outputNode: ILNode): boolean => {
        const { inputNodeId, inputSocketName, outputNodeId, outputSocketName } = connection;
        const inputSocket = findSocket(inputSocketName, inputNode, ELNodeSocketRole.input);
        const outputSocket = findSocket(outputSocketName, outputNode, ELNodeSocketRole.output);

        return inputSocket.type === outputSocket.type;
    };

    export const findSocket = (name: string, node: ILNode, role: ELNodeSocketRole): ILNodeSocket | undefined => {
        const socketGroup = role === ELNodeSocketRole.input ? node.input : node.output;

        return socketGroup.find(socket => socket.name === name);
    }

    export const determineNodes = (connection: ILConnection, nodeA: ILNode, nodeB: ILNode) => {
        const isAInput = connection.inputNodeId === nodeA.id;

        return {
            inputNode: isAInput ? nodeA : nodeB,
            outputNode: isAInput ? nodeB : nodeA,
        };
    }

    export const findSocketsByConnection = (connection: ILConnection, nodeA: ILNode, nodeB: ILNode) => {
        const { inputNode, outputNode } = determineNodes(connection, nodeA, nodeB);
        const { inputSocketName, outputSocketName } = connection;
        const inputSocket = findSocket(connection.inputSocketName, inputNode, ELNodeSocketRole.input);
        const outputSocket = findSocket(connection.inputSocketName, inputNode, ELNodeSocketRole.output);

        if (!inputSocket || !outputSocket) throw new Error(`Can't find "${inputSocketName}" or "${outputSocketName}"`);

        return { inputSocket, outputSocket };
    }
}
