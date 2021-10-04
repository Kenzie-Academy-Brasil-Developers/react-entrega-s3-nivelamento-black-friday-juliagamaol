
export default function Product({item:{id,name,price,valueOfDisc,priceToBePaid},handleClick}) {
    return (
        <div>
            <h3>{name}</h3>
            <p><b>Preço:</b>R${price}</p>
            <p><b>Valor do disconto:</b>R${valueOfDisc}</p>
            <p><b>Preço a ser pago:</b>R${priceToBePaid}</p>
            <button onClick={()=>handleClick(id)}>Adicionar ao carrinho</button>
        </div>
    )
}


