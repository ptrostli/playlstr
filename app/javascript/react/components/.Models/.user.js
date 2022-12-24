export default class User {
  constructor(id) {
    this.id = id
    this.username = null
    this.email = null
    this.role = null
  }

  setAttributes = (user) => {
    this.id = user.id
    this.username = user.username
    this.email = user.email
    this.role = user.role
  }

  getUser = async () => {
    try {
      const response = await fetch('/api/v1/users')
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const fetchedUser = await response.json()
      this.setAttributes(fetchedUser)
      // return fetchedUser.user
      return fetchedUser
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }
}