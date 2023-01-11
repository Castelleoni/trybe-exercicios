import { nanoid } from 'nanoid'
import './style.css'

const passwordBtEl = document.querySelector('button')
const displayPassword = document.querySelector('h2')

passwordBtEl.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPassword.innerHTML = randomPassword;
})