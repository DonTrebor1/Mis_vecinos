// Traductor ingles español para la accesibilidad, aqui estan todos las palabras y textos dandole un valor y su traducción
const translations = {
    en: {
        appTitle: "MY NEIGHBORS",
        subtitle: "Incident management and community",
        configTitle: "Settings",
        configDesc: "Customize the application's appearance according to your preferences.",
        darkMode: "Dark Mode",
        darkModeDesc: "Enable dark mode to reduce screen brightness and make reading easier in low light.",
        textSize: "Text Size",
        textSizeDesc: "Adjust the text size to improve visibility and reading comfort.",
        contrastMode: "High Contrast",
        contrastModeDesc: "Enable high contrast to make on-screen elements more visible and facilitate reading.",
        language: "Language",
        languageDesc: "Select the language you prefer for viewing the application.",
        savePreferences: "Save Preferences",
        spanish: "Spanish",
        english: "English",
        home: "Home",
        incidents: "Incidents",
        communityMinutes: "Community Minutes",
        settings: "Settings",
        confirmDelete: "Are you sure you want to delete this incident?",
        confirmResolved: "Are you sure you want to mark this incident as Resolved? Once resolved, it cannot be undone and a new one will need to be created.",
        markAsViewed: "Mark as Viewed",
        markAsPending: "Mark as Pending",
        markAsResolved: "Mark as Resolved",
        delete: "Delete",
        votingSystem: "Voting System",
        votingSystemDescription: "Residents can vote in real-time without needing to delegate their vote, allowing for greater community decision-making.",
        reportIncident: "Report Incident",
        reportIncidentDescription: "Report incidents instantly from any device, with the option to attach images for clarity.",
        communityMinutesDescription: "Easily access meeting minutes and stay informed about important community updates.",
        myIncidents: "My Incidents",
        myIncidentsDescription: "Here you can see the incidents you have reported. Each incident includes a description, an image (if attached), and its current status: Pending, Viewed, or Resolved.",
        resolvedIncidents: "Resolved Incident History",
        resolvedIncidentsDescription: "This section shows a history of all resolved incidents for you to review at any time.",
        instructions: "Do you have a problem in your community? Follow these steps to report it:",
        step1: "Write a brief description of the issue.",
        step2: "If you have a photo of the problem, you can attach it (optional).",
        step3: "Click 'Send Incident' so the administrator receives it.",
        descriptionLabel: "Incident description:",
        placeholderDescription: "Describe your problem...",
        attachImage: "Attach image (optional):",
        submitIncident: "Submit Incident",
        noFileSelected: "No file selected",
        januaryMeeting: "Meeting Minutes - January 2024",
        januaryDate: "Date: January 15, 2024",
        februaryMeeting: "Meeting Minutes - February 2024",
        februaryDate: "Date: February 10, 2024",
        downloadMinutes: "Download Minutes",
        storageError: "Couldn't save the incident: local storage is full. Try attaching a smaller image or removing old resolved incidents."
    },
    es: {
        appTitle: "MIS VECINOS",
        subtitle: "Gestión de incidencias y comunidad",
        configTitle: "Configuración",
        configDesc: "Personaliza la apariencia de la aplicación según tus preferencias.",
        darkMode: "Modo Oscuro",
        darkModeDesc: "Activa el modo oscuro para reducir el brillo de la pantalla y facilitar la lectura en entornos con poca luz.",
        textSize: "Tamaño del Texto",
        textSizeDesc: "Ajusta el tamaño del texto para mejorar la visibilidad y la comodidad de lectura.",
        contrastMode: "Contraste Mejorado",
        contrastModeDesc: "Activa el contraste mejorado para hacer más visibles los elementos en pantalla y facilitar la lectura.",
        language: "Idioma",
        languageDesc: "Selecciona el idioma en el que prefieres visualizar la aplicación.",
        savePreferences: "Guardar Preferencias",
        spanish: "Español",
        english: "Inglés",
        home: "Inicio",
        incidents: "Incidencias",
        communityMinutes: "Actas de la Comunidad",
        settings: "Configuración",
        confirmDelete: "¿Estás seguro de que quieres eliminar esta incidencia?",
        confirmResolved: "¿Estás seguro de marcar esta incidencia como Resuelta? Una vez resuelta, no se puede deshacer y deberás crear una nueva en caso de error.",
        markAsViewed: "Marcar como Vista",
        markAsPending: "Marcar como Pendiente",
        markAsResolved: "Marcar como Resuelta",
        delete: "Eliminar",
        votingSystem: "Sistema de Votación",
        votingSystemDescription: "Los residentes pueden votar en tiempo real sin necesidad de delegar su voto, permitiendo una mayor participación en las decisiones de la comunidad.",
        reportIncident: "Reporte de Incidencias",
        reportIncidentDescription: "Registra incidencias al instante desde cualquier dispositivo, con la opción de adjuntar imágenes para una mayor claridad.",
        communityMinutesDescription: "Accede fácilmente a las actas de las reuniones y mantente informado sobre las decisiones y actualizaciones más importantes de la comunidad.",
        myIncidents: "Mis Incidencias",
        myIncidentsDescription: "Aquí puedes ver las incidencias que has reportado. Cada incidencia incluye una descripción, una imagen (si la adjuntaste), y su estado actual: Pendiente, Vista o Resuelta.",
        resolvedIncidents: "Historial de Incidencias Resueltas",
        resolvedIncidentsDescription: "Esta sección muestra un historial de todas las incidencias que han sido resueltas, para que puedas revisarlas en cualquier momento.",
        instructions: "¿Tienes un problema en tu comunidad? Sigue estos pasos para reportarlo:",
        step1: "Escribe una breve descripción de lo que ocurre.",
        step2: "Si tienes una foto del problema, puedes adjuntarla (opcional).",
        step3: "Haz clic en 'Enviar Incidencia' para que el administrador la reciba.",
        descriptionLabel: "Descripción de la incidencia:",
        placeholderDescription: "Describe tu problema...",
        attachImage: "Adjuntar imagen (opcional):",
        submitIncident: "Enviar Incidencia",
        noFileSelected: "Ningún archivo seleccionado",
        januaryMeeting: "Acta de la reunión - Enero 2024",
        januaryDate: "Fecha: 15 de enero, 2024",
        februaryMeeting: "Acta de la reunión - Febrero 2024",
        februaryDate: "Fecha: 10 de febrero, 2024",
        downloadMinutes: "Descargar Acta",
        storageError: "No se ha podido guardar la incidencia: el almacenamiento local está lleno. Prueba a adjuntar una imagen más pequeña o a eliminar incidencias resueltas antiguas."
    }
};


// Definir variables globales para incidents y resolvedIncidents
let incidents = JSON.parse(localStorage.getItem('incidents')) || [];
let resolvedIncidents = JSON.parse(localStorage.getItem('resolvedIncidents')) || [];

// Función para alternar el menú lateral
function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Modo Oscuro/Claro
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
    });
}

// Modo Contraste 
const contrastToggle = document.getElementById('contrastToggle');
if (contrastToggle) {
    contrastToggle.addEventListener('change', function() {
        document.body.classList.toggle('high-contrast', this.checked);
    });
}

// Ajustar Tamaño del Texto
function adjustTextSize(size) {
    document.body.classList.remove('text-small', 'text-medium', 'text-large', 'text-x-large', 'text-xx-large');
    document.body.classList.add(`text-${size}`);
}

// Guardar preferencias en localStorage para mantenerlas si se vuelve a entrar en la página
function savePreferences() {
    const darkMode = darkModeToggle ? darkModeToggle.checked : false;
    const contrastMode = contrastToggle ? contrastToggle.checked : false;
    const textSize = document.body.classList.contains('text-xx-large') ? 'xx-large' :
                     document.body.classList.contains('text-x-large') ? 'x-large' :
                     document.body.classList.contains('text-large') ? 'large' :
                     document.body.classList.contains('text-medium') ? 'medium' : 'small';
    const languageSelect = document.getElementById('languageSelect');
    const language = languageSelect ? languageSelect.value : 'es';

    localStorage.setItem('darkMode', darkMode);
    localStorage.setItem('contrastMode', contrastMode);
    localStorage.setItem('textSize', textSize);
    localStorage.setItem('language', language);
    alert("Preferencias guardadas correctamente.");
}

// Cargar preferencias al volver a entrar en la web
function loadPreferences() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    const contrastMode = localStorage.getItem('contrastMode') === 'true';
    const textSize = localStorage.getItem('textSize') || 'medium';
    const language = localStorage.getItem('language') || 'es';

    if (darkMode) {
        document.body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.checked = true;
    }
    if (contrastMode) {
        document.body.classList.add('high-contrast');
        if (contrastToggle) contrastToggle.checked = true;
    }
    adjustTextSize(textSize);

    if (language) {
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) languageSelect.value = language;
        applyLanguage(language);
    }
}

// Funcionalidad de Traducción
const languageSelect = document.getElementById('languageSelect');
if (languageSelect) {
    languageSelect.addEventListener('change', function() {
        applyLanguage(this.value);
    });
}

// Función para aplicar el idioma en toda la página
function applyLanguage(language) {
    document.querySelectorAll('[data-translate]').forEach((element) => {
        const translationKey = element.getAttribute('data-translate');
        const translatedText = translations[language][translationKey];
        if (translatedText) {
            element.innerText = translatedText;
        }
    });

    // Traducir botones de incidencias
    displayIncidents(); // Llamo de nuevo a displayIncidents para aplicar el idioma en los botones dinámicos
}

// Escapar HTML para evitar que una descripción con <script> u otras etiquetas se ejecute al listarla
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text ?? '';
    return div.innerHTML;
}

// Guardar en localStorage con control de cuota llena (p. ej. muchas imágenes en Base64)
function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        alert(translations[localStorage.getItem('language') || 'es'].storageError);
        return false;
    }
}

// Convertir imagen a Base64
async function convertImageToBase64(imageFile) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(imageFile);
    });
}

