import { Subject } from 'rxjs/Subject';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { merge } from 'rxjs/observable/merge';
import { ILLine } from './interfaces/ILLine';
import { LNodeBase } from './LNodeBase';
import { LLineSetBase } from './LLineSetBase';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

export const addLine = (line: ILLine, nodes: LNodeBase[], lines: LLineSetBase) => {
    const inputNode = nodes.find(node => node.id === line.inputNodeId);
    const outputNode = nodes.find(node => node.id === line.outputNodeId);

    if (!inputNode || !outputNode) throw new Error(`There are no "${line.inputNodeId}" and/or "${line.outputNodeId}" nodes`);

    const end$ = new Subject<any>();
    const inputNode$ = inputNode.container$.takeUntil(end$);
    const outputNode$ = outputNode.container$.takeUntil(end$);
    const canConnectToInput$ = inputNode.canConnect(line, outputNode$);
    const canConnectToOutput$ = outputNode.canConnect(line, inputNode$);

    const failed$ = merge(canConnectToInput$, canConnectToOutput$).filter(value => !value).take(1);
    const success$ = combineLatest([canConnectToInput$, canConnectToOutput$])
        .takeUntil(failed$);

    success$.subscribe({
        next: () => lines.add(line),
        complete: () => {
            lines.removeById(line.id);
            // it will not work without any value
            end$.next(null);
            end$.complete();
        },
    });
}
