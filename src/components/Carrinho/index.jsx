import React from 'react'
import './index.css'
export default function Carrinho({currentSale,removeFromCart}) {
    const total = Math.round((currentSale.reduce((a,b)=>a+b.priceToBePaid,0))*100)/100
    return (
        <>
            <h2>Carrinho</h2>
            <ul>
                {currentSale.map((item,index)=>(
                    <li key={index}>
                        <h3>{item.name}</h3>
                        <span><b>Preço:</b>R${item.price}</span>
                        <span><b>Valor do disconto:</b>R${item.valueOfDisc}</span>
                        <span><b>Preço a ser pago:</b>R${item.priceToBePaid}</span>
                        <button onClick={()=>removeFromCart(item.id)}>Remover do carrinho</button>
                    </li>
                ))}

            </ul>
            <h3>Total do carrinho: R${total}</h3>
        </>
    )
}
