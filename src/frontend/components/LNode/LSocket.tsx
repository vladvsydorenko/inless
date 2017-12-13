import * as React from 'react';
import { ILNodeSocket, ELNodeSocketRole } from '../../../shared/interfaces/ILNode';
import style from './LSocket.css';

export interface ILSocketProps {
    socket: ILNodeSocket;
}

const socketRoleClassMap = {
    [ELNodeSocketRole.INPUT]: 'socketInput',
    [ELNodeSocketRole.OUTPUT]: 'socketOutput',
    [ELNodeSocketRole.META]: 'socketMeta',
};

const circleRoleClassMap = {
    [ELNodeSocketRole.INPUT]: 'socketCircleInput',
    [ELNodeSocketRole.OUTPUT]: 'socketCircleOutput',
    [ELNodeSocketRole.META]: 'socketCircleMeta',
};

export const LSocket = ({ socket }: ILSocketProps) => {
    const modifierClassName = (style as any)[socketRoleClassMap[socket.role]];
    const circleModifierClassName = (style as any)[circleRoleClassMap[socket.role]];

    const nameElement = <span key="name">{ socket.name } ({ socket.type })</span>;
    const circleElement = <div key="circle" className={`${style.socketCircle} ${circleModifierClassName}`}></div>;

    return (
        <div className={`${style.socket} ${modifierClassName}`}>
            { socket.role === ELNodeSocketRole.INPUT ? [circleElement, nameElement] : [nameElement, circleElement] }
        </div>
    );
};
