class Api {
  private baseUrl = import.meta.env.PUBLIC_API

  async get(route: string, newBaseUrl: string = '') {
    let response

    const baseUrl = newBaseUrl ? newBaseUrl : this.baseUrl

    try {
      response = await fetch(baseUrl + route)
    } catch (err) {
      console.log(
        'OH SHIT HERE WE GO AGAIN >:(',
        `Fetch failed: ${this.baseUrl + route}, error: ${err.message}`
      )

      return
    }

    try {
      return await response.json()
    } catch (err) {
      console.log(
        'OH SHIT HERE WE GO AGAIN >:(',
        `Fetch failed: ${this.baseUrl + route}, error: ${err.message}`
      )

      console.log('Here is the body => ', response)

      return
    }
  }
}

export default new Api()
