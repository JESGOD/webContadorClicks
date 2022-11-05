const spanNumero = document.getElementById("spanNumero");
const btn_regresar = document.getElementById("btn_regresar");
const btn_reiniciar = document.getElementById("btn_reiniciar");
const btn_avanzar = document.getElementById("btn_avanzar");
let contadorClick =0;
btn_regresar.addEventListener("click",regresarContador);
btn_reiniciar.addEventListener("click",reiniciarContador);
btn_avanzar.addEventListener("click",avanzarContador);

function regresarContador(){
        contadorClick --;
        console.log(contadorClick);
        spanNumero.innerText=contadorClick;  
        if (contadorClick < 0){
            spanNumero.style.color="red";
        }
}
function reiniciarContador(){
    contadorClick=0;
    spanNumero.innerText=contadorClick;
    if (contadorClick == 0){
        spanNumero.style.color="black";
    }
}
 function avanzarContador(){
    contadorClick++;
    spanNumero.innerText=contadorClick;
    if (contadorClick > 0){
        spanNumero.style.color="green";
    }
 }