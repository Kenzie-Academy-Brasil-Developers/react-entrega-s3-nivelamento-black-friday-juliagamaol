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

  return (
    <div className="App">
        <GerarPromocao products={products} setProd={setProd}/>
        <ProductList prod={prod} setCurrentSale={setCurrentSale} currentSale={currentSale}/>
        <Carrinho currentSale={currentSale} setCurrentSale={setCurrentSale}/>

    </div>
  );
}

export default App;
