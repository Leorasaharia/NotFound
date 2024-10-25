<<<<<<< HEAD
import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
=======
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import "./App.css"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Blog from "./components/blog/Blog"
import Footer from "./components/common/footer/Footer"
import Header from "./components/common/header/Header"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import Pricing from "./components/pricing/Pricing"
import Team from "./components/team/Team"
>>>>>>> 8f7605b55e684c50cd994a4920463be88c312da7
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          {/* <Route exact path='/dashboard' component={Dashboard} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
