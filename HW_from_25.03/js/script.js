let url = "https://randomuser.me/api/?results=10"
let users = []
let container = document.querySelector('.contacts__container')
let surchInput = document.querySelector('.contacts__serch__container input')

const fetchData = async(url) => {
  try {
      let res = await fetch(url);
      let data = await res.json();
    return data   
  } catch (err) {
      console.log(err);
  }
}

function renderContacts(contacts) {
  container.innerHTML =''
  contacts.forEach(contact => {
    let item = document.createElement('div')
        item.classList.add('contact__item')

    let itemImg = document.createElement('img')
        itemImg.src = contact.picture.thumbnail

    let itemData = document.createElement('div')
        itemData.classList.add('contact__item__data')

    let itemName = document.createElement('h3')
        itemName.classList.add('item__name')
    let itemFirstName = document.createElement('span')
        itemFirstName.innerText = contact.name.first
    let itemLastName = document.createElement('span')
        itemLastName.innerText = contact.name.last
    let itemPhone = document.createElement('p')
        itemPhone.innerText = contact.phone

    itemName.append(itemFirstName, itemLastName)
    itemData.append(itemName, itemPhone)
    item.append(itemImg, itemData)
    container.append(item)
  })
}

function filterContacts(event) {
  let elem = event.target.value
  // console.log(elem)
  users = users.filter(user => user.name.first.includes(elem) || user.name.last.includes(elem) )
  renderContacts(users)
}

const render = async () => {
  let data = await fetchData(url)
  users = data.results
  renderContacts(users)
}

render()

surchInput.addEventListener("keyup",  (event) => filterContacts(event) )





