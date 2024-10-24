function hello(){
    alert("hola que se dise")
}
//Aquí estás declarando una constante llamada boton y asignándole el elemento del DOM que tiene el ID "btn-evento"
const boton = document.getElementById("btn-evento");
//Con esta línea, estás añadiendo un "escuchador de eventos" al botón. Esto significa que estás diciendo: "Cuando el botón se haga clic, ejecuta la siguiente función".
boton.addEventListener("click", () => alert("Hola, mundo"));


const botondobleclick = document.getElementById("boton-dobleclick");
botondobleclick.addEventListener("dblclick",()=> alert(" este boton se abre cuando das doble click"))
//eventos de teclado keydown , keyup y keypress
const input = document.getElementById("mi-input");

input.addEventListener("keydown",() =>{
    console.log("pulsaste una tecla")
})

input.addEventListener("keyup",() =>{
    console.log("soltaste  una tecla")
})

input.addEventListener("keypress",() =>{
    console.log("mantubiste presionada  una tecla")
})