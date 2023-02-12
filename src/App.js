import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './pages/ItemList/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from "./context/cartProvider";
import  Cart  from './pages/ItemList/Cart/Cart';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:category" element={<ItemListContainer />} /> 
      <Route path="item/:id" element={<ItemDetailContainer />} /> 
      <Route path="cart" element={<Cart />} /> 
    </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
