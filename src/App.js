import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './Pages';
import About from './Pages/about';
import Lessons from './Pages/lessons';
import Contact from './Pages/contact';
import Methodology from './Pages/methodology';
import Testimonials from './Pages/testimonials';

export default function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/about' component={About} />
      <Route path='/lessons' component={Lessons} />
      <Route path='/methodology' component={Methodology} />
      <Route path='/testimonials' component={Testimonials} />
      <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}