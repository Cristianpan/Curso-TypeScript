function imprimir(
  a: number,
  b: number,
  mostrar: (value: number) => void
): void {
  let resultado = a + b;
  mostrar(resultado);
}

imprimir(2, 2, (number) => {
  console.log(number);
});
