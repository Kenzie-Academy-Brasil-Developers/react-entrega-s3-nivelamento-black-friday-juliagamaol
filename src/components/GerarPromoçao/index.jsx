export default function GerarPromocao({products,setProd}) {
    const handleSubmit = () =>{
        const random = Math.floor(Math.random()*6 + 1)
        const productFiltred = products.filter(item=>(item.id === random))
        
        const discount = Math.floor(Math.random() * (90 - 40) + 40)
        const valueOfDisc = Math.round((productFiltred[0].price*(discount/100))*100)/100
        const priceToBePaid = Math.round((productFiltred[0].price - valueOfDisc)*100)/100
  
      const product = {
          id: productFiltred[0].id,
          name: productFiltred[0].name,
          price:productFiltred[0].price,
          valueOfDisc:valueOfDisc,
          priceToBePaid: priceToBePaid
      }
      setProd([product])
      
  }
    return (
        <div>
            <button onClick={handleSubmit}>Gerar Promoção</button>
        </div>
        
    )
}

