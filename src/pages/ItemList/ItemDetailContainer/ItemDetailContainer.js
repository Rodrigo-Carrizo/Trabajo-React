import "../ItemDetailContainer/style.css";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState ({});
  const idProduct = "1";
  const {id} = useParams();
  console.log(id);

  const getProduct = fetch('https://fakestoreapi.com/products/1${idProduct}', {
    method:"GET",
  });

  useEffect (() => {
    getProduct
    .then((resp) => {
      return resp.json ();
    })
    .then((data) => {
      setSingleProduct(data);
    })
    .catch ((error) => {
      console.log(error);
    });
  }, []);
  return (
    <div>
      <ItemDetail product={singleProduct} />
    </div>
  );
};

export default ItemDetailContainer;