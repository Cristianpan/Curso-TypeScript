class Family {
  constructor(
    public readonly name: string,
    public readonly castles: string[]
  ) {}
}

const lanister = new Family("Lannister", ["winterfell", "Casterly Rock"]);
const targaryen = new Family("Targaryen", ["winterfell2", "Casterly Rock2"]);

const families: Family[] = [lanister, targaryen];

function getCastlesByFamily(family: string): Promise<string[]> {
  let p: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      let foundCastles = families.filter((x) => x.name == family);

      if (foundCastles.length > 0) {
        resolve(foundCastles.map((x) => x.castles)[0]);
      } else {
        reject("No se encontraron Castillos");
      }
    }, 2000);
  });

  return p;
}

console.log("Comenzando la busqueda...");
getCastlesByFamily("Lannister")
  .then((castles) => {
    console.log(`Castillos encontrados: ${castles.join(", ")}`);
    return castles.length;
  }).then(numberCastles => console.log(`No. Encontrados: ${numberCastles}`))
  .catch((reason) => console.log(`Error: ${reason}`));

console.log("Busqueda terminada...");
