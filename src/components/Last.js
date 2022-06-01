import React, { useEffect, useState } from "react";
import '../styles.css'




const Last = () => {
    const [product, setProduct] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/api/last")
            .then(res => res.json())
            .then(data => {     
                console.log(data)                         
                let info = data.meta.lastProduct[0]
                console.log(info)  
                setProduct(info)              
            })
    }, []);


    return (


        <div>

            <div>

                {product ? (
                <div>
                    <h3>{"Ultimo producto creado: " + product.name}</h3>
                        <p>{"Ultimo producto creado: " + product.description}</p>
                        <p>{"Ultimo producto creado: " + product.price}</p>
                </div>
                ) : null}

            </div>
        </div>
    );

}


export default Last;


