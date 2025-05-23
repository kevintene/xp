// Funzione per ottenere l'ora corrente in formato 12 ore (AM/PM)
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convertire l'ora in formato 12 ore
    hours = hours % 12;
    hours = hours ? hours : 12; // Se è 0, metti 12
    minutes = minutes < 10 ? '0' + minutes : minutes; // Aggiungi lo zero a sinistra se i minuti sono minori di 10

    // Crea la stringa dell'orario
    const timeString = hours + '.' + minutes + ' ' + ampm;

    // Aggiorna il div con id 'clock' con il nuovo orario
    document.getElementById('clock').textContent = timeString;
}

// Chiamata iniziale per visualizzare subito l'ora
updateTime();

// Aggiorna ogni 1000 ms (1 secondo)
setInterval(updateTime, 1000);



window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };





