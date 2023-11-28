// Navegação por Tabs
function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');


    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add ('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) =>{
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });

    }else{
        console.log('problema nos tabs');
    }
}
initTabNav();



// Accordion List
function initAccordion(){
    const Accordion = document.querySelectorAll('.js-accordion dt');
    const activeClass  = 'ativo';

    if(Accordion.length) { 
        Accordion[0].classList.add(activeClass);
        Accordion[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
            
        }

        Accordion.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });

    }else{

        console.log('Accordion com problema');
    }
}
initAccordion();

//Scroll Suave Link Interno
function initScrollSuave(){
    const linksInternos =  document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
    /*Forma Alternativa
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
    */

    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });

}
initScrollSuave();


function scrollAnimation(){

  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length) {
    const halfWindow = window.innerHeight * 0.6;

    function animaScroll() {
        sections.forEach((section) =>{
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - halfWindow) < 0;
            if (isSectionVisible) {
                section.classList.add('ativo');
            }else{
                section.classList.remove('ativo');
            }
        });
    }
    window.addEventListener('scroll', animaScroll);

}

}
scrollAnimation();