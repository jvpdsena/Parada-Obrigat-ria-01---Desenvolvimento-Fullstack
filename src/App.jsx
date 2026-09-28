import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';

const products = [
  { id: 1, name: 'Book 1' },
  { id: 2, name: 'Book 2' }
];

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <ProductList products={products} />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;