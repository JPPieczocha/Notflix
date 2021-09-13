const cmsURL = 'https://ia-cms.herokuapp.com/';

//----------CMS DE VIDEO----------------------------------------------------

//Endpoints de Peliculas
export const allMovies = async () =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(cmsURL+'api/v1/public/data',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//--------------------------------------------------------------------------
