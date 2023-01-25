import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './pages/ItemList/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:category" element={<ItemListContainer />} /> 
      <Route path="item/:id" element={<ItemDetailContainer />} /> 
    </Routes>
    <div>footer</div>
    </BrowserRouter>
 //  <div>
 //    <NavBar />
 //    <ItemListContainer greeting="Bienvenido" />     
 //  </div>
  );
}

export default App;
