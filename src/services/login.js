const Endpoint = "http://localhost:5000"

export default function login({email, password}){
    return fetch(`${Endpoint}/api/auth/login`,{
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