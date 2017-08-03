import Rx from 'rxjs';

let count = 0;
export const subject = new Rx.Subject(count);

export function add() {
    subject.next(count++);
}

export function subtracter() {
    subject.next(count--)
}