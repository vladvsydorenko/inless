import { ILNode } from '../shared/ILNode';
import { ILConnection } from '../shared/ILConnection';
import { nodeUtil } from '../shared/util/node';

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
