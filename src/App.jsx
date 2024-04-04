import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DashBoard from './components/Dashboard';
import Cart from './components/Cart';
import { RootLayout } from './components/RootLayout';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<RootLayout/>}>
            <Route path="/" element={<DashBoard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
