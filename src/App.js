import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Clients from './components/clients/Clients';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Notfound from './components/notfound404/Notfound';
import { Provider } from 'react-redux';
import  store  from './store/reduxStore';
import VideoBackgorund from './components/videoBackground/VideoBackground';
import Training from './components/training/Training';

function App() {
  return (
        <Provider store={store}>
            <VideoBackgorund/>
            <div className="App" style={{color:'white'}} id="#myContainer" >
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/clients" exact component={Clients} />
                    <Route path="/works" exact component={Works} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/training" exact component={Training} />
                    <Route path="*"  component={Notfound} />
                </Switch>
            </div>
        </Provider>
  );
}

export default App;
