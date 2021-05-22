//OBTENIENDO EN VALOR DEL INPUT
const ingresoDeMoneda = document.getElementById ('ingreso-de-moneda');

//OBTENIENDO VALOR DEL SELECT
const valorDelSelect = document.getElementById ('valor-del-select');

//OBTENIENDO EL VALOR TOTAL
const inputValorTotal = document.getElementById ('input-valor-total');


//UTILIZANDO SWITCH
valorDelSelect.addEventListener ('change', () => {
    switch (valorDelSelect.value){
    case "euro":
        inputValorTotal.value = 0.0087 * ingresoDeMoneda.value
        break; 
    case "mxn":
        inputValorTotal.value = 4.73 * ingresoDeMoneda.value
        break;
    case "usd":
        inputValorTotal.value = 0.011 * ingresoDeMoneda.value
        break;
    case "col":
        inputValorTotal.value = 39.78 * ingresoDeMoneda.value
        break;
    }
})