// Guardar incidencia con imagen en Base64
document.getElementById('complaintForm')?.addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const description = document.getElementById('description')?.value;
    const imageUpload = document.getElementById('imageUpload')?.files[0];
    let imageBase64 = null;

    if (imageUpload) {
        imageBase64 = await convertImageToBase64(imageUpload);
    }

    const incident = {
        description,
        image: imageBase64,
        status: 'Pendiente'
    };

    incidents.push(incident);
    if (!saveToStorage('incidents', incidents)) {
        incidents.pop(); // no se pudo guardar: no dejar la incidencia solo en memoria
        return;
    }
    displayIncidents();

    document.getElementById('complaintForm').reset();
});

// Mostrar incidencias en "Mis Incidencias" y "Historial de Incidencias" 
function displayIncidents() {
    const incidentsList = document.getElementById('incidentsList');
    const resolvedList = document.getElementById('resolvedList');
    incidentsList.innerHTML = '';
    resolvedList.innerHTML = '';

    incidents.forEach((incident, index) => {
        const incidentDiv = document.createElement('div');
        incidentDiv.classList.add('incident', 'border', 'p-2', 'mb-2');
        incidentDiv.innerHTML = `
            <p><strong data-translate="incidentDescription">Descripción:</strong> ${escapeHtml(incident.description)}</p>
            ${incident.image ? `<img src="${incident.image}" alt="Incidencia" style="max-width: 200px;">` : ''}
            <p><strong data-translate="status">Estado:</strong> ${incident.status}</p>
            <button class="btn btn-warning" onclick="updateStatus(${index}, 'Vista')" data-translate="markAsViewed">${translations[localStorage.getItem('language') || 'es'].markAsViewed}</button>
            <button class="btn btn-primary" onclick="updateStatus(${index}, 'Pendiente')" data-translate="markAsPending">${translations[localStorage.getItem('language') || 'es'].markAsPending}</button>
            <button class="btn btn-success mx-3" onclick="confirmResolved(${index})" data-translate="markAsResolved">${translations[localStorage.getItem('language') || 'es'].markAsResolved}</button>
            <button class="btn btn-danger ml-3" onclick="confirmDeleteIncident(${index})" data-translate="delete">${translations[localStorage.getItem('language') || 'es'].delete}</button>
        `;
        incidentsList.appendChild(incidentDiv);
    });

    resolvedIncidents.forEach((incident, index) => {
        const resolvedDiv = document.createElement('div');
        resolvedDiv.classList.add('incident', 'border', 'p-2', 'mb-2');
        resolvedDiv.innerHTML = `
            <p><strong data-translate="incidentDescription">Descripción:</strong> ${escapeHtml(incident.description)}</p>
            ${incident.image ? `<img src="${incident.image}" alt="Incidencia Resuelta" style="max-width: 200px;">` : ''}
            <p><strong data-translate="status">Estado:</strong> ${incident.status}</p>
            <button class="btn btn-danger" onclick="confirmDeleteResolved(${index})" data-translate="delete">${translations[localStorage.getItem('language') || 'es'].delete}</button>
        `;
        resolvedList.appendChild(resolvedDiv);
    });
}

// Confirmación antes de marcar como Resuelta, asi evitar error de darle sin querer
function confirmResolved(index) {
    const confirmation = confirm(translations[localStorage.getItem('language') || 'es'].confirmResolved);
    if (confirmation) {
        updateStatus(index, 'Resuelta');
    }
}

// Confirmación antes de eliminar una incidencia en "Mis Incidencias", asi evitar error de darle sin querer
function confirmDeleteIncident(index) {
    const confirmation = confirm(translations[localStorage.getItem('language') || 'es'].confirmDelete);
    if (confirmation) {
        deleteIncident(index);
    }
}

// Confirmación antes de eliminar una incidencia en el "Historial", asi evitar error de darle sin querer
function confirmDeleteResolved(index) {
    const confirmation = confirm(translations[localStorage.getItem('language') || 'es'].confirmDelete);
    if (confirmation) {
        deleteResolvedIncident(index);
    }
}

// Actualizar estado de la incidencia y moverla a "Historial" si se marca como "Resuelta"
function updateStatus(index, status) {
    incidents[index].status = status;
    if (status === 'Resuelta') {
        resolvedIncidents.push(incidents[index]);
        incidents.splice(index, 1);
        saveToStorage('resolvedIncidents', resolvedIncidents);
    }
    saveToStorage('incidents', incidents);
    displayIncidents();
}

// Eliminar incidencia
function deleteIncident(index) {
    incidents.splice(index, 1);
    saveToStorage('incidents', incidents);
    displayIncidents();
}

// Eliminar incidencia en el historial
function deleteResolvedIncident(index) {
    resolvedIncidents.splice(index, 1);
    saveToStorage('resolvedIncidents', resolvedIncidents);
    displayIncidents();
}

// Inicializar la visualización de incidencias y preferencias al cargar la página
window.onload = function() {
    loadPreferences();
    displayIncidents();
};
