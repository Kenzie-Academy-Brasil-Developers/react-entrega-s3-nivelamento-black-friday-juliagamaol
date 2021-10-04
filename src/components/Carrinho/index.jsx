import React from 'react'
import './index.css'
export default function Carrinho({currentSale}) {
    const total = Math.round((currentSale.reduce((a,b)=>a+b.price,0))*100)/100
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
                    </li>
                ))}

            </ul>
            <h3>Total do carrinho: R${total}</h3>
        </>
    )
}
