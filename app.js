let pagina = 1 
const btnAnt = document.getElementById(`btnAnterior`)
const btnSig = document.getElementById(`btnSiguiente`)

btnSig.addEventListener(`click`, ()=>{
    if (pagina < 1000 ){
        pagina += 1 
        cargarPeli()
    } 
   
})

btnAnt.addEventListener(`click`, ()=>{
    if (pagina > 1 ){
        pagina -= 1
        cargarPeli()
    }
})


const cargarPeli = async () => {
    try {
        const rta = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=9fd543f183d130a0a0399790ec7f1eed&Lenguage=es-MX&page=${pagina}`)
        console.log(rta)

        const datos = await rta.json()
        let peliculas = ``
        datos.results.forEach(pelicula => {
            peliculas += `
            <div class = "pelicula"> 
                <img class = "poster" src ="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}
                ">
                <h3 class = "titulo"> ${pelicula.title}</h3>
            </div>
            `

        });
        document.getElementById(`contenedor`).innerHTML = peliculas
    } catch(error){
        console.log(error)
    }
}
cargarPeli()