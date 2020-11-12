const pomber_api_url_id = 'https://pomber.github.io/covid19/timeseries.json'
const globalStats_api_url = 'https://disease.sh/v3/covid-19/all?yesterday=true'
const states_api_url = 'https://disease.sh/v3/covid-19/states'

const news_api_key = 'd69affb88e344a3da1b2a12da50f680c'
const news_api_url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d69affb88e344a3da1b2a12da50f680c`;

//async await states fn
async function getStates() {
    const response = await fetch(states_api_url)
    if (response.status === 200) {
        const data = await response.json()
        console.log('🎊 Fetched corona stats for states')
        return data
    } else {
        throw new Error('🚫 Unable to fetch Country data')
    }
}
//async await countries fn
async function getCountries(sort) {
    const response = await fetch(`https://disease.sh/v3/covid-19/countries`)
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
        console.log('Success 🎊, NEWS loaded')
        const data = await response.json()
        console.log(data);
        return data
    } else {
        throw new Error('🚫 Unable to fetch News API data')
    }
}

//async await getGlobalStats fn
async function getGlobalStats() {
    const response = await fetch(globalStats_api_url)
    if (response.status === 200) {
        console.log('Success 🎊, global stats loaded')
        const data = await response.json()
        return data
    } else {
        throw new Error('🚫 Unable to fetch global stats data')
    }
}