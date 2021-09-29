import { allMovies } from "../services/Apiroutes";

export const getAllMovies = async ()=>{
    const response = await allMovies();
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR en getAllMovies');
        console.log('Codigo de respuesta en getAllMovies: ' + response.status);
        return response.status
    }
}