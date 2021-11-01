import { allPaquetes, getSubscriptionsUser } from "../services/Apiroutes";

/**
 * 
 * @description Trae todos paquetes sin la necesidad de un JWT
 * @returns 
 */
export const getAllPaquetes = async ()=>{
    const response = await allPaquetes();
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR en getAllPaquetes');
        console.log("Codigo devuelto por getAllPaquetes: " + response.status);
        return response.status
    }
}


export const getAllSubscriptions = async (data)=>{
    const response = await getSubscriptionsUser(data);
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR en getAllSubscriptions');
        console.log("Codigo devuelto por getAllSubcriptions: " + response.status);
        return response.status
    }
}