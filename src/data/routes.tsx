import Home from '../pages/home.page'
import About from '../pages/about.page'
import Technologies from '../pages/technologies.page'

interface Route {
  pathname: string,
  component: Function,
  exact: boolean,
}

const routes: Route[] = [
  {
    pathname: '/',
    component: Home,
    exact: true,
  },
  {
    pathname: '/about',
    component: About,
    exact: false,
  },
  {
    pathname: '/technologies',
    component: Technologies,
    exact: false
  }
]

export {
  routes,
}
