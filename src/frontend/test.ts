import { Subject } from 'rxjs/Subject';

export class A {
    b: any = new Subject();

    constructor() {
        console.log('Yeah it!');
    }
}
