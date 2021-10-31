import { allPaquetes } from "../services/Apiroutes";

export const getAllPaquetes = async (data)=>{
    const response = await allPaquetes(data);
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR en getAllPaquetes');
        console.log("Codigo devuelto por getAllPaquetes: " + response.status);
        return response.status
    }
}