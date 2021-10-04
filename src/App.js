import './App.css';
import { useState } from 'react';
import GerarPromocao from './components/GerarPromoçao';
import ProductList from './components/ProductList'
import Carrinho from './components/Carrinho';
function App() {
  const products = [
    { id: 1, name: 'Smart TV LED 50', price: 1999.00 },
    { id: 2, name: 'PlayStation 5', price: 12000.00 },
    { id: 3, name: 'Notebook Acer Nitro 5', price: 5109.72 },
    { id: 4, name: 'Headset s fio Logitech G935', price: 1359.00 },
    { id: 5, name: 'Tablet Samsung Galaxy Tab S7', price: 4844.05 },
    { id: 6, name: 'Cadeira Gamer Cruiser Preta FORTREK', price: 1215.16 }
]

  const [prod, setProd] = useState([])
  const [currentSale, setCurrentSale] = useState([])

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
const handleClick = productId =>{
    const productsOnCart = prod.find(item=>(item.id === productId))
    setCurrentSale([...currentSale, productsOnCart])
} 

  return (
    <div className="App">
        <GerarPromocao handleSubmit={handleSubmit}/>
        <ProductList prod={prod} handleClick={handleClick}/>
        <Carrinho currentSale={currentSale}/>

    </div>
  );
}

export default App;
