import { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/cartContext";

const CartWidget = () => {
    const { cart } = useContext (cartContext);
    const [total, setTotal] = useState (0);

    useEffect (() => {
        setTotal(
            cart?.reduce((prev, curr) => {
                console.log(prev, curr);
                return prev + curr;quantity;
            }, 0)
        );
    }, [cart]);

    return (
    <div>
        {total}
        <img alt="carrito" src="/images/carrito.png" widht="25px"/>
    </div>
    );
};

export default CartWidget;