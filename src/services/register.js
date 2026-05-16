export default function register({email, password}){
    return fetch(`${import.meta.env.VITE_ENDPOINT}/api/auth/register`,{
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