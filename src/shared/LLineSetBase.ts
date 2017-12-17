import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ILLine } from './interfaces/ILLine';

export class LLineSetBase {
    public lines: ILLine[];
    public container$: BehaviorSubject<LLineSetBase>;

    constructor(lines: ILLine[] = []) {
        this.lines = lines;
        this.container$ = new BehaviorSubject<LLineSetBase>(this);
    }

    public add(line: ILLine) {
        this.removeById(line.id, false);
        this.lines.push(line);
        this.update();
    }

    public findById(id: string): ILLine | undefined {
        return this.lines.find(v => v.id === id);
    }

    public removeById(id: string, doUpdate: boolean = true): boolean {
        let index;
        const foundLine = this.lines.find((line, i) => {
            if (line.id === id) {
                index = i;
                return true;
            }
            return false;
        });

        if (!foundLine) return false;

        this.lines.splice(index, 1);
        if (doUpdate) this.update();
        return true;
    }

    public update() {
        this.container$.next(this);
    }

}
