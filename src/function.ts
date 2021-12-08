function combine(a: string, b: string): string
function combine(a: number, b: number): number
function combine(a: string | number, b: string | number) {
    if (typeof a === 'string' && typeof b === "string") {
        return a + b;
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else throw new Error();
}
const a = 1;
const b = 'string';

combine(a, b);