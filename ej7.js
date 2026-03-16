import countryToCurrency from "country-to-currency";

function obtenerMoneda(pais){
return countryToCurrency[pais]
}

let moneda = obtenerMoneda('AD')
console.log(`La moneda es ${moneda}`)