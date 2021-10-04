import React from 'react'
import Product from '../Product'

export default function ProductList({prod,handleClick}) {
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
