import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
// import Contacts from './Pages/Contacts/Contacts';
import Order from './Pages/Order/Order';
import Delivery from './Pages/Delivery/Delivery';
import Cart from './Pages/Cart/Cart';
import NotFound from './Pages/NotFound/NotFound';
import Product from './Pages/Product/Product';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              {/* <Route path="contacts" element={<Contacts />} /> */}
              <Route path="order" element={<Order />} />
              <Route path="delivery" element={<Delivery />} />
              <Route path="cart" element={<Cart />} />
              <Route path="product" element={<Product />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <Product></Product>
        <Footer />
      </Router>
    </div>
  );
}

export default App;