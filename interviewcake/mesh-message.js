function findFastestRoute(network, sender, recipient) {
  const route = [];
  const nodes = [];
  // nodes.push([sender, recipient]);
  const end = recipient;
  const start = sender;

  for (const key in network) {
    if (network.hasOwnProperty(key) && key !== end) {
      const element = network[key];

      if (element.includes(end)) {
        route.push(key);
      } 
      
    }
  }
  return route;


  // while (nodes.length) {
  //   const startEnd = nodes.pop();
  //   const start = startEnd[0];
  //   const end = startEnd[1];

  //   if (network[start].includes(end)) {
  //     route.push(start);
  //     route.push(end);
  //     return route;
  //   }

  //   network[start].forEach((element) => {
  //     nodes.push([element, end]);
  //   });
  // }

  
}

const network = {
  Min: ["William", "Jayden", "Omar"],
  William: ["Min", "Noam"],
  Jayden: ["Min", "Amelia", "Ren", "Noam"],
  Ren: ["Jayden", "Omar"],
  Amelia: ["Jayden", "Adam", "Miguel"],
  Adam: ["Amelia", "Miguel", "Sofia", "Lucas"],
  Miguel: ["Amelia", "Adam", "Liam", "Nathan"],
  Noam: ["Nathan", "Jayden", "William"],
  Omar: ["Ren", "Min", "Scott"],
};

console.log(findFastestRoute(network, "Jayden", "Adam"));
