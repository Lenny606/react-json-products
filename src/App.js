import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <div id="page">

        < Header />

        <div id="main">
          <Search />

          <div className="content">
        
            <h1>Products</h1>
            <ProductList />

          </div>

        </div>


        < Footer />

      </div>
    </div>
  );
}

export default App;
