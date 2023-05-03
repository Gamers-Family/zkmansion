class Api {
  private baseUrl = import.meta.env.PUBLIC_API

  async get(route: string) {
    let response

    try {
      response = await fetch(this.baseUrl + route)
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
