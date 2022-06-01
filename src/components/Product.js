import React, { useEffect, useState } from "react";
import '../styles.css'




const Product = () => {
    const [product, setProduct] = useState([]);
    const [cantidad, setCantidad] = useState(null);
    const [category, setCategory] = useState([]);


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
                let count = data.meta.countByCategory
                setCategory(count)
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


            <h5>Cantidad por collección</h5>

            <ul>
                {
                    category.length ? (

                        category.map((item, index) => <li key={index}><p>{item.name}</p><p>{item.count}</p></li>)
                    )
                        : <li> No se encontraron productos </li>
                }
            </ul>
        </div>
    );

}


export default Product;
