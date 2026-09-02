// Mis Vecinos — lógica compartida por todas las páginas.
// Cada función comprueba si sus elementos existen antes de tocarlos, así una
// misma copia de este archivo sirve para las 5 páginas (index/incidencias/
// comunidad/documentos/configuracion) sin duplicar código.
(function () {
  "use strict";

  var translations = {
    es: {
      navHome: "Inicio", navPanel: "Panel de la comunidad", navIncidents: "Incidencias", navCommunity: "Comunidad", navDocuments: "Documentos", navPhones: "Teléfonos de interés", navSettings: "Configuración",
      homeTitle: "Mis Vecinos", homeSubtitle: "El espacio compartido de tu finca: incidencias, avisos, votaciones y documentos — identificado solo por tu vivienda, nunca por tu nombre.",
      homeTilesTitle: "¿Qué quieres hacer?", homeMostUsedTitle: "Más usado",
      dashEyebrow: "Comunidad", dashTitle: "Panel de la comunidad", dashSubtitle: "Un vistazo rápido a las incidencias y documentos del edificio.",
      statPending: "Incidencias pendientes", statResolved: "Incidencias resueltas", statDocuments: "Documentos disponibles",
      statPendingCta: "Ver pendientes →", statResolvedCta: "Ver resueltas →", statDocsCta: "Ver documentos →",
      urgentBanner1: "incidencia urgente sin resolver.", urgentBannerN: "incidencias urgentes sin resolver.", urgentBannerSee: "Ver",
      quickReportTitle: "Reportar una incidencia", quickReportDesc: "Avisa al administrador de un problema en el edificio, con foto si hace falta.", quickReportBtn: "Nueva incidencia",
      quickDocsTitle: "Consultar documentos", quickDocsDesc: "Actas, normativa y presupuestos de la comunidad, todo en un mismo sitio.", quickDocsBtn: "Ver documentos",
      chartTitle: "Incidencias por mes", chartNoData: "Aún no hay incidencias suficientes para mostrar un gráfico.", chartAvgResolution: "Tiempo medio de resolución",
      recentTitle: "Actividad reciente", recentSeeAll: "Ver todas →", recentEmpty: "Aún no hay incidencias registradas.",
      incEyebrow: "Mantenimiento", reportIncident: "Incidencias", incInstructions: "Describe el problema, adjunta fotos si puedes, y el administrador lo verá aquí mismo.",
      newIncidentTitle: "Nueva incidencia", descriptionLabel: "Descripción", placeholderDescription: "Describe tu problema...",
      categoryLabel: "Categoría", catPlumbing: "Fontanería", catElectric: "Electricidad", catElevator: "Ascensor", catCleaning: "Limpieza", catCommon: "Zonas comunes", catOther: "Otros",
      priorityLabel: "Prioridad", prioLow: "Baja", prioMedium: "Media", prioUrgent: "Urgente",
      unitLabel: "Tu vivienda (opcional)", unitPlaceholder: "p. ej. 3ºB", anonymousUnit: "Vecino/a anónimo/a",
      attachImage: "Fotos (opcional)", noFileSelected: "Ningún archivo seleccionado", filesSelected: "archivo(s) seleccionados",
      submitIncident: "Enviar incidencia", tabOpen: "Abiertas", tabResolved: "Resueltas",
      emptyOpen: "No hay incidencias pendientes. ¡Todo en orden!", emptyResolved: "Todavía no se ha resuelto ninguna incidencia.", emptyFiltered: "Ninguna incidencia coincide con el filtro.",
      searchPlaceholder: "Buscar incidencias...", filterCategoryAll: "Todas las categorías", filterPriorityAll: "Todas las prioridades",
      statusPendiente: "Pendiente", statusVista: "Vista", statusResuelta: "Resuelta",
      markAsViewed: "Marcar vista", markAsPending: "Marcar pendiente", markAsResolved: "Marcar resuelta", delete: "Eliminar",
      confirmDelete: "¿Seguro que quieres eliminar esta incidencia?", confirmResolved: "¿Marcar esta incidencia como resuelta? No se puede deshacer.",
      commentsToggle: "Comentarios", commentsEmpty: "Sin comentarios todavía.", commentPlaceholder: "Escribe un comentario...", commentSubmit: "Enviar",
      commEyebrow: "Vida en comunidad", commTitle: "Comunidad", commSubtitle: "Avisos del administrador y votaciones rápidas entre vecinos.",
      tabNotices: "Avisos", tabPolls: "Votaciones",
      newNoticeBtn: "Nuevo aviso", noticeTitleLabel: "Título", noticeTitlePlaceholder: "p. ej. Corte de agua el jueves",
      noticeBodyLabel: "Mensaje", noticeBodyPlaceholder: "Detalles del aviso...", noticeSubmit: "Publicar aviso", noticesEmpty: "No hay avisos publicados todavía.",
      newPollBtn: "Nueva votación", pollQuestionLabel: "Pregunta", pollQuestionPlaceholder: "p. ej. ¿Cambiamos el portero automático?",
      pollOptionLabel: "Opción", pollOptionOptional: "(opcional)", pollSubmit: "Publicar votación", pollsEmpty: "No hay votaciones abiertas todavía.",
      pollVoteBtn: "Votar", pollVoted: "Ya has votado en esta votación.", pollVotes: "votos",
      docsEyebrow: "Archivo", docsTitle: "Documentos", docsSubtitle: "Actas, normativa, seguros y presupuestos de la comunidad.",
      searchDocsPlaceholder: "Buscar documentos...", docCategoryActas: "Actas de reuniones", docCategoryNormativa: "Normativa",
      docCategorySeguros: "Seguros", docCategoryPresupuestos: "Presupuestos", docCategoryEmpty: "Todavía no hay documentos en esta categoría.", docNoResults: "Ningún documento coincide con la búsqueda.",
      januaryMeeting: "Reunión — Enero 2024", januaryDate: "15 de enero, 2024",
      februaryMeeting: "Reunión — Febrero 2024", februaryDate: "10 de febrero, 2024", download: "Descargar",
      phonesEyebrow: "Emergencias", phonesTitle: "Teléfonos de interés", phonesSubtitle: "Números útiles para una emergencia o una avería en el edificio.",
      phonesEmergencyTitle: "Emergencias", phonesEmergencyDesc: "El 112 cubre policía, bomberos, ambulancias y protección civil en toda España — un único número para cualquier emergencia.", phone112Label: "Emergencias (toda España)",
      phonesCommunityTitle: "Contactos de la comunidad", phonesCommunityDesc: "Seguro, fontanero de guardia, electricista, cerrajero, administrador... los que tu comunidad necesite.",
      newContactBtn: "Añadir contacto", contactLabelLabel: "¿Para qué sirve?", contactLabelPlaceholder: "p. ej. Fontanero de guardia", contactPhoneLabel: "Teléfono", contactPhonePlaceholder: "p. ej. 600 123 456",
      contactSubmit: "Guardar contacto", contactsEmpty: "Todavía no hay contactos guardados.",
      configEyebrow: "Preferencias", configTitle: "Configuración", configDesc: "Personaliza la apariencia de la aplicación a tu gusto.",
      unitSettingLabel: "Tu vivienda", unitSettingDesc: "Se usará para identificarte de forma anónima al reportar, comentar o votar — nunca se comparte tu nombre.",
      darkMode: "Modo oscuro", darkModeDesc: "Reduce el brillo de la pantalla para leer mejor con poca luz.",
      contrastMode: "Contraste alto", contrastModeDesc: "Aumenta el contraste para que los elementos se vean con más claridad.",
      textSize: "Tamaño del texto", textSizeDesc: "Ajusta el tamaño del texto para leer con más comodidad.",
      language: "Idioma", languageDesc: "Elige el idioma en el que quieres ver la aplicación.",
      spanish: "Español", catalan: "Català", english: "English",
      demoDataLabel: "Datos de ejemplo", demoDataDesc: "Rellena la app con incidencias, avisos y una votación de ejemplo para probarla.", loadDemoBtn: "Cargar datos de ejemplo", demoLoaded: "Datos de ejemplo cargados",
      backupLabel: "Copia de seguridad", backupDesc: "Todos tus datos viven solo en este navegador. Exporta una copia de vez en cuando por si acaso.",
      exportBtn: "Exportar datos", importBtn: "Importar datos", importSuccess: "Datos importados correctamente", importError: "El archivo no es una copia de seguridad válida",
      resetDataLabel: "Borrar todos los datos", resetDataDesc: "Elimina incidencias, avisos y votaciones guardadas en este navegador. No se puede deshacer.",
      resetDataBtn: "Borrar datos", resetConfirm: "¿Seguro que quieres borrar todos los datos guardados en este navegador?", resetDone: "Datos borrados",
      backupModalTitle: "Copia de seguridad", backupModalDesc: "Descarga el archivo o copia el texto para guardarlo en otro sitio.",
      backupDownload: "Descargar archivo", backupCopy: "Copiar", backupCopied: "Copiado al portapapeles", backupClose: "Cerrar",
      savePreferences: "Guardar preferencias", saved: "Preferencias guardadas", storageError: "No se ha podido guardar: el almacenamiento local está lleno.",
      installApp: "Instalar app"
    },
    en: {
      navHome: "Home", navPanel: "Community dashboard", navIncidents: "Incidents", navCommunity: "Community", navDocuments: "Documents", navPhones: "Useful phone numbers", navSettings: "Settings",
      homeTitle: "Mis Vecinos", homeSubtitle: "Your building's shared space: incidents, notices, polls and documents — identified only by your unit, never by your name.",
      homeTilesTitle: "What do you want to do?", homeMostUsedTitle: "Most used",
      dashEyebrow: "Community", dashTitle: "Community dashboard", dashSubtitle: "A quick look at the building's incidents and documents.",
      statPending: "Pending incidents", statResolved: "Resolved incidents", statDocuments: "Available documents",
      statPendingCta: "View pending →", statResolvedCta: "View resolved →", statDocsCta: "View documents →",
      urgentBanner1: "urgent incident still open.", urgentBannerN: "urgent incidents still open.", urgentBannerSee: "View",
      quickReportTitle: "Report an incident", quickReportDesc: "Let the administrator know about a problem in the building, with a photo if needed.", quickReportBtn: "New incident",
      quickDocsTitle: "Check the documents", quickDocsDesc: "Minutes, rules and budgets for the community, all in one place.", quickDocsBtn: "View documents",
      chartTitle: "Incidents by month", chartNoData: "Not enough incidents yet to show a chart.", chartAvgResolution: "Average time to resolve",
      recentTitle: "Recent activity", recentSeeAll: "See all →", recentEmpty: "No incidents reported yet.",
      incEyebrow: "Maintenance", reportIncident: "Incidents", incInstructions: "Describe the problem, attach photos if you can, and the administrator will see it right here.",
      newIncidentTitle: "New incident", descriptionLabel: "Description", placeholderDescription: "Describe your problem...",
      categoryLabel: "Category", catPlumbing: "Plumbing", catElectric: "Electrical", catElevator: "Elevator", catCleaning: "Cleaning", catCommon: "Common areas", catOther: "Other",
      priorityLabel: "Priority", prioLow: "Low", prioMedium: "Medium", prioUrgent: "Urgent",
      unitLabel: "Your unit (optional)", unitPlaceholder: "e.g. 3B", anonymousUnit: "Anonymous neighbor",
      attachImage: "Photos (optional)", noFileSelected: "No file selected", filesSelected: "file(s) selected",
      submitIncident: "Submit incident", tabOpen: "Open", tabResolved: "Resolved",
      emptyOpen: "No pending incidents. All clear!", emptyResolved: "No incidents resolved yet.", emptyFiltered: "No incidents match this filter.",
      searchPlaceholder: "Search incidents...", filterCategoryAll: "All categories", filterPriorityAll: "All priorities",
      statusPendiente: "Pending", statusVista: "Viewed", statusResuelta: "Resolved",
      markAsViewed: "Mark viewed", markAsPending: "Mark pending", markAsResolved: "Mark resolved", delete: "Delete",
      confirmDelete: "Are you sure you want to delete this incident?", confirmResolved: "Mark this incident as resolved? This can't be undone.",
      commentsToggle: "Comments", commentsEmpty: "No comments yet.", commentPlaceholder: "Write a comment...", commentSubmit: "Send",
      commEyebrow: "Community life", commTitle: "Community", commSubtitle: "Notices from the administrator and quick polls among neighbors.",
      tabNotices: "Notices", tabPolls: "Polls",
      newNoticeBtn: "New notice", noticeTitleLabel: "Title", noticeTitlePlaceholder: "e.g. Water shut-off on Thursday",
      noticeBodyLabel: "Message", noticeBodyPlaceholder: "Notice details...", noticeSubmit: "Publish notice", noticesEmpty: "No notices published yet.",
      newPollBtn: "New poll", pollQuestionLabel: "Question", pollQuestionPlaceholder: "e.g. Should we replace the intercom?",
      pollOptionLabel: "Option", pollOptionOptional: "(optional)", pollSubmit: "Publish poll", pollsEmpty: "No open polls yet.",
      pollVoteBtn: "Vote", pollVoted: "You already voted on this poll.", pollVotes: "votes",
      docsEyebrow: "Archive", docsTitle: "Documents", docsSubtitle: "Minutes, rules, insurance and budgets for the community.",
      searchDocsPlaceholder: "Search documents...", docCategoryActas: "Meeting minutes", docCategoryNormativa: "Rules",
      docCategorySeguros: "Insurance", docCategoryPresupuestos: "Budgets", docCategoryEmpty: "No documents in this category yet.", docNoResults: "No documents match your search.",
      januaryMeeting: "Meeting — January 2024", januaryDate: "January 15, 2024",
      februaryMeeting: "Meeting — February 2024", februaryDate: "February 10, 2024", download: "Download",
      phonesEyebrow: "Emergencies", phonesTitle: "Useful phone numbers", phonesSubtitle: "Numbers for an emergency or a problem in the building.",
      phonesEmergencyTitle: "Emergencies", phonesEmergencyDesc: "112 covers police, fire, ambulance and civil protection across Spain — a single number for any emergency.", phone112Label: "Emergencies (all of Spain)",
      phonesCommunityTitle: "Community contacts", phonesCommunityDesc: "Insurance, on-call plumber, electrician, locksmith, property manager... whatever your community needs.",
      newContactBtn: "Add contact", contactLabelLabel: "What's it for?", contactLabelPlaceholder: "e.g. On-call plumber", contactPhoneLabel: "Phone", contactPhonePlaceholder: "e.g. 600 123 456",
      contactSubmit: "Save contact", contactsEmpty: "No contacts saved yet.",
      configEyebrow: "Preferences", configTitle: "Settings", configDesc: "Customize how the application looks.",
      unitSettingLabel: "Your unit", unitSettingDesc: "Used to identify you anonymously when reporting, commenting or voting — your name is never shared.",
      darkMode: "Dark mode", darkModeDesc: "Reduce screen brightness for easier reading in low light.",
      contrastMode: "High contrast", contrastModeDesc: "Increase contrast to make on-screen elements clearer.",
      textSize: "Text size", textSizeDesc: "Adjust the text size for more comfortable reading.",
      language: "Language", languageDesc: "Choose the language you want to view the application in.",
      spanish: "Spanish", catalan: "Catalan", english: "English",
      demoDataLabel: "Sample data", demoDataDesc: "Fill the app with example incidents, notices and a poll to try it out.", loadDemoBtn: "Load sample data", demoLoaded: "Sample data loaded",
      backupLabel: "Backup", backupDesc: "All your data lives only in this browser. Export a copy every now and then, just in case.",
      exportBtn: "Export data", importBtn: "Import data", importSuccess: "Data imported successfully", importError: "That file isn't a valid backup",
      resetDataLabel: "Delete all data", resetDataDesc: "Removes incidents, notices and polls saved in this browser. This can't be undone.",
      resetDataBtn: "Delete data", resetConfirm: "Are you sure you want to delete all data saved in this browser?", resetDone: "Data deleted",
      backupModalTitle: "Backup", backupModalDesc: "Download the file or copy the text to save it elsewhere.",
      backupDownload: "Download file", backupCopy: "Copy", backupCopied: "Copied to clipboard", backupClose: "Close",
      savePreferences: "Save preferences", saved: "Preferences saved", storageError: "Couldn't save: local storage is full.",
      installApp: "Install app"
    },
    ca: {
      navHome: "Inici", navPanel: "Tauler de la comunitat", navIncidents: "Incidències", navCommunity: "Comunitat", navDocuments: "Documents", navPhones: "Telèfons d'interès", navSettings: "Configuració",
      homeTitle: "Mis Vecinos", homeSubtitle: "L'espai compartit de la teva finca: incidències, avisos, votacions i documents — identificat només pel teu habitatge, mai pel teu nom.",
      homeTilesTitle: "Què vols fer?", homeMostUsedTitle: "Més utilitzat",
      dashEyebrow: "Comunitat", dashTitle: "Tauler de la comunitat", dashSubtitle: "Un cop d'ull ràpid a les incidències i documents de l'edifici.",
      statPending: "Incidències pendents", statResolved: "Incidències resoltes", statDocuments: "Documents disponibles",
      statPendingCta: "Veure pendents →", statResolvedCta: "Veure resoltes →", statDocsCta: "Veure documents →",
      urgentBanner1: "incidència urgent sense resoldre.", urgentBannerN: "incidències urgents sense resoldre.", urgentBannerSee: "Veure",
      quickReportTitle: "Reportar una incidència", quickReportDesc: "Avisa l'administrador d'un problema a l'edifici, amb foto si cal.", quickReportBtn: "Nova incidència",
      quickDocsTitle: "Consultar documents", quickDocsDesc: "Actes, normativa i pressupostos de la comunitat, tot en un mateix lloc.", quickDocsBtn: "Veure documents",
      chartTitle: "Incidències per mes", chartNoData: "Encara no hi ha prou incidències per mostrar un gràfic.", chartAvgResolution: "Temps mitjà de resolució",
      recentTitle: "Activitat recent", recentSeeAll: "Veure totes →", recentEmpty: "Encara no hi ha incidències registrades.",
      incEyebrow: "Manteniment", reportIncident: "Incidències", incInstructions: "Descriu el problema, adjunta fotos si pots, i l'administrador ho veurà aquí mateix.",
      newIncidentTitle: "Nova incidència", descriptionLabel: "Descripció", placeholderDescription: "Descriu el teu problema...",
      categoryLabel: "Categoria", catPlumbing: "Lampisteria", catElectric: "Electricitat", catElevator: "Ascensor", catCleaning: "Neteja", catCommon: "Zones comunes", catOther: "Altres",
      priorityLabel: "Prioritat", prioLow: "Baixa", prioMedium: "Mitjana", prioUrgent: "Urgent",
      unitLabel: "El teu pis (opcional)", unitPlaceholder: "p. ex. 3r B", anonymousUnit: "Veí/veïna anònim/a",
      attachImage: "Fotos (opcional)", noFileSelected: "Cap fitxer seleccionat", filesSelected: "fitxer(s) seleccionats",
      submitIncident: "Enviar incidència", tabOpen: "Obertes", tabResolved: "Resoltes",
      emptyOpen: "No hi ha incidències pendents. Tot en ordre!", emptyResolved: "Encara no s'ha resolt cap incidència.", emptyFiltered: "Cap incidència coincideix amb el filtre.",
      searchPlaceholder: "Cerca incidències...", filterCategoryAll: "Totes les categories", filterPriorityAll: "Totes les prioritats",
      statusPendiente: "Pendent", statusVista: "Vista", statusResuelta: "Resolta",
      markAsViewed: "Marca vista", markAsPending: "Marca pendent", markAsResolved: "Marca resolta", delete: "Elimina",
      confirmDelete: "Segur que vols eliminar aquesta incidència?", confirmResolved: "Marcar aquesta incidència com a resolta? No es pot desfer.",
      commentsToggle: "Comentaris", commentsEmpty: "Encara no hi ha comentaris.", commentPlaceholder: "Escriu un comentari...", commentSubmit: "Envia",
      commEyebrow: "Vida en comunitat", commTitle: "Comunitat", commSubtitle: "Avisos de l'administrador i votacions ràpides entre veïns.",
      tabNotices: "Avisos", tabPolls: "Votacions",
      newNoticeBtn: "Nou avís", noticeTitleLabel: "Títol", noticeTitlePlaceholder: "p. ex. Tall d'aigua dijous",
      noticeBodyLabel: "Missatge", noticeBodyPlaceholder: "Detalls de l'avís...", noticeSubmit: "Publica l'avís", noticesEmpty: "Encara no s'ha publicat cap avís.",
      newPollBtn: "Nova votació", pollQuestionLabel: "Pregunta", pollQuestionPlaceholder: "p. ex. Canviem el porter automàtic?",
      pollOptionLabel: "Opció", pollOptionOptional: "(opcional)", pollSubmit: "Publica la votació", pollsEmpty: "Encara no hi ha votacions obertes.",
      pollVoteBtn: "Vota", pollVoted: "Ja has votat en aquesta votació.", pollVotes: "vots",
      docsEyebrow: "Arxiu", docsTitle: "Documents", docsSubtitle: "Actes, normativa, assegurances i pressupostos de la comunitat.",
      searchDocsPlaceholder: "Cerca documents...", docCategoryActas: "Actes de reunió", docCategoryNormativa: "Normativa",
      docCategorySeguros: "Assegurances", docCategoryPresupuestos: "Pressupostos", docCategoryEmpty: "Encara no hi ha documents en aquesta categoria.", docNoResults: "Cap document coincideix amb la cerca.",
      januaryMeeting: "Reunió — Gener 2024", januaryDate: "15 de gener de 2024",
      februaryMeeting: "Reunió — Febrer 2024", februaryDate: "10 de febrer de 2024", download: "Descarrega",
      phonesEyebrow: "Emergències", phonesTitle: "Telèfons d'interès", phonesSubtitle: "Números útils per a una emergència o una avaria a l'edifici.",
      phonesEmergencyTitle: "Emergències", phonesEmergencyDesc: "El 112 cobreix policia, bombers, ambulàncies i protecció civil a tot Espanya — un únic número per a qualsevol emergència.", phone112Label: "Emergències (tot Espanya)",
      phonesCommunityTitle: "Contactes de la comunitat", phonesCommunityDesc: "Assegurança, lampista de guàrdia, electricista, manyà, administrador... els que la teva comunitat necessiti.",
      newContactBtn: "Afegeix contacte", contactLabelLabel: "Per a què serveix?", contactLabelPlaceholder: "p. ex. Lampista de guàrdia", contactPhoneLabel: "Telèfon", contactPhonePlaceholder: "p. ex. 600 123 456",
      contactSubmit: "Desa el contacte", contactsEmpty: "Encara no hi ha contactes desats.",
      configEyebrow: "Preferències", configTitle: "Configuració", configDesc: "Personalitza l'aparença de l'aplicació al teu gust.",
      unitSettingLabel: "El teu pis", unitSettingDesc: "S'utilitzarà per identificar-te de manera anònima en reportar, comentar o votar — mai es comparteix el teu nom.",
      darkMode: "Mode fosc", darkModeDesc: "Redueix la brillantor de la pantalla per llegir millor amb poca llum.",
      contrastMode: "Contrast alt", contrastModeDesc: "Augmenta el contrast perquè els elements es vegin amb més claredat.",
      textSize: "Mida del text", textSizeDesc: "Ajusta la mida del text per llegir més còmodament.",
      language: "Idioma", languageDesc: "Tria l'idioma en què vols veure l'aplicació.",
      spanish: "Espanyol", catalan: "Català", english: "Anglès",
      demoDataLabel: "Dades d'exemple", demoDataDesc: "Omple l'app amb incidències, avisos i una votació d'exemple per provar-la.", loadDemoBtn: "Carrega dades d'exemple", demoLoaded: "Dades d'exemple carregades",
      backupLabel: "Còpia de seguretat", backupDesc: "Totes les teves dades viuen només en aquest navegador. Exporta'n una còpia de tant en tant, per si de cas.",
      exportBtn: "Exporta les dades", importBtn: "Importa les dades", importSuccess: "Dades importades correctament", importError: "Aquest fitxer no és una còpia de seguretat vàlida",
      resetDataLabel: "Esborra totes les dades", resetDataDesc: "Elimina incidències, avisos i votacions desades en aquest navegador. No es pot desfer.",
      resetDataBtn: "Esborra les dades", resetConfirm: "Segur que vols esborrar totes les dades desades en aquest navegador?", resetDone: "Dades esborrades",
      backupModalTitle: "Còpia de seguretat", backupModalDesc: "Descarrega l'arxiu o copia el text per desar-lo en un altre lloc.",
      backupDownload: "Descarrega l'arxiu", backupCopy: "Copia", backupCopied: "Copiat al porta-retalls", backupClose: "Tanca",
      savePreferences: "Desa les preferències", saved: "Preferències desades", storageError: "No s'ha pogut desar: l'emmagatzematge local és ple.",
      installApp: "Instal·la l'app"
    }
  };

  var STORE_PREFIX = "misvecinos_";
  function load(key, fallback) { try { var v = localStorage.getItem(STORE_PREFIX + key); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; } }
  function save(key, val) { try { localStorage.setItem(STORE_PREFIX + key, JSON.stringify(val)); return true; } catch (e) { toast(t('storageError')); return false; } }
  var ALL_KEYS = ['language', 'darkMode', 'contrastMode', 'textScale', 'unit', 'incidents', 'resolvedIncidents', 'notices', 'polls', 'votedPolls', 'contacts'];

  var state = {
    lang: load('language', 'es'),
    dark: load('darkMode', window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches),
    contrast: load('contrastMode', false),
    textScale: load('textScale', 1),
    unit: load('unit', ''),
    incidents: load('incidents', []),
    resolved: load('resolvedIncidents', []),
    notices: load('notices', []),
    polls: load('polls', []),
    votedPolls: load('votedPolls', {}),
    contacts: load('contacts', []),
    filters: { q: '', category: 'all', priority: 'all' }
  };

  function t(key) { return (translations[state.lang] && translations[state.lang][key]) || translations.es[key] || key; }
  function escapeHtml(str) { var d = document.createElement('div'); d.textContent = str == null ? '' : str; return d.innerHTML; }
  function unitLabel(u) { return u ? ('🏠 ' + escapeHtml(u)) : t('anonymousUnit'); }
  function fmtDate(ts) { try { return new Date(ts).toLocaleDateString(state.lang === 'en' ? 'en-GB' : (state.lang === 'ca' ? 'ca-ES' : 'es-ES'), { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) { return ''; } }
  function $(id) { return document.getElementById(id); }

  /* ---------- apariencia (se aplica en TODAS las páginas) ---------- */
  function applyAppearance() {
    document.body.classList.toggle('dark-mode', state.dark);
    document.documentElement.setAttribute('data-theme', state.dark ? 'dark' : 'light');
    document.body.classList.toggle('high-contrast', state.contrast);
    document.documentElement.style.setProperty('--text-scale', state.textScale);
    var dt = $('darkModeToggle'); if (dt) dt.checked = state.dark;
    var ct = $('contrastToggle'); if (ct) ct.checked = state.contrast;
    document.querySelectorAll('.size-btn').forEach(function (b) { b.classList.toggle('active', parseFloat(b.dataset.size) === state.textScale); });
    var qIcon = $('quickThemeIcon');
    if (qIcon) {
      qIcon.innerHTML = state.dark
        ? '<circle cx="12" cy="12" r="4.2"/><path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>'
        : '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>';
      $('quickThemeLabel').textContent = state.dark ? (state.lang === 'es' ? 'Modo claro' : (state.lang === 'ca' ? 'Mode clar' : 'Light mode')) : t('darkMode');
    }
    var us = $('unitSetting'); if (us) us.value = state.unit;
    var su = $('sidebarUnit'); if (su) su.textContent = state.unit ? unitLabel(state.unit) : '';
    redrawChart();
  }

  function applyLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder'))); });
    var ls = $('languageSelect'); if (ls) ls.value = state.lang;
    var l3 = $('pollOpt3Label'); if (l3) l3.textContent = t('pollOptionLabel') + ' 3 ' + t('pollOptionOptional');
    var l4 = $('pollOpt4Label'); if (l4) l4.textContent = t('pollOptionLabel') + ' 4 ' + t('pollOptionOptional');
    document.documentElement.lang = state.lang;
    renderAll();
  }

  /* ---------- sidebar móvil ---------- */
  function initSidebar() {
    var toggle = $('menuToggle'), sidebar = $('sidebar'), backdrop = $('backdrop');
    if (!toggle || !sidebar || !backdrop) return;
    function open() { sidebar.classList.add('open'); backdrop.classList.add('show'); toggle.setAttribute('aria-expanded', 'true'); }
    function close() { sidebar.classList.remove('open'); backdrop.classList.remove('show'); toggle.setAttribute('aria-expanded', 'false'); }
    toggle.addEventListener('click', open);
    backdrop.addEventListener('click', close);
    var qt = $('quickTheme');
    if (qt) qt.addEventListener('click', function () { state.dark = !state.dark; applyAppearance(); save('darkMode', state.dark); });
  }

  /* ---------- incidencias: helpers de render ---------- */
  function statusPill(status) {
    var map = { Pendiente: ['pill-pendiente', 'statusPendiente'], Vista: ['pill-vista', 'statusVista'], Resuelta: ['pill-resuelta', 'statusResuelta'] };
    var m = map[status] || map.Pendiente;
    return '<span class="pill ' + m[0] + '">' + t(m[1]) + '</span>';
  }
  function categoryTag(cat) {
    var meta = { plumbing: ['blue', 'catPlumbing'], electric: ['amber', 'catElectric'], elevator: ['accent', 'catElevator'], cleaning: ['green', 'catCleaning'], common: ['violet', 'catCommon'], other: ['', 'catOther'] };
    var m = meta[cat] || meta.other;
    return '<span class="tag' + (m[0] ? (' tag-' + m[0]) : '') + '"><span class="dot"></span>' + t(m[1]) + '</span>';
  }
  function priorityPill(p) {
    var map = { low: ['pill-low', 'prioLow'], medium: ['pill-medium', 'prioMedium'], urgent: ['pill-urgent', 'prioUrgent'] };
    var m = map[p] || map.low;
    return '<span class="pill ' + m[0] + '">' + t(m[1]) + '</span>';
  }

  function renderDashboard() {
    var statPending = $('statPending'); if (!statPending) return;
    statPending.textContent = state.incidents.length;
    $('statResolved').textContent = state.resolved.length;
    $('statDocs').textContent = 2; // actas reales existentes hoy

    var urgent = state.incidents.filter(function (i) { return i.priority === 'urgent'; }).length;
    var banner = $('urgentBanner');
    if (banner) {
      banner.innerHTML = urgent > 0
        ? '<div class="banner"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>'
          + '<span>' + urgent + ' ' + t(urgent === 1 ? 'urgentBanner1' : 'urgentBannerN') + '</span>'
          + '<a href="incidencias.html?priority=urgent">' + t('urgentBannerSee') + ' →</a></div>'
        : '';
    }

    var recentBox = $('recentList');
    if (recentBox) {
      var all = state.incidents.concat(state.resolved).slice().sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); }).slice(0, 3);
      recentBox.innerHTML = all.length
        ? all.map(function (i) { var tab = i.status === 'Resuelta' ? 'resolved' : 'open'; return '<a class="recent-row" href="incidencias.html?tab=' + tab + '#inc-' + i.createdAt + '"><div class="recent-desc">' + escapeHtml(i.description) + '</div>' + statusPill(i.status) + '</a>'; }).join('')
        : '<p style="color:var(--ink-muted);font-size:.88rem;margin:0;">' + t('recentEmpty') + '</p>';
    }

    var badge = $('navIncidentsBadge');
    if (badge) { if (urgent > 0) { badge.hidden = false; badge.textContent = urgent; } else { badge.hidden = true; } }
  }

  /* ---------- incidencias: página ---------- */
  function filteredList(list) {
    return list.filter(function (i) {
      if (state.filters.category !== 'all' && i.category !== state.filters.category) return false;
      if (state.filters.priority !== 'all' && i.priority !== state.filters.priority) return false;
      if (state.filters.q && (i.description || '').toLowerCase().indexOf(state.filters.q.toLowerCase()) === -1) return false;
      return true;
    });
  }
  function syncFilterControls() {
    var fq = $('filterQ'); if (!fq) return;
    fq.value = state.filters.q;
    $('filterCategory').value = state.filters.category;
    $('filterPriority').value = state.filters.priority;
  }

  function commentsHtml(list, idx) {
    var inc = list[idx];
    var comments = inc.comments || [];
    var rows = comments.length
      ? comments.map(function (c) { return '<div class="comment-row"><div class="comment-meta">' + unitLabel(c.unit) + ' · ' + fmtDate(c.ts) + '</div>' + escapeHtml(c.text) + '</div>'; }).join('')
      : '<p style="color:var(--ink-muted);font-size:.82rem;margin:0;">' + t('commentsEmpty') + '</p>';
    return '<details class="comments"><summary>' + t('commentsToggle') + ' (' + comments.length + ')</summary>'
      + rows
      + '<form class="comment-form" data-comment-idx="' + idx + '">'
      + '<textarea required placeholder="' + t('commentPlaceholder') + '"></textarea>'
      + '<button type="submit" class="btn btn-ghost">' + t('commentSubmit') + '</button>'
      + '</form></details>';
  }

  function incidentCard(inc, idx, listName) {
    var imgs = inc.images && inc.images.length ? '<div class="img-gallery">' + inc.images.map(function (src) { return '<img class="incident-img" src="' + src + '" alt="">'; }).join('') + '</div>' : '';
    var actions = listName === 'open'
      ? '<div class="incident-actions">'
      + '<button type="button" class="btn btn-ghost" data-act="view" data-idx="' + idx + '">' + t('markAsViewed') + '</button>'
      + '<button type="button" class="btn btn-ghost" data-act="pending" data-idx="' + idx + '">' + t('markAsPending') + '</button>'
      + '<button type="button" class="btn btn-ghost" data-act="resolve" data-idx="' + idx + '">' + t('markAsResolved') + '</button>'
      + '<button type="button" class="btn btn-danger-ghost" data-act="delete" data-idx="' + idx + '">' + t('delete') + '</button>'
      + '</div>'
      : '<div class="incident-actions"><button type="button" class="btn btn-danger-ghost" data-act="delete-resolved" data-idx="' + idx + '">' + t('delete') + '</button></div>';
    return '<div class="card incident-card" id="inc-' + inc.createdAt + '">'
      + '<div class="incident-top">' + statusPill(inc.status) + categoryTag(inc.category) + priorityPill(inc.priority) + '</div>'
      + '<p class="incident-desc">' + escapeHtml(inc.description) + '</p>'
      + imgs
      + '<div class="incident-meta">' + unitLabel(inc.unit) + ' · ' + fmtDate(inc.createdAt) + '</div>'
      + actions
      + commentsHtml(listName === 'open' ? state.incidents : state.resolved, idx)
      + '</div>';
  }

  function renderIncidents() {
    var openBox = $('incidentsList'); if (!openBox) return;
    var resBox = $('resolvedList');
    var openF = filteredList(state.incidents), resF = filteredList(state.resolved);

    if (!state.incidents.length) {
      openBox.innerHTML = '<div class="card empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><p>' + t('emptyOpen') + '</p></div>';
    } else if (!openF.length) {
      openBox.innerHTML = '<div class="card empty"><p>' + t('emptyFiltered') + '</p></div>';
    } else {
      openBox.innerHTML = openF.map(function (inc) { return incidentCard(inc, state.incidents.indexOf(inc), 'open'); }).join('');
    }

    if (!state.resolved.length) {
      resBox.innerHTML = '<div class="card empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg><p>' + t('emptyResolved') + '</p></div>';
    } else if (!resF.length) {
      resBox.innerHTML = '<div class="card empty"><p>' + t('emptyFiltered') + '</p></div>';
    } else {
      resBox.innerHTML = resF.map(function (inc) { return incidentCard(inc, state.resolved.indexOf(inc), 'resolved'); }).join('');
    }
  }

  function bindIncidentEvents(container) {
    if (!container) return;
    container.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-act]'); if (!btn) return;
      var idx = parseInt(btn.dataset.idx, 10), act = btn.dataset.act;
      if (act === 'view') { state.incidents[idx].status = 'Vista'; save('incidents', state.incidents); renderIncidents(); }
      else if (act === 'pending') { state.incidents[idx].status = 'Pendiente'; save('incidents', state.incidents); renderIncidents(); }
      else if (act === 'resolve') {
        if (confirm(t('confirmResolved'))) {
          state.incidents[idx].status = 'Resuelta'; state.incidents[idx].resolvedAt = Date.now();
          state.resolved.push(state.incidents[idx]); state.incidents.splice(idx, 1);
          save('resolvedIncidents', state.resolved); save('incidents', state.incidents); renderIncidents();
        }
      } else if (act === 'delete') {
        if (confirm(t('confirmDelete'))) { state.incidents.splice(idx, 1); save('incidents', state.incidents); renderIncidents(); }
      } else if (act === 'delete-resolved') {
        if (confirm(t('confirmDelete'))) { state.resolved.splice(idx, 1); save('resolvedIncidents', state.resolved); renderIncidents(); }
      }
    });
    container.addEventListener('submit', function (e) {
      var form = e.target.closest('[data-comment-idx]'); if (!form) return;
      e.preventDefault();
      var idx = parseInt(form.dataset.commentIdx, 10);
      var list = container.id === 'incidentsList' ? state.incidents : state.resolved;
      var key = container.id === 'incidentsList' ? 'incidents' : 'resolvedIncidents';
      var text = form.querySelector('textarea').value.trim();
      if (!text) return;
      list[idx].comments = list[idx].comments || [];
      list[idx].comments.push({ unit: state.unit, text: text, ts: Date.now() });
      save(key, list);
      renderIncidents();
    });
  }

  function initIncidentsPage() {
    var form = $('complaintForm'); if (!form) return;

    document.querySelectorAll('.incidents-grid .tab-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('.incidents-grid .tab-btn').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        var tab = b.dataset.tab;
        $('incidentsList').hidden = tab !== 'open';
        $('resolvedList').hidden = tab !== 'resolved';
      });
    });

    var params = new URLSearchParams(window.location.search);
    var presetPriority = params.get('priority');
    if (presetPriority) { state.filters.priority = presetPriority; }
    var presetTab = params.get('tab');
    if (presetTab === 'open' || presetTab === 'resolved') {
      document.querySelectorAll('.incidents-grid .tab-btn').forEach(function (x) { x.classList.toggle('active', x.dataset.tab === presetTab); });
      $('incidentsList').hidden = presetTab !== 'open';
      $('resolvedList').hidden = presetTab !== 'resolved';
    }
    syncFilterControls();
    renderIncidents();

    // si venimos de un enlace a una incidencia concreta (p.ej. desde
    // "Actividad reciente" en el panel), la desplazamos a la vista y la
    // resaltamos un instante para que se encuentre entre el resto de tarjetas
    if (window.location.hash.indexOf('#inc-') === 0) {
      var target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(function () {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          target.classList.add('flash-highlight');
          setTimeout(function () { target.classList.remove('flash-highlight'); }, 1800);
        }, 50);
      }
    } else if (presetTab) {
      // venimos de un enlace a "pendientes"/"resueltas" desde el panel: el
      // formulario de nueva incidencia va primero en el HTML (se apila
      // encima de la lista en movil), asi que sin esto se aterriza viendo
      // el formulario en vez de la lista que se pidio ver.
      var listSection = $('incidentsListSection');
      if (listSection) { setTimeout(function () { listSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 50); }
    }

    $('filterQ').addEventListener('input', function () { state.filters.q = this.value; renderIncidents(); });
    $('filterCategory').addEventListener('change', function () { state.filters.category = this.value; renderIncidents(); });
    $('filterPriority').addEventListener('change', function () { state.filters.priority = this.value; renderIncidents(); });

    bindIncidentEvents($('incidentsList'));
    bindIncidentEvents($('resolvedList'));

    $('incUnit').value = state.unit;
    $('imageUpload').addEventListener('change', function () {
      var n = this.files.length;
      $('fileLabel').textContent = n ? (n + ' ' + t('filesSelected')) : t('noFileSelected');
    });

    function filesToBase64(files) {
      return Promise.all(Array.prototype.map.call(files, function (f) {
        return new Promise(function (res, rej) { var r = new FileReader(); r.onloadend = function () { res(r.result); }; r.onerror = rej; r.readAsDataURL(f); });
      }));
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var desc = $('description').value.trim();
      if (!desc) return;
      var unitVal = $('incUnit').value.trim();
      if (unitVal) { state.unit = unitVal; save('unit', state.unit); }
      var files = $('imageUpload').files;
      var go = function (imgs) {
        var incident = {
          description: desc, images: imgs || [], status: 'Pendiente',
          category: $('incCategory').value, priority: $('incPriority').value,
          unit: state.unit, createdAt: Date.now(), comments: []
        };
        state.incidents.push(incident);
        if (save('incidents', state.incidents)) {
          renderIncidents(); form.reset();
          $('incUnit').value = state.unit;
          $('fileLabel').textContent = t('noFileSelected');
          toast(t('saved'));
        } else { state.incidents.pop(); }
      };
      if (files.length) { filesToBase64(files).then(go); } else { go([]); }
    });
  }

  /* ---------- comunidad: avisos + votaciones ---------- */
  function renderNotices() {
    var box = $('noticesList'); if (!box) return;
    if (!state.notices.length) { box.innerHTML = '<div class="card empty"><p>' + t('noticesEmpty') + '</p></div>'; return; }
    box.innerHTML = state.notices.map(function (n, idx) {
      return '<div class="card notice-card"><h4>' + escapeHtml(n.title) + '</h4><p>' + escapeHtml(n.body) + '</p>'
        + '<div class="notice-meta"><span class="unit-tag">' + unitLabel(n.unit) + ' · ' + fmtDate(n.ts) + '</span>'
        + '<button type="button" class="btn btn-danger-ghost" data-notice-idx="' + idx + '">' + t('delete') + '</button></div></div>';
    }).join('');
  }
  function renderPolls() {
    var box = $('pollsList'); if (!box) return;
    if (!state.polls.length) { box.innerHTML = '<div class="card empty"><p>' + t('pollsEmpty') + '</p></div>'; return; }
    box.innerHTML = state.polls.map(function (p, pidx) {
      var total = p.options.reduce(function (s, o) { return s + o.votes; }, 0);
      var votedIdx = state.votedPolls[p.id];
      var hasVoted = votedIdx !== undefined;
      var opts = p.options.map(function (o, oidx) {
        var pct = total ? Math.round((o.votes / total) * 100) : 0;
        var voteBtn = hasVoted ? '' : '<button type="button" class="btn btn-ghost poll-vote-btn" data-poll="' + pidx + '" data-opt="' + oidx + '">' + t('pollVoteBtn') + '</button>';
        return '<div class="poll-option' + (hasVoted && votedIdx === oidx ? ' voted' : '') + '">'
          + '<div class="poll-option-top"><span>' + escapeHtml(o.label) + (hasVoted && votedIdx === oidx ? ' ✓' : '') + '</span><span>' + pct + '% (' + o.votes + ')</span></div>'
          + '<div class="poll-bar-track"><div class="poll-bar-fill" style="width:' + pct + '%"></div></div>'
          + voteBtn + '</div>';
      }).join('');
      return '<div class="card poll-card"><h4>' + escapeHtml(p.question) + '</h4>' + opts
        + '<div class="poll-total">' + total + ' ' + t('pollVotes') + '</div>'
        + (hasVoted ? '<div class="poll-voted-note"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' + t('pollVoted') + '</div>' : '')
        + '</div>';
    }).join('');
  }

  function initComunidadPage() {
    var panel = $('noticesPanel'); if (!panel) return;

    document.querySelectorAll('[data-ctab]').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('[data-ctab]').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        var tab = b.dataset.ctab;
        $('noticesPanel').hidden = tab !== 'notices';
        $('pollsPanel').hidden = tab !== 'polls';
      });
    });

    $('toggleNoticeForm').addEventListener('click', function () {
      var f = $('noticeForm'); f.hidden = !f.hidden;
      if (!f.hidden) $('noticeUnit').value = state.unit;
    });
    $('togglePollForm').addEventListener('click', function () { $('pollForm').hidden = !$('pollForm').hidden; });

    $('noticesList').addEventListener('click', function (e) {
      var b = e.target.closest('[data-notice-idx]'); if (!b) return;
      if (confirm(t('confirmDelete'))) { state.notices.splice(parseInt(b.dataset.noticeIdx, 10), 1); save('notices', state.notices); renderNotices(); }
    });
    $('noticeForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var title = $('noticeTitle').value.trim(), body = $('noticeBody').value.trim();
      if (!title || !body) return;
      var unitVal = $('noticeUnit').value.trim();
      if (unitVal) { state.unit = unitVal; save('unit', state.unit); }
      state.notices.unshift({ title: title, body: body, unit: state.unit, ts: Date.now() });
      if (save('notices', state.notices)) { renderNotices(); e.target.reset(); e.target.hidden = true; toast(t('saved')); }
      else state.notices.shift();
    });

    $('pollsList').addEventListener('click', function (e) {
      var b = e.target.closest('.poll-vote-btn'); if (!b) return;
      var pidx = parseInt(b.dataset.poll, 10), oidx = parseInt(b.dataset.opt, 10);
      var poll = state.polls[pidx];
      if (state.votedPolls[poll.id] !== undefined) return;
      poll.options[oidx].votes++;
      state.votedPolls[poll.id] = oidx;
      save('polls', state.polls); save('votedPolls', state.votedPolls);
      renderPolls();
    });
    $('pollForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var q = $('pollQuestion').value.trim();
      var opts = [$('pollOpt1').value.trim(), $('pollOpt2').value.trim(), $('pollOpt3').value.trim(), $('pollOpt4').value.trim()].filter(Boolean);
      if (!q || opts.length < 2) return;
      state.polls.unshift({ id: 'p' + Date.now(), question: q, options: opts.map(function (l) { return { label: l, votes: 0 }; }), ts: Date.now() });
      if (save('polls', state.polls)) { renderPolls(); e.target.reset(); e.target.hidden = true; toast(t('saved')); }
      else state.polls.shift();
    });

    renderNotices();
    renderPolls();
  }

  /* ---------- documentos ---------- */
  var DOCS_ACTAS = [
    { titleKey: 'januaryMeeting', dateKey: 'januaryDate', href: 'documentos/acta_enero_2024.pdf' },
    { titleKey: 'februaryMeeting', dateKey: 'februaryDate', href: 'documentos/acta_febrero_2024.pdf' }
  ];
  function renderDocs() {
    var search = $('docSearch'); if (!search) return;
    var q = (search.value || '').toLowerCase();
    var items = DOCS_ACTAS.filter(function (d) { return !q || t(d.titleKey).toLowerCase().indexOf(q) !== -1; });
    var box = $('docsActas');
    box.innerHTML = items.length ? items.map(function (d) {
      return '<div class="card acta-card"><div class="acta-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/></svg></div>'
        + '<h4>' + t(d.titleKey) + '</h4><p class="acta-date">' + t(d.dateKey) + '</p>'
        + '<a href="' + d.href + '" download class="btn btn-outline">' + t('download') + '</a></div>';
    }).join('') : '<div class="card empty"><p>' + (q ? t('docNoResults') : t('docCategoryEmpty')) + '</p></div>';
  }
  function initDocumentosPage() {
    var search = $('docSearch'); if (!search) return;
    search.addEventListener('input', renderDocs);
    renderDocs();
  }

  /* ---------- teléfonos de interés ---------- */
  var CONTACT_ICONS = {
    bolt: '<path d="M12.5 2 5 13h5.5L11 22l7.5-11H13z"/>',
    drop: '<path d="M12 3c3.6 4.3 6.5 7.9 6.5 11.2a6.5 6.5 0 0 1-13 0C5.5 10.9 8.4 7.3 12 3z"/>',
    flame: '<path d="M12 2.5c.6 2.8-1.8 4-1.8 6.8a2.8 2.8 0 0 0 5.6 0c0-.9-.4-1.7-.9-2.3.4 2.3-1 3.3-1.4 3.5 1-2.7-.6-4-1.1-6.4-1 1.1-2.1 2.4-2.1 4.4a3.8 3.8 0 0 0 .5 1.9A6 6 0 0 0 6 15.5a6 6 0 0 0 12 0c0-3.6-2.7-6.3-6-13z"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12 19 4M16 6l2 2M13 9l2 2"/>',
    shield: '<path d="M12 3l7 3v5.5c0 4.6-3 8.2-7 9.5-4-1.3-7-4.9-7-9.5V6z"/><path d="M9 12l2 2 4-4"/>',
    phone: '<path d="M6.6 4.5h3.2l1.4 3.8-2 1.6a12.5 12.5 0 0 0 5.9 5.9l1.6-2 3.8 1.4v3.2a1.6 1.6 0 0 1-1.7 1.6C10.9 19.6 4.4 13.1 4 5.2a1.6 1.6 0 0 1 1.6-1.7Z"/>'
  };
  function iconKeyForContact(label) {
    var l = label.toLowerCase();
    if (l.indexOf('luz') !== -1 || l.indexOf('electr') !== -1) return 'bolt';
    if (l.indexOf('agua') !== -1 || l.indexOf('fontan') !== -1) return 'drop';
    if (l.indexOf('gas') !== -1) return 'flame';
    if (l.indexOf('cerraj') !== -1 || l.indexOf('llave') !== -1) return 'key';
    if (l.indexOf('seguro') !== -1 || l.indexOf('emergenc') !== -1 || l.indexOf('urgenc') !== -1) return 'shield';
    return 'phone';
  }

  function renderContacts() {
    var box = $('contactsList'); if (!box) return;
    if (!state.contacts.length) {
      box.className = '';
      box.innerHTML = '<div class="card empty"><p>' + t('contactsEmpty') + '</p></div>';
      return;
    }
    box.className = 'phone-grid';
    box.innerHTML = state.contacts.map(function (c, idx) {
      var dial = c.phone.replace(/[^0-9+]/g, '');
      var icon = CONTACT_ICONS[iconKeyForContact(c.label)];
      return '<div class="card phone-card contact-tile">'
        + '<div class="phone-card-top"><div class="tile-icon contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + icon + '</svg></div>'
        + '<button type="button" class="contact-delete" data-contact-idx="' + idx + '" aria-label="' + t('delete') + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>'
        + '<a class="phone-num contact-phone" href="tel:' + escapeHtml(dial) + '">' + escapeHtml(c.phone) + '</a>'
        + '<div class="phone-label">' + escapeHtml(c.label) + '</div>'
        + '</div>';
    }).join('');
  }

  function seedSampleContacts() {
    if (state.contacts.length) return;
    state.contacts = [
      { label: 'Luz — electricista de guardia', phone: '600 111 222' },
      { label: 'Agua — fontanero de guardia', phone: '600 222 333' },
      { label: 'Gas — urgencias', phone: '600 333 444' },
      { label: 'Cerrajero', phone: '600 444 555' },
      { label: 'Seguro de la comunidad (urgencias 24h)', phone: '900 555 666' }
    ];
    save('contacts', state.contacts);
  }

  function initTelefonosPage() {
    var form = $('contactForm'); if (!form) return;

    seedSampleContacts();

    $('toggleContactForm').addEventListener('click', function () { form.hidden = !form.hidden; });

    $('contactsList').addEventListener('click', function (e) {
      var b = e.target.closest('[data-contact-idx]'); if (!b) return;
      if (confirm(t('confirmDelete'))) { state.contacts.splice(parseInt(b.dataset.contactIdx, 10), 1); save('contacts', state.contacts); renderContacts(); }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var label = $('contactLabel').value.trim(), phone = $('contactPhone').value.trim();
      if (!label || !phone) return;
      state.contacts.push({ label: label, phone: phone });
      if (save('contacts', state.contacts)) { renderContacts(); form.reset(); form.hidden = true; toast(t('saved')); }
      else state.contacts.pop();
    });

    renderContacts();
  }

  /* ---------- gráfica de Inicio ---------- */
  function redrawChart() {
    var canvas = $('chartCanvas'); if (!canvas) return;
    var all = state.incidents.concat(state.resolved);
    var months = [];
    var now = new Date();
    for (var i = 11; i >= 0; i--) { months.push(new Date(now.getFullYear(), now.getMonth() - i, 1)); }
    var counts = months.map(function (m) {
      return all.filter(function (inc) {
        if (!inc.createdAt) return false;
        var d = new Date(inc.createdAt);
        return d.getFullYear() === m.getFullYear() && d.getMonth() === m.getMonth();
      }).length;
    });
    var max = Math.max.apply(null, counts.concat([1]));
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    var w = Math.max(rect.width, 280), h = 150;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.height = h + 'px';
    var ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    var styles = getComputedStyle(document.body);
    var border = styles.getPropertyValue('--border').trim() || '#e2ded2';
    var accent = styles.getPropertyValue('--accent').trim() || '#b5651d';
    var muted = styles.getPropertyValue('--ink-muted').trim() || '#726e65';
    var padBottom = 22, padTop = 14;
    var plotH = h - padBottom - padTop;
    ctx.strokeStyle = border; ctx.lineWidth = 1;
    for (var g = 0; g <= 2; g++) {
      var y = padTop + plotH * g / 2;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.globalAlpha = .6; ctx.stroke(); ctx.globalAlpha = 1;
    }
    // slotW reparte el ancho entero entre los 12 meses; barW se dibuja mas
    // fina que el slot y centrada en el, asi las etiquetas siguen bien
    // espaciadas aunque la barra en si sea delgada.
    var n = counts.length, gap = 6, slotW = (w - gap * (n + 1)) / n;
    var barW = Math.max(4, Math.min(slotW * 0.42, 14));
    ctx.font = '600 11px "Public Sans", sans-serif';
    for (var i2 = 0; i2 < n; i2++) {
      var bh = max ? (counts[i2] / max) * plotH : 0;
      var slotX = gap + i2 * (slotW + gap);
      var x = slotX + (slotW - barW) / 2;
      var y2 = padTop + plotH - bh;
      ctx.beginPath();
      var r = Math.min(4, barW / 2);
      ctx.moveTo(x, y2 + bh);
      ctx.arcTo(x, y2, x + r, y2, r);
      ctx.arcTo(x + barW, y2, x + barW, y2 + r, r);
      ctx.lineTo(x + barW, y2 + bh);
      ctx.closePath();
      ctx.fillStyle = accent; ctx.fill();
      ctx.fillStyle = muted; ctx.textAlign = 'center';
      if (counts[i2] > 0) ctx.fillText(String(counts[i2]), slotX + slotW / 2, y2 - 4);
      ctx.font = '600 12px "Public Sans", sans-serif';
      ctx.fillText(months[i2].toLocaleDateString(state.lang === 'en' ? 'en-US' : (state.lang === 'ca' ? 'ca-ES' : 'es-ES'), { month: 'short' }), slotX + slotW / 2, h - 6);
      ctx.font = '600 11px "Public Sans", sans-serif';
    }
    var resolvedWithTimes = state.resolved.filter(function (r) { return r.createdAt && r.resolvedAt; });
    var legend = $('chartLegend');
    if (legend) {
      if (!all.length) { legend.textContent = t('chartNoData'); }
      else if (resolvedWithTimes.length) {
        var avgMs = resolvedWithTimes.reduce(function (s, r) { return s + (r.resolvedAt - r.createdAt); }, 0) / resolvedWithTimes.length;
        var avgDays = (avgMs / 86400000).toFixed(1);
        legend.textContent = t('chartAvgResolution') + ': ' + avgDays + ' ' + (state.lang === 'en' ? 'days' : (state.lang === 'ca' ? 'dies' : 'días'));
      } else { legend.textContent = ''; }
    }
  }
  window.addEventListener('resize', redrawChart);

  /* ---------- configuración ---------- */
  function initConfigPage() {
    var dt = $('darkModeToggle'); if (!dt) return;
    dt.addEventListener('change', function () { state.dark = this.checked; applyAppearance(); });
    $('contrastToggle').addEventListener('change', function () { state.contrast = this.checked; applyAppearance(); });
    $('textSizeControls').addEventListener('click', function (e) {
      var b = e.target.closest('.size-btn'); if (!b) return;
      state.textScale = parseFloat(b.dataset.size); applyAppearance();
    });
    $('languageSelect').addEventListener('change', function () { state.lang = this.value; applyLanguage(); });
    $('unitSetting').addEventListener('input', function () { state.unit = this.value; var su = $('sidebarUnit'); if (su) su.textContent = state.unit ? unitLabel(state.unit) : ''; });

    $('saveBtn').addEventListener('click', function () {
      save('darkMode', state.dark); save('contrastMode', state.contrast);
      save('textScale', state.textScale); save('language', state.lang); save('unit', state.unit);
      toast(t('saved'));
    });

    $('loadDemoBtn').addEventListener('click', function () {
      var now = Date.now(), day = 86400000;
      state.incidents = state.incidents.concat([
        { description: 'La luz del rellano de la 2ª planta parpadea y a veces se apaga.', images: [], status: 'Pendiente', category: 'electric', priority: 'medium', unit: '2ºA', createdAt: now - 3 * day, comments: [] },
        { description: 'El ascensor hace un ruido metálico fuerte al pasar por el 4º piso.', images: [], status: 'Pendiente', category: 'elevator', priority: 'urgent', unit: '4ºC', createdAt: now - 1 * day, comments: [{ unit: '1ºB', text: 'A mí también me ha pasado esta semana.', ts: now - 12 * 3600000 }] }
      ]);
      state.resolved = state.resolved.concat([
        { description: 'Grifo del jardín comunitario goteaba sin parar.', images: [], status: 'Resuelta', category: 'plumbing', priority: 'low', unit: 'Bajo A', createdAt: now - 40 * day, resolvedAt: now - 35 * day, comments: [] }
      ]);
      state.notices = [{ title: 'Revisión anual del ascensor', body: 'El técnico vendrá el próximo martes de 9:00 a 13:00. El ascensor estará parado durante ese tiempo.', unit: '', ts: now - 2 * day }].concat(state.notices);
      if (!state.polls.length) {
        state.polls = [{ id: 'demo1', question: '¿Instalamos un punto de recarga para bicis eléctricas?', options: [{ label: 'Sí', votes: 9 }, { label: 'No', votes: 2 }, { label: 'Necesito más información', votes: 3 }], ts: now - 5 * day }];
      }
      save('incidents', state.incidents); save('resolvedIncidents', state.resolved); save('notices', state.notices); save('polls', state.polls);
      renderAll();
      toast(t('demoLoaded'));
    });

    $('resetDataBtn').addEventListener('click', function () {
      if (!confirm(t('resetConfirm'))) return;
      ALL_KEYS.forEach(function (k) { if (k !== 'language') localStorage.removeItem(STORE_PREFIX + k); });
      state.incidents = []; state.resolved = []; state.notices = []; state.polls = []; state.votedPolls = {}; state.unit = '';
      state.dark = false; state.contrast = false; state.textScale = 1;
      save('darkMode', false); save('contrastMode', false); save('textScale', 1); save('unit', '');
      applyAppearance(); renderAll();
      toast(t('resetDone'));
    });

    function snapshot() {
      return {
        incidents: state.incidents, resolvedIncidents: state.resolved, notices: state.notices, polls: state.polls,
        votedPolls: state.votedPolls, unit: state.unit, language: state.lang, darkMode: state.dark, contrastMode: state.contrast, textScale: state.textScale
      };
    }
    $('exportBtn').addEventListener('click', function () {
      $('backupText').value = JSON.stringify(snapshot(), null, 2);
      $('backupModal').classList.add('show');
    });
    $('backupCloseBtn').addEventListener('click', function () { $('backupModal').classList.remove('show'); });

    var downloadsCap = null;
    if (window.claude && window.claude.use) { window.claude.use('downloads').then(function (d) { downloadsCap = d; }).catch(function () {}); }
    $('backupDownloadBtn').addEventListener('click', function () {
      var text = $('backupText').value;
      var filename = 'mis-vecinos-backup-' + new Date().toISOString().slice(0, 10) + '.json';
      if (downloadsCap) {
        downloadsCap.save({ filename: filename, data: text }).then(function () { toast(t('saved')); }).catch(function () {});
        return;
      }
      try {
        var blob = new Blob([text], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (e) { /* el texto sigue disponible para copiar */ }
    });
    $('backupCopyBtn').addEventListener('click', function () {
      var ta = $('backupText');
      var done = function () { toast(t('backupCopied')); };
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(ta.value).then(done).catch(function () { ta.select(); done(); }); }
      else { ta.select(); done(); }
    });

    $('importBtn').addEventListener('click', function () { $('importFile').click(); });
    $('importFile').addEventListener('change', function () {
      var file = this.files[0]; if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var data = JSON.parse(reader.result);
          if (typeof data !== 'object' || data === null) throw new Error('bad');
          state.incidents = Array.isArray(data.incidents) ? data.incidents : [];
          state.resolved = Array.isArray(data.resolvedIncidents) ? data.resolvedIncidents : [];
          state.notices = Array.isArray(data.notices) ? data.notices : [];
          state.polls = Array.isArray(data.polls) ? data.polls : [];
          state.votedPolls = data.votedPolls && typeof data.votedPolls === 'object' ? data.votedPolls : {};
          state.unit = typeof data.unit === 'string' ? data.unit : '';
          state.lang = translations[data.language] ? data.language : state.lang;
          state.dark = !!data.darkMode; state.contrast = !!data.contrastMode; state.textScale = data.textScale || 1;
          save('incidents', state.incidents); save('resolvedIncidents', state.resolved); save('notices', state.notices);
          save('polls', state.polls); save('votedPolls', state.votedPolls); save('unit', state.unit);
          save('language', state.lang); save('darkMode', state.dark); save('contrastMode', state.contrast); save('textScale', state.textScale);
          applyAppearance(); applyLanguage();
          toast(t('importSuccess'));
        } catch (e) { toast(t('importError')); }
        $('importFile').value = '';
      };
      reader.readAsText(file);
    });
  }

  /* ---------- toast ---------- */
  var toastTimer;
  function toast(msg) {
    var el = $('toast'); if (!el) return;
    $('toastText').textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2400);
  }

  /* ---------- PWA: registro del service worker + botón de instalación ---------- */
  function initPWA() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('service-worker.js').catch(function () {});
      });
    }
    var deferredPrompt = null;
    var btn = $('installAppBtn');
    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      deferredPrompt = e;
      if (btn) btn.hidden = false;
    });
    if (btn) {
      btn.addEventListener('click', function () {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        deferredPrompt.userChoice.finally(function () { deferredPrompt = null; btn.hidden = true; });
      });
      window.addEventListener('appinstalled', function () { btn.hidden = true; });
    }
  }

  function renderAll() {
    renderDashboard();
    renderIncidents();
    renderNotices();
    renderPolls();
    renderDocs();
    syncFilterControls();
    redrawChart();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initSidebar();
    applyLanguage();
    applyAppearance();
    initIncidentsPage();
    initComunidadPage();
    initDocumentosPage();
    initTelefonosPage();
    initConfigPage();
    initPWA();
  });
})();
