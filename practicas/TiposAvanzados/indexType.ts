interface ErrorType {
  [key: string]: string;
}

const errorMessage: ErrorType = {
  email: "Email invalido",
  password: "Contraseña invalida",
};

console.log(errorMessage);
