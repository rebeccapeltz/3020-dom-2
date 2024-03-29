function createPersonEl(title,firstname,lastname,email) {
  let nameEl = document.createElement('li')
  nameEl.innerHTML = `${title} ${firstname} ${lastname} ${email}`
  return nameEl
}

fetch('https://randomuser.me/api/?results=3')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(JSON.stringify(myJson));
    let personList = document.querySelector('.person-api-list')
    for (let person of myJson.results) {
      console.log(person.name.first)
      personList.appendChild(createPersonEl(person.name.title, person.name.first, person.name.last, person.email))
    }
  });