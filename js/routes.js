export class Router {
  routes = {}

  addRoute(routename, page) {
    this.routes[routename] = page
  }
  route(event) {
    event.preventDefault()
    window.history.pushState({}, '', event.target.href)
    this.render()
  }
  async render() {
    const { pathname } = window.location
    const page = this.routes[pathname]
    const html = await fetch(page).then(res => res.text())
    document.querySelector('#app').innerHTML = html
    this.changeImage()
  }
  changeImage() {
    const { pathname } = window.location
    if (pathname == '/universo') {
      document.body.style.backgroundImage = 'url(./assets/universe.png)'
    }
    if (pathname == '/exploracao') {
      document.body.style.backgroundImage = 'url(./assets/explorer.png)'
    }
    if (pathname == '/') {
      document.body.style.backgroundImage = 'url(./assets/home.png)'
    }
  }
}
