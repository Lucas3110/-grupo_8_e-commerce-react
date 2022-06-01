import React, { useEffect, useState } from "react";
import '../styles.css'




const User = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3000/api/users")            
        .then(res => res.json())
        .then(data => {           
            const userData = {
                total: data.meta.count
            }
            setUser(userData);
        });
},[]);

    return (
        <div>
        {user ? (
          <p>{"Cantidad total de usuarios: " + user.total}</p>          
        ) : null}
      </div>
    );
}


export default User;
