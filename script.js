const toggler = document.querySelectorAll('.faq-toggle')
toggler.forEach(toggle => {
    toggle.addEventListener('click',()=> {
        toggle.parentNode.classList.toggle('active')
    })
})