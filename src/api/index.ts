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

    return await response.json()
  }
}

export default new Api()
