// const tabelElState = document.getElementById('states-table')
const tabelElState = document.getElementById('state-table-body')

getStates('cases')
    .then(data => {
        data.forEach(state => {
            //create tabel row
            const tabelRow = tabelElState.insertRow(0);
            tabelRow.classList.add('state-rows')

            //create location cell
            const dataCellLocation = tabelRow.insertCell(0);
            dataCellLocation.textContent = state.state
            dataCellLocation.dataset.axisLabel = 'State'
            tabelRow.appendChild(dataCellLocation)
            tabelElState.appendChild(tabelRow)

            //create cases cell
            const dataCellCases = tabelRow.insertCell(1);
            dataCellCases.textContent = formatNumber(state.cases)
            dataCellCases.dataset.axisLabel = 'Cases'
            tabelRow.appendChild(dataCellCases)
            tabelElState.appendChild(tabelRow)

            //create deaths cell
            const dataCellDeaths = tabelRow.insertCell(2);
            dataCellDeaths.textContent = formatNumber(state.deaths)
            dataCellDeaths.dataset.axisLabel = 'Deaths'
            tabelRow.appendChild(dataCellDeaths)
            tabelElState.appendChild(tabelRow)

            //create Active cell
            const dataCellActive = tabelRow.insertCell(3);
            dataCellActive.textContent = formatNumber(state.active)
            dataCellActive.dataset.axisLabel = 'Active'
            tabelRow.appendChild(dataCellActive)
            tabelElState.appendChild(tabelRow)
        });
    })



const tabelElCountry = document.getElementById('country-table-body')

getCountries('cases')
    .then(data => {
        data.forEach(name => {
            //create tabel row
            const tabelRow = tabelElCountry.insertRow(0);
            tabelRow.classList.add('country-rows')

            //create location cell
            const dataflag = document.createElement('img')
            dataflag.src = name.countryInfo.flag
            dataflag.classList.add('flag')
            dataflag.dataset.axisLabel = 'Flag'
            tabelRow.appendChild(dataflag)
            // tabelElCountry.appendChild(tabelRow)

            //create country name cell
            const dataCellCountry = tabelRow.insertCell(0);
            dataCellCountry.textContent = name.country
            dataCellCountry.appendChild(dataflag)
            dataCellCountry.dataset.axisLabel = 'Country'
            tabelRow.appendChild(dataCellCountry)
            tabelElCountry.appendChild(tabelRow)
            dataCellCountry.classList.add('countryCell')

            //create cases cell
            const dataCellCase = tabelRow.insertCell(1);
            dataCellCase.textContent = formatNumber(name.cases)
            dataCellCase.dataset.axisLabel = 'Cases'
            tabelRow.appendChild(dataCellCase)
            tabelElCountry.appendChild(tabelRow)

            //create death cell
            const dataCellDeath = tabelRow.insertCell(2);
            dataCellDeath.textContent = formatNumber(name.deaths)
            dataCellDeath.dataset.axisLabel = 'Deaths'
            tabelRow.appendChild(dataCellDeath)
            tabelElCountry.appendChild(tabelRow)

            //create recovered cell
            const dataCellRecovered = tabelRow.insertCell(3);
            dataCellRecovered.textContent = formatNumber(name.recovered)
            dataCellRecovered.dataset.axisLabel = 'Recovered'
            tabelRow.appendChild(dataCellRecovered)
            tabelElCountry.appendChild(tabelRow)

            //create casesPerMillion cell
            const dataCellcasesPerMillion = tabelRow.insertCell(4);
            dataCellcasesPerMillion.textContent = formatNumber(name.casesPerOneMillion)
            dataCellcasesPerMillion.dataset.axisLabel = 'Cases Per Million'
            tabelRow.appendChild(dataCellcasesPerMillion)
            tabelElCountry.appendChild(tabelRow)
        })
    })




const globalDeathsNum = document.getElementById('global-deaths')
const globalCasesNum = document.getElementById('global-cases')
const globalRecoveredNum = document.getElementById('global-recovered')

getGlobalStats()
    .then(data => {
        let cases = formatNumber(data.cases)
        let deaths = formatNumber(data.deaths)
        let recovered = formatNumber(data.recovered)
        globalCasesNum.textContent = cases
        globalDeathsNum.textContent = deaths
        globalRecoveredNum.textContent = recovered
    })

const newsTickerEl = document.getElementById('news-ticker')

// let titles = []
getNews()
    .then(data => {
        data['articles'].forEach(article => {
            let newsTitle = document.createElement('div')
            let link = document.createElement('a')
            newsTitle.classList.add('ticker__item')
            link.appendChild(newsTitle)
            link.href = article.url
            newsTitle.textContent = article.title
            newsTickerEl.appendChild(link)
            titles.push(article.title)

            localStorage.setItem("titles", JSON.stringify(titles));
        });
    })