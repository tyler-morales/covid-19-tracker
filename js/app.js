getStates()
    .then(data => {
        data.forEach(state => {
            //create tabel row
            const tabelRow = document.createElement('tr')
            tabelRow.classList.add('state-rows')

            //create location cell
            const dataCellLocation = document.createElement('td')
            dataCellLocation.textContent = state.state
            dataCellLocation.dataset.axisLabel = 'State'
            tabelRow.appendChild(dataCellLocation)
            tabelEl.appendChild(tabelRow)

            //create cases cell
            const dataCellCases = document.createElement('td')
            dataCellCases.textContent = formatNumber(state.cases)
            dataCellCases.dataset.axisLabel = 'Cases'
            tabelRow.appendChild(dataCellCases)
            tabelEl.appendChild(tabelRow)

            //create deaths cell
            const dataCellDeaths = document.createElement('td')
            dataCellDeaths.textContent = formatNumber(state.deaths)
            dataCellDeaths.dataset.axisLabel = 'Deaths'
            tabelRow.appendChild(dataCellDeaths)
            tabelEl.appendChild(tabelRow)

            //create Active cell
            const dataCellActive = document.createElement('td')
            dataCellActive.textContent = formatNumber(state.active)
            dataCellActive.dataset.axisLabel = 'Active'
            tabelRow.appendChild(dataCellActive)
            tabelEl.appendChild(tabelRow)
        });
    })



const tabelEl = document.getElementById('stats-table')

getCountries('cases')
    .then(data => {
        data.forEach(name => {
            //create tabel row
            const tabelRow = document.createElement('tr')
            tabelRow.classList.add('country-rows')

            //create location cell
            const dataflag = document.createElement('img')
            dataflag.src = name.countryInfo.flag
            dataflag.classList.add('flag')
            dataflag.dataset.axisLabel = 'Flag'
            tabelRow.appendChild(dataflag)
            tabelEl.appendChild(tabelRow)

            //create location cell
            const dataCellLocation = document.createElement('td')
            dataCellLocation.textContent = name.country
            dataCellLocation.dataset.axisLabel = 'Location'
            tabelRow.appendChild(dataCellLocation)
            tabelEl.appendChild(tabelRow)

            //create cases cell
            const dataCellCase = document.createElement('td')
            dataCellCase.textContent = formatNumber(name.cases)
            dataCellCase.dataset.axisLabel = 'Cases'
            tabelRow.appendChild(dataCellCase)
            tabelEl.appendChild(tabelRow)

            //create death cell
            const dataCellDeath = document.createElement('td')
            dataCellDeath.textContent = formatNumber(name.deaths)
            dataCellDeath.dataset.axisLabel = 'Deaths'
            tabelRow.appendChild(dataCellDeath)
            tabelEl.appendChild(tabelRow)

            //create recovered cell
            const dataCellRecovered = document.createElement('td')
            dataCellRecovered.textContent = formatNumber(name.recovered)
            dataCellRecovered.dataset.axisLabel = 'Recovered'
            tabelRow.appendChild(dataCellRecovered)
            tabelEl.appendChild(tabelRow)

            //create casesPerMillion cell
            const dataCellcasesPerMillion = document.createElement('td')
            dataCellcasesPerMillion.textContent = formatNumber(name.casesPerOneMillion)
            dataCellcasesPerMillion.dataset.axisLabel = 'Cases Per Million'
            tabelRow.appendChild(dataCellcasesPerMillion)
            tabelEl.appendChild(tabelRow)
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
            // link.href = article.url
            // newsTitle.textContent = article.title
            newsTickerEl.appendChild(link)
            // titles.push(article.title)

            // localStorage.setItem("titles", JSON.stringify(titles));
        });
    })