import * as React from 'react';
import { render as renderDOM } from 'react-dom';
import { ILNode, ELNodeSocketRole } from '../shared/interfaces/ILNode';
import { LNode } from './components/LNode/LNode';

export const render = (elementId: string) => {
    const testNode: ILNode = {
        id: 'test',
        name: 'input',
        type: 'function',
        description: 'This is a description',
        meta: [
            {
                role: ELNodeSocketRole.META,
                name: 'separartor',
                type: 'string',
            },
            {
                role: ELNodeSocketRole.META,
                name: 'delegat',
                type: 'function',
            },
        ],
        input: [
            {
                role: ELNodeSocketRole.INPUT,
                name: 'delegat',
                type: 'delegat',
            },
            // {
            //     role: ELNodeSocketRole.INPUT,
            //     name: 'lasttname',
            //     type: 'string',
            // },
        ],
        output: [
            {
                role: ELNodeSocketRole.OUTPUT,
                name: 'fullname',
                type: 'string',
            },
            // {
            //     role: ELNodeSocketRole.OUTPUT,
            //     name: 'lastname',
            //     type: 'string',
            // },
            // {
            //     role: ELNodeSocketRole.OUTPUT,
            //     name: 'fullname',
            //     type: 'string',
            // },
        ],
    };

    renderDOM(
        <LNode node={testNode} />,
        document.getElementById(elementId)
    );
};
