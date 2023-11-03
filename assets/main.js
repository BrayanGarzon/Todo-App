const iconoThema = document.getElementById('iconThema');
const cuerpo = document.body;
const inputText = document.getElementById('inputText');
const listTareas = document.getElementById('listTareas');
const textInput = document.getElementById('textInput');
const botones = document.querySelectorAll('button');
// Variable para rastrear el estado actual
let estadoTema = 'sol'; // Inicialmente, asumimos que está en modo "sol"

iconoThema.addEventListener('click', function() {
    
    if (estadoTema === 'sol') {
        // Cambia a modo "luna"
        cuerpo.style.backgroundColor = 'hsl(0, 0%, 98%)';//cambio de fondo
        iconoThema.src = '/images/icon-moon.svg';//cambio de icono
        estadoTema = 'luna';//cambio de estado
        
        //fondo del bofy
        cuerpo.style.backgroundImage = 'url(../images/bg-desktop-light.jpg)';

        listTareas.style.backgroundColor = 'white';
        inputText.style.backgroundColor = 'white';


        
        textInput.style.color = ' hsl(235, 19%, 35%)';

        //color de los botnes del comando
        botones.forEach(function(button) {
            button.style.color = 'hsl(235, 19%, 35%)';
          });
        
        
    } else {

        // Cambia a modo "sol"
        cuerpo.style.backgroundColor = 'hsl(235, 21%, 11%)';
        iconoThema.src = '/images/icon-sun.svg'; //cambio de icono
        estadoTema = 'sol';//cambio de estado
        //fondo del bofy
        cuerpo.style.backgroundImage = 'url(../images/bg-desktop-dark.jpg)';

        //stilos caja lista, input text
        listTareas.style.backgroundColor = 'hsl(235, 24%, 19%)';
        inputText.style.backgroundColor = 'hsl(235, 24%, 19%)';
        


        //style text input
        textInput.style.color = 'hsl(234, 39%, 85%)';
        
        //color de los botnes del comando
        botones.forEach(function(button) {
            button.style.color = 'hsl(234, 39%, 85%)';
          });
    }
});




const miCheckbox = document.getElementById("miCheckbox");
const tarea = document.getElementById('textInput');
const listadoDiv = document.querySelector('.listado');
const conteo = document.getElementById('conteo');
const buttons = document.querySelectorAll('.comandos button');
const clearCompletedButton = document.getElementById('clearCompleted');

// Contador para el número de tareas pendientes
let contador = 0;

miCheckbox.addEventListener("click", function() {
  if (miCheckbox.checked) {
    const textoEscrito = tarea.value;

    if (textoEscrito) {
      // Crear una tarea con un atributo personalizado "data-completed" en "false"
      const tareaElement = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.className = 'checkboxTarea';

      tareaElement.appendChild(checkbox);
      tareaElement.appendChild(document.createTextNode(textoEscrito));

      // Al hacer clic en el checkbox, cambiar el atributo "data-completed" y aplicar estilos
      checkbox.addEventListener("click", function() {
        tareaElement.setAttribute("data-completed", checkbox.checked);
        if (checkbox.checked) {
          tareaElement.style.textDecoration = "line-through";
        } else {
          tareaElement.style.textDecoration = "none";
        }
        actualizarContador();
      });

      tareaElement.setAttribute("data-completed", false);
      listadoDiv.appendChild(tareaElement);
      actualizarContador();
    }

    tarea.value = '';
    miCheckbox.checked = false;
  }
});

tarea.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    miCheckbox.click();
  }
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    filtrarTareas(button.getAttribute("data-filter"));
  });
});

clearCompletedButton.addEventListener('click', () => {
  const tareasCompletadas = document.querySelectorAll('[data-completed="true"]');
  tareasCompletadas.forEach(tarea => tarea.remove());
  actualizarContador();
});

function actualizarContador() {
  const tareasPendientes = document.querySelectorAll('[data-completed="false"]').length;
  conteo.textContent = tareasPendientes;
}

function filtrarTareas(filtro) {
  const tareas = document.querySelectorAll('.listado div');
  tareas.forEach(tarea => {
    tarea.style.display = "flex"; // Mostrar todas las tareas por defecto
    
    if (filtro === "active" && tarea.getAttribute("data-completed") === "true") {
      tarea.style.display = "none"; // Ocultar tareas completadas
    }
    if (filtro === "completed" && tarea.getAttribute("data-completed") === "false") {
      tarea.style.display = "none"; // Ocultar tareas no completadas
    }
  });
}



