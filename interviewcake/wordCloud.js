function wordCloud(input) {
  const cloud = new Map();

  const arr = input.split(' ');

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index].toLowerCase();
    

    if (cloud.has(element)) {
      cloud.set(element, cloud.get(element) + 1);
    } else {
      cloud.set(element, 1);
    }
    
  }

}

