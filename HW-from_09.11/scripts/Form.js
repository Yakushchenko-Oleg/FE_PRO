const body = document.querySelector('body')
const main = document.createElement('main')
main.classList.add('main')
body.append(main)

const formContainer = document.createElement('div')
formContainer.classList.add('formContainer')
main.append(formContainer)

const registrForm = document.createElement('form')
registrForm.classList.add('registrForm')
formContainer.append(registrForm)

const titlecont = document.createElement('div')
titlecont.classList.add('form__titlecont')

const title = document.createElement('h2')
title.classList.add('form__title')
title.innerText = 'Create account'
const linksContainer = document.createElement('div')
linksContainer.classList.add('form__linksContainer')
titlecont.append(title, linksContainer)

const linkFacebook = document.createElement('a')
linkFacebook.classList.add('fa-brands','fa-facebook-f')
linkFacebook.setAttribute('href', '#')
const linkTwitter =  document.createElement('a')
linkTwitter.classList.add('fa-brands', 'fa-twitter')
linkTwitter.setAttribute('href', '#')
const linkGoogle = document.createElement('a')
linkGoogle.classList.add('fa-brands', 'fa-google')
linkGoogle.setAttribute('href', '#')
linksContainer.append(linkFacebook, linkTwitter, linkGoogle)

const titlePar = document.createElement('p')
titlePar.classList.add('form__titlePar')
titlePar.innerText = 'Or register using email & password'

const undercore = document.createElement('div')
undercore.classList.add('form__undercore')

const inputName = document.createElement('input')
inputName.classList.add('form__inputName')
inputName.setAttribute('type', 'text')
inputName.setAttribute('name', 'fullName')
inputName.setAttribute('placeholder', 'John rambo')
const lableName = document.createElement('label')
lableName.setAttribute('for', 'fullName')
lableName.innerText = 'Full name'

const inputEmail = document.createElement('input')
inputEmail.classList.add('form__inputEmail')
inputEmail.setAttribute('type', 'text')
inputEmail.setAttribute('name', 'email')
inputEmail.setAttribute('placeholder', 'hello@hey.com')
const lableEmail = document.createElement('label')
lableEmail.setAttribute('for', 'email')
lableEmail.innerText = 'Email address'

const inputCreatePass = document.createElement('input')
inputCreatePass.classList.add('form__inputCreatePass')
inputCreatePass.setAttribute('type', 'password')
inputCreatePass.setAttribute('name', 'createPass')
inputCreatePass.placeholder = '••••••••••••'
const lablelCreatePass = document.createElement('label')
lablelCreatePass.setAttribute('for', 'createPass')
lablelCreatePass.innerText = 'Create password'

const inputConfimPass = document.createElement('input')
inputConfimPass.classList.add('form__inputConfimPass')
inputConfimPass.setAttribute('type', 'password')
inputConfimPass.setAttribute('name', 'confimPass')
inputConfimPass.placeholder = '••••••••••••'
const lablelConfimPass = document.createElement('label')
lablelConfimPass.setAttribute('for', 'confimPass')
lablelConfimPass.innerText = 'Confirm password'

const formCheckboxContainer = document.createElement('div')
formCheckboxContainer.classList.add('form__checkboxContainer')

const linkTerms = document.createElement('a')
linkTerms.classList.add('Form__link', 'Form__linkTerms')
linkTerms.setAttribute('href', '#')
linkTerms.innerText = ('terms')
const linkPrivacyPolicy = document.createElement('a')
linkPrivacyPolicy.classList.add('Form__link', 'Form__linkPrivacyPolicy')
linkPrivacyPolicy.setAttribute('href', '#')
linkPrivacyPolicy.innerText = 'privacy polic'

// -----------------------------------------------------------

const checkboxLabel = document.createElement('label')
checkboxLabel.classList.add('form__checkboxLabel')
checkboxLabel.setAttribute('for', 'agree')

// checkboxLabel.innerText = 'I agree to the terms & privacy policy'
checkboxLabel.innerText = `I agree to the ${linkTerms} & ${linkPrivacyPolicy}`;

const checkbox = document.createElement('input')
checkbox.classList.add('form__checkboxInput')
checkbox.type = checkbox 
checkbox.id = 'agree'

const checkmark = document.createElement('span')
checkmark.classList.add('form__checkmark')

formCheckboxContainer.append(checkboxLabel)
checkboxLabel.prepend(checkbox, checkmark)
// ---------------------------------------------------------------
const submitButton = document.createElement('button')
submitButton.classList.add('form__submitButton')
submitButton.innerText = 'Register'
submitButton.type = "submit"

registrForm.append(titlecont, titlePar, undercore, lableName, inputName, lableEmail, inputEmail, lablelCreatePass, inputCreatePass, lablelConfimPass, inputConfimPass, formCheckboxContainer, submitButton)

const header = document.createElement('header')
header.classList.add('header')
main.prepend(header)

const changeThemeBtn = document.createElement('button')
changeThemeBtn.classList.add('changeThemeBtn')

header.append(changeThemeBtn)

const toggleImgCont = document.createElement('div')
toggleImgCont.classList.add('toggleImgCont')
const toggleImgSun = document.createElement('img')
toggleImgSun.classList.add('toggleImgSun')
toggleImgSun.src = './images/toggleBtn-images/Sun.svg' 
const toggleImgMoon = document.createElement('img')
toggleImgMoon.classList.add('toggleImgMoon')
toggleImgMoon.src = './images/toggleBtn-images/Moon.svg' 
toggleImgCont.append(toggleImgMoon)
changeThemeBtn.append(toggleImgSun, toggleImgCont)




changeThemeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('light-theme')
    localStorage.setItem('thema', document.body.classList)
})
const carentThema = localStorage.getItem('thema')
if (carentThema) {
    document.body.classList.add(carentThema);
}

registrForm.addEventListener('submit',(event) =>{
    event.preventDefault()
    const user = {
        fullName: inputName.value,
        email: inputEmail.value,
        pasword: inputCreatePass.value,
    }
    localStorage.setItem('usersData', JSON.stringify(user))
})

let usersDataFromLS = JSON.parse(localStorage.getItem('usersData'))

console.log(usersDataFromLS);
if (usersDataFromLS) {
    inputName.value = usersDataFromLS.fullName 
    inputEmail.value = usersDataFromLS.email
    inputCreatePass.value = usersDataFromLS.pasword

    
}







