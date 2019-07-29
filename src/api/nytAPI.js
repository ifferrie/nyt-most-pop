const TOKEN = 'FGGBEwWAb8SyWC4zNsTQA597jCdAixgv'

async function fetchMostPopArticleByPeriod (period) {
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${TOKEN}`
  const response = await fetch(url)
  return await response.json()
}

async function fetchMostPopArticleByAllPeriod () {
  return await Promise.resolve([1, 7, 30].reduce(async(prev, period) => {
    const data = await fetchMostPopArticleByPeriod(period)
    return [].concat(await prev, {period:period, results: data.results})
  }, []))
}

export {
  fetchMostPopArticleByPeriod,
  fetchMostPopArticleByAllPeriod
}
