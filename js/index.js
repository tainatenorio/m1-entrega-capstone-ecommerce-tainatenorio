const listaProdutos = document.querySelector(".listaProdutos")

function ecommerce(produtos){

    const imagem             = produtos.img
    const categoria          = produtos.tag
    const nome               = produtos.nameItem
    const descricao          = produtos.description
    const valor              = produtos.value
    const adicionar          = produtos.addCart

    const tagLi              = document.createElement("li")
    const tagFigure          = document.createElement("figure")
    const tagImg             = document.createElement("img")
    const divCard            = document.createElement("div")
    const pCardCategoria     = document.createElement("p")
    const h3Card             = document.createElement("h3")
    const pCardDescricao     = document.createElement("p")
    const pCardPreco         = document.createElement("p")
    const buttonCardCarrinho = document.createElement("button")


    tagImg.src                   = `${imagem}`
    tagImg.alt                   = nome
    pCardCategoria.innerText     = categoria
    h3Card.innerText             = nome
    pCardDescricao.innerText     = descricao
    pCardPreco.innerText         = `R$ ${valor}`
    buttonCardCarrinho.innerText = adicionar


    tagFigure.classList.add("cardImg")
    tagLi.classList.add("cardProduto")
    tagFigure.appendChild(tagImg)
    tagLi.appendChild(tagFigure)
    divCard.classList.add("cardInformacoes")
    pCardCategoria.classList.add("cardCategoria")
    h3Card.classList.add("cardNomeProduto")
    pCardDescricao.classList.add("cardDescricao")
    pCardPreco.classList.add("cardPreco")
    buttonCardCarrinho.classList.add("cardCarrinho")

    divCard.appendChild(pCardCategoria)
    divCard.appendChild(h3Card)
    divCard.appendChild(pCardDescricao)
    divCard.appendChild(pCardPreco)
    divCard.appendChild(buttonCardCarrinho)
    tagLi.appendChild(divCard)
    console.log(tagLi)

    return tagLi
}

function listaItens(arrayProdutos){
    for(let i = 0; i < arrayProdutos.length; i++){
        const itens = arrayProdutos[i]
        const cardProdutos = ecommerce(itens)
        listaProdutos.appendChild(cardProdutos)
    }
}
listaItens(data)