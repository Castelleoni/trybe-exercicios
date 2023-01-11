import { nanoid } from 'nanoid'

const passwordBtEl = document.querySelector('button')
const displayPassword = document.querySelector('h2')

passwordBtEl.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPassword.innerHTML = randomPassword;
})