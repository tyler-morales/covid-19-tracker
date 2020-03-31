const pomber_api_url_id = 'https://pomber.github.io/covid19/timeseries.json'
const covid19Summary_api_url = 'https://api.covid19api.com/summary'
const globalStats_api_url = 'https://corona.lmao.ninja/all'

const news_api_key = 'd69affb88e344a3da1b2a12da50f680c'
const news_api_url = 'https://newsapi.org/v2/everything?language=en&q=COVID&from=2020-03-16&sortBy=publishedAt&apiKey=d69affb88e344a3da1b2a12da50f680c&pageSize=20&page=1';

//async await newsApi fn
async function getCountries(sort) {
    const response = await fetch(`https://corona.lmao.ninja/countries?sort=${sort}`)
    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('🚫 Unable to fetch Country data')
    }
}





//async await newsApi fn
async function getNews() {
    const response = await fetch(news_api_url)
    if (response.status === 200) {
        // console.log('Success 🎊, cases loaded')
        const data = await response.json()
        return data
    } else {
        throw new Error('🚫 Unable to fetch News API data')
    }
}

//async await getGlobalStats fn
async function getGlobalStats() {
    const response = await fetch(globalStats_api_url)
    if (response.status === 200) {
        // console.log('Success 🎊, cases loaded')
        const data = await response.json()
        return data
    } else {
        throw new Error('🚫 Unable to fetch ISS data')
    }
}


//async await getISS fn
async function getCovidCases() {
    const response = await fetch(covid19Summary_api_url)
    if (response.status === 200) {
        // console.log('Success 🎊, cases loaded')
        const data = await response.json()
        return data
    } else {
        throw new Error('🚫 Unable to fetch ISS data')
    }
}