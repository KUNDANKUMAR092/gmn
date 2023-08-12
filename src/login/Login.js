import React, {useEffect, useState} from 'react';
import './Login.css';
function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    const takeName = (e) =>{
        setName(e.target.value);
    }
    const passwordfun = (e) =>{
        setPassword(e.target.value)
    }
    const sumitVal = () =>{

    } 
    return ( 
        <div>
            <from >
                <input type="text" placeholder='User Id' onChange={takeName}/>
                <input type="password" placeholder='Password' onChange={passwordfun}/>
                <button onClick={sumitVal}>Submit</button>

                <a href='hhps'> this is a link  </a>
            </from>
        </div>
     );
}

export default Login; 