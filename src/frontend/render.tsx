import * as React from 'react';
import { render as renderDOM } from 'react-dom';
import { ILNode, ELNodeSocketRole } from '../shared/interfaces/ILNode';
import { LNode } from './components/LNode/LNode';

export const render = (elementId: string) => {
    const testNode: ILNode = {
        id: 'test',
        name: 'getFullname',
        description: 'This is a description',
        meta: [
            {
                role: ELNodeSocketRole.META,
                name: 'separartor',
                type: 'string',
            },
            {
                role: ELNodeSocketRole.META,
                name: 'separartor2',
                type: 'number',
            },
        ],
        input: [
            {
                role: ELNodeSocketRole.INPUT,
                name: 'firstname',
                type: 'string',
            },
            {
                role: ELNodeSocketRole.INPUT,
                name: 'lasttname',
                type: 'string',
            },
        ],
        output: [
            {
                role: ELNodeSocketRole.OUTPUT,
                name: 'fullname',
                type: 'string',
            },
        ],
    };

    renderDOM(
        <LNode node={testNode} />,
        document.getElementById(elementId)
    );
};
