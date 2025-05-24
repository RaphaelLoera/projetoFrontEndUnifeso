// Seleciona os botões de navegação
let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

// Seleciona os principais containers da lista e das miniaturas (thumbs)
let container = document.querySelector('.container')
let list = document.querySelectorAll('.container .list')
let thumb = document.querySelectorAll('.container .thumb')

// Adiciona eventos de clique para os botões de navegação
btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

// Função responsável por mover os itens da lista e das thumbs
function moveItemsOnClick(type) {
    // Seleciona todos os itens da lista e das thumbs
    let listItems = document.querySelectorAll('.list .list-item');
    let thumbItems = document.querySelectorAll('.thumb .thumb-item');

    if (type === 'next') {
        // Move o primeiro item da lista para o final
        if (listItems.length > 0) {
            list[0].appendChild(listItems[0]);
        }
        // Move o primeiro item das thumbs para o final
        if (thumbItems.length > 0) {
            thumb[0].appendChild(thumbItems[0]);
        }
        // Adiciona a classe para animação "next"
        container.classList.add('next');
    } else if (type === 'back') {
        // Move o último item da lista para o início
        if (listItems.length > 0) {
            list[0].insertBefore(listItems[listItems.length - 1], listItems[0]);
        }
        // Move o último item das thumbs para o início
        if (thumbItems.length > 0) {
            thumb[0].insertBefore(thumbItems[thumbItems.length - 1], thumbItems[0]);
        }
        // Adiciona a classe para animação "back"
        container.classList.add('back');
    }

    // Remove as classes de animação após o tempo da animação CSS
    setTimeout(() => {
        container.classList.remove('next');
        container.classList.remove('back');
    }, 500); // ajuste conforme a duração da animação no CSS
}


