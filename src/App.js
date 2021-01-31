import Header from './components/Header/Header';
import MainScreen from './components/MainScreen/MainScreen';
import Feed from './components/Feed/Feed';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" style={{ paddingTop: 70, paddingBottom: 70 }}>
        <Header/>      

        <Switch>
          <Route path="/feed" exact>
            <Feed/>
          </Route>
          <Route path="/" exact>
            <MainScreen/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
