import { addLine } from '../shared/addLine';
import { ILLine } from '../shared/interfaces/ILLine';
import { LLineSetBase } from '../shared/LLineSetBase';
import { FullnameNode } from '../shared/testNodes/FullnameNode';

const node1 = new FullnameNode('node1');
const node2 = new FullnameNode('node2');
const nodes = [node1, node2];

const line: ILLine = {
    id: 'line1',
    inputNodeId: 'node1',
    inputSocketName: 'firstname',
    outputNodeId: 'node2',
    outputSocketName: 'fullname'
};
const lines = new LLineSetBase();

lines.container$.subscribe(() => {
    console.log('lines', lines);
});

addLine(line, nodes, lines);

setTimeout(() => {
    node1.input[0].type = 'number';
    (node1 as any).update();
    node1.input[0].type = 'string';
    (node1 as any).update();
}, 1000);

const app = {
    operators: {
        connect: [
            {
                inputNode: 'fullname',
                outputNode: 'var',
                inputSocketName: 'firstname',
                ouuputSocketName: 'get',
            }
        ]
    }
};
