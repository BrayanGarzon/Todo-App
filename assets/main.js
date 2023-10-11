const iconoThema = document.getElementById('iconThema');
const cuerpo = document.body;
const inputText = document.getElementById('inputText');
const listTareas = document.getElementById('listTareas');
const textInput = document.getElementById('textInput');
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
        
    }
});


