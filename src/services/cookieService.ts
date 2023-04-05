class CookieService {
  private readonly cookiePrefix: string = ''

  constructor(cookiePrefix?: string) {
    if (cookiePrefix) {
      this.cookiePrefix = cookiePrefix
    }
  }

  public setCookie(name: string, value: string, days: number = 7): void {
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${
      this.cookiePrefix
    }${name}=${value};expires=${expires.toUTCString()};path=/`
  }

  public getCookie(name: string): string | null {
    const cookieName = `${this.cookiePrefix}${name}=`
    const cookieArray = document.cookie.split(';')
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i]
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1)
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length)
      }
    }
    return null
  }

  public deleteCookie(name: string): void {
    this.setCookie(name, '', -1)
  }
}

export default new CookieService()
