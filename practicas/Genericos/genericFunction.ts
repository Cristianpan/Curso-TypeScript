function printString(arr: string[]): void {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]); 
    }
}
function printNumber0(arr: number[]): void {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]); 
    }
}

function printArr<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]); 
    }
}

printArr<string>(["a", "b", "c"]); 
printArr<number>([1,2,3,4]); 