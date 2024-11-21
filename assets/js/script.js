const tbody = document.querySelector("tbody")
const total = document.querySelector("#Total")
const realizadas = document.querySelector("#Realizadas")

const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregarTarea = document.querySelector("#agregarTarea")
const tareas = [];

btnAgregarTarea.addEventListener("click", () => {
    if (tareaInput.value==""){
        return;
    }
        
    nuevaTarea = {id : Date.now(), nombre: tareaInput.value, completado: false }
    
    tareas.push(nuevaTarea);
    tareaInput.value="";
    renderTareas();
});


function renderTareas(){
    let html = ""
    var spanTotal  = 0
    var spanCompl = 0
    for (tar of tareas) {
        spanTotal++;
        let checked = ""
        if (tar.completado) { 
            checked = "checked" 
            spanCompl++;
        }
        html += `
        <tr>
        <td>${tar.id}</td>
        <td>${tar.nombre}</td>
        <td>
            <input type="checkbox" id="completado" ${checked} onclick="checkedbox(${tar.id})"/>
            <i class="fa-solid fa-delete-left" onclick="borrar(${tar.id})"></i>
        </td>
        </tr>`;
    }
    tbody.innerHTML = html;
    total.innerHTML = spanTotal
    realizadas.innerHTML = spanCompl
}

function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    /* Actualizamos la información en el HTML */
    renderTareas()
}
function checkedbox(id){
    var spanTotal  = 0
    var spanCompl = 0
    for (tar of tareas) {
        spanTotal++
        if (id == tar.id){
            if (tar.completado){
                tar.completado=false
                spanCompl--
            }else{
                tar.completado=true
                spanCompl++
            }
        }
    }
    renderTareas()   
}