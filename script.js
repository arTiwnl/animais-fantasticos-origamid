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

