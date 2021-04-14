const cond1 = '';
const cond2 = 0;
const cond3 = false;
const cond4 = null;
const cond5 = undefined;

console.group("Condition with '||'")
console.log(cond1 || "Rudolf");
console.log(cond2 || "Rudolf");
console.log(cond3 || "Rudolf");
console.log(cond4 || "Rudolf");
console.log(cond5 || "Rudolf");
console.groupEnd()

console.group("Condition with '??'")
console.log(cond2 ?? "Rudolf");
console.log(cond1 ?? "Rudolf");
console.log(cond3 ?? "Rudolf");
console.log(cond4 ?? "Rudolf");
console.log(cond5 ?? "Rudolf");
console.groupEnd()