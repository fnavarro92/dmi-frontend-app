import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import ShowItem from './components/ShowItem/ShowItem';
import ShowList from './components/ShowList/ShowList';

function App() {

  return (

    <BrowserRouter>
      <Switch>
          <Route path="/show" component={ShowItem} />
          <Route
            path="/"
            component={ShowList}
          />
          <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  )

}

export default App;
