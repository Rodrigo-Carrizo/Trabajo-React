import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { cartContext } from "../../context/cartContext";

const ItemDetail = ({ product }) => {
    const { addItem } = useContext(cartContext);
    const [contador, setContador] = useState(1);
    
    return (
        <div width="200" className="product">
            <img alt={product.title} src={"/images/${product.imageId}"} widht="150"/>
            <h2>Estos productos estan listos para tu carrito {contador}</h2>
            <h1>{product.title}</h1>
            <h2>{product.categoryId}</h2>
            <h3>{product.description}</h3>
            <h4>{product.stock}</h4>        
            <ItemCount 
             contador={contador} 
             actualizaValor={setContador} 
             stock={product.stock}
            />  
            <div>
              <button onClick={() => addItem(product, contador)}>
                Agregar al carrito{" "}
                </button>
            </div>
        </div>
    );
};

export default ItemDetail;