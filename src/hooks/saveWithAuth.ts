import Cookies from 'js-cookie';

const fecher = async (url: string, id:string, token: string, data:any) => {
    return await fetch(url, {
      method: id==="0" ? 'POST': 'PATCH',
      mode: 'cors',
      headers: { 
        'Authorization' :token,
        'Content-Type': 'application/json',
        'Accept':'application/json'
      },
      body: data,      
    });
  }
  
  const saveWithAuth = async (url: string, id:string, body:any) => {
    url=  process.env.API_URL+"/api/"+url+"/";
    if ( Number(id)>0){
        url = url + id +"/"
    }
    const token = Cookies.get('token') || "";
    let data;
    let error;
    try{
      data = JSON.stringify(body);
      console.log(url)
      const response = await fecher(url, id, token, data)
      if (response.ok){
        data = await response.json();
      }else {
        error = "Servidor: "+ ((await response.json()).trace).substring(1,300);
      }
    }catch (e){
      error = "Cliente: "+e;
    }
    return {
      data,
      error
    }
  
  }

  export default saveWithAuth;