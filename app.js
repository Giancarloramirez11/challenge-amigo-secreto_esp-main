const amigos =[];
const inputNombre= document.getElementById("amigo");
const listaDeAmigos= document.getElementById("listaAmigos");
const ResultadoJuego= document.getElementById("resultado");

function agregarAmigo (){

    const nombre= inputNombre.value.trim();

    if(nombre===""){
        alert("debe ingresar un nombre valido");
        return;
    }
    amigos.push(nombre);
    console.log(amigos);
    inputNombre.value="";
    inputNombre.focus();
    listaDeAmigos.innerHTML= "";
    
    for(let i=0;i<amigos.length;i++){
    
            let listaCreada = document.createElement ('li');
            listaCreada.textContent= amigos[i];
            listaDeAmigos.appendChild (listaCreada);
        }
}


function sortearAmigo(){
    if (amigos.length === 0) {
        alert ('Por favor, agregar por lo menos un amigo');
        return;
    } 
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    console.log (amigoAleatorio);
    let amigoSorteado = amigos[amigoAleatorio];
    console.log (amigoSorteado)
    
    ResultadoJuego.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
    let limpiarLista=document.getElementById("listaAmigos");
    limpiarLista.innerHTML="";

}