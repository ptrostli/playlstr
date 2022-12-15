const performSearch = async (searchString) => {
  try {
    const response = await fetch(`/api/v1/search?query=${searchString}`)
    if (!response.ok) {
      const errorMessage = `${response.status}  (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    } 
    const fetchedResults = await response.json()
    return fetchedResults
  } catch(err) {
    console.error(`ERROR: ${err.message}`)
  }
}