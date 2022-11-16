import logo from './logo.svg';
import './App.css';
import Bienvenue from './components/bienvenue/bienvenue';
import ProductList from './components/products-list/products-list';
import Counter from './components/counter/counter';

function App() {

  const products = [
    {id: 1, name: "Pomme", price: 0.2, promo: false},
    {id: 2, name: "Chaise", price: 10, promo: false},
    {id: 3, name: "TV", price: 159.99, promo: true}
  ]

  return (
    <div className="App">
      <h1>Exo 01</h1>
      <Bienvenue name="Sylvain" age={45}/>
      <h1>Exo 02</h1>
      <ProductList products={products}/>
      <h1>Exo 03</h1>
      <Counter incr={2}/>
      <Counter incr={5}/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
