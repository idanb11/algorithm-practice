function inflightEntertainment(flightLength, movieLengths) {
  const obj = {};
  for (let index = 0; index < movieLengths.length; index++) {
    const element = movieLengths[index];
    
    if (obj[element]) {
      
    } else {
      obj[element] = element;
    }
    
  }

}
