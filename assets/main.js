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
let contador = 0;
const conteo = document.getElementById('conteo');

miCheckbox.addEventListener("click", function() {
  if (miCheckbox.checked) {
    const textoEscrito = tarea.value;

    // Insertar la tarea en el cuerpo
    if (textoEscrito) {
      contador++;

      const tareaElement = document.createElement('div');
      const checkbox = document.createElement('input'); // Crear el checkbox
      checkbox.type = "checkbox"; // Establecer el tipo como "checkbox"


      tareaElement.appendChild(checkbox);
      tareaElement.appendChild(document.createTextNode(textoEscrito));
   

      listadoDiv.appendChild(tareaElement);

      // Actualizar el contador en el div 'conteo'
      conteo.textContent = contador;
    }

    // Deseleccionar el checkbox después de 2 segundos
    setTimeout(function() {
      // Limpiando el input
      tarea.value = '';
      miCheckbox.checked = false;
    }, 300); // medio segundo
  } else {
    miCheckbox.value = '';
  }
});

// Esta sección incluye la tecla Enter
tarea.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    miCheckbox.click(); // Simula hacer clic en el checkbox
  }
});


