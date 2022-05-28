import React, { useEffect, useState } from "react";
import '../styles.css'




const Product = () => {
    const [product, setProduct] = useState([]);
    const [cantidad, setCantidad] = useState(null);


    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then(res => res.json())
            .then(data => {
                let info = data.products
                setProduct(info)
                const productData = {
                    total: data.meta.count
                }
                setCantidad(productData)
            })
    }, []);

    return (
                
        
        <div>
            <h3>Listado de Productos</h3>

            <ul>
                {
                    product.length ? (

                        product.map((item, index) => <li key={index}><p>{item.name}</p></li>)
                    )
                        : <li> No se encontraron productos </li>
                }
            </ul>
            <div>
                {cantidad ? (
                    <p>{"Cantidad total de productos: " + cantidad.total}</p>
                ) : null}
            </div>
        </div>
    );

}


export default Product;


