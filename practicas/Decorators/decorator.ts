interface IRequest {
  token: string;
  body: string;
}

interface APIEndpoints {
  get(): string[];
  post(request: IRequest): void;
}

let httpServer: { [key: string]: APIEndpoints } = {};

function registerEndpoint(target: any) {
  const className: string = target.name;
  const endpointPath: string = `/${className.toLowerCase()}`;
  httpServer[endpointPath] = new target();
}

function paramDecorator(target: any, key: string, index: number){
  console.log(target.constructor.name); 
  console.log(key); 
  console.log(index); 
}

function protect (token: string){
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    descriptor.value = function (request: IRequest) {
      if (request.token != token) {
        console.log("403 forbiden!!"); 
      } else {
        const bindingOriginalFunction = method.bind(this); 
        const result = bindingOriginalFunction(request); 
  
        return result; 
      }
    };
  }
}

@registerEndpoint
class Families implements APIEndpoints {
  private houses: string[] = ["Lannister", "Targaryen"];

  get(): string[] {
    return this.houses;
  }

  @protect("123")
  post(@paramDecorator request: IRequest): void {
    this.houses.push(request.body);
  }
}

@registerEndpoint
class Castles implements APIEndpoints {
  private castles: string[] = ["Winterfell", "Casterly Rock"];

  get(): string[] {
    return this.castles;
  }
  @protect("1234")
  post(request: IRequest): void {
    this.castles.push(request.body);
  }
}

httpServer['/castles'].post({token:"123", body: "Castle Pan"}); 
console.log(httpServer['/castles'].get()); 
httpServer['/families'].post({token:"123", body: "Castle Pan"}); 
console.log(httpServer['/families'].get()); 




