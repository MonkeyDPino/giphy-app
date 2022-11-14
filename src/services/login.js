export default function login({email, password}){
    return fetch(`${process.env.REACT_APP_ENDPOINT}/api/auth/login`,{
        method: 'POST',
        headers: {'Content-Type':"application/json"},
        body:JSON.stringify({"email":email,"password":password})
    }).then(response => {      
        if(response.ok === false){
            throw new Error("Something went wrong in login")
        }  
        return response.json()
    })
    .then(response =>{
        return response.accessToken
    })
}