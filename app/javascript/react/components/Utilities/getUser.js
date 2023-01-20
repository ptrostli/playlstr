const getUser = async () => {
  try {
    const response = await fetch('/api/v1/users')
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    }
    const fetchedUser = await response.json()
    return fetchedUser.user
  } catch(err) {
    console.error(`Error in fetch: ${err.message}`)
  }
}

export default getUser