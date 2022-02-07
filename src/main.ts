import './style.css'
import generatePassword from './exercise';

const app = document.querySelector<HTMLDivElement>('#app')!

// app.innerHTML = `
// <h3>Nothing to see here. Your exercise lives in the console 🌭</h3>
// <button>Generate password</button>
// `

function renderApp() {
    app.innerHTML = ''

    const h3El = document.createElement('h3')
    h3El.textContent = ('Nothing to see in the console. Click the buton to generate a new pasword 🌭')

    const buttonEl = document.createElement('button')
    buttonEl.textContent = ('Generate Password')

    const passwordEl = document.createElement('h4')
    passwordEl.textContent = ('')

    buttonEl.addEventListener('click', function () {
        passwordEl.textContent =('')
        passwordEl.textContent = (generatePassword())
    })

    app.append(h3El, buttonEl, passwordEl)
}

renderApp()
