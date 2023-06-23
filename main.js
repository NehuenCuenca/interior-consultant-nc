
const header = document.querySelector('header')
const hamburguerMenuBtn = header.querySelector('#hamburguer-menu');
const closeHamburguerMenuBtn = header.querySelector('#close-hamburguer-menu');
const navBar = header.querySelector('nav#navbar');

const unloadHamburguerMenu = () => {
    navBar.classList.remove('mobile', 'hidden') // Display navbar for desktop
    hamburguerMenuBtn.classList.add('hidden') // Hide hamburguerMenuBtn button 
    closeHamburguerMenuBtn.classList.add('hidden') // Hide closeHamburguerMenuBtn utton  
} 

const loadHamburguerMenu = () => { 
    navBar.classList.add('hidden') // Hide the nav links
    hamburguerMenuBtn.classList.remove('hidden') // Display hamburguer button
    closeHamburguerMenuBtn.classList.remove('hidden') // Display '✖' hamburguer button (close button)
    
    // WHEN OPEN THE MENU...
    hamburguerMenuBtn.addEventListener('click', () => { navBar.classList.add('mobile') })

    // WHEN CLOSE THE MENU...
    closeHamburguerMenuBtn.addEventListener('click', () => { navBar.classList.remove('mobile') })
}


document.addEventListener('DOMContentLoaded', () => {
    addEventListener('resize', checkWidthWindow)
    checkWidthWindow()
})


const checkWidthWindow = () => { 
    const { width } = window.screen
    if (width <= 375) {
        loadHamburguerMenu()
    } else {
        unloadHamburguerMenu()
    }
 }