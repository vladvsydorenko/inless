import { Observable } from 'rxjs/Observable';
import { LNodeBase, ILSocket, ESocketRole } from '../LNodeBase';
import { ILLine } from '../interfaces/ILLine';

export class FullnameNode extends LNodeBase {
    public input: ILSocket[] = [
        {
            name: 'firstname',
            type: 'string',
        },
        {
            name: 'lastname',
            type: 'string',
        }
    ];

    public output: ILSocket[] = [
        {
            name: 'fullname',
            type: 'string',
        }
    ];
}
