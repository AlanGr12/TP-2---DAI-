import url from 'url'

function parsearUrl(url){
const laUrl = new URL(url)


return{
    "host" :laUrl.host,
    "pathname" :laUrl.pathname,
    "parametros" :laUrl.searchParams      
} 
}

let nuevaUrl = parsearUrl("https://campus.ort.edu.ar/secundaria/almagro/informatica/2026-ni5c");
console.log(nuevaUrl)