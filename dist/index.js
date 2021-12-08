"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumbers = void 0;
function timeout(n) {
    return new Promise((res) => setTimeout(res, n));
}
;
async function addNumbers(a, b) {
    await timeout(500);
    return a + b;
}
exports.addNumbers = addNumbers;
;
(async () => {
    console.log(await addNumbers(3, 4));
})();
