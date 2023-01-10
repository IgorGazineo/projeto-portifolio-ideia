const navBar = document.querySelector('.nav-bar')
const navLinks = document.querySelector('.nav-links')
const links = document.getElementsByClassName('link')

       navBar.addEventListener('click', ()=>{
        navBar.classList.toggle('active')
        navLinks.classList.toggle('active')
       })

       for(link of links){
        link.addEventListener('click', ()=> {
            navLinks.classList.toggle('active')
            navBar.classList.toggle('active')
        })
       }

   