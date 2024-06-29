let value: number = 3; 

const element = document.getElementById("element"); 

//strict null check
console.log(element?.innerHTML); 


//no implicit any
function sumar(a: number, b:number): number{
    return a + b; 
}

console.log(sumar(2,3)); 