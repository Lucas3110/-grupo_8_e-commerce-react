import React, { useEffect, useState } from "react";
import '../styles.css'




const User = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3000/api/users")            
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const userData = {
                total: data.meta.count
            }
            setUser(userData);
        });
},[]);

    return (
        <div className="container_users">
        {user ? (
          <p className="users">{"Cantidad total de usuarios: " + user.total}</p>          
        ) : null}
      </div>
    );
}


export default User;
