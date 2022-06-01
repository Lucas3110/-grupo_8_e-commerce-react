import React, { useEffect, useState } from "react";
import '../styles.css'




const LastProduct = () => {
    const [product, setProduct] = useState(0);
    


    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then(res => res.json())
            .then(data => {
                let info = data.products
                let hola = Object.keys(info.collection).length;
                setProduct(hola)
                
            })
    }, []);

    return (
        <div className="body">
            <div className="container_product2">
                <ul>
                    {
                        product.length ? (

                            <p className="product">{product}</p>
                        )
                            : <li className="product"> No se encontraron productos </li>
                    }
                </ul>
            </div>
        </div>
    );

}


export default LastProduct;
