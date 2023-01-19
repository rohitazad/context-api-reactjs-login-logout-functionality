import React, {useState, createContext, useEffect} from 'react';

// create context with a default value

export const AuthContext = createContext({
    isAuthentaicated: false,
    user:null,
    login:()=>{},
    logout:()=>{}
});


// provider components 
const AuthProvider = ({children}) =>{

    const [state, setState] = useState({
        isAuthentaicated:false,
        user:null
    })

    useEffect(()=>{
        // check tocken is exit or not 
        const tocken = localStorage.getItem("tocken");
        const  username =  localStorage.getItem('username');
        const password =   localStorage.getItem('password');

        if(tocken){
            // call api here for login user 
            fetch('https://dummyjson.com/auth/login',{
            method:"POST",
            body:JSON.stringify({username,password}),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(response=> response.json())
        .then(data=>{
            if(data.token){
                localStorage.setItem('tocken', data.token);
                localStorage.setItem('username', data.username);
                localStorage.setItem('password', password);
                setState({
                    isAuthentaicated:true,
                    user:data
                })
            }else{
                alert("Username and password is not valid")
            }
        })
        }else{
            localStorage.removeItem("tocken");
        }


    }, []);

    // login function
    const login = (username, password)=>{
        // api call here 
        fetch('https://dummyjson.com/auth/login',{
            method:"POST",
            body:JSON.stringify({username,password}),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(response=> response.json())
        .then(data=>{
            if(data.token){
                localStorage.setItem('tocken', data.token);
                localStorage.setItem('username', data.username);
                localStorage.setItem('password', password);
                setState({
                    isAuthentaicated:true,
                    user:data
                })
            }else{
                alert("Username and password is not valid")
            }
        })
    }

    // logout function
    const logout = ()=>{
        localStorage.removeItem("tocken");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        setState({
            isAuthentaicated:false,
            user:null
        })
    }

    return(
        <>
            <AuthContext.Provider value={{...state, login, logout }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export default AuthProvider;

