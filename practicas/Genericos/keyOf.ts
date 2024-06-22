function findValue<T extends object, U extends keyof T>(object: T, key: U){
    return object[key]; 
}

console.log(findValue({name: "Rodrigo"}, "name")); 