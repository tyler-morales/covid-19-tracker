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

const tabelEl = document.getElementById('stats-table')

getCountries('cases')
    .then(data => {
        data.forEach(name => {
            //create tabel row
            const tabelRow = document.createElement('tr')

            //create location cell
            const dataflag = document.createElement('img')
            dataflag.src = name.countryInfo.flag
            dataflag.style.width = '77px'
            dataflag.style.height = 'auto'
            dataflag.style.margin = '8px 20px 0 0'
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


const newsTickerEl = document.getElementById('news-ticker')

let titles = []
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
            // titles.push(article.title)

            // localStorage.setItem("titles", JSON.stringify(titles));
        });
    })


/*
let casesArr = []
let deathArr = []
getCovidCases()
    .then(data => {
        let stats = []
        for (let i = 1; i < 225; i++) {
            let countryName = data.Countries[i].Country
            let cases = data.Countries[i].TotalConfirmed
            let deaths = data.Countries[i].TotalDeaths
            stats.push([countryName, cases, deaths])
        }

        stats.sort(function (a, b) {
            return b[2] - a[2]
        })

        console.log(stats)

        stats.forEach(country => {
            let obj = {
                country: '',
                cases: 0,
                deaths: 0
            }

            obj.country = country[0]
            obj.cases = country[1]
            obj.deaths = country[2]

            let item = document.createElement('p')
            item.textContent = `
                Country: ${obj.country} ||
                Cases: ${obj.cases} ||
                Deaths: ${obj.deaths} ||
            `
            // listEl.appendChild(item)
        })
    })
*/



// SEARCH COUNTRY
// document.querySelector('#new-todo').addEventListener('submit', (e) => {
//     const text = e.target.elements.text.value.trim()
//     e.preventDefault()
//     let country = text
//     console.log(country)
// })


// data[country].forEach(({
//     date,
//     confirmed,
//     deaths
// }) => {
//     deathArr.push(deaths)
//     casesArr.push(confirmed)
// })
// const totalDeaths = deathArr[deathArr.length - 1]
// const deathEl = document.createElement('h2')
// deathEl.textContent = `Total Deaths: ${totalDeaths} - ${country}`
// listEl.appendChild(deathEl)