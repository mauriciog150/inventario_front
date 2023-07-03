import Cookies from "js-cookie";

const fecher  = async (url:string, token: string) => {
    return await fetch(url, {
        method: 'GET',
        headers:{
            'Authorization': token
        }
    })
}

const useBasicAuth = async (endpoint:string) => {
    let data = null;
    let error;
    try {
        
        const token = Cookies.get("token")|| "";
        
        const baseUrl = process.env.API_URL + "/api/"+ endpoint + "/";
        
        const response = await fecher(baseUrl, token);
        
        if (response.ok){
            data = await response.json();
          }else {
            error = "Servidor: "+ ((await response.json()).trace);
          }
    } catch (err) {
        error = "Cliente: "+err;
    }

    return{
        data,
        error
    }
}

export default useBasicAuth;