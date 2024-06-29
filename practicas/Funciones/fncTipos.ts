const sumar = (valor1: number, valor2: number): number => {
  return valor1 + valor2;
};

function imprimir(): void {
  console.log("Test");
}

let sumar2: (a: number, b:number) => number;
sumar2 = sumar;

console.log(sumar2(2, 2));

sumar2 = imprimir; //error 