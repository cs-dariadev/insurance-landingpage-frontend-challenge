const open_btn=document.querySelector('.nav__icon');
const close_btn=document.querySelector('.close__icon');
const nav_links=document.querySelectorAll('.nav__links');
const nav_link=document.querySelectorAll('.nav__link');
const mediaQuery=window.matchMedia('(max-width:768px)');
const body=document.querySelector('body');


function navMenuFixes(){
    if(mediaQuery.matches){
        open_btn.addEventListener('click', ()=>{
            open_btn.style.display='none';
            close_btn.style.display='block';
            body.style.overflowY = 'hidden';
            nav_link.forEach(nav_link=> nav_link.classList.add('visible'));
            nav_links.forEach(nav_links=>nav_links.classList.add('visible'));

        })

        close_btn.addEventListener('click', ()=>{
            open_btn.style.display='block';
            close_btn.style.display='none';
            nav_link.forEach(nav_link=> nav_link.classList.remove('visible'));
            nav_links.forEach(nav_links=>nav_links.classList.remove('visible'));
            body.style.overflowY = 'scroll';
        })
    }else {
        open_btn.style.display='block';
        close_btn.style.display='none';
        nav_link.forEach(nav_link => nav_link.classList.remove('visible'));
        nav_links.forEach(nav_links => nav_links.classList.remove('visible'));
    
    }
}

window.addEventListener('resize', navMenuFixes);

navMenuFixes();