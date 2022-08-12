const contenedor = document.getElementById("contenedor")
const formulario = document.getElementById("formulario")
const descripcion = document.getElementById("texto-descriptivo")
const fragment = document.createDocumentFragment()
let citas = {}

document.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem('citas')){
        citas = JSON.parse(localStorage.getItem('citas'))
    }
})



formulario.addEventListener('submit', (e) =>{
    
    crear(e);
    e.preventDefault();
    localStorage.setItem('citas', JSON.stringify(citas))
    
})

const crear = (e)=>{
    let nombre = e.target[0].value
    let mascota = e.target[3].value
    let especie = e.target[4].value
    let raza = e.target[5].value
    let edad = e.target[6].value
    let texto = e.target[7].value
    contenedor.innerHTML= `
        <h1>Su solicitud ha sido correctamente enviada</h1>
        <p>Los esperamos</p>


        <div class="alert alert-warning" role="alert">
            <div><b>Propietario:</b> ${nombre}</div>
            <div><b>Mascota:</b> ${mascota} </div>
            <div><b>Edad:</b> ${edad}</div>
            <div><b>Especie: </b> ${especie}</div>
            <div><b>Raza: </b> ${raza}
            
            <b>Motivo</b> ${texto}
        </div>
        `
}