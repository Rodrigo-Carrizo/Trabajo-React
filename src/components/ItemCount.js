import "./style.css";

const ItemCount = ({ contador, actualizaValor, stock }) => {
    const onAdd = () => {
        if (stock === contador) {
            alert ("no puedes comprar mas de lo que hay disponible")
            return;
        }
        actualizaValor(contador + 1);
    };
    const restar = () => {
        if (contador === 0) {
            return;
        }
        actualizaValor(contador - 1);
    };

    return (
        <div className="counter">       
         <div className="cotrollers">
            <button onClick={restar}>-</button>
         <div>
            <span>{contador}</span>
         </div>
            <button onClick={onAdd}>+</button>
        </div>
        </div>
    ); 
};

export default ItemCount;