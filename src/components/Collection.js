import React, { useEffect, useState } from "react";
import '../styles.css'




const Collection = () => {    
    const [cantidad, setCantidad] = useState(null);


    useEffect(() => {
        fetch("http://localhost:3000/api/collections")
            .then(res => res.json())
            .then(data => {                   
                const collectionData = {
                    total: data.meta.categoryCount
                }
                setCantidad(collectionData)
            })
    }, []);

    return (
                
        
        <div>                    
            <div>
                {cantidad ? (
                    <p>{"Cantidad total de colecciones: " + cantidad.total}</p>
                ) : null}
            </div>
        </div>
    );

}


export default Collection;


