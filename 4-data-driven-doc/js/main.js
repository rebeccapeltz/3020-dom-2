function createPersonEl(name) {
  let nameEl = document.createElement('li')
  nameEl.innerHTML = `${name}`
  return nameEl
}

fetch('https://swapi.co/api/people')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    // console.log(JSON.stringify(myJson));
    let personList = document.querySelector('.person-api-list')
    for (let person of myJson.results) {
      console.log(person.name)
      personList.appendChild(createPersonEl(person.name))
    }
  });