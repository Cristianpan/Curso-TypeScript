interface ValidationData {
  [className: string]: {
    [propName: string]: string[]; //["required", "password"]
  };
}

const validations: ValidationData = {};
function validator(types: string[]) {
  return function (target: any, propName: string) {
    validations[target.constructor.name] = {
      [propName]: types,
      ...validations[target.constructor.name]
    };
  };
}

function validate(obj: any) {
  const validationRegistered = validations[obj.constructor.name];

  if (!validationRegistered) {
    return true;
  }

  let isValid = true; 
  for (const prop in validationRegistered) {
    for (const validator of validationRegistered[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "password":
          isValid = isValid &&  obj[prop].length > 5;
      }
    }
  }

  return isValid; 
}

class Person {
  @validator(["required"])
  email: string;
  @validator(["required", "password"])
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

const personForm = document.querySelector("form") as HTMLFormElement;

personForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailElement: HTMLInputElement = document.getElementById(
    "email"
  ) as HTMLInputElement;
  const passwordElement: HTMLInputElement = document.getElementById(
    "password"
  ) as HTMLInputElement;

  const person = new Person(emailElement.value, passwordElement.value);
  
  if (!validate(person)){
    alert('El valor ingresado es incorrecto'); 
    return; 
  }

  console.log(person); 
});
