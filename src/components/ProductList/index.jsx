import React from 'react'
import Product from '../Product'

export default function ProductList({prod,setCurrentSale,currentSale}) {
    const handleClick = productId =>{
        const productsOnCart = prod.find(item=>(item.id === productId))
        setCurrentSale([...currentSale, productsOnCart])
    } 
    return (
        <>
            {prod.map((item)=>(
                <Product 
                item={item}
                handleClick={handleClick}/>
            ))}
           
        </>
    )
}
