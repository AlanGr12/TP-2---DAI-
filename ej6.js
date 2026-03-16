import url from 'url'

function parsearUrl(url){
    try{
const laUrl = new URL(url)


return{
    "host" :laUrl.host,
    "pathname" :laUrl.pathname,
    "parametros" :laUrl.searchParams      
} 
}catch (error) {
    console.error("Error:", error.message)
}
}

let nuevaUrl = parsearUrl("https://campus.ort.edu.ar/secundaria/almagro/informatica/2026-ni5c");
console.log(nuevaUrl)