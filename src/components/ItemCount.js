import "./style.css";
import { useState } from "react"; 

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    const stock = 5;
    const sumar = () =>{
        if (stock === contador) {
            alert ("no puedes comprar mas de lo que hay disponible")
            return;
        }
        setContador(contador + 1);
    };
    const restar = () =>{
        if (contador === 0) {
            return;
        }
        setContador(contador - 1);
    };
    return (
        <div className="counter">       
        <div className="cotrollers">
            <button onClick={restar}>-</button>
        <div>
            <span>{contador}</span>
        </div>
        <button onClick={sumar}>+</button>
        </div>
        <div>
            <button>Agregar al carrito</button>
        </div>
        </div>
    ); 
};

export default ItemCount;