import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  const title = 'welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com";
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
        </Switch>
        <h1>{title}</h1>
        <p>liked {likes} times</p>
        <p>{10}</p>
        <p>{"hello"}</p>
        <p>{ [1, 2, 3] }</p>
        <p>{ Math.random() * 10}</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
    </Router>
  );
}

export default App;
