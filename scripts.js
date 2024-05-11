const lista = document.querySelector('ul')
const produto = { name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' }
const TodosOsLanches = document.querySelector('.Todos-os-Lanches')
const promo = document.querySelector('.Mapear')
const sum = document.querySelector('.Somar-tudo')
const filtrovegano = document.querySelector('.Fliter')

function formatarmoeda(value) {
    const novovalor = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return novovalor 
}

function mostrartodos(preçonovo) {
    let minhalista = ``
    preçonovo.forEach(product => {
        minhalista +=
            `
        <li>
           
            <img src=${product.src}>
                <p>${product.name}</p>
                <p class="preço">${ formatarmoeda(product.price)}</</p>
    
        </li>
    
        `
        lista.innerHTML = minhalista
    })



}

function promolanches() {

    const preçospromo = menuOptions.map((produtos) => ({
        ...produtos,
        price: produtos.price * 0.9,

    }))

    mostrartodos(preçospromo)


}

function somalanches() {

    const soma = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    lista.innerHTML =
        `
   <li>
      
      
           <p class="preço">O valor total é de: ${ formatarmoeda(soma)}</</p>

   </li>

   `

}


function filtrolanches() {

    const filtro = menuOptions.filter((product) => product.vegan === true)


    mostrartodos(filtro)

}

TodosOsLanches.addEventListener('click', () => mostrartodos(menuOptions))
promo.addEventListener('click', promolanches)
sum.addEventListener('click', somalanches)
filtrovegano.addEventListener('click', filtrolanches)