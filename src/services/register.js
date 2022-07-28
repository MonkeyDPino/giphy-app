const Endpoint = "https://giphy-back.herokuapp.com"

export default function register({email, password}){
    return fetch(`${Endpoint}/api/auth/register`,{
        method: 'POST',
        headers: {'Content-Type':"application/json"},
        body:JSON.stringify({"email":email,"password":password})
    }).then(response => {      
        if(response.ok === false){
            throw new Error("Something went wrong in register")
        }  
        return response.json()
    })
    .then(response =>{
        return response
    })
}