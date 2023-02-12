import { useContext, useEffect, useState } from "react"
import { cartContext } from "../../../context/cartContext";
import { 
  collection, 
  addDoc, 
  getFirestone,
  doc,
  updateDoc,
  //writeBatch,
 } from "firebase/getFirestone";

const Cart = () => {
    const { cart, removeItem, clear} = useContext (cartContext);
    const [ formValue, setFormValue ] = useState({
      name: "",
      phone: "",
      email: "",
    });
    const [ order, setOrder ] = useState({});
    const db = getFirestone();
    //const batch = writeBatch(db);
    useEffect(() => {
      setOrder({
          buyer: {
            name: "",
            phone: "",
            email: "",
          },
          items: cart.map((product) => {
            const { name, price, id } = product;
            return { name, price, id };
          }),
          total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
        });
    }, [cart]);

    if (cart.length === 0) {
      return <h1>No hay productos en tu carrito</h1>
    }

    const createOrder = () => {
      event.preventDefault();
      console.log(formValue);
      const querySnapshot = collection(db, "orders");

      const currentOrder = {
        ...order,
        buyer: formValue,
      };
  
     addDoc(querySnapshot, currentOrder)
       .then((response) => {
         console.log(response.id);
         updateStockProducts();
         alert("Orden creada con exito, id" + response.id);
       })
       .catch((error) => console.log(error));
    };

    const updateStockProducts = () => {
        cart.forEach((product) => {
          const querySnapshot = doc(db, "items", product.id);
        //  batch.update(querySnapshot, { stock: product.stock - product.quantity });
        //  batch.commit();
         updateDoc(querySnapshot, {
           stock: product.stock - product.quantity,
         })
         .then(() => {
           console.log("El producto actualizo su stock");
         })
         .catch((error) => console.log(error));
        })
        clear();
    };

    const handleInput = (event) => {
      console.log(event.target.value);
      console.log(event.target.name);
      setFormValue({
        ...formValue,
        [event.target.name]: event.target.value,
      }); 
    };
 
    return (
    <div style={{ display: "flex", flexDirection: "row" }}>
    <div style={{ padding: "40px", width: "500px" }}>
    <ul>
    {cart.map((product) => (
      <li key={product.id}>
        <div 
        style={{ 
          display: "flex", 
          flexDirection: "row", 
          justifyContent: "space-between"
          }}
          >
          <img 
          alt={product.id} 
          src={"/images/${product.image}"} 
          width="50px"
          />
          <h1>{product.name}</h1>
          <h2>{product.category}</h2>
          <h3>{product.quantity}</h3>
          <h4>{product.price}</h4> 
          <button 
           onClick={() => removeItem(product.id)}
           style={{ height: "20px" }}
           >Eliminar del carrito
          </button> 
        </div>
      </li>
    ))}
    </ul>
    <div style={{ marginTop: "150px" }}>
      <button onClick={() => clear()}>Vaciar carrito</button>
    </div>
    </div>
      <div style={{ padding: "70px"}}>
        <form style={{ display: "flex", flexDirection: "column" }}>
         <input
            name="name" 
            type="text" 
            placeholder="name" 
            style={{ margin: "10px" }}
            value={formValue.name}
            onChange={handleInput}
         />
         <input
            name="phone"
            type="text" 
            placeholder="phone" 
            style={{ margin: "10px" }}
            value={formValue.phone}
            onChange={handleInput}
         />
         <input 
            name="email"
            type="email"
            placeholder="email"  
            style={{ margin: "10px" }}
            value={formValue.email}
            onChange={handleInput}
         />
        <div style={{ marginTop: "20px" }}>
          <button onClick={createOrder}>Crear orden</button>
        </div>
        </form>
      </div>
  </div>   
  );
};

export default Cart;
