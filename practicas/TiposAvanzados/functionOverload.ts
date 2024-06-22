type stringOrArray = string[] | string;

function reverse(stringOrArray: string): string;
function reverse(stringOrArray: string[]): string[];

function reverse(stringOrArray: stringOrArray): stringOrArray {
  return typeof stringOrArray === "string"
    ? stringOrArray.split("").reverse().join("")
    : stringOrArray.slice().reverse();
}


//const ouput = reverse('abcd'); 
const ouput = reverse(['a', 'b', 'c']); 
console.log(ouput); 

