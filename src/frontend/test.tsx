import * as React from 'react';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { render } from 'react-dom';
import { ILNode } from '../shared/ILNode';
import { ILConnection } from '../shared/ILConnection';
import { LApplication } from '../shared/LApplication';
import { UIScene } from './components/UIScene/UIScene';

const testNode: ILNode = {
    id: 'test',
    name: 'testNode',
    input: [
        {
            name: 'firstname',
            type: 'string'
        },
        {
            name: 'secondname',
            type: 'string'
        }
    ],
    output: [
        {
            name: 'fullname',
            type: 'string'
        }
    ]
};

const app = new LApplication();
app.addNode(testNode);

const latest$ =  combineLatest(app.nodes$, app.connections$)
    .subscribe(([ nodes, connections ]) => render(<UIScene nodes={ nodes } connections={ connections }/>, document.getElementById('app')));

setTimeout(() => {
    const node2 = Object.assign({}, testNode, { id: 'test2' });
    const node3 = Object.assign({}, testNode, { id: 'test3' });
    app.addNode(node2);
    app.addNode(node3);
}, 2000);
