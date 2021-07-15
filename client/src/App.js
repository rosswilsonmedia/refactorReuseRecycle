import './App.css';

import Main from './views/Main';
import Product from './views/Product';
import Update from './views/Update';

import { Router } from '@reach/router';

function App() {
  return (
    <Router>
      <Main path='/'/>
      <Product path='/:id'/>
      <Update path='/:id/edit'/>
    </Router>
  )
}

export default App;
