// Base de datos de respuestas
const responses = {
    "santiago": {
        "información": "Santiago es la capital de Chile y la ciudad más grande del país. Es conocida por su vibrante vida cultural, la presencia de importantes museos y su hermoso paisaje rodeado de montañas.",
        "población": "Santiago tiene una población de aproximadamente 7 millones de habitantes.",
        "atracciones": "Entre las atracciones más destacadas se encuentran el Cerro San Cristóbal, el Museo de la Memoria y los Derechos Humanos, y la Plaza de Armas.",
        "clima": "Santiago tiene un clima mediterráneo con veranos cálidos y secos e inviernos frescos y lluviosos."
    },
    "valparaiso": {
        "información": "Valparaíso es un puerto importante y una ciudad con un carácter bohemio y artístico. Sus calles empinadas y casas coloridas son muy distintivas.",
        "población": "Valparaíso tiene una población de aproximadamente 300,000 habitantes.",
        "atracciones": "Algunas de las atracciones son el Cerro Alegre, el ascensor Reina Victoria y el puerto de Valparaíso.",
        "clima": "Valparaíso tiene un clima mediterráneo moderado con veranos frescos y neblinosos e inviernos suaves y lluviosos."
    },
    "concepcion": {
        "información": "Concepción es una ciudad importante en el sur de Chile, conocida por su rol en la industria y educación, y su proximidad a hermosos paisajes naturales.",
        "población": "Concepción tiene una población de alrededor de 230,000 habitantes.",
        "atracciones": "Entre las atracciones están la Universidad de Concepción, el Parque Ecuador y el Mercado Central.",
        "clima": "Concepción tiene un clima oceánico con veranos suaves e inviernos frescos y lluviosos."
    },
    "temuco": {
        "información": "Temuco es una ciudad en el sur de Chile, conocida por su influencia mapuche y su cercanía a la región de los lagos y volcanes.",
        "población": "Temuco tiene una población de alrededor de 280,000 habitantes.",
        "atracciones": "Entre las atracciones están el Parque Nacional Conguillío y la Feria Pinto.",
        "clima": "Temuco tiene un clima oceánico con inviernos frescos y lluviosos y veranos suaves."
    },
    "antofagasta": {
        "información": "Antofagasta es una ciudad en el norte de Chile, importante por su puerto y minería. El desierto cercano ofrece paisajes únicos y hermosos.",
        "población": "Antofagasta tiene una población de aproximadamente 400,000 habitantes.",
        "atracciones": "Las atracciones incluyen el Desierto de Atacama, el Museo Regional de Antofagasta y el Parque Nacional La Portada.",
        "clima": "Antofagasta tiene un clima desértico con temperaturas cálidas durante todo el año y escasas precipitaciones."
    }
};

// Variable para almacenar la última ciudad consultada
let lastCity = null;

// Función para manejar los mensajes del usuario
function sendMessage() {
    const userInput = document.getElementById('user-input').value.toLowerCase().trim();
    const chatBox = document.getElementById('chat-box');
    
    if (userInput) {
        // Añadir mensaje del usuario
        const userMessage = document.createElement('div');
        userMessage.classList.add('chat-message', 'user-message');
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);
        
        // Extraer la ciudad y la consulta
        let cityFound = false;
        let response = "Lo siento, no entiendo la pregunta o la ciudad mencionada.";

        // Buscar en las ciudades disponibles
        for (const city in responses) {
            if (userInput.includes(city)) {
                cityFound = true;
                lastCity = city; // Almacenar la última ciudad consultada
                const lowerInput = userInput.toLowerCase();

                if (lowerInput.includes('información')) {
                    response = responses[city]['información'];
                } else if (lowerInput.includes('población')) {
                    response = responses[city]['población'];
                } else if (lowerInput.includes('atracciones')) {
                    response = responses[city]['atracciones'];
                } else if (lowerInput.includes('clima')) {
                    response = responses[city]['clima'];
                } else {
                    response = "Claro. ¿Qué te interesaría saber sobre la ciudad? Puedo hablar sobre la información, población, atracciones o clima de la ciudad.";
                }
                break;
            }
        }

        // Si no se encuentra ninguna ciudad en la consulta, verifica la última ciudad
        if (!cityFound) {
            if (lastCity) {
                const lowerInput = userInput.toLowerCase();

                if (lowerInput.includes('información')) {
                    response = responses[lastCity]['información'];
                } else if (lowerInput.includes('población')) {
                    response = responses[lastCity]['población'];
                } else if (lowerInput.includes('atracciones')) {
                    response = responses[lastCity]['atracciones'];
                } else if (lowerInput.includes('clima')) {
                    response = responses[lastCity]['clima'];
                } else {
                    response = "Claro. ¿Qué te interesaría saber sobre la última ciudad consultada? Puedo hablar sobre la información, población, atracciones o clima.";
                }
            } else {
                response = "Lo siento, no entiendo la pregunta o la ciudad mencionada.";
            }
        }

        // Mostrar la respuesta del bot
        const botMessage = document.createElement('div');
        botMessage.classList.add('chat-message', 'bot-message');
        botMessage.textContent = response;
        chatBox.appendChild(botMessage);
        
        // Limpiar campo de entrada
        document.getElementById('user-input').value = '';
        
        // Desplazar hacia abajo para mostrar el nuevo mensaje
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}