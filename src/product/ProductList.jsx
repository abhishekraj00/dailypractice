import React from 'react'
import Product from './Product'

export default function ProductList() {

    let productList = [
        {
            name: "apple",
            price: 100,
            stock: "Avilable",

        },
        {
            name: "mango",
            price: 50,
            stock: "Not-Avilable",

        },
        {
            name: "Banana",
            price: 30,
            stock: "Avilable",

        },
    ]
    return (
        <div>

            {productList.map((e) =>
                <>
                    <Product name={e.name}
                        price={e.price} stock={e.stock} />
                    <br />
                </>)}

        </div>
    )

}
