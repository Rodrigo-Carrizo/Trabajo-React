import "../ItemDetailContainer/style.css";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestone, doc, getDoc } from "firebase/firestone";
// import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState ({});
  const {id} = useParams();

  const getProduct = () => {
    const db = getFirestone();
    const querySnapshot = doc(db, "items", id);

    getDoc(querySnapshot)
    .then((response) => {
      setSingleProduct({ id: response.id, ...response.data() });
    })
    .catch((error) => {
      console.log(error);
    });
  };
  
// const getProduct = fetch('https://fakestoreapi.com/products/1${idProduct}', {
//   method:"GET",
// });
//
// useEffect (() => {
//   getProduct
//   .then((resp) => {
//     return resp.json ();
//   })
//   .then((data) => {
//     setSingleProduct(data);
//   })
//   .catch ((error) => {
//     console.log(error);
//   });
// }, []);

useEffect(() => {
  getProduct();
}, []);
return (
    <div>
      <ItemDetail product={singleProduct} />
    </div>
  );
};

export default ItemDetailContainer;