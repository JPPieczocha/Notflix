import { allPaquetes } from "../services/Apiroutes";

export const getAllPaquetes = async ()=>{
    const response = await allPaquetes();
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR en getAllMovies');
        console.log("Codigo devuelto por getAllMovies: " + response.status);
        return response.status
    }
}