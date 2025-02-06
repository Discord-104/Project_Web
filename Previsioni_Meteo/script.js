document.addEventListener('DOMContentLoaded', function() {

    const APIUrlComuni = "https://raw.githubusercontent.com/matteocontrini/comuni-json/master/comuni.json";

    let cachedComuni = localStorage.getItem("comuniCache");

    if (cachedComuni) {
        populateCombobox(JSON.parse(cachedComuni));
    }
    else{
        fetch(APIUrlComuni)
        .then(response => response.json())
                    .then(data => {
                        localStorage.setItem('comuniCache', JSON.stringify(data));
                        populateCombobox(data);
                    })
                    .catch(error => console.error('Errore nel caricamento dei comuni:', error));
    }
});

function populateCombobox(comuni) {
    let select = document.getElementById('comuni');
            for (let i = 0; i < comuni.length; i++) {
                let option = document.createElement('option');
                option.value = comuni[i].nome;
                option.text =  option.text = comuni[i].nome + ' (' + comuni[i].provincia.nome + ')';;
                select.appendChild(option);
            }
}

function getMeteo() {
    const APIkey = "xxxxxxxxxxxxxxxxxxx";
    let comune = document.getElementById('comuni').value;
    if (!comune) {
        alert('Seleziona un comune.');
        return;
    }

    const city = encodeURIComponent(comune);
    const countryCode = 'IT';
    const APIUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${APIkey}&units=metric&lang=it`;

    fetch(APIUrl)
    .then(response => response.json())
    .then(data => {
        if (data.cod == '200') {
            MeteoDisplay(data.list);
            displayTemperatureChart(data.list);
        } else {
            alert('Errore nel recupero delle previsioni meteo. Verifica il nome del comune.');
        }
    })
    .catch(error => console.error('Errore nel caricamento delle previsioni:', error));
}

function MeteoDisplay(list) {
    let container = document.getElementById('MeteoTableContainer');

    let tableHTML = '<table>' +
            '<thead>' +
                '<tr>' +
                    '<th>Data e Ora</th>' +
                    '<th>Descrizione</th>' +
                    '<th>Temperatura (°C)</th>' +
                    '<th>Icona Meteo</th>' +
                '</tr>' +
            '</thead>' +
            '<tbody>';

    for (let i = 0; i < list.length; i++) {
        let description = list[i].weather[0].description;
        let temp = list[i].main.temp;
        let date = list[i].dt_txt;
        let iconcode = list[i].weather[0].icon;
        let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

        tableHTML += '<tr>' +
                    '<td>' + date + '</td>' +
                    '<td>' + description + '</td>' +
                    '<td>' + temp + '</td>' +
                    '<td><img src="' + iconurl + '" alt="Icona Meteo"></td>' +
                '</tr>';
            }

            tableHTML += '</tbody></table>';
            container.innerHTML = tableHTML;
}

function displayTemperatureChart(list) {
    if (!list || list.length == 0) {
        console.error('Nessun dato disponibile per il grafico.');
        return;
    }

    let labels = [];
    let temperatures = [];
    
    
    for (let i = 0; i < list.length; i++) {
        labels.push(list[i].dt_txt);
        temperatures.push(list[i].main.temp);
    }

    
    let ctx = document.getElementById('temperatureChart');
    if (!ctx) {
        console.error('Canvas non trovato.');
        return;
    }

    let chartContext = ctx.getContext('2d');
    if (!chartContext) {
        console.error('Impossibile ottenere il contesto del canvas.');
        return;
    }

    // Crea il grafico delle temperature
    new Chart(chartContext, {
        type: 'line', // Tipo di grafico: lineare
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperatura (°C)',
                data: temperatures,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Grafico delle Temperature'
                }
            }
        }
    });
}
