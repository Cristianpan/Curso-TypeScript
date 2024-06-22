interface Media {
  title: string;
  genres: string[];
  director?: { name: string };
}

const fetchMediaData: Media = {
    title: "goodfellas", 
    genres: ['drama', 'crime']
}

console.log(fetchMediaData.director?.name); 

//Nullish Coallesing

console.log(fetchMediaData.director ?? "Director no encontrado"); 

