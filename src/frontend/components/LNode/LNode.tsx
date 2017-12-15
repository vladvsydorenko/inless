import * as React from 'react';
import style from './LNode.css';
import { ILNode, ILNodeSocket } from '../../../shared/interfaces/ILNode';
import { LSocket } from './LSocket';

export interface ILNodeProps {
    node: ILNode;
}

const renderSockets = (sockets: ILNodeSocket[]) => {
    return sockets.map((socket, index) => (
        <LSocket key={index} socket={socket} />
    ));
};

export const LNode = ({ node }: ILNodeProps) => {
    return (
        <div className={style.node}>
            <h2 className={style.title}>({node.type}) {node.name}</h2>
            <div className={style.inputBox}>{ renderSockets(node.input) }</div>
            <div className={style.outputBox}>{ renderSockets(node.output) }</div>
            <div className={style.metaBox}>{ renderSockets(node.meta) }</div>
        </div>
    );
};
