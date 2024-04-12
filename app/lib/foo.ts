const NUMS_CALC = [ 7, 8, 9, 4, 5, 6, 1, 2, 3, 0 , '.', 'C'];
const OPERATIONS_CALC = ['+',  '-', '*', '/', '=', '<'];

function delLostElement(foo:(ar:string[])=> void, arr:string[]) {
  foo(arr.slice(0, arr.length - 1));
}

function clearValue(foo:(ar:string[]) => void) {
  foo([])
}

function totalValue(setTotal:(arr:any)=> void, initValue: string[], clearValue:(f:any)=>void, setIntiValue:(arr:any)=>void) {
  setTotal(eval(initValue.join('')));
  clearValue(setIntiValue);
}

export {clearValue, delLostElement, totalValue, OPERATIONS_CALC, NUMS_CALC}