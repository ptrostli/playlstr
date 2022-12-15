const performSearchTest = async (event) => {
  event.preventDefault()
  const body = JSON.stringify({
    search_string: searchString
  })
  try {
    const response = await fetch(`/api/v1/search?query=${searchString}`, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      throw new Error(errorMessage)
    }
    const fetchedResults = await response.json()
    return fetchedResults
  } catch (err) {
    console.error(`ERROR: ${err.message}`)
  }
}

export default performSearchTest