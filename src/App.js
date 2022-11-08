import './App.css';
import Home from './Home';
import Blogs from './Blogs';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

function App() {

  const [show, setShow] = useState(false);

  const showNav = () => {
    if (window.innerWidth < 500) {
      setShow(!show);
    }

  }

  const displayNav = {
    'display': 'flex'
  }

  const close = {
    'backgroundColor': 'white',
    'display': 'inline-block',
    'borderRadius': 50 + '%'
  }

  return (
    <>

      <div className='container'>
        <div className="menu" onClick={showNav}>
          {show ? <div style={close}>
            <i class="fa fa-2x fa-times-circle"></i>
          </div> : <button className="ham">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>}

        </div>

        <div className={show ? 'mobile' : 'navBar'}>
          <Navbar />
        </div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/blogs' component={Blogs}></Route>
          <Route path='/projects' component={Projects}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/projectCard' component={ProjectCard}></Route>
        </Switch>

      </div>
    </>
  );
}

export default App;