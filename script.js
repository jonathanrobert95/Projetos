const menu = document.querySelector('.menuList')
const button = document.querySelector('.menu')
const desc = document.querySelector('.desconto')
const valortotal = document.querySelector('.Reduce')
const priceTotal = document.querySelector('.total')
const filterMenu = document.querySelector('.filtro')
const vegano = document.querySelector('.veganos')

function cardapio(menuArray) { // o valor adicionado aqui nesta function é para economizar a repetição de codigo
    vegano.innerHTML = ''
    priceTotal.innerHTML = '' // limpa o botão soma antes de executar a nova função
    let mostrar = '' // inicia o let vazia
    mostrar = ''
    menu.innerHTML = '' // limpa o menu/ cardapio, para não repetir a função caso for executada novamente e assim não empilhar/ criar copias do mesmo
    menuArray.forEach((produtos) => { // forEach, lê tudo que esta dentro do array
        mostrar += `
                <li><img src="${produtos.src}">
                    <br>${produtos.name}
                    <br><span>R$ ${produtos.price}</span>
                </li> `
    })
    menu.innerHTML = mostrar // adiciona a minha variavel let/mostrar no html
}

function desconto() { 
    priceTotal.innerHTML = ''
    vegano.innerHTML = ''
    const newPrice = menuOptions.map((product) =>({ //.map está função mapeia os itens do meu array  q eu qro modificar, neste caso o preço, que no caso está sendo adicionado desconto no pice
        ...product,
        price: (product.price * 0.9).toFixed(2).replace('.', ',') // toFixe(2) garante que o valor final vai ficar apenas 2 numeros e não umonte de numero qbrado
    }))

    cardapio(newPrice) // aqui eu estou chamando a função de cima para ter acesso ao array e modifcar apenas o preço, sem ter que criar um novo codigo apenas para ele.
}

function soma(){
    menu.innerHTML = ''
    vegano.innerHTML = ''
    const total = menuOptions.reduce ((acc, product) =>{ // reduce, faz tudo dentro do array virar um só, no caso como eu qria somar apenas o preço produc.price, pega todos os valores e faz virar um só gerando um valor final
        return acc + product.price }, 0) // return, usado para retornar o valor final apos a soma
        

priceTotal.innerHTML = `Total: R$ ${total.toFixed(2).replace('.', ',')}` // aqui eu adiciona o valor total ai meu HTML
}

function filtro(){
    menu.innerHTML = ''
    vegano.innerHTML = ''
    priceTotal.innerHTML = ''
    const filtrado = menuOptions.filter (tipo => tipo.vegan === true) // filter, usado para filtrar apenas algo especifico dentro do meu array, neste caso para filtrar qual lanche é vegano
    
    let menuVegan = ''
     filtrado.forEach((produtos) => { // essa variavel foi usada para destinar em qual lugar ele deveria filtrar
        menuVegan += `
                <li><img src="${produtos.src}">
                    <br>${produtos.name}
                    <br><span>R$ ${produtos.price}</span>
                </li> `
    }) // apos filtrar o forEach, ele retorna oq é verdadeiro True paga dentro do MenuVegan
    vegano.innerHTML = menuVegan // aqui joga o novo cardapio apenas com os itens veganos no HTML
}


filterMenu.addEventListener('click', filtro) // aqui são os eventos, cada botão aciona uma função acima
valortotal.addEventListener('click', soma)
desc.addEventListener('click', desconto)
button.addEventListener('click',() => cardapio(menuOptions)) 